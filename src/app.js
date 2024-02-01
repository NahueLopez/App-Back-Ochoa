import express from "express"
import ubicacionesRoutes from "./routes/ubicaciones.routes.js"
import indexRoutes from './routes/index.routes.js'

const app = express()

app.use(express.json())

app.use('/api',indexRoutes)
app.use('/api',ubicacionesRoutes)

app.use((req,res,next) =>{
    res.status(404).json({
        message:"Fallo el endpoint"
    })
})

export default app