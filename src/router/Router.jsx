import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "../Protected/ProtectedRoute";
import NotFoundPage from "../Pages/NotFoundPage";
import StartPage from "../Pages/StartPage";
import SignUpPage from "../Pages/SignUpPage";
import LoginPage from "../Pages/LoginPage";
import AdminPage from "../Pages/AdminPage";

function Router() {
  return (
    <BrowserRouter>
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
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
