import path from "path"
import express from 'express'
import cors from 'cors'
import { clerkMiddleware } from '@clerk/express'
import { ENV } from './lib/env.js';
import connectDB from './lib/db.js';
import { inngest, functions } from './lib/inngest.js';
import { serve } from "inngest/express"
import { protectRoute } from "./middlewares/protectRoute.js";
import chatRoutes from "./routes/chatRoutes.js";


const app = express();
const port = ENV.PORT || 8000;
const __dirname = path.resolve()

//middleware
app.use(express.json());
// credentials: true meaning?? => server allows a browser to include cookies on request
app.use(cors(
    {
        origin: ENV.CLIENT_URL,
        credentials: true
    }
));
app.use(clerkMiddleware()); // this adds auth field to request object: req.auth()
app.use("/api/inngest", serve({ client: inngest, functions }))
app.use("/api/chat",chatRoutes)
app.get("/health", (req, res) => {
    res.status(200).json({ msg: "api is up and running" })
})

// when you pass an array of middleware to Express. it automatically flatterns and executes them sequentially, one by one
app.get("/video-calls", protectRoute, (req,res)=>{
    res.status(200).json({msg:"this is a protected route"});
})

// make our app ready for deployment
// if (ENV.NODE_ENV) {
//     // app.use(express.static(path.join(__dirname, "..frontend/dist")))
//     app.use(express.static(path.join(__dirname, "../frontend/dist")))

//     app.get("/{*any}", (req, res) => {
//         res.sendFile(path.join(__dirname, "../frontend/dist/index.html"))
//     })
// }
app.get("/", (req, res) => {
    res.status(200).json({ msg: "success from backend" })
})

const startServer = async () => {
    try {
        await connectDB();
        app.listen((port), async () => {
            console.log(`Server is running on port: ${port}`)
        })
    } catch (error) {
        console.error("💥Error starting the server", error)
    }
}
startServer();