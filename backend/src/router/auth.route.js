const express = require('express');
const authCtrl = require('../controller/auth.ctrl');


const router = express.Router();
// api : api/users/

router.post("/resister",authCtrl.postResister);

router.post("/login",authCtrl.postLogin);

router.get("/logout",authCtrl.getLogout);


module.exports = router;