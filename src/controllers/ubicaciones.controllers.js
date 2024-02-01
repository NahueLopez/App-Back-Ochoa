import { pool } from "../db.js"

//Mostrar todos las ubicaciones
export const getUbicaciones = async (req,res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM ubicaciones")
        res.json(rows)

    } catch (error) {
        return res.status(500).json({
            message: "Algo salio mal"
        })
    }
    
}

//Mostrar solo una ubicacion
export const getUbicacion = async (req,res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM ubicaciones WHERE id = ?", [req.params.id])

        if(rows.length <= 0) return res.status(404).json({
            message: "Ubicacion no encontrada"
        })

        res.json(rows[0])

    } catch (error) {
        return res.status(500).json({
            message: "Algo salio mal"
        })
    }
}

// Crear ubicacion
export const createUbicacion = async (req,res) => {
    try {
        const { nombre } = req.body
        const [rows] = await pool.query('INSERT INTO ubicaciones(nombre) VALUES (?)', [nombre] )
        res.send({
            id: rows.insertId,
            nombre
        })

    } catch (error) {
        return res.status(500).json({
            message: "Algo salio mal"
        })
    }
}

//Actualizar una ubicacion
export const updateUbicacion = async (req,res) => {
    const {id} = req.params
    const {nombre} = req.body
    
    try {  
        const [result] = await pool.query("UPDATE ubicaciones SET nombre = ? WHERE id = ?",[nombre,id])

        if(result.affectedRows === 0 ) return res.status(404).json({
            message:"Ubicacion no encontrada"
        })

        const [rows] = await pool.query("SELECT * FROM ubicaciones WHERE id = ?", [id])

        res.json(rows[0])

    } catch (error) {
        return res.status(500).json({
            message: "Algo salio mal"
        })
    }

}

//Eliminar una ubicacion
export const deleteUbicacion = async (req,res) => {
    try {
        const [result] = await pool.query("DELETE FROM ubicaciones WHERE id = ?" , [req.params.id])
    
        if(result.affectedRows <= 0) return res.status(404).json({
            message: "Error: No se encontro la ubicacion"
        })

        res.sendStatus(204)
        
    } catch (error) {
        return res.status(500).json({
            message: "Algo salio mal"
        })
    }
}