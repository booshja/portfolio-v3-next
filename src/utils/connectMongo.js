import mongoose from 'mongoose';

const connectMongo = async () =>
  mongoose.connect(
    `${process.env.ATLAS_URI_MAIN}${process.env.ATLAS_DB_NAME}${process.env.ATLAS_URI_CLOSE}`,
  );

export default connectMongo;
