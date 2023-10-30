import knex from 'knex'

const sqlConnect = knex({
  client: 'mysql2',
  connection: {
    host: 'localhost',
    user: 'root',
    password: 'peter3844',
    database: 'studioServer',
  },
})

const Select = async (table, columns, where) => {
  var results
  if (!columns) columns = '*'
  await sqlConnect(table)
    .select(columns)
    .where(where)
    .then((res) => {
      console.log(res)
      results = res
    })
    .catch((err) => {
      console.log(err)
      throw err
    })

  return results
}

export default { Select }
