import React from 'react';
import {StyleSheet, Switch, Text, TextInput, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {SettingsEntryFlagProps} from '../types/settings-types.tsx';

//
// type OnPressCallback = (event: any) => void;
// type OnHostnameChangeCallback = (hostname: string) => void;

const SettingsEntryFlag: React.FC<SettingsEntryFlagProps> = ({
    name,
    label,
    onChange,
    defaultValue,
    hintText,
}) => {
    return (
        <View style={styles.mainView}>
            <View style={styles.rowView}>
                <Text style={styles.label}>{label}</Text>
                <Switch
                    value={defaultValue}
                    onValueChange={onChange}
                    trackColor={{
                        false: '#767577',
                        true: '#087708',
                    }}
                    thumbColor={defaultValue ? '#15dd1b' : '#f4f3f4'}></Switch>
            </View>
            <Text style={styles.hintText}>
                {hintText === undefined ? '' : hintText}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    mainView: {
        padding: 5,
    },
    rowView: {
        paddingHorizontal: 25,
        flexDirection: 'row',
    },
    label: {
        margin: 5,
        fontSize: 20,
        color: Colors.black,
    },
    textInput: {
        margin: 5,
        marginTop: 3,
        marginBottom: 2,
        padding: 5,
        backgroundColor: Colors.white,
        color: Colors.black,
        fontSize: 16,
        borderRadius: 3,
        flexGrow: 1,
    },
    hintText: {
        fontSize: 14,
        color: '#444',
        // marginLeft: 25,
        // marginTop: 3,
        marginBottom: 5,
        textAlign: 'center',
    },
});

export default SettingsEntryFlag;
