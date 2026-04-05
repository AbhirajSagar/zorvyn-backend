import { get } from "mongoose";
import { getRecordsFinancialSummary, getCategoryWiseSummary, getRecentRecords, getWeekTrends, getMonthTrends } from "../repositories/RecordsRepo.js";

async function getSummary()
{
    const {totalIncome, totalExpenses, netBalance} = await getRecordsFinancialSummary();
    return {totalIncome, totalExpenses, netBalance};
}

async function categoryWiseSummary()
{
    const summary = await getCategoryWiseSummary();
    return summary;
}

async function categorySummary(category)
{
    const summary = await getCategoryWiseSummary(category);
    return summary;
}

async function recentRecords(limit, page)
{
    const records = await getRecentRecords(limit, page);
    return records;
}

async function getWeeklyTrends()
{
    const trends = await getWeekTrends();
    return trends;
}

async function getMonthlyTrends()
{
    const trends = await getMonthTrends();
    return trends;
}

const dashboardServices = { getSummary, categoryWiseSummary, categorySummary, recentRecords, getWeeklyTrends, getMonthlyTrends };
export default dashboardServices;