import mongoose from "mongoose";

const recordSchema = new mongoose.Schema
({
    amount: {type: Number, required: true},
    type: {type: String, enum: ['income', 'expense'], required: true},
    category: {type: String, required: true},
    date: {type: Date, required: true, default: Date.now},
    description: {type: String},
    deleted: {type: Boolean, default: false}
},
{
    timestamps: true
})

const record = mongoose.model('Record', recordSchema);
export default record;