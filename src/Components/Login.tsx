import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

const Login: React.FC = () => {
    useEffect(() => {
        document.body.classList.add('login-body');
    },[]);

    const responseFacebook = (response: any) => {
        console.log(response);
        localStorage.setItem('kumander_token', JSON.stringify(response));
        return <Redirect to="/" />;
      }
  
      const responseGoogle = (response: any) => {
        console.log(response);
        localStorage.setItem('kumander_token', JSON.stringify(response));
      }

    return (
        
        <div className="container login-container bg-gradient-primary">
            <div className="row justify-content-center">

            <div className="col-xl-10 col-lg-12 col-md-9">

                <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                    <div className="row">
                    <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                    <div className="col-lg-6">
                        <div className="p-5">
                        <div className="text-center">
                            <h1 className="h4 text-gray-900 mb-4">Welcome!</h1>
                        </div>
                        <form className="user">
                            <hr />
                            {/* <a href="/" className="btn btn-google btn-user btn-block">
                            <i className="fab fa-google fa-fw"></i> Login with Google
                            </a>
                            <a href="/" className="btn btn-facebook btn-user btn-block">
                            <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                            </a> */}
                            <FacebookLogin
                                appId="766531610440819" //APP ID NOT CREATED YET
                                autoLoad={true}
                                fields="name,email,picture"
                                callback={responseFacebook}
                                cssClass="btn btn-facebook btn-user btn-block"
                            />
                            <br />
                            <GoogleLogin
                                    clientId="300659824705-3gs348el5kpg3d494dj5fqh980iqtnv7.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
                                    buttonText="Login with Google"
                                    onSuccess={responseGoogle}
                                    onFailure={responseGoogle}
                                    className="btn btn-google btn-user btn-block"
                                />
                        </form>
                        <hr />
                        <div className="text-center">
                            <a className="small" href="forgot-password.html">Forgot Password?</a>
                        </div>
                        <div className="text-center">
                            <a className="small" href="register.html">Create an Account!</a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>

            </div>

            </div>
        </div>
    );
}

export default Login;