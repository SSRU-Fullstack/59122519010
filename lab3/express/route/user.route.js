const express = require('express');
const router = express.Router();

router.get('/first', (req, res) => {
    res.send(`first on user`)
})

router.get('/second', (req, res) => {
    res.send(`second on user`)
})

router.get(':id', (req, res) => {
    res.send(`query id: ${req.query.id}`);
})

router.get(':name', (req, res) => {
    res.send(`query name: ${req.query.name}`);
})

module.exports = router