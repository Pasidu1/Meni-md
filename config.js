const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: 'ZEROTWO=MzFTFADK#lkZ3pTqOi3J0L1I8NBMPoUZn7iGvksr0x3AfKLBFKVg'
};
