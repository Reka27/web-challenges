import mongoose from "mongoose";

const { Schema } = mongoose;
const reviewSchema = new Schema({
  title: { type: String },
  text: { type: String },
  rating: { type: Number },
});
//this is the model
const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema); // we can also pass a third arg with collection name"products"
export default Review;
