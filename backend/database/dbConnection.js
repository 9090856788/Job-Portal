import mongoose from "mongoose";

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
            .then(() => {
                console.log("Database Connected Successfully: )");
            })
    } catch (error) {
        console.log("There is some issue happen during the database connection: )");
    }
}

export default dbConnection;