const axios = require('axios');
const fs = require('fs');
const path = require('path');
let readXml = fs.readFileSync(path.join(__dirname, "request.xml"), 'utf8');
axios.post('http://www.dneonline.com/calculator.asmx',
    readXml,
    {
        headers:
            { 'Content-Type': 'text/xml' }
    }).then(res => {
        fs.writeFileSync(path.join(__dirname, 'response.xml'), res.data, 'utf8');
    });