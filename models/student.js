const mongoose=require("mongoose")

const schema=mongoose.Schema(
    {
        "name":String,
        "rollNo":String,
        "admno":String,
        "college":String
    }
)
let studentmodel=mongoose.model("students",schema) ;   //table "students" created
module.exports={studentmodel}