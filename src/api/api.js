const express = require('express');
const router = express.Router();
const libroSchema = require('../model/model');

router.get('/obtener', (req, res) => {
    try {
        libroSchema.find().then((data) => {
            res.json(data);
        }).catch((err) => {
            console.error("Error al obtener los items", err);
            res.status(500).send("Error al obtener los items");
        });
    } catch (err) {
        console.error("Error en el bloque try-catch exterior", err);
        res.status(500).send("Error en el bloque try-catch exterior");
    }
});

router.post('/ingresar', async (req, res) =>{
try{
    const libro = libroSchema(req.body)
    const savLibro = await libro.save()
    res.status(200).json(savLibro)
    console.log("objetos salvados con exito")
}catch(err){
    console.error("error salvando los libros", err)
    res.status(500).send("error al salvar la informacion")
}
})

module.exports = router;