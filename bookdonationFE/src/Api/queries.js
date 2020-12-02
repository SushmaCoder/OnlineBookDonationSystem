import { gql} from '@apollo/client';

export const GET_BOOKS = gql`
query getbooks {
    getbooks{
      bookname
      author
  bookscount
  ISBN
    }
  }
`;


export const UPDATE_BOOKS = gql`
  mutation updatebooks($bookname: String!,$author: String!,$ISBN:String!) {
    updatebooks(bookname: $bookname,author:$author,ISBN:$ISBN) 
  }
`;
