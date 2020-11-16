const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const sendGrid = require('@sendGrid/mail');


const app = express();


app.use(bodyParser.json());

app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Change later to only allow our server
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


app.get('/api', (req, res, next) => {
    res.send('API Status: I\'m awesome')
});


app.post('/api/email', (req, res, next) => {

    console.log(req.body);

    sendGrid.setApiKey('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');
    const msg = {
        to: req.body.email,
        from: 'desk@thebulb.africa',
        subject: 'The Desk Booking Form ' + " | " + req.body.firstName + " " + req.body.lastName,
        html: ' <div class="es-wrapper-color"> <!--[if gte mso 9]><v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t"><v:fill type="tile" color="#f6f6f6"></v:fill></v:background><![endif]--> <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0"> <tbody> <tr> <td class="esd-email-paddings" valign="top"> <table class="es-content esd-header-popover" cellspacing="0" cellpadding="0" align="center"> <tbody> <tr> <td class="esd-stripe" align="center"> <table class="es-content-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> <tbody> <tr> <td class="esd-structure es-p40b" align="left" bgcolor="#10152C" style="background-color: #10152c;"> <table width="100%" cellspacing="0" cellpadding="0"> <tbody> <tr> <td class="esd-container-frame" width="600" valign="top" align="center"> <table width="100%" cellspacing="0" cellpadding="0"> <tbody> <tr> <td align="center" class="esd-block-image es-p20t es-p10b es-p10r es-p10l" style="font-size: 0px;"><a target="_blank"><img class="adapt-img" src="https://ucsoj.stripocdn.email/content/guids/CABINET_5ae09395cd0d133bf7f80bf1f80ac698/images/24201605174789996.png" alt style="display: block;" width="100"></a></td> </tr> <tr> <td align="center" class="esd-block-spacer es-p20" style="font-size:0"> <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0"> <tbody> <tr> <td style="border-bottom: 1px solid #e6af17; background: none; height: 1px; width: 100%; margin: 0px;"></td> </tr> </tbody> </table> </td> </tr> <tr> <td class="esd-block-text es-p5" align="center"> <h2 style="color: #ffffff; line-height: 120%;">Email From:- ' + req.body.firstName + " " + req.body.lastName + '</h2> </td> </tr> <tr> <td align="center" class="esd-block-spacer es-p20" style="font-size:0"> <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0"> <tbody> <tr> <td style="border-bottom: 1px solid #e6af17; background: none; height: 1px; width: 100%; margin: 0px;"></td> </tr> </tbody> </table> </td> </tr> <tr> <td class="esd-block-text es-p5" align="center"> <h2 style="color: #ffffff; line-height: 120%;">Email:- ' + req.body.email + '</h2> </td> </tr> <tr> <td align="center" class="esd-block-spacer es-p20" style="font-size:0"> <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0"> <tbody> <tr> <td style="border-bottom: 1px solid #e6af17; background: none; height: 1px; width: 100%; margin: 0px;"></td> </tr> </tbody> </table> </td> </tr> <tr> <td class="esd-block-text es-p5" align="center"> <h2 style="color: #ffffff; line-height: 120%;">Phone Number:- ' + req.body.phoneNumber + '</h2> </td> </tr> <tr> <td align="center" class="esd-block-spacer es-p20" style="font-size:0"> <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0"> <tbody> <tr> <td style="border-bottom: 1px solid #e6af17; background: none; height: 1px; width: 100%; margin: 0px;"></td> </tr> </tbody> </table> </td> </tr> <tr> <td class="esd-block-text es-p5" align="center"> <h2 style="color: #ffffff; line-height: 120%;">Service Selected:- ' + req.body.serviceSeleted + '</h2> </td> </tr> <tr> <td align="center" class="esd-block-spacer es-p20" style="font-size:0"> <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0"> <tbody> <tr> <td style="border-bottom: 1px solid #e6af17; background: none; height: 1px; width: 100%; margin: 0px;"></td> </tr> </tbody> </table> </td> </tr> <tr> <td class="esd-block-text es-p5" align="center"> <h2 style="color: #ffffff; line-height: 120%;">Business Industry:- ' + req.body.businessIndustry + '.</h2> </td> </tr> <tr> <td align="center" class="esd-block-spacer es-p20" style="font-size:0"> <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0"> <tbody> <tr> <td style="border-bottom: 1px solid #e6af17; background: none; height: 1px; width: 100%; margin: 0px;"></td> </tr> </tbody> </table> </td> </tr> <tr> <td class="esd-block-text es-p5" align="center"> <h2 style="color: #ffffff; line-height: 120%;">Business Name:- ' + req.body.businessName + '.</h2> </td> </tr> <tr> <td align="center" class="esd-block-spacer es-p20" style="font-size:0"> <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0"> <tbody> <tr> <td style="border-bottom: 1px solid #e6af17; background: none; height: 1px; width: 100%; margin: 0px;"></td> </tr> </tbody> </table> </td> </tr> <tr> <td class="esd-block-text es-p5" align="center"> <h2 style="color: #ffffff; line-height: 120%;">Buisiness Description:- ' + req.body.buisinessDescription + '.</h2> </td> </tr> <tr> <td align="center" class="esd-block-spacer es-p20" style="font-size:0"> <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0"> <tbody> <tr> <td style="border-bottom: 1px solid #e6af17; background: none; height: 1px; width: 100%; margin: 0px;"></td> </tr> </tbody> </table> </td> </tr> <tr> <td class="esd-block-text es-p5" align="center"> <h2 style="color: #ffffff; line-height: 120%;">Start date:- ' + req.body.startdate + '</h2> </td> </tr> <tr> <td align="center" class="esd-block-spacer es-p20" style="font-size:0"> <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0"> <tbody> <tr> <td style="border-bottom: 1px solid #e6af17; background: none; height: 1px; width: 100%; margin: 0px;"></td> </tr> </tbody> </table> </td> </tr> <tr> <td class="esd-block-text es-p5" align="center"> <h2 style="color: #ffffff; line-height: 120%;">End date:- ' + req.body.enddate + '</h2> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> <table class="es-footer" cellspacing="0" cellpadding="0" align="center"> <tbody> <tr> <td class="esd-stripe" align="center"> <table class="es-footer-body" width="600" cellspacing="0" cellpadding="0" align="center"> <tbody> <tr> <td class="esd-structure es-p20t es-p20b es-p20r es-p20l" align="left"> <table width="100%" cellspacing="0" cellpadding="0"> <tbody> <tr> <td class="esd-container-frame" width="560" valign="top" align="center"> <table width="100%" cellspacing="0" cellpadding="0"> <tbody> <tr> <td class="esd-block-spacer es-p20" align="center" style="font-size:0"> <table width="75%" height="100%" cellspacing="0" cellpadding="0" border="0"> <tbody> <tr> <td style="border-bottom: 1px solid #cccccc; background:none; height:1px; width:100%; margin:0px 0px 0px 0px;"></td> </tr> </tbody> </table> </td> </tr> <tr> <td class="esd-block-text es-p10t es-p10b" align="center"> <p>39 Ikorodu Road,<br>Jibowu, Yaba, Lagos<br>Nigeria</p> </td> </tr> <tr> <td class="esd-block-text es-p10t es-p10b" align="center"> <p>©&nbsp;thebulb 2020.</p> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> <table class="esd-footer-popover es-content" cellspacing="0" cellpadding="0" align="center"> <tbody> <tr> <td class="esd-stripe" align="center"> <table class="es-content-body" style="background-color: transparent;" width="600" cellspacing="0" cellpadding="0" align="center"> <tbody> <tr> <td class="esd-structure es-p30b es-p20r es-p20l" align="left"> <table width="100%" cellspacing="0" cellpadding="0"> <tbody> <tr> <td class="esd-container-frame" width="560" valign="top" align="center"> <table width="100%" cellspacing="0" cellpadding="0"> <tbody> <tr> <td align="center" class="esd-empty-container" style="display: none;"></td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </td> </tr> </tbody> </table> </div>',
    }

    sendGrid.send(msg)
        .then(result => {

            res.status(200).json({
                success: true
            });

        })
        .catch(err => {

            console.log('error: ', err);
            res.status(401).json({
                success: false
            });

        });
});


app.listen(3030, '0.0.0.0');