/**
 * Jugement.js
 * 
 * Configuration du routage
 */

 const express = require('express');

 const Jugement = require('../models/Jugement');
 
 const JugementController = require('../controllers/Jugement');
 
 const router = express.Router();

 const multer = require('../middleware/multer-config')
// routes get liste jugement 
router.get('/classement',JugementController.getJugements);
// routes création un jugement 
router.post('/create',multer,JugementController.createJugement);


router.get('/test',JugementController.getTest);








module.exports = router;