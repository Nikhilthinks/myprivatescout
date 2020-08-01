const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const TourPackage = require("../../models/TourPackage");

router.get('/', async(req, res) => {
    try {
        const package = await TourPackage.find()
        return res.json(package)
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Fucked Up");
      }
})

router.get('/:tourid', async(req, res) => {
    try {
        const package = await TourPackage.findById(req.params.tourid)
        return res.json(package)
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Fucked Up");
      }
})

router.put('/:tourid', auth, async(req,res) => {
    const tourPackage = await TourPackage.findById(req.params.tourid)
    tourPackage.visited = tourPackage.visited + 1
    await tourPackage.save()
    return res.json(tourPackage)
  })  

module.exports = router;
