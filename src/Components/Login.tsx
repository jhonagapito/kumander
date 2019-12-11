import React, { useEffect } from 'react';


const Login: React.FC = () => {
    useEffect(() => {
        document.body.classList.add('login-body');
    },[]);
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
                            <a href="index.html" className="btn btn-google btn-user btn-block">
                            <i className="fab fa-google fa-fw"></i> Login with Google
                            </a>
                            <a href="index.html" className="btn btn-facebook btn-user btn-block">
                            <i className="fab fa-facebook-f fa-fw"></i> Login with Facebook
                            </a>
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