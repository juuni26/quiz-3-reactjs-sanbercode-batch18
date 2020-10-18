import React, { useContext, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import MovieListEditor from './pages/MovieListEditor/MovieListEditor'
import Login from './pages/Login';
import { MovieContext } from './MovieContext';


const Routes = () => {
  const [login] = useContext(MovieContext)


  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/about">
        <About />
      </Route>



      {login != "" ?
        <Route path="/login">
          <Redirect to="/" />
        </Route> :
        <Route path="/login">
          <Login />
        </Route>
      }

      {login != "" ?
        <Route path="/movie_list_editor">
          <MovieListEditor />
        </Route> : <Route path="/movie_list_editor">
          <Redirect to="/login" />
        </Route>}

    </Switch>
  );
};

export default Routes;