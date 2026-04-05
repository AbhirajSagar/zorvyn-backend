import mongoose from "mongoose";
import { MissingEnvVar } from "../errors/MissingEnvVar.js";

export async function setupMongooseConnection()
{
    const uri = process.env.MONGO_URI;
    if(!uri) throw new MissingEnvVar('MONGO_URI');

    const connection = await mongoose.connect(uri, {dbName: process.env.NODE_ENV === 'dev' ? 'test' : 'public'});
    return connection;
}