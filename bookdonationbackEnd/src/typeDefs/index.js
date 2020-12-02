
const {gql} = require('apollo-server');


const booksdetails= gql`
type booksdetails{
    bookname:String!
    author:String!
    bookscount:String
    ISBN:String!
}`


const Query = gql`
  type Query {
    getbooks:[booksdetails]

  }
  `

const Mutation = gql`
type Mutation {
     updatebooks(bookname:String, author:String, ISBN :String):String
}
`;

exports.typeDefs = [
    booksdetails,
    Query,
  Mutation,
]  