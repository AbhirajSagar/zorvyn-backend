import recordServices from "../services/RecordServices.js";
import { getRecordsDto, createRecordDto, updateRecordDto, deleteRecordDto } from "../dto/RecordsDto.js";
import { STATUS_CODES } from '../lib/Constants.js';

async function getRecords(req, res)
{
    const {category, type, date, id} = req.body || {};
    const records = await recordServices.getRecords(category, type, date, id);
    const response = getRecordsDto(records);
    res.status(STATUS_CODES.SUCCESS).json(response);
}

async function createRecord(req, res)
{
    const {category, type, amount, description} = req.body;
    const record = await recordServices.createRecord(category, type, amount, description);
    const response = createRecordDto(record);
    res.status(STATUS_CODES.SUCCESS).json(response);
}

async function updateRecord(req, res)
{
    const {id} = req.params;
    const {category, type, amount, description} = req.body;
    const record = await recordServices.updateRecord(id, category, type, amount, description);
    const response = updateRecordDto(record);
    res.status(STATUS_CODES.SUCCESS).json(response);
}

async function deleteRecord(req, res)
{
    const {id} = req.params;
    const record = await recordServices.deleteRecord(id);
    const response = deleteRecordDto(record);
    res.status(STATUS_CODES.SUCCESS).json(response);
}

const controllers = { getRecords, createRecord, updateRecord, deleteRecord };
export default controllers;