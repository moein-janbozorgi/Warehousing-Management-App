import { Navigate, Route, Routes } from "react-router-dom";
import StartPage from "./Pages/StartPage";
import SignUpPage from "./Pages/SignUpPage";
import LoginPage from "./Pages/LoginPage";
import AdminPage from "./Pages/AdminPage";
import ProtectedRoute from "./Protected/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route index element={<Navigate to={"/start"} replace />} />
      <Route path="/start" element={<StartPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <AdminPage />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
