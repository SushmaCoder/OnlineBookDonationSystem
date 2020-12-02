import 'tachyons'
import {useQuery} from '@apollo/react-hooks';
import {GET_BOOKS} from '../Api/queries';
import {useState}  from 'react'

export default function BooksQueries(){
    const {error,loading,data} = useQuery(GET_BOOKS);
   
    return error ? (<div>error</div>) : loading ? (<div>loading</div>) :(
         <div className="flex flex-column justify-between items-center">
         <div className="f2">List of the books</div>
        {/* <table class="f6 miw ba b--black-20" cellspacing="0">
         <tr className="">
         <th className="th"  colspan="1">hello</th>
         <th className="th"  colspan="1">hi</th>
         <th className="th"  colspan="1">bye</th>
         </tr>
         </table> */}
         <div className="">
         <table className="ba b--black-10 mt4 mh4 w-100 bg-light-green"> 
         <tr className=""> 
             <th className="ba b--black-20 pa3 bg-light-green">BOOK NAME</th> 
             <th className="ba b--black-20 pa3 bg-light-green">AUTHOR</th> 
             <th className="ba  b--black-20 pa3 bg-light-green">TOTAL</th> 
             <th className="ba  b--black-20 pa3 bg-light-green">ISBN</th>
         </tr> 
         {data.getbooks.map((item) => 
         <tr className=""> 
             <td className="bb b--black-20 pa2">{item.bookname}</td> 
             <td className="bb b--black-20 pa2">{item.author}</td> 
             <td className="bb b--black-20 pa2">{item.bookscount}</td> 
             <td className="bb b--black-20 pa2">{item.ISBN}</td> 
         </tr> )}
     </table> 
     </div>
    </div>
    )
}