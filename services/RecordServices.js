import { findRecordsWithFilters, createNewRecord, updateRecordById, softDeleteRecordById, findRecordById } from "../repositories/RecordsRepo.js";
import {RecordNotExists} from '../errors/RecordNotExists.js';

async function getRecords(category, type, date, id)
{
    const records = await findRecordsWithFilters(category, type, date, id);
    return records;
}

async function createRecord(category, type, amount, description)
{
    const newRecord = await createNewRecord(category, type, amount, description);
    return newRecord;
}

async function updateRecord(id, category, type, amount, description)
{
    const exisitingRecord = await findRecordById(id);
    if(!exisitingRecord) throw new RecordNotExists(id);

    const updatedRecord = await updateRecordById(id, {category, type, amount, description});
    return updatedRecord;
}

async function deleteRecord(id)
{   
    const existingRecord = await findRecordById(id);
    if(!existingRecord) throw new RecordNotExists(id);
    if(existingRecord.deleted) return existingRecord;

    const deletedRecord = await softDeleteRecordById(id);
    return deletedRecord;
}

const recordServices = { getRecords, createRecord, updateRecord, deleteRecord };
export default recordServices;