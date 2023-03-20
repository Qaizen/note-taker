//htmlRoutes

const path = require('path');
const router = require('express').Router();

//getting notes from the public folder
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// * wildcard is always last; tells the site to redirect all other requests back to the index.html for security reasons.
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;