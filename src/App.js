import { Route, Routes, Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Container from "./components/Container/Container";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import LoginForm from "./components/LoginForm/LoginForm";
import ConfirmView from "./components/ConfirmView/ConfirmView";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
import AnalyticsForm from "./components/AnalyticsForm/AnalyticsForm";
import operations from "./redux/operations";
import "./App.module.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(operations.getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <RegisterForm />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginForm />
            </PublicRoute>
          }
        />
        <Route path="/confirmation" element={<ConfirmView />} />
        <Route
          path="/analytics"
          element={
            <PrivateRoute>
              <AnalyticsForm />
            </PrivateRoute>
          }
        />
      </Routes>
    </Container>
  );
}

export default App;
