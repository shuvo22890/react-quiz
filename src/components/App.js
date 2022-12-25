import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import "../styles/App.css";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/signup"
              element={<PublicRoute component={Signup} />}
            />
            <Route path="/login" element={<PublicRoute component={Login} />} />
            <Route
              path="/quiz/:id"
              element={<PrivateRoute component={Quiz} />}
            />
            <Route
              path="/result/:id"
              element={<PrivateRoute component={Result} />}
            />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}
