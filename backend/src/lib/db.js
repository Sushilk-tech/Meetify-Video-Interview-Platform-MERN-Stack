import mongoose from 'mongoose'
import { ENV } from './env.js'

const connectDB = async () => {
    try {
        if (!ENV.DB_URL) {
            throw new Error("DB_URL is not defined in environment variables")
        }
        const conn = await mongoose.connect(ENV.DB_URL);
        console.log("✅ connected to MongoDB", conn.connection.host);
    } catch (error) {
        console.log("DB error : " + error);
        process.exit(1); // 0 means success, 1 means failure
    }
}
export default connectDB