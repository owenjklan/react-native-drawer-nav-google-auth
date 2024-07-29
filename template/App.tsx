/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import './gesture-handler.native';

import React from 'react';

// Navigation imports
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

// Contexts
import ConfigurationProvider from './contexts/configuration.tsx';

// Screen components
import MainScreen from './screens/MainScreen.tsx';
import SettingsScreen from './screens/SettingsScreen.tsx';
import AuthenticationProvider from './contexts/authentication.tsx';
import {CustomDrawerContent} from './components/CustomDrawer.tsx';
import PrivilegedScreen from './screens/PrivilegedScreen.tsx';

const Drawer = createDrawerNavigator();

function App(): React.JSX.Element {
    return (
        <NavigationContainer>
            <ConfigurationProvider>
                <AuthenticationProvider>
                    <Drawer.Navigator
                        initialRouteName="MainScreen"
                        drawerContent={(props) => (
                            <CustomDrawerContent {...props} />
                        )}>
                        <Drawer.Screen
                            name="MainScreen"
                            options={{title: 'Auth Example'}}
                            component={MainScreen}
                        />
                        <Drawer.Screen
                            name="PrivilegedScreen"
                            options={{title: 'Privileged Screen'}}
                            component={PrivilegedScreen}
                        />
                        <Drawer.Screen
                            name="Settings"
                            options={{
                                title: 'Settings',
                                headerShown: true,
                            }}
                            component={SettingsScreen}
                        />
                    </Drawer.Navigator>
                </AuthenticationProvider>
            </ConfigurationProvider>
        </NavigationContainer>
    );
}

// const styles = StyleSheet.create({});

export default App;
