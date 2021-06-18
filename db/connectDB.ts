import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const databaseURI = await mongoose.connect(`${process.env.MONGO_CONNECTION_URI}`, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: true,
    });
    console.log(`Connected to MongoDB Server:
    ${databaseURI.connection.host}`);
  } catch (error) {
    console.error(`Error : ${error.message}`);
    process.exit(1);
  }
};
