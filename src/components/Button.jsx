import { styles } from 'ansi-colors';
import { func, string } from 'prop-types';
import React from 'react';
import { TouchableOpacity,  StyleSheet,  Text,} from 'react-native';

export default function Button(props) {
    const { label,onPress } = props;
    return (
        <TouchableOpacity style={Styles.buttonContainer} onPress={onPress}>
            <Text style={Styles.buttonLabel}>{label}</Text>
        </TouchableOpacity>
    );
}

Button.prototype ={
    label: string.isRequired,
    onPress: func,
};

Button.defaultProps = {
    onPress: null,
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
