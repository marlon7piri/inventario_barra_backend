import dotenv  from 'dotenv';

dotenv.config()

export const DB_URI =process.env.DB_URI || "mongodb://localhost:27017/test"
export const Mongo_URI_ATLAS =process.env.Mongo_URI_ATLAS || "mongodb://localhost:27017/test"
export const PORT = process.env.PORT || 8080