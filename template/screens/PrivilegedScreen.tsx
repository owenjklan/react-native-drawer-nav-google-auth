import {StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import ScreenBase from './ScreenBase.tsx';

import {
    AuthenticationContext,
    AuthenticationContextType,
} from '../contexts/authentication.tsx';

const PrivilegedScreen: React.FC = () => {
    const {userDetail} = useContext(
        AuthenticationContext,
    ) as AuthenticationContextType;

    return (
        <ScreenBase>
            <View>
                <Text
                    style={{
                        ...styles.basicText,
                        fontSize: 28,
                        padding: 5,
                        textAlign: 'justify',
                    }}>
                    This screen is only visible in the navigation drawer when a
                    user is logged in.
                </Text>
                <View style={styles.rowView}>
                    <Text style={styles.infoLabel}>Given Name</Text>
                    <Text style={styles.infoText}>
                        {userDetail?.user.givenName}
                    </Text>
                </View>
                <View style={styles.rowView}>
                    <Text style={styles.infoLabel}>Family Name</Text>
                    <Text style={styles.infoText}>
                        {userDetail?.user.familyName}
                    </Text>
                </View>
                <View style={styles.rowView}>
                    <Text style={styles.infoLabel}>Full Name</Text>
                    <Text style={styles.infoText}>{userDetail?.user.name}</Text>
                </View>
                <View style={styles.rowView}>
                    <Text style={styles.infoLabel}>Email</Text>
                    <Text style={styles.infoText}>
                        {userDetail?.user.email}
                    </Text>
                </View>
            </View>
        </ScreenBase>
    );
};

const styles = StyleSheet.create({
    rowView: {
        flexDirection: 'row',
        // paddingVertical: 3,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        borderTopWidth: 1,
        borderBottomWidth: 1,
    },
    infoLabel: {
        padding: 3,
        paddingRight: 10,
        minWidth: '30%',
        textAlign: 'right',
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        marginHorizontal: 5,
        borderRightWidth: 1,
        borderRightColor: 'black',
    },
    infoText: {
        fontSize: 16,
        color: 'black',
        paddingLeft: 20,
    },
    basicText: {
        fontSize: 20,
        color: 'black',
    },
    largeButtonRow: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    buttonsStyle: {
        backgroundColor: 'lightgoldenrodyellow',
        marginHorizontal: 10,
    },
    buttonsLabels: {
        color: 'black',
        fontSize: 20,
        // fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonsIcons: {
        color: 'lightblue',
    },
    dummySection: {
        backgroundColor: '#2d2',
        padding: 10,
    },
});

export default PrivilegedScreen;
