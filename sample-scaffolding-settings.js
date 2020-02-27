const entities = {
  path: 'src',
  files: [{
      template: require('./template'),
      shouldHaveOptionNameInFileName: true,
      extension: '.js'
    }, {
      template: require('./template'),
      shouldHaveOptionNameInFileName: false,
      extension: '.css'
    }
  ], 
}



module.exports = {
  shouldAutomaticallyCreateDirectory: false,
  shouldOverrideFileIfExists: false,
  fileNamePattern: `?????????`,
  options: {
    entities,
    e: entities
  }

}