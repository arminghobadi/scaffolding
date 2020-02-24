const entities = {
  path: 'src',
  files: [{
      template: require('./src/templates/entities.template'),
      shouldHaveOptionNameInFileName: true,
      extension: '.js'
    }, {
      template: require('./src/templates/entities.csstemplate'),
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