# Medusa Twilio Message Plugin

The Twilio Message Plugin offers a way to interact with the Message API from Medusa events.

## Cover Image
![cover image with stars and colored shading in the background as well as foreground text MEDUSA HACKATHON SUBMISSION Twilio Message Plugin](https://user-images.githubusercontent.com/116348315/197195527-6768341b-f51f-4f17-bdce-aa36bee253ed.png)

## Demo Link
N/A

# About

## Participants
 - [@stletoss](https://github.com/stletoss)
 - [@binallll](https://github.com/binallll)

## Description
Integrate Twilio with Medusa, to notify per SMS when the discount applied is OVER the configured threshold.

## Preview
![Screenshot with SMS from +1999999999 with text "From Medusa: order #178856 with discount OVER threshold placed!"](https://user-images.githubusercontent.com/116348315/197383367-3318aa05-5854-4cce-a829-4e0b8a36c2b6.png)

## Prerequisites/Setup
Steps to do (see commands below):
 - install & setup medusajs/medusa
 - clone this repo
 - link with your package manager, [see the docs](https://docs.medusajs.com/advanced/backend/plugins/create/#test-your-plugin)
 - register/login at Twilio, get your Account SID & Auth Token
 - verify your phone number with Twilio, to send message to yourself (as sender and receiver)
 - edit config (see below)
 - run & have fun

## Installation
The following commands must be run one after each other:
```
> npx create-medusa-app
   √ Where should your project be installed? · my-medusa-store
   √ Which Medusa starter would you like to install? · medusa-starter-default
   √ Which storefront starter would you like to install? · Gatsby Starter (Simple)
> cd my-medusa-store/backend
> npm install
> cd plugins
> git clone https://github.com/stletoss/medusa-plugin-twilio-message.git
> cd medusa-plugin-twilio-message
> npm install
> npm run build
> npm dedupe
> npm link
> cd ../..
```
then edit the plugins const in `medusa-config.js` (as seen below) and finally
```
> npm run build
> npm run start
```

## Config
Follwowing changes must be made your `medusa-config.js`:
```js
const plugins = [
    ...,
    {
        resolve: `medusa-plugin-twilio-message`,
	options: {
	    ORDER_DISCOUNT_THRESHOLD: `<double>`, //threshold from 0.0 to 1.0
	    TWILIO_ACCOUNT_SID: `ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`, // Find your Account SID at twilio.com/console
	    TWILIO_AUTH_TOKEN: `bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb`, // Find your Auth Token at twilio.com/console
	    SENDER_N_RECIPIENT: `+1999999999`, //destination phone number in E.164 format
    },
    ...
];
```

## Resources
 - [Twilio Message Docs](https://www.twilio.com/docs/sms/api/message-resource#create-a-message-resource)
 - [Medusa Plugin Test](https://docs.medusajs.com/advanced/backend/plugins/create/#test-your-plugin)
 - inspired by [Parajulibkrm](https://github.com/Parajulibkrm/medusa-plugin-teams-notification) and [developerharsh](https://github.com/developerharsh/Iot-with-twilio-code)
