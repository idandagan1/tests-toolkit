const fs = require('fs-extra');
const path = require('path');
const { exec } = require('child_process');

const idProd = process.env.PROD !== 'false';
const destPath = path.resolve(__dirname, `${idProd ? '../../tests' : './tests'}`);

if (idProd) {
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

async function copyTestsDir(cb) {
    // Copying the tests directory
    try {
        await fs.copy(path.resolve(__dirname, './src'), destPath);
        const msg = 'created tests directory successfully';
        console.log(msg);
        return msg;
    } catch (err) {
        console.error(err);
    }
}

module.exports.copyTestsDir = copyTestsDir;
