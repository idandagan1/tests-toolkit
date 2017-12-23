const fs = require('fs-extra');
const path = require('path');
const { exec } = require('child_process');

// installing chai package
exec('npm i chai -S', (err, t, u) => {
    if (err) throw err;
    console.log('installed chai successfully');
    copyTestsDir();
});

function copyTestsDir() {
    // Copying the tests directory
    try {
        fs.copy(path.resolve(__dirname, './src'), path.resolve(__dirname, '../../tests'));
        console.log('created tests directory successfully');
    } catch (err) {
        console.error(err);
    }
}
