import { useLocation, Navigate } from "react-router-dom";

const PreventSignIn = (props) => {
  const location = useLocation();

  return (
    <>
      {props.users.auth ? (
        <Navigate to="/dashboard" state={{ from: location }} replace />
      ) : (
        props.children
      )}
    </>
  );
};

export default PreventSignIn;
