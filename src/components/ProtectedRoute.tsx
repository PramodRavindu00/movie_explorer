import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, type ReactNode } from "react";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      loginWithRedirect({
        appState: { returnTo: window.location.pathname },
      });
    }
  }, [isLoading, isAuthenticated, loginWithRedirect]);

  if (isLoading || !isAuthenticated) {
    return (
      <div className="flex flex-col flex-grow items-center justify-center text-gray-500 font-semibold text-2xl">
        Loading...
      </div>
    );
  }

  return <>{children};</>;
};

export default ProtectedRoute;
