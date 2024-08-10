import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate  } from 'react-router-dom';
import { routes } from "./routes.ts";
import ScrollToTop from "./components/ScrollToTop";
import { RouteObject } from './types/commonTypes.ts';

function App() {
  return (
    <>
      <Router>
      <ScrollToTop />
      <Routes>
         <Route path="/" element={<Navigate to="/login" replace />} />
        {
          Object.values(routes).map((route: RouteObject) => <Route path={route.route} Component={route.component} />)
        }
      </Routes>
    </Router>  
    </>
  )
}

export default App
