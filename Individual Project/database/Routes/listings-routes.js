let express = require("express");
let router = express.Router();
let models = require('../Models');
const Op = require('sequelize').Op;

router.use(express.json());

router.post('/add', async (req, res) => {
    const newListing = await models.Listings.create({
        address: req.body.address,
        postcode: req.body.postcode,
        price: req.body.price,
        Hold: req.body.Hold
    });
    res.send(newListing.get({ plain: true }));
});

//get all listings
router.get('/get', async (req, res) => {
    const x = await models.Listings.findAll();
    res.send(x);
});

//get one listing
router.post('/find', async (req, res) => {
    const x = await models.Listings.findAll({
        where: {
            id: req.body.id
        }
    });
    res.send(x);
});

router.post('/search', async (req, res) => {
    const x = await models.Listings.findAll({
        where: {
            postcode: {[Op.like] : req.body.postcode +'%'}
        }
    });
    res.send(x);
});

router.post('/update', async (req, res) => {
    await models.Listings.update(
        {
            address: req.body.address,
            postcode: req.body.postcode,
            price: req.body.price,
            Hold: req.body.Hold,
            photo: req.body.photo
        },
        {
            where: {
                id: req.body.id
            }
        });
    res.send('Updated');
});

router.delete('/delete/:id', async (req, res) => {
    await models.Listings.destroy(
        {
            where: {
                id: req.params.id
            }
        });
    res.send('deleted');
});

module.exports = router;