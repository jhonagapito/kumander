import React, { useState } from 'react';
import { RouteComponentProps, Route, Redirect } from 'react-router-dom';
import axios from 'axios';

declare var FB: any;

interface Props {
    Component: React.FC<RouteComponentProps>;
    path: string;
    exact?:boolean
}

const AuthRoute = ({Component, path, exact = false} : Props) : JSX.Element => {
    const message = "Please log in to view this page";
    const kumander_token = JSON.parse(localStorage.getItem("kumander_token") || "");
    const validateFBToken = async() => {
        const response = await axios.get(`https://graph.facebook.com/debug_token?input_token=${kumander_token.accessToken}&access_token=${process.env.REACT_APP_FACEBOOK_APP_ID}|${process.env.REACT_APP_FACEBOOK_APP_SECRET}`);
        console.log(response.data);
        return response.data.is_valid;
    }
    
    const isAuthed = validateFBToken();
    

    return (
        <Route
            exact={exact}
            path={path}
            render={(props: RouteComponentProps) => 
            isAuthed ? (<Component {...props} />): (
                <Redirect 
                    to={{
                        pathname: '/login',
                        state: {
                            message,
                            requestedPath: path
                        }
                    }}
                />
            )}
        />
    );
}


export default AuthRoute;