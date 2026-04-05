export function getRecordsDto(records)
{
    return {
        message: "Records retrieved successfully",
        data: {
            records: records.map(record => ({
                id: record._id,
                amount: record.amount,
                type: record.type,
                category: record.category,
                date: record.date,
                description: record.description,
                createdAt: record.createdAt,
                updatedAt: record.updatedAt
            }))
        }
    };
}

export function createRecordDto(record)
{
    return {
        message: "Record created successfully",
        data: {
            record: {
                id: record._id,
                amount: record.amount,
                type: record.type,
                category: record.category,
                date: record.date,
                description: record.description,
                createdAt: record.createdAt
            }
        }
    };
}

export function updateRecordDto(record)
{
    return {
        message: "Record updated successfully",
        data: {
            record: {
                id: record._id,
                amount: record.amount,
                type: record.type,
                category: record.category,
                date: record.date,
                description: record.description,
                updatedAt: record.updatedAt
            }
        }
    };
}

export function deleteRecordDto(record)
{
    return {
        message: "Record deleted successfully",
        data: {
            record: {
                id: record._id,
                amount: record.amount,
                type: record.type,
                category: record.category,
                date: record.date,
                deleted: record.deleted,
                description: record.description
            }
        }
    };
}