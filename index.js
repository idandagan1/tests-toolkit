const fs = require('fs-extra');
const path = require('path');
const { exec } = require('child_process');

const isProd = process.env.PROD !== 'false';
const destPath = path.resolve(__dirname, `${isProd ? '../../tests' : './tests'}`);

if (isProd) {
    copyTestsDir();
} else {
    installChai(copyTestsDir);
}

function installChai(cb) {
    // installing chai package
    exec('npm i chai -D', (err) => {
        if (err) throw err;
        console.log('installed chai successfully');
        cb();
    });
}

async function copyTestsDir() {
    // Copying the tests directory
    try {
        await fs.copy(path.resolve(__dirname, './src'), destPath);
        console.log('created tests directory successfully');
    } catch (err) {
        console.error(err);
    }
}

module.exports.copyTestsDir = copyTestsDir;
