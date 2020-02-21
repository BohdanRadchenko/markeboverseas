import React from 'react'
import {Redirect, Route, Switch} from 'react-router-dom'
import HomePage from "./pages/HomePage";
import LicensesPage from "./pages/LicensesPage";

export const useRoutes = () => {
  return (
    <div>
      <Switch>
        <Route path="/home" exact >
          <HomePage/>
        </Route>
        <Route path="/licenses" exact >
          <LicensesPage/>
        </Route>
        <Redirect to="/home"/>
      </Switch>
    </div>
  )
};