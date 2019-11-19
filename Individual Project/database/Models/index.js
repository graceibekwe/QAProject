const Sequelize = require('sequelize');

let sequelize = new Sequelize(
    'Listings',
    'root',
    'password', //19manu95
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

const Listings = sequelize.import(__dirname + '/listing-model');
const Applicants = sequelize.import(__dirname + '/applicants-model');
const Viewings = sequelize.import(__dirname + '/viewings-model');

// sequelize.sync({ force: true }).then(() => {
//     Listings.create({ address: '123 home lane', postcode: 'NW2 5YY', price: 450000, Hold: 'lease', photo: ".\/images\/house1.jpg"});
//     Listings.create({address: '64 zoo lane', postcode: 'W9 8JH', price: 500000, Hold: 'free', photo: ".\/images\/house2.jpg"});
//     Applicants.create({ name: 'Christina Dior', phoneNumber: '075675098', budget: 650000 });
//     Applicants.create({ name: 'Phillipe Patek', phoneNumber: '076675199', budget: 500000 });
//     Viewings.create({date: '15/11/2019', applicantId: 1, listingId: 1});
//     Viewings.create({date: '17/11/2019', applicantId: 2, listingId: 2});
// });

//Associations
Viewings.belongsTo(Applicants);
Viewings.belongsTo(Listings);
Applicants.hasOne(Viewings);
Listings.hasOne(Viewings);

sequelize
.authenticate()
.then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = {
    Listings,
    Applicants,
    Viewings
};
