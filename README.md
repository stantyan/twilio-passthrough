# twilio-passthrough

Passthrough API: Send 10k SMS messages with a single API request

Bulk SMS through a single API request.
Make marketing announcements, send emergency response notifications.
Available in beta.

More info:
https://www.twilio.com/blog/2017/08/bulk-sms-with-one-api-request.html

## Install Homebrew
```bash
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

## Install npm
```bash
brew install node
```

## Add node path to .zrshc
```bash
nano ~/.zshrc
```
```bash
export PATH="/usr/local/share/npm/bin:$PATH"
```
```bash
source ~/.zshrc
```

## Setup

```bash
git clone https://github.com/stantyan/twilio-passthrough.git
cd twilio-passthrough
npm install
```

Configure the values in the `.env` file. 

Edit app.js file
```bash
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
```

Install Twilio node helper library

```bash
npm install twilio --save
```

Run the app:

```bash
npm start
```
