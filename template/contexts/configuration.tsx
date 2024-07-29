import React from 'react';

import {createContext, ReactNode, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type ConfigurationContextType = {
    dummyValue: number;
    dummyFlag: boolean;
    updateDummyValue: (newDummyValue: string) => void;
    updateDummyFlag: (newDummyFlag: boolean) => void;

    configurationLoaded: boolean;
    loadConfiguration: () => void;
};

export const ConfigurationContext =
    createContext<ConfigurationContextType | null>(null);

const ConfigurationProvider: React.FC<{children: ReactNode}> = ({children}) => {
    const [configurationLoaded, setConfigurationLoaded] = useState(false);

    const [dummyValue, setDummyValue] = useState<number>(1);
    const [dummyFlag, updateDummyFlag] = useState<boolean>(true);

    const updateDummyValue = (newDummyValue: string) => {
        // Only update if we're provided a non-empty string.
        // The settings screen may call this legitimately with an empty string
        // when the user clears the contents of the input field.
        if (
            newDummyValue !== undefined &&
            newDummyValue !== null &&
            newDummyValue !== ''
        ) {
            try {
                setDummyValue(parseInt(newDummyValue, 10));
            } catch (e) {
                // It the event of bad data, fallback to 5
                setDummyValue(5);
            }
        }
    };

    const saveConfiguration = async () => {
        const storedConfiguration = {
            dummyValue: dummyValue,
            dummyFlag: dummyFlag,
        };
        const storedConfigurationJSON = JSON.stringify(
            storedConfiguration,
            null,
            4,
        );
        try {
            await AsyncStorage.setItem(
                'configuration',
                storedConfigurationJSON,
            );
            console.log('Saved configuration');
            console.log(storedConfigurationJSON);
        } catch (error) {
            console.log('Failed saving configuration data! Error:', error);
        }
    };

    const loadConfiguration = async () => {
        try {
            const result = await AsyncStorage.getItem('configuration');
            if (!result) {
                // Create default settings, save them and carry on
                // Load default configuration
                console.log('No configuration found. Saving default values.');
                updateDummyValue('5');
                updateDummyFlag(true);
            } else {
                const loadedSettings = JSON.parse(result);
                updateDummyValue(loadedSettings.dummyValue);
                updateDummyFlag(loadedSettings.dummyFlag);
            }
            setConfigurationLoaded(true);
        } catch (error) {
            console.log('Error loading settings at startup: ', error);
            // Load default configuration
            updateDummyValue('5');
            updateDummyFlag(true);
            setConfigurationLoaded(true); // This controls display of the hostname entry
        }
    };

    useEffect(() => {
        try {
            saveConfiguration();
        } catch (error) {
            console.log('Error saving configuration data! Error:', error);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dummyValue, dummyFlag]);

    return (
        <ConfigurationContext.Provider
            value={{
                dummyValue,
                dummyFlag,
                updateDummyValue,
                updateDummyFlag,
                configurationLoaded,
                loadConfiguration,
            }}>
            {children}
        </ConfigurationContext.Provider>
    );
};

export default ConfigurationProvider;
