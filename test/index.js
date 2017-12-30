const testAdapter = require('fortune/test/adapter')
const adapter = require('../lib')

testAdapter(adapter, {
  url: 'mysql://mysql@localhost:3306/fortune_test',
  primaryKeyType: 'integer',
  useForeignKeys: true,
  // isNative: true,
  generatePrimaryKey: () => Math.floor(Math.random() * Math.pow(2, 16)),
  typeMap: {
    user: 'users',
    animal: 'animals'
  }
})
