import { Router } from '@reach/router'
import Home from '../Home/Home'
import BooksQueries from '../Home/BooksQueries'

export default function Layout() {
  return (
<Router>
  <Home path="/" />
  <BooksQueries path="/booksqueries" />
  {/* <NotFound default /> */}
</Router>
  )
}