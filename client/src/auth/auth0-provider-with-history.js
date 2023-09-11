import { Auth0Provider } from "@auth0/auth0-react";


const Auth0ProviderWithHistory = ({children}) =>
{ 
    return <Auth0Provider{children}></Auth0Provider>
    
};

export default Auth0ProviderWithHistory;