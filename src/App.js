import React from 'react';
import { render } from 'react-dom';
import { Router, Link } from '@reach/router'
// import SearchParams from './Search'
// import Pet from './Pet'
// import State from './hooks/useState.js';
// import Effect from './hooks/useEffect.js';
import Search from './Search'
import Details from './Details';
const App = () =>   {
  return (
    <React.StrictMode>
    <div>
      <header>
        <Link to="/">Adobt Me</Link>
      </header>
        <Router>
          <Search path="/"/>
          <Details path="/details/:id"/>
        </Router>
    </div>
    </React.StrictMode>
  )
}

render(<App />, document.getElementById("root"));