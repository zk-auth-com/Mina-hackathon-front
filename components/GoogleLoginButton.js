import { GoogleLogin } from 'react-google-login';


const GoogleLoginButton = () => {
  const responseGoogle = (response) => {
    console.log(response);
    // Выполните дополнительные действия после успешной аутентификации
  };

  return (
    <GoogleLogin
      clientId="790414748921-ha7rp1a9ust72kh62mard23i46qgrj5c.apps.googleusercontent.com"
      buttonText="Войти с помощью Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default GoogleLoginButton;
