import { Schema, model, models } from "mongoose";

const BoardSchema = new Schema({
  title: {
    type: String,
    required: [true, "Boardname is required"],
    unique: [true, "Boardname already exists"],
    // match: [
    //   /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/,
    //   "Boardname invalid, it should contain 8-20 alphanumeric letters and be unique!",
    // ],
  },
  images: {
    type: [String],
    required: true,
  },

  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Board = models.Board || model("Board", BoardSchema);

export default Board;
