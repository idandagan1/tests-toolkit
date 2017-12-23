/* global it, describe */
const assert = require('assert');
const { copyTestsDir } = require('../index');

describe('Test files', () => {

    describe('copying the files', () => {
        it('should created test directory', async () => {
            assert.doesNotThrow(async () => {
                console.log('copying files...');
                const msg = await copyTestsDir();
                console.log('after');
            }, 'Did not throw an error')
        });
    });

});
