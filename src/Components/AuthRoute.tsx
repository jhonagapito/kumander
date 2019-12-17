import React from 'react';
import { RouteComponentProps, Route, Redirect } from 'react-router-dom';

interface Props {
    Component: React.FC<RouteComponentProps>;
    path: string;
    exact?:boolean
}

const AuthRoute = ({Component, path, exact = false} : Props) : JSX.Element => {
    const isAuthed = !!localStorage.getItem('kumander_token');
    const message = "Please log in to view this page";
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