# Description
Simple git webhook using [micro](https://github.com/zeit/micro)

# Usage
- Clone this repo
- Set `router path` and `secret code` according to the settings in your repository
- Run the server using `npm start` or `pm2 start index.js`

# Webhook Instruction
## Github
1. Navigate to your repository on Github, and open the Settings
2. Select Add Webhook
3. Set `Payload URL` and `Secret code`
4. Select `Send me everything`, and then click `Add Webhook`