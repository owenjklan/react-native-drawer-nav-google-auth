// The ScreenBase component acts as a common wrapper for screen components.
// Make common styling changes here for improved consistency.

import {
    Dimensions,
    ScrollView,
    StatusBar,
    StyleSheet,
    useColorScheme,
    View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import React from 'react';

type ScreenBaseProps = {
    children?: React.ReactNode;
};

const ScreenBase: React.FC<ScreenBaseProps> = ({children}) => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    return (
        <View
            style={{height: Dimensions.get('window').height, display: 'flex'}}>
            <StatusBar
                barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                backgroundColor={backgroundStyle.backgroundColor}
            />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                nestedScrollEnabled={true}
                style={styles.outerScrollView}>
                <View style={styles.outerView}>{children}</View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    topMostView: {
        height: '100%',
        display: 'flex',
    },
    outerScrollView: {
        backgroundColor: 'red',
        flex: 1,
    },
    outerView: {
        flex: 1,
        backgroundColor: 'cyan',
        marginHorizontal: 20,
        marginBottom: 0,
        padding: 3,
        // alignItems:
    },
});

export default ScreenBase;
