const express = require('express')
const router = express.Router()

var banco = []

router.get('/api',(req,res)=>{
    res.json(banco)
})

router.get('/api/:id',(req,res)=>{
    var i = req.params.id
    res.json(banco[i])
})

router.post('/api',(req,res)=>{
    let options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    req.body.id = banco.length + 1
    req.body.data = new Date().toLocaleDateString("pt-BR",options)
    banco.push(req.body)
    res.json(req.body)
})

router.put('/api/:id',(req,res)=>{

    banco[req.params.id] = req.body
    res.json(req.body)
})

router.delete('/api/:id',(req,res)=>{
    banco.splice(req.params.id,1)
})

module.exports = router