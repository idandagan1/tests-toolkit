/* global it, describe */
const assert = require('assert');
const { copyTestsDir } = require('../index');

describe('Test files', () => {

    describe('copying the files', () => {
        it('should created test directory', async () => {
            console.log('copying files...');
            const msg = await copyTestsDir();
            assert.equal(msg, 'created tests directory successfully');
        });
    });

});
