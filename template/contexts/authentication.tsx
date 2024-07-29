import React from 'react';

import {createContext, ReactNode, useEffect, useState} from 'react';
import {
    GoogleSignin,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import {Alert, ToastAndroid} from 'react-native';
import {User} from '@react-native-google-signin/google-signin';

export type AuthenticationContextType = {
    loggedIn: boolean;
    apiToken?: string | null;
    authProcessing: boolean;
    userDetail?: User | null;
    googleSignIn: () => void;
    googleSignOut: () => void;
};

export const AuthenticationContext =
    createContext<AuthenticationContextType | null>(null);

const AuthenticationProvider: React.FC<{children: ReactNode}> = ({
    children,
}) => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [authProcessing, setAuthProcessing] = useState(false);
    const [apiToken, setApiToken] = useState<string | null>(null);
    const [userDetail, setUserDetail] = useState<User | null>(null);
    // const [userPhoto, setUserPhoto] = useState<string | null>(null);

    useEffect(() => {
        GoogleSignin.configure({
            webClientId:
                '798418257246-m52prodat32jgs1njat8naqoed54vdve.apps.googleusercontent.com',
            offlineAccess: true,
        });
    }, []);

    const googleSignIn = async () => {
        try {
            setAuthProcessing(true);
            await GoogleSignin.hasPlayServices();
            await GoogleSignin.signIn().then((result) => {
                console.log(result);
                setAuthProcessing(false);

                // const userDetails = result.user;
                setUserDetail(result);
                setApiToken(result.idToken);
                setLoggedIn(true);
            });
        } catch (error) {
            // The ts-ignore directives are to silence suggestions to flip the logic in our
            // if-else-if block. We don't want that. Stop asking!
            // @ts-ignore
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
                ToastAndroid.show('Login cancelled.', ToastAndroid.SHORT);
                // @ts-ignore
            } else if (error.code === statusCodes.IN_PROGRESS) {
                ToastAndroid.show('Login cancelled.', ToastAndroid.SHORT);
                // @ts-ignore
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                Alert.alert('Google play services not available or outdated !');
                // play services not available or outdated
            } else {
                console.log(error);
            }
            setAuthProcessing(false);
        }
    };

    const googleSignOut = async () => {
        try {
            setAuthProcessing(true);
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            setAuthProcessing(false);
            setLoggedIn(false);
            ToastAndroid.show('Logout successful.', ToastAndroid.SHORT);
        } catch (error) {
            setAuthProcessing(false);
            Alert.alert(
                'Logout Failed!',
                'There was an error with logging out!',
            );
        }
    };

    return (
        <AuthenticationContext.Provider
            value={{
                loggedIn,
                apiToken,
                userDetail,
                authProcessing,
                googleSignIn,
                googleSignOut,
            }}>
            {children}
        </AuthenticationContext.Provider>
    );
};

export default AuthenticationProvider;
