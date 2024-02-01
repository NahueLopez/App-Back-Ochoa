import { Router } from "express";
import {getUbicaciones, 
        getUbicacion, 
        createUbicacion, 
        updateUbicacion,
        deleteUbicacion
} from "../controllers/ubicaciones.controllers.js"

const router = Router()


router.get('/ubicaciones', getUbicaciones)

router.get('/ubicaciones/:id', getUbicacion)

router.post('/ubicaciones', createUbicacion)

router.patch('/ubicaciones/:id', updateUbicacion)

router.delete('/ubicaciones/:id', deleteUbicacion)

export default router