const fs = require('fs')
const generateComponentIndex = require('./component/generateIndex.js')
const generateComponentTest = require('./component/generateTest.js')

const create = () => {
  const args = process.argv.slice(2)

  switch (args[0]) {
    case 'component':
      createComponent(args[1])
      break

    default:
      break
  }
}

const createComponent = (name = 'NewComponent') => {
  const componentIndexString = generateComponentIndex(name)
  const componentTestString = generateComponentTest(name)
  const componentDirectory = `${process.cwd()}/${name}`

  console.log('creating:', componentDirectory)
  fs.mkdirSync(componentDirectory)
  fs.writeFileSync(`${componentDirectory}/index.js`, componentIndexString)
  fs.writeFileSync(`${componentDirectory}/test.js`, componentTestString)
}

module.exports = {
  create
}
