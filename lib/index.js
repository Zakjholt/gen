const fs = require('fs')
const generateComponentIndex = require('./component/generateIndex.js')
const generateComponentTest = require('./component/generateTest.js')

const create = () => {
  const args = process.argv.slice(2)

  switch (args[0]) {
    case 'component':
      break

    default:
      break
  }
}

const createComponent = name => {
  const componentIndexString = generateComponentIndex(name)
  const componentTestSTring = generateComponentTest(name)
}

module.exports = {
  create: () => console.log('Hello sir', process.cwd())
}
