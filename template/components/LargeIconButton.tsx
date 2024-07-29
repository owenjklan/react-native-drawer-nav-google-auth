// The "IconXXXButton" components use <Icon> components, from
// https://static.enapter.com/rn/icons/material-community.html
import {StyleSheet, Text, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';

type OnPressCallback = (event: any) => void;

export type LargeIconButtonProps = {
    onPress: OnPressCallback;
    iconName: string;
    label?: string;
    style?: object;
    iconStyle?: object;
    labelStyle?: object;
    underlayColor?: string;
};

const LargeIconButton: React.FC<LargeIconButtonProps> = (props) => {
    const {
        onPress,
        iconName,
        style,
        iconStyle,
        label,
        labelStyle,
        underlayColor,
    } = props;

    return (
        <TouchableHighlight
            activeOpacity={0.8}
            underlayColor={underlayColor ? underlayColor : '#369'}
            style={[styles.iconButton, {...style}]}
            onPress={onPress}>
            <>
                <Icon
                    name={iconName}
                    style={[styles.vectorIcon, {...iconStyle}]}
                />
                {label && (
                    <Text style={[styles.iconLabel, {...labelStyle}]}>
                        {label}
                    </Text>
                )}
            </>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    iconButton: {
        width: 144,
        height: 144,
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 8,
        textAlign: 'center',
        alignItems: 'center',
    },
    iconLabel: {
        fontSize: 20,
    },
    vectorIcon: {
        alignSelf: 'center',
        padding: 3,
        margin: 3,
        // borderRadius: 4,
        // borderWidth: 1,
        // borderColor: 'black',
        fontSize: 72,
        color: 'black',
        textAlign: 'center',
        textAlignVertical: 'center',
        width: 'auto',
        height: 'auto',
    },
});

export default LargeIconButton;
