import { ConnectOptions } from "mongoose";
import mongoose from "mongoose";

let isConnected = false;

export const connectToMongoDb = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("mongodb already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI!, {
      dbName: "Memories",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as ConnectOptions);

    isConnected = true;
  } catch (error) {
    console.error("problem connecting to mongodb", error);
  }
};
