import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {

  const user = document.cookie.includes("user");

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}

export default ProtectedRoute;