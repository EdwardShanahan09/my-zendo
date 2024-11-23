import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./pages/Routes/AppRoutes";
import { UserProvider } from "./context/User/UserContext";

const App = () => {
  return (
    <div>
      <UserProvider>
        <Router>
          <AppRoutes />
        </Router>
      </UserProvider>
    </div>
  );
};

export default App;
