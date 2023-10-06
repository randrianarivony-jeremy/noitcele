import { connect } from "mongoose";

const connectDB = async () => {
  try {
    const conn = await connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error}`);
    process.exit();
  }
};

export default connectDB;
