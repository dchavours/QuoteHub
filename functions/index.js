const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});
admin.initializeApp();


const gmailEmail = 'quotehub.email@gmail.com';
const gmailPassword = 'SecurePassword12';
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword,
  },
});





exports.sendEmailConfirmation = functions.database.ref('messages').onWrite(async (change) => {
    const snapshot = change.after;
    const val = snapshot.val();
  
    const mailOptions = {
      from: 'quotehub.email@gmail.com',
      to: 'dchavours@gmail.com',
    };
  
    // Building Email message.
    mailOptions.subject = 'Dear ' + val.name;  //for example
    mailOptions.text = val.message;
  
    try {
      await mailTransport.sendMail(mailOptions);
      console.log('email sent to:', val.email);
    } catch(error) {
      console.error('There was an error while sending the email:', error);
    }
    return null;
  });
  







 exports.sendMail = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
      
        // getting dest email by query string
        const dest = req.query.dest;

        const mailOptions = {
            from: 'Your Account Name <yourgmailaccount@gmail.com>', // Something like: Jane Doe <janedoe@gmail.com>
            to: 'dchavours@gmail.com',
            subject: 'Email', // email subject
            html: `<p style="font-size: 16px;">Message body. </p>`
        };
  
        // returning result
        return transporter.sendMail(mailOptions, (erro, info) => {
            if(erro){
                return res.send(erro.toString());
            }
            return res.send('Sended');
        });


    });    
});


