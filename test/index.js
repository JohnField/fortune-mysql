const testAdapter = require('fortune/test/adapter')
const adapter = require('../lib')

testAdapter(adapter, {
  url: 'mysql://user:password@localhost:3306/fortune_test',
  primaryKeyType: 'integer',
  useForeignKeys: true,
  generatePrimaryKey: () => Math.floor(Math.random() * Math.pow(2, 16)),
  typeMap: {
    user: 'users',
    animal: 'animals'
  }
})
