import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function Home(){
  return (
    <div>
     
    </div>
  )
}


function Options(){
  return (
    <div>
    </div>
  )
}

export default function Router(){
  return(
    <BrowserRouter>
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/options" component={Options} />
      </Switch>
    </BrowserRouter>
  );
}