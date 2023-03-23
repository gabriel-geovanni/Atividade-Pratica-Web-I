const { Router } = require('express');
const PeopleController = require('./app/controllers/PeopleController');
const BloodController = require('./app/controllers/BloodController');
const LocalController = require('./app/controllers/LocalController');
const DonationController = require('./app/controllers/DonationController');

const router = Router();

router.get('/people', PeopleController.index);
router.get('/people/:documento', PeopleController.showByDoc);
router.get('/people/name/:nome', PeopleController.showByName);
router.post('/people', PeopleController.store);
router.put('/people', PeopleController.update);
router.delete('/people/:id', PeopleController.delete);

router.get('/blood', BloodController.index);
router.post('/blood', BloodController.store);
router.delete('/blood/:id', BloodController.delete);

router.get('/local', LocalController.index);
router.get('/local/cidade/:cidade', LocalController.showByCity);
router.get('/local/nome/:nome', LocalController.showByName);
router.get('/local/estado/:estado', LocalController.showByState);
router.post('/local', LocalController.store);
router.put('/local', LocalController.update);
router.delete('/local/:id', LocalController.delete);

router.get('/donation', DonationController.index);
router.get('/donation/person/:id', DonationController.showByPerson);
router.get('/donation/local/:id', DonationController.showByLocal);
router.post('/donation', DonationController.store);
router.delete('/donation/:id', DonationController.delete);

module.exports = router;
