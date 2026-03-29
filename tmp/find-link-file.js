const http = require('http');
const fs = require('fs');

http.get('http://localhost:3000', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const linkRegex = /<link[^>]+>/gi;
    const matches = data.match(linkRegex);
    fs.writeFileSync('tmp/link-tags.txt', (matches || []).join('\n'));
    console.log('Saved ' + (matches ? matches.length : 0) + ' link tags');
  });
}).on('error', err => console.error(err));
