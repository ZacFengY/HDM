const fs = require('fs')
const packageJson = require('../package.json')

const { name, version, description, main, keywords, author, license, dependencies } = packageJson

const deployPackageJson = {
  name,
  version,
  description,
  main,
  keywords,
  author,
  license,
  dependencies,
}

fs.writeFileSync('package.deploy.json', JSON.stringify(deployPackageJson, null, 2))
