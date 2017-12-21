const fs = require('fs');
const { exec } = require('child_process');

exec('npm i chai -S');

fs.copyFile('test.js', 'destination.js', (err) => {
  if (err) throw err;
  console.log('source.txt was copied to destination.txt');
});