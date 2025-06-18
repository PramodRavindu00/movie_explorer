import { Auth0Provider, type AppState } from "@auth0/auth0-react";
import type { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientID = import.meta.env.VITE_AUTH0_CLIENT;

const AuthNavigate = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const onRedirectCallBack = (appState?: AppState) => {
    navigate(appState?.returnTo || window.location.pathname);
  };
  return (
    <Auth0Provider
      domain={domain}
      clientId={clientID}
      authorizationParams={{ redirect_uri: window.location.origin }}
      onRedirectCallback={onRedirectCallBack}
    >
      {children}
    </Auth0Provider>
  );
};

export default AuthNavigate;
