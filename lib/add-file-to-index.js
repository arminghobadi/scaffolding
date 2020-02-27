const fs = require('fs')

const pathToIndexFile = '.'
const path = pathToIndexFile + '/index.js'

const newFileNameWithExtension = './armin'
const exportStatement = `export * from '${newFileNameWithExtension}'\n`

fs.appendFileSync(path, exportStatement)

const addFileToIndexJS = async (pathToIndexFile, fileNameWithExtension) => {
  
}