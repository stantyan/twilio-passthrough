const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const notifyServiceSid = process.env.NOTIFY_SERVICE_SID;

const client = require('twilio')(accountSid, authToken);

client.notify.services(notifyServiceSid)
    .notifications.create({
        toBinding: [
            JSON.stringify({
                binding_type: 'sms',
                address: '+PhoneNumber'
            }),
            JSON.stringify({
                binding_type: 'sms',
                address: '+PhoneNumber'
            })
        ],
        body: 'Hello World!'
    })
    .then(notification => console.log(notification.sid))
    .catch(error => console.log(error));
