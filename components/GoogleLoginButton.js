import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';

const GoogleLoginButton = () => {
  const responseGoogle = (response) => {
    console.log(response);
    // Выполните дополнительные действия после успешной аутентификации
  };

  return (
      <GoogleOAuthProvider 
      clientId="116089001249-mb14nbpt1n9o1q1dpbrho6ss234iqf18.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={credentialResponse => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
        />
      </GoogleOAuthProvider>
    );
};

export default GoogleLoginButton;
