import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Search from './components/ui/Search'
import Pagination from './components/ui/Pagination';
import CharacterPage from './components/characters/CharacterPage'
import './App.css'

import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true)
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}&quote?author=${query}`
      )

      console.log(result.data)

      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentItems = items.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='container'>
      <Router>
        <Header />

        <Switch>


            <Route path="/character">
              <CharacterPage />
            </Route>

            <Route path="/">
              <Search getQuery={(q) => setQuery(q)} />
              <CharacterGrid isLoading={isLoading} items={currentItems} />
              <Pagination
                postsPerPage={postsPerPage}
                totalPosts={items.length}
                paginate={paginate}
              />
            </Route>

            

          </Switch>
      </Router>
    </div>
  )
}

export default App
