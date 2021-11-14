const connection = require('./connection');

const { ObjectId } = require('mongodb');

const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;
  
  const fullName = [firstName, middleName, lastName]
    .filter((name) => name)
    .join(' ');
  
  return {
    id,
    firstName,
    middleName,
    lastName,
    name: fullName,
   };
  };

// const serialize = (authorData) => {
//   return {
//     id: authorData.id,
//     firstName: authorData.first_name,
//     middleName: authorData.middle_name,
//     lastName: authorData.last_name
//   }
// }

// SQL

// const getAll = async () => {
  // const [authors] = await connection.execute('SELECT id, first_name, middle_name, last_name FROM authors');
  // 
  // return authors.map(serialize).map(getNewAuthor);
// };

// MONGO
// MongoDB não nos devolve um Array de colunas como o MySQL , e sim um objeto para cada documento encontrado.

const getAll = async () => {
  return connection()
  .then((db) => db.collection('authors').find().toArray())
  .then((authors) => {
    return authors.map(({ _id, firstName, middleName, lastName }) => {
      return {
        id: _id,
        firstName,
        middleName,
        lastName,
      }
    });
  });
}

//SQL
// const findById = async (id) => {
//   // Repare que substituímos o id por `?` na query.
//   // Depois, ao executá-la, informamos um array com o id para o método `execute`.
//   // O `mysql2` vai realizar, de forma segura, a substituição do `?` pelo id informado.
//   const query = 'SELECT id, first_name, middle_name, last_name FROM authors WHERE id = ?'
//   const [ authorData ] = await connection.execute(query, [id]);

//   if (authorData.length === 0) return null;

//   // Utilizamos [0] para buscar a primeira linha, que deve ser a única no array de resultados, pois estamos buscando por ID.
//   const { firstName, middleName, lastName } = serialize(authorData[0]);

//   return getNewAuthor({
//     id,
//     firstName,
//     middleName,
//     lastName
//   });
// };

// MONGO
const findById = async (id) => {
  if (!ObjectId.isValid(id)) {
    return null;
  }

  const authorData = await connection()
    .then((db) => db.collection('authors').findOne(new ObjectId(id)));

  if (!authorData) return null;

  const { firstName, middleName, lastName } = authorData;

  return { id, firstName, middleName, lastName };
};

//SQL
// const create = async (firstName, middleName, lastName) => connection.execute(
//   'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?,?,?)',
//   [firstName, middleName, lastName],
// );

//MONGO
const create = async (firstName, middleName, lastName) => {
  connection()
    .then((db) => db.collection('authors').insertOne({ firstName, middleName, lastName }))
    .then(result => { id: result.insertedId, firstName, middleName, lastName });
}

module.exports = {
  getAll,
  findById,
  create,
};