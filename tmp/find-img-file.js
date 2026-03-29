const http = require('http');
const fs = require('fs');

http.get('http://localhost:3000', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const imgRegex = /<img[^>]+>/gi;
    const matches = data.match(imgRegex);
    fs.writeFileSync('tmp/img-tags.txt', (matches || []).join('\n'));
    console.log('Saved ' + (matches ? matches.length : 0) + ' tags to tmp/img-tags.txt');
  });
}).on('error', err => console.error(err));
