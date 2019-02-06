var express = require('express');
var router = express.Router();

// Require controller modules.
var contact_controller = require('../controllers/contactController');

/// Contact ROUTES ///

router.get('/', contact_controller.index);


// GET request for creating a Contact. NOTE This must come before route that displays Contact (uses id).
router.get('/contact/create', contact_controller.contact_create_get);

//POST request for creating contact.
router.post('/contact/create', contact_controller.contact_create_post);

// GET request to delete Contact.
router.get('/contact/:id/delete', contact_controller.contact_delete_get);

// POST request to delete contact.
router.post('/contact/:id/delete', contact_controller.contact_delete_post);

// GET request to update Contact.
router.get('/contact/:id/update', contact_controller.contact_update_get);

// POST request to update Contact.
router.post('/contact/:id/update', contact_controller.contact_update_post);

// GET request for one Contact.
router.get('/contact/:id', contact_controller.contact_detail);

// GET request for list of all contact.
router.get('/contacts', contact_controller.contact_list);

module.exports = router;