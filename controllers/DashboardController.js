import dashboardServices from '../services/DashboardServices.js';
import { categoryWiseSummaryDto, summaryDto, categorySummaryDto, recentRecordsDto,weeklyTrendsDto, monthlyTrendsDto } from '../dto/DashboardDto.js'
import { STATUS_CODES } from '../lib/Constants.js';

async function getSummary(_, res)
{
    const {totalIncome, totalExpenses, netBalance} = await dashboardServices.getSummary();
    const response = summaryDto(totalIncome, totalExpenses, netBalance);
    res.status(STATUS_CODES.SUCCESS).json(response);
}

async function categoryWiseSummary(_, res)
{
    const summary = await dashboardServices.categoryWiseSummary();
    const response = categoryWiseSummaryDto(summary);
    res.status(STATUS_CODES.SUCCESS).json(response);
}

async function categorySummary(req, res)
{
    const {category} = req.params;
    const summary = await dashboardServices.categorySummary(category);
    const response = categorySummaryDto(summary);
    res.status(STATUS_CODES.SUCCESS).json(response);
}

async function getRecentRecords(req, res)
{
    const {limit = 20, page = 1} = req.query;
    const records = await dashboardServices.recentRecords(limit, page);
    const reponse = recentRecordsDto(records);
    res.status(STATUS_CODES.SUCCESS).json(reponse);
}

async function getWeeklyTrends(req, res)
{
    const records = await dashboardServices.getWeeklyTrends();
    const response = weeklyTrendsDto(records);
    res.status(STATUS_CODES.SUCCESS).json(response);
}

async function getMonthlyTrends(req, res)
{
    const records = await dashboardServices.getMonthlyTrends();
    const response = monthlyTrendsDto(records);
    res.status(STATUS_CODES.SUCCESS).json(response);
}

const controllers = { getSummary, categoryWiseSummary, categorySummary, getRecentRecords,  getWeeklyTrends, getMonthlyTrends };
export default controllers;