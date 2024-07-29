import {
    ActivityIndicator,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React, {useContext} from 'react';
import {
    DrawerContentComponentProps,
    DrawerContentScrollView,
    DrawerItem,
} from '@react-navigation/drawer';

// Google authentication
import {
    AuthenticationContext,
    AuthenticationContextType,
} from '../contexts/authentication.tsx';
import {Image} from 'react-native';

const UserHeaderInfo: React.FC = () => {
    const {userDetail} = useContext(
        AuthenticationContext,
    ) as AuthenticationContextType;

    return (
        <>
            <Image
                source={{uri: 'no_profile_picture'}}
                referrerPolicy={'no-referrer'}
                style={styles.userProfileImage}
            />
            <Text style={{...styles.drawerHeaderInfoText}}>
                {userDetail?.user.givenName}
            </Text>
        </>
    );
};

const NotLoggedInHeaderInfo: React.FC = () => {
    return (
        <>
            <Image
                source={{uri: 'no_profile_picture'}}
                referrerPolicy={'no-referrer'}
                style={{...styles.userProfileImage, alignSelf: 'flex-start'}}
            />
            <Text style={{...styles.drawerHeaderInfoText}}>Not Logged In</Text>
        </>
    );
};

const DrawerHeader: React.FC = () => {
    const {loggedIn, authProcessing, userDetail, googleSignIn, googleSignOut} =
        useContext(AuthenticationContext) as AuthenticationContextType;

    return (
        <View style={styles.drawerHeaderOuterView}>
            <View style={styles.drawerHeaderInfo}>
                {userDetail && loggedIn ? (
                    <UserHeaderInfo />
                ) : (
                    <NotLoggedInHeaderInfo />
                )}
            </View>
            <TouchableHighlight
                style={styles.drawerButton}
                underlayColor={'lightblue'}
                activeOpacity={0.7}
                onPress={loggedIn ? googleSignOut : googleSignIn}>
                {authProcessing ? (
                    <ActivityIndicator />
                ) : (
                    <Icon
                        style={styles.drawerButtonIcon}
                        name={loggedIn ? 'logout' : 'login-variant'}
                    />
                )}
            </TouchableHighlight>
        </View>
    );
};

export const CustomDrawerContent = (props: DrawerContentComponentProps) => {
    const {loggedIn} = useContext(
        AuthenticationContext,
    ) as AuthenticationContextType;

    const {navigation} = props;

    const openSettings = () => {
        navigation.navigate('Settings');
    };

    const openHome = () => {
        navigation.navigate('MainScreen');
    };

    const openPrivilegedScreen = () => {
        navigation.navigate('PrivilegedScreen');
    };

    return (
        <DrawerContentScrollView {...props}>
            <DrawerHeader />
            <DrawerItem
                label="Home"
                onPress={openHome}
                labelStyle={styles.drawerItemLabel}
                style={styles.drawerItem}
                icon={() => {
                    return <Icon name={'home'} style={{color: 'blue', fontSize: 36}} />;
                }}
            />
            {loggedIn && (
                <DrawerItem
                    label="Privileged Screen"
                    onPress={openPrivilegedScreen}
                    labelStyle={styles.drawerItemLabel}
                    style={styles.drawerItem}
                    icon={() => {
                        return (
                            <Icon
                                name={'account-lock'}
                                style={{color: 'green', fontSize: 36}}
                            />
                        );
                    }}
                />
            )}
            <DrawerItem
                label="Settings"
                onPress={openSettings}
                labelStyle={styles.drawerItemLabel}
                style={{...styles.drawerItem}}
                icon={() => {
                    return (
                        <Icon
                            name={'cog-outline'}
                            style={{color: 'red', fontSize: 36}}
                        />
                    );
                }}
            />
        </DrawerContentScrollView>
    );
};

const styles = StyleSheet.create({
    drawerHeaderOuterView: {
        flexDirection: 'row',
        width: '100%',
        borderBottomWidth: 3,
        borderBottomColor: 'lightgray',
        alignContent: 'center',
    },
    drawerHeader: {
        flex: 1,
        fontSize: 20,
        fontWeight: 'bold',
        padding: 10,
        color: 'black',
        alignItems: 'center',
    },
    drawerHeaderInfo: {
        flex: 1,
        padding: 5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderColor: 'red',
        borderWidth: 1,
        alignSelf: 'flex-start',
        marginHorizontal: 5,
    },
    drawerHeaderInfoText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginHorizontal: 5,
        color: 'black',
        textAlignVertical: 'center',
    },
    drawerButton: {
        height: 48,
        width: 48,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 8,
    },
    drawerButtonIcon: {
        color: 'blue',
        fontSize: 32,
        textAlign: 'center',
    },
    drawerItem: {},
    drawerItemLabel: {
        marginLeft: -20,
        fontSize: 20,
        fontWeight: 'bold',
    },
    userProfileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
});
