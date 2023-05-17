import './App.css';
import 'D:/divyang radadiya/desktop/reactcode/fetchdata/node_modules/bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Pages/NavBar';
import Router from './Pages/Router';
import { AuthContextProvider } from './Context/AuthContext';

function App() {
  return (
    // <div className="app">
      <AuthContextProvider> 
        <NavBar />
        <Router />
      </AuthContextProvider>
    // </div>
  );
}

export default App;
