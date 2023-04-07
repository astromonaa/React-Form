import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {routes} from './router/routes'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          { routes.map(({path, component}) => <Route path={path} element={component} />) }
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;