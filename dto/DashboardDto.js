export function summaryDto(totalIncome, totalExpenses, netBalance)
{
    return {
        message: "Dashboard summary retrieved successfully",
        data: {
            summary: {
                totalIncome,
                totalExpenses,
                netBalance
            }
        }
    };
}

export function categoryWiseSummaryDto(summary)
{
    return {
        message: "Category-wise summary retrieved successfully",
        data: { summary }
    };
}

export function categorySummaryDto(summary)
{
    return {
        message: "Category summary retrieved successfully",
        data: { summary }
    };
}

export function recentRecordsDto(records)
{
    return {
        message: "Recent records retrieved successfully",
        data: {
            records: records.map(record => 
            ({
                id: record._id,
                amount: record.amount,
                type: record.type,
                category: record.category,
                date: record.date,
                description: record.description,
                createdAt: record.createdAt
            }))
        }
    };
}

export function weeklyTrendsDto(records)
{
    return {
        message: "Weekly trends retrieved successfully",
        data: { trends: records }
    };
}

export function monthlyTrendsDto(records)
{
    return {
        message: "Monthly trends retrieved successfully",
        data: { trends: records }
    };
}