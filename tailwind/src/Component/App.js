import Navbar from "./Nav";
import Router from "./Router";
import { AuthContextProvider } from 'D:/divyang radadiya/desktop/reactcode/tailwind/src/Context/AuthContext.js';

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Router />
      </AuthContextProvider>
    </>
  );
}

export default App;
