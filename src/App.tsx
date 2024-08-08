import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { routes } from "./routes.ts";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <Router>
      <ScrollToTop />
      <Routes>
        {
          Object.values(routes).map(route => <Route path={route.route} Component={route.component} />)
        }
      </Routes>
    </Router>  
    </>
  )
}

export default App
