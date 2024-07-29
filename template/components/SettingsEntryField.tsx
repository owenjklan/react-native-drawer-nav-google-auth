import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {SettingsEntryFieldProps} from '../types/settings-types.tsx';

//
// type OnPressCallback = (event: any) => void;
// type OnHostnameChangeCallback = (hostname: string) => void;

const SettingsEntryField: React.FC<SettingsEntryFieldProps> = ({
    name,
    label,
    onChange,
    defaultText,
    hintText,
}) => {
    return (
        <View style={styles.mainView}>
            <View style={styles.rowView}>
                <Text style={styles.label}>{label}</Text>
                <TextInput
                    id={name}
                    style={styles.textInput}
                    onChangeText={onChange}
                    defaultValue={defaultText === undefined ? '' : defaultText}
                />
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
        color: Colors.black,
        fontSize: 20,
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
        marginBottom: 5,
        textAlign: 'center',
    },
});

export default SettingsEntryField;
