const express = require('express');
const os = require('os');

const app = express();
const PORT = process.env.PORT;

function getInfo(lang, software) {
    var result = {};
    result.ipaddress = os.networkInterfaces().eth0[0].address;
    result.language = 'en-US';
    result.software = software;
    
    return JSON.stringify(result);
}

app.get('/', (req, res) => {
    var software = req.headers['user-agent'].split('(')[1].split(')')[0];
    var lang = req.headers["accept-language"].split('')[0];
    res.send(getInfo(lang, software));
});

app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Listening on port ${PORT}`);
});