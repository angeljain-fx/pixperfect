const mongoose = require('mongoose');
const nodemailer = require ('nodemailer');
const {google} = require('googleapis');
const multer = require ('multer');
const fs = require('fs');
const bodyParser = require ('body-parser');
const keys = require('../config/keys');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

const Project = mongoose.model('projects');

const oAuth2Client = new google.auth.OAuth2(keys.gmailerClientID, keys.gmailerClientSecret, keys.gmailerRedirectURI);
oAuth2Client.setCredentials({
    refresh_token: keys.gmailerRefreshToken
});

var to;
var subject;
var path;

var Storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, './images')
    },
    filename: function(req, file, callback) {
        callback(null, file.fieldname + "_" + Date.now() + "_" + file.originalname)
    }
});

var upload = multer({
    storage: Storage
});

module.exports = (app) => {

  app.get('/api/sendemail', requireLogin, async (req, res) => {
    const projects = await Project.find({ _user: req.user.id });
    res.send(projects);
  });

  app.post('/api/sendemail', requireLogin, requireCredits, upload.single('image'), async (req, res, next) => {

      const project = new Project({
        projectTitle: req.body.projectTitle,
        serviceSelect: req.body.serviceSelect,
        projectOwner: req.body.projectOwner,
        status: "Pending",
        credsConsumed: "N/A",
        slack: "Slack invite link will appear here.",
        assets: "Cloud storage assets link will appear here.",
        _user: req.user.id,
        dateSent: Date.now()
      });


            const output = `
                <ul>
                    <li>${req.body.serviceSelect}</li>
                    <li>${req.body.projectOwner}</li>
                    <li>${req.body.projectTitle}</li>
                    <li>${req.body.descriptionBox}</li>
                    <li>${req.body.teamSelector}</li>
                    <li>${req.body.deliverySpeed}</li>
                    <li>${req.body.deadline}</li>
                    <li>${req.body.timedl}</li>
                    <li>${req.body.timezone}</li>
                </ul>
            `;
            var to = "thisisusedtodothings@outlook.com"
            var subject = req.body.projectTitle;
          try {
              var path = req.file.path;
          }

          finally{


            const accessToken = await oAuth2Client.getAccessToken()

            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    type: 'OAuth2',
                    user: 'angeljain.fx@gmail.com',
                    clientId: keys.gmailerClientID,
                    clientSecret: keys.gmailerClientSecret,
                    refreshToken: keys.gmailerRefreshToken,
                    accessToken: accessToken
                }
            })

            var mailOptions = {
                from: 'angeljain.fx@gmail.com',
                to: to,
                subject: subject,
                html: output,
                attachments: [{
                    path: path
                }]
            }

            await transporter.sendMail(mailOptions, function(err, info){
                if(err){
                    console.log(err)
                }
                else{
                    console.log("Email sent" + info.response)

                    fs.unlink(path, function(err){
                        if(err){
                            return res.end(err)
                        }
                        else{
                            console.log("deleted")
                        }
                    })

                }
            })
            try{
              await project.save();
              req.user.mailCredits -= 1;
              const user = await req.user.save();

              res.send(user);
            } catch (err) {
                res.status(422).send(err);
            }
          }


}

);
};
