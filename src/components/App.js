import React, { Suspense} from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import {useRoutes} from "../routes";

function App() {
  const routes = useRoutes()
  return (
    // <Suspense fallback={<Loaders/>}>
    <Suspense>
      <Router basename='/'>
        {routes}
      </Router>
    </Suspense>
  );
}

export default App;
