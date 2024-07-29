import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect} from 'react';
import ScreenBase from './ScreenBase.tsx';
import {
    ConfigurationContext,
    ConfigurationContextType,
} from '../contexts/configuration.tsx';
import LargeIconButton from '../components/LargeIconButton.tsx';

const MainScreen: React.FC = () => {
    const {configurationLoaded, loadConfiguration, dummyFlag, dummyValue} =
        useContext(ConfigurationContext) as ConfigurationContextType;

    useEffect(() => {
        loadConfiguration();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const buttonOnePressed = () => {
        Alert.alert('Button pressed', 'You pressed the first button.');
    };

    const buttonTwoPressed = () => {
        Alert.alert('Button pressed', 'You pressed the second button.');
    };

    return (
        <ScreenBase>
            <View style={styles.largeButtonRow}>
                <LargeIconButton
                    onPress={buttonOnePressed}
                    iconName={'view-gallery'}
                    style={styles.buttonsStyle}
                    iconStyle={styles.buttonsIcons}
                    label={'First\nButton'}
                    labelStyle={styles.buttonsLabels}
                />
                <LargeIconButton
                    onPress={buttonTwoPressed}
                    iconName={'camera-image'}
                    style={styles.buttonsStyle}
                    iconStyle={styles.buttonsIcons}
                    label={'Second\nButton'}
                    labelStyle={styles.buttonsLabels}
                />
            </View>
            {configurationLoaded && (
                <View>
                    <Text style={{...styles.basicText, paddingVertical: 10}}>
                        Configuration has been loaded
                    </Text>
                </View>
            )}
            {dummyFlag && (
                <View style={styles.dummySection}>
                    <Text
                        style={{
                            ...styles.basicText,
                            textAlign: 'center',
                            fontWeight: 'bold',
                        }}>
                        This section can be toggled in settings.
                    </Text>
                    <Text style={styles.basicText}>
                        The dummyValue is: {dummyValue}
                    </Text>
                </View>
            )}
        </ScreenBase>
    );
};

const styles = StyleSheet.create({
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

export default MainScreen;
