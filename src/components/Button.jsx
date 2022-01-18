import { styles } from 'ansi-colors';
import { string } from 'prop-types';
import React from 'react';
import { View,  StyleSheet,  Text,} from 'react-native';

export default function Button(props) {
    const { label } = props;
    return (
        <View style={Styles.buttonContainer}>
            <Text style={Styles.buttonLabel}>{label}</Text>
        </View>
    );
}

Button.prototype ={
    label: string.isRequired,
};

const Styles = StyleSheet.create({
    buttonContainer:{
        backgroundColor: '#FFC6F2',
        borderRadius: 4,
        alignSelf: 'flex-start',
        marginBottom: 24,
    },
    buttonLabel:{
        fontSize: 16,
        lineHeight: 32,
        paddingVertical: 8,
        paddingHorizontal: 32,
        color: '#ffffff',
    },
});
