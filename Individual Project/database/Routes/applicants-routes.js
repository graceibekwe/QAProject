let express = require("express");
let router = express.Router(); 
let models = require('../Models');

router.use(express.json());

router.post('/add', async (req, res) => {
    const newApp = await models.Applicants.create({name: req.body.name, 
                                                phoneNumber: req.body.phoneNumber, 
                                                budget: req.body.budget});
    res.send(newApp.get({ plain: true }));
});

router.get('/get', async (req, res) => { 
    const x = await models.Applicants.findAll(); 
    res.send(x);
});

router.post('/find', async (req, res) => {
    const x = await models.Applicants.findAll({
        where: {
            id: req.body.id
        }
    });
    res.send(x);
});

router.post('/update', async (req, res) => {
    await models.Applicants.update(
        {
            name: req.body.name,
            phoneNumber: req.body.phoneNumber,
            budget: req.body.budget,
        },
        {
            where: {
                id: req.body.id
            }
        });
    res.send('Updated');
});

router.delete('/delete/:id', async (req, res) => {
    await models.Applicants.destroy(
        {
            where: {
                id: req.params.id
            }
        });
    res.send('deleted');
});

module.exports = router;