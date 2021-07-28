var express = require('express');
var router = express.Router();
var Fertilizer = require('../controllers/fertilizerController');
router.get('/', Fertilizer.getActivity);
router.get('/plantplot',Fertilizer.getPlantPlot)
router.get('/queue',Fertilizer.getQueue)
router.get('/fertilizers',Fertilizer.getFertilizer)
router.post('/addActivity',Fertilizer.addActivity)
router.post('/addFertilizer',Fertilizer.addFertilizer)
router.put('/updateStatus',Fertilizer.updateStatus)
router.put('/updateFertilizer',Fertilizer.updateFertilizer)
router.delete('/deleteFertilizer',Fertilizer.deleteFertilizer)
module.exports = router;