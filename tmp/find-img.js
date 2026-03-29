const http = require('http');

http.get('http://localhost:3000', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    const imgRegex = /<img[^>]+>/g;
    const matches = data.match(imgRegex);
    console.log('Found ' + (matches ? matches.length : 0) + ' images:');
    if (matches) {
      matches.forEach(m => console.log(m));
    }
  });
}).on('error', err => console.error(err));
