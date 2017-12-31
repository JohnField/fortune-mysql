# Fortune MySQL Adapter


[![Build Status](https://img.shields.io/travis/JohnField/fortune-mysql/master.svg?style=flat-square)](https://travis-ci.org/JohnField/fortune-mysqls)
[![npm Version](https://img.shields.io/npm/v/fortune-mysql.svg?style=flat-square)](https://www.npmjs.com/package/fortune-mysql)
[![License](https://img.shields.io/npm/l/fortune-mysql.svg?style=flat-square)](https://raw.githubusercontent.com/fortunejs/fortune-mysql/master/LICENSE)

This is a MySQL adapter for Fortune; forked from the [Postgres adapter](https://github.com/fortunejs/fortune-postgres) as suggested in [Fortune Issue 103](https://github.com/fortunejs/fortune/issues/103).

**DO NOT USE YET**. Most functionality is broken due to differences between Postgres and MySQL.
This includes:
 * auto-generation of schema
 * Column datatypes, defintions, etc.
 * CRUD
 * relationships
 * other differences yet to be discovered by testing

## Usage

Install the `fortune-mysql` package from `npm`:

```
$ npm install fortune-mysql
```
Then use it with Fortune (db must be already available):

```js
const fortune = require('fortune')
const mysqlAdapter = require('fortune-mysql')

const store = fortune({ ... }, {
  adapter: [
    mysqlAdapter,
    {
      // options object, URL is mandatory.
      url: `mysql://${username}:${password}@${host}:${port}/${db}`
    }
  ]
})
```


## Options

- `url`: Connection URL string. **Required** if no other connection options are given. Add the query param `ssl=true` to enable SSL.
- `connection`: Connection object, see [documentation](https://github.com/mysqljs/mysql#establishing-connections). This takes precendence over the URL. Optional.
- `pool`: an instance of a [pool](https://github.com/mysqljs/mysql#pooling-connections) can be passed in directly. This takes precendence over all connection settings. Optional.
- `typeMap`: an object keyed by type name and valued by table name.
- `primaryKeyType`: Data type of the primary key. May be `String`, `Number`, or a string for custom type. Default: `String`.
- `generatePrimaryKey`: A function that accepts one argument, the `type` of the record, and returns either a `String` or `Number`. By default,
  it returns 15 random bytes, base64 encoded in a URI-safe way. Set this to a falsey value like `null` to turn this off.
- `useForeignKeys`: Whether or not to use foreign key constraint, optional since it will only be applied to non-array fields. Default: `false`.


For further options and internal usage, refer to the [Postgres adapter](https://github.com/fortunejs/fortune-postgres). 


## License

This software is licensed under the [MIT License](//github.com/fortunejs/fortune-postgres/blob/master/LICENSE).
