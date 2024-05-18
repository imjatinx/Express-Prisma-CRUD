import express from "express";
import userRoutes from "./routes/UserRoutes.js";

const app = express();
const port = 3001

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    return res.json({ message: 'welcome to the system.' })
})

app.use('/api/user', userRoutes)


app.listen(port, () => {
    console.log(`Server is running http://127.0.0.1:${port}`);
})
