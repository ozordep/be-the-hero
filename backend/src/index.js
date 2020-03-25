/**  Métodos HTTP:
 * GET: Buscar/listar uma informação do backend
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
*/

/**
 * Tipos de parâmetros:
 * Query Params: Parâmetros enviados na rota após "?" (Filtros,paginação)
 * Route Params: Parâmetros utilizados para identificar recursos.
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

 /**
  * SQL: MySQL, SQLite ...
  * NoSQL: MongoDB, CouchDB
  */

  /**
   * Driver: SELECT * FROM users
   * QueryBuilder: table('users').select('*').where()
   */

const express = require('express');

const routes = require('./routes')
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);




app.listen(3333);