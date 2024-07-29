import {StyleSheet, View} from 'react-native';
import React, {useContext} from 'react';
import ScreenBase from './ScreenBase.tsx';
import {
    ConfigurationContext,
    ConfigurationContextType,
} from '../contexts/configuration.tsx';
import SettingsEntryField from '../components/SettingsEntryField.tsx';
import SettingsEntryFlag from '../components/SettingsEntryFlag.tsx';

const SettingsScreen: React.FC = () => {
    const {dummyValue, dummyFlag, updateDummyValue, updateDummyFlag} =
        useContext(ConfigurationContext) as ConfigurationContextType;

    return (
        <ScreenBase>
            <View style={styles.outerView}>
                <SettingsEntryField
                    name="dummyValue"
                    label="Dummy Value"
                    hintText="This is an example of a text-based settings value."
                    defaultText={dummyValue.toString()}
                    onChange={updateDummyValue}
                />
                <SettingsEntryFlag
                    name="dummyFlag"
                    label="Display Dummy Section"
                    hintText="Toggle Dummy Section on Main Screen"
                    defaultValue={dummyFlag}
                    onChange={updateDummyFlag}
                />
            </View>
        </ScreenBase>
    );
};

const styles = StyleSheet.create({
    outerView: {},
});

export default SettingsScreen;
