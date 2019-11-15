const express = require('express');
const cors = require('cors');
const app = express();
const listingsRoutes = require('./Routes/listings-routes');
const applicantsRoutes = require('./Routes/applicants-routes');
const viewingsRoutes = require('./Routes/viewings-routes');

app.use(cors());
app.use(express.json());
app.use('/listings', listingsRoutes);
app.use('/applicants', applicantsRoutes);
app.use('/viewings', viewingsRoutes);

app.get('/break-stuff', (req, res, next) => {
    next('oh no');
});

app.get('/', (req, res) => {
    res.send('yay');
});

//make sure this is at the bottom
app.use((err, req, res, next) => {

    res.status(500).send({
        error: 'Something went wrong',
        message: 'oh no'
    });
});

const port = process.env.PORT || 9000;
app.listen(port, () => console.log(`server running on port ${port}`));

module.exports = app;