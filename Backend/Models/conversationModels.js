import mongoose from "mongoose"
const conversationSchema=new mongoose.Schema({
    participants:[{type:mongoose.Schema.Types.ObjectId,ref:"User"}],
    messages:[{type:mongoose.Schema.Types.ObjectId,ref:"message"}],
})
const conversation=mongoose.model('conversation',conversationSchema)
export default conversation;