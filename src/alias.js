import moduleAlias from 'module-alias'

moduleAlias.addAliases({
  '@root'       : __dirname,
  '@client'     : __dirname + '/src/client',
  '@page'       : __dirname + '/src/pages',
  '@store'      : __dirname + '/src/store',
  '@action'     : __dirname + '/src/meomeo',
  '@reducer'    : __dirname + '/src/store/reducers',
  '@saga'       : __dirname + '/src/store/sagas',
  '@scss'       : __dirname + '/src/scss'
})

export default moduleAlias()
