const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { auth } = require('express-oauth2-jwt-bearer');
// Controllers
const userController = require('../controllers/userController');
const teamsController = require('../controllers/teamController');
const authController = require('../controllers/authController');
const challengeController = require('../controllers/challengesController'); // Fixed path if necessary
const importExcelController = require('../utils/importExcel');
const juryController = require('../controllers/juryController');
const envoyeEmail = require('../utils/send-email');

// Multer configuration
const storage = multer.diskStorage({
    destination: './uploads',
    filename: function(req, file, cb) {
        let ext = path.extname(file.originalname);
        let filename = `${file.fieldname}-${Date.now()}${ext}`;
        cb(null, filename);
    }
});
const upload = multer({ storage: storage });
const jwtCheck = auth({
    audience: 'https://challenges.mr',
    issuerBaseURL: 'https://dev-1h6f12gkbr6jshox.us.auth0.com/',
    tokenSigningAlg: 'RS256'
  });
  
// router.use(jwtCheck);
router.get('/authorized', function (req, res) {
    res.send('Secured Resource');
});
// Basic routes
router.get("/", (req, res) => res.send("Hello World"));
router.get("/soumission", (req, res) => res.send("You can submit your work !"));

// User routes
router.get('/users', userController.getAllUsers);
router.post('/users', userController.createUser);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

// Team routes
router.get('/teams', teamsController.getAllTeams);
router.post('/teams', teamsController.createTeams);
router.get('/teams/:id', teamsController.getTeamsById);
router.put('/teams/:id', teamsController.updateTeams);
router.delete('/teams/:id', teamsController.deleteTeams);

// Jury routes
router.post("/jury/sendNotification", juryController.sendNotificationWithEmail);
router.post("/jury/gradeTeamWork", juryController.gradeTeamWork);

// Challenge routes
router.get('/challenge', challengeController.getAllChallenges);
router.post('/challenge', upload.single('file'), challengeController.createChallenges);
router.get('/challenge/:id', challengeController.getChallengesById);
router.put('/challenge/:id', upload.single('file'), challengeController.updateChallenges);
router.delete('/challenge/:id', challengeController.deleteChallenges);

// Authentication and import routes
router.post('/login', authController.Login);
router.post('/import-excel', upload.array('files'), importExcelController.importUsersFromExcel);
router.post('/send-email', envoyeEmail.EnvoyerEmail);

module.exports = router;
