import Record from '../models/Record.js';

export async function findRecordsWithFilters(category, type, date, id)
{
    const filter = { deleted: false };
    if(category) filter.category = category;
    if(type) filter.type = type;
    if(date) filter.date = date;
    if(id) filter._id = id;

    return await Record.find(filter);
}

export async function getWeekTrends()
{
    const last7Days = new Date();
    last7Days.setDate(last7Days.getDate() - 7);

    const result = await Record.aggregate
    ([
        { $match: { deleted: false, createdAt: { $gte: last7Days } } },
        {
            $group:
            {
                _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
                income: { $sum: { $cond: [{ $eq: ["$type", "income"] }, "$amount", 0] } },
                expense: { $sum: { $cond: [{ $eq: ["$type", "expense"] }, "$amount", 0] } }
            }
        },
        {
            $project:
            {
                _id: 0,
                period: "$_id",
                income: 1,
                expense: 1,
                net: { $subtract: ["$income", "$expense"] }
            }
        },
        { $sort: { period: 1 } }
    ]);

    return result;
}

export async function getMonthTrends()
{
    const last30Days = new Date();
    last30Days.setDate(last30Days.getDate() - 30);

    const result = await Record.aggregate
    ([
        {
            $match:
            {
                deleted: false,
                createdAt: { $gte: last30Days }
            }
        },
        {
            $group:
            {
                _id: { $dateToString: { format: "%Y-%m-%d", date: "$createdAt" } },
                income: { $sum: { $cond: [{ $eq: ["$type", "income"] }, "$amount", 0] } },
                expense: { $sum: { $cond: [{ $eq: ["$type", "expense"] }, "$amount", 0] } }
            }
        },
        {
            $project:
            {
                _id: 0,
                period: "$_id",
                income: 1,
                expense: 1,
                net: { $subtract: ["$income", "$expense"] }
            }
        },
        { $sort: { period: 1 } }
    ]);

    return result;
}

export async function getRecordsFinancialSummary()
{
    const recordTypes = await Record.aggregate
    ([
        { $match: { deleted: false } },
        { $group: { _id: "$type", total: { $sum: "$amount" } } }
    ]);

    const totalIncome = recordTypes.filter(r => r._id === 'income')?.[0]?.total || 0;
    const totalExpenses = recordTypes.filter(r => r._id === 'expense')?.[0]?.total || 0;
    const netBalance = totalIncome - totalExpenses;

    return { totalIncome, totalExpenses, netBalance };
}

export async function getCategoryWiseSummary(category = undefined)
{
    const match = { deleted: false };
    if(category) match.category = category;

    return await Record.aggregate
    ([
        { $match: match },
        { 
            $group: 
            { 
                _id: "$category", 
                income: { $sum: { $cond: [{$eq: ["$type", "income"]}, "$amount", 0]}},
                expense: { $sum: { $cond: [{$eq: ["$type", "expense"]}, "$amount", 0]}}
            }
        },
        {
            $project:
            {
                _id: 0,
                category: "$_id",
                income: 1,
                expense: 1,
                net: { $subtract: ["$income", "$expense"]}
            }
        }
    ])

}

export async function getRecentRecords(limit, page)
{
    const records = await Record.find({deleted: false})
        .limit(limit * 1)
        .skip((page - 1) * limit)
        .sort({createdAt: -1});
    
    return records;
}

export async function findRecordById(id)
{
    return await Record.findById(id);
}

export async function createNewRecord(category, type, amount, description)
{
    return await Record.create({category, type, amount, description});
}

export async function updateRecordById(id, data)
{
    return await Record.findByIdAndUpdate(id, data, {returnDocument: 'after'});
}

export async function softDeleteRecordById(id)
{
    return await Record.findByIdAndUpdate(id, {deleted: true}, {returnDocument: 'after'});
}