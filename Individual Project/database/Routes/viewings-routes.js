let express = require("express");
let router = express.Router(); 
let models = require('../Models');

router.use(express.json());

router.get('/get', async (req, res) => { 
    const x = await models.Viewings.findAll({
         include: [
             models.Listings,
             models.Applicants
         ]
    }); 
    res.send(x);
});

router.post('/find', async (req, res) => {
    const x = await models.Viewings.findAll({
        where: {
            id: req.body.id
        }
    });
    res.send(x);
});

 router.post('/add', async (req, res) => {
     const newView = await models.Viewings.create({date: req.body.date, 
                                                listingId: req.body.listingId, 
                                                applicantId: req.body.applicantId, 
                                                });
    res.send(newView.get({ plain: true }));
 });

 router.delete('/delete/:id', async (req, res) => {
    await models.Viewings.destroy(
        {
            where: {
                id: req.params.id
            }
        });
    res.send('deleted');
});

router.post('/update', async (req, res) => {
    await models.Viewings.update(
        {
            property: req.body.property,
            applicant: req.body.applicant,
            date: req.body.date,
        },
        {
            where: {
                id: req.body.id
            }
        });
    res.send('Updated');
});

module.exports = router;