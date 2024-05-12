const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
    res.status(200).json('My Name is Asna Maqsood 426990. I am from Faisalabad');
});

module.exports = router;