#!/usr/bin/env node
const fs = require('fs')
const { red, blue, yellow, green } = require('chalk')

const settings = require('./sample-scaffolding-settings')
const shouldCreateDirectory = settings.shouldAutomaticallyCreateDirectory
const shouldOverride = settings.shouldOverrideFileIfExists

const [ nodePath, filePath, ...scriptArgs ] = process.argv

const type = scriptArgs[0]
const name = scriptArgs[1]

let error

if (!name) error = 'Please provide a name!'
const info = settings.options[type]
if (!info) error = 'Please provide a valid type!'
if (!type) error = 'Please provide a type!'

// missing feature error
if (shouldCreateDirectory) error = 'shouldAutomaticallyCreateDirectory feature currently unavailable :( \nsorry :(\njust create the directory yourself man!'

if (error) {
  console.log(red(error))
  return
}

const slashedPath = info.path[info.path.length-1] === '/' ? info.path : info.path + '/'
info.files.forEach(file => {
  let fileName
  const fileExtensionWithDot = file.extension[0] === '.' ? file.extension : '.' + file.extension
  if (file.shouldHaveOptionNameInFileName) 
    fileName = `${name}.${type}${fileExtensionWithDot}`
  else 
    fileName = `${name}${fileExtensionWithDot}`

  if (fs.existsSync(`${slashedPath}${fileName}`) && !shouldOverride) {
    console.log(red(`File exists at path: ${slashedPath}${fileName}`))
    return
  }
  const filePath = `${slashedPath}${fileName}`

  try {
    fs.writeFileSync(filePath, file.template(name))
  } catch(e) {
    if (e.errno === -2) {
      console.log(red('Directory does not exist. Please create the directory yourself!'))
      return
    }
    console.error(e)
    return
  }

})