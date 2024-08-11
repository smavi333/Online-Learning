import mongoose from "mongoose";

const courseSchema = mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    image: String,
    title: String,
});
const course = mongoose.model("course", courseSchema);

export default course;