const fs = require('fs');
const { exec } = require('child_process');

// installing chai package
exec('npm i chai -S');

fs.copyFile('test.js', 'tests.js', (err) => {
  if (err) throw err;
  console.log('test.js was copied to tests.js');
});