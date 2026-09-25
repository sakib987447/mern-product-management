import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import dns from "node:dns";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

dns.setServers(["1.1.1.1"]);

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);

const connectDb = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDb is connected");
    } catch (error) {
        console.error("Mongo db connection is failed", error.message);
    }
};

connectDb();

app.get("/", (req, res) => {
    res.send("hello world");
});

const PORT = process.env.PORT || 5000;


app.listen(PORT, "0.0.0.0", () => {
    console.log(`server is started on ${PORT}`);
});
