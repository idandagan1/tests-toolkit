# tests-toolkit
a simple toolkit for creating tests files

Creation
------------

    npm i tests-toolkit
    
### This command will do the following:
- create a tests directory in root
- create a test template
- install chai module

### Options
- DEST_PATH: path for the tests directory that will be created (default to root directory)
- CHAI: true/false for installing chai module (default to true)

Example:

```js
npm i test-toolkit DEST_PATH="./testing_files" CHAI="false"
```