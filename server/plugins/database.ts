import mongoose from "mongoose";

export default defineNitroPlugin(() => {
  console.log("Connecting to MongoDB..." + useRuntimeConfig().MONGO_URI);
  mongoose.connect(useRuntimeConfig().MONGO_URI, {
    dbName: "ExampleDB",
  });
});
