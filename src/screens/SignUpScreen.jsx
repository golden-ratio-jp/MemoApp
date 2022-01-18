import { bold, styles } from 'ansi-colors';
import React from 'react';
import {
     View,  StyleSheet, TextInput, Text,
} from 'react-native';

import AppBar from '../components/AppBar';
import Button from '../components/Button';

export default function SignUpScreen() {
    return (
        <View style={Styles.container}>
            <AppBar />
            <View style={Styles.inner}>
                <Text style={Styles.title}>Sign Up</Text>
                <TextInput style={Styles.input} value="Email Address" />
                <TextInput style={Styles.input} value="Password" />
                <Button label="submit" />
                <View style={Styles.footer}>
                    <Text style={Styles.footerText}>Already registered?</Text>
                    <Text style={Styles.footerLink}>Log In.</Text>
                </View>
            </View>
        </View>
    );
}

const Styles =StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF1F8',
    },
    inner:{
        paddingHorizontal: 27,
        paddingVertical: 24,
    },
    title:{
        fontSize: 24,
        lineHeight: 32,
        fontWeight: 'bold',
        marginBottom: 24,
    },
    input:{
        fontSize: 16,
        height: 48,
        borderColor: '#DDDDDD',
        borderWidth: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 8,
        marginBottom: 16,
    },

    footerText:{
        fontSize: 14,
        lineHeight: 24,
        marginRight: 8,
    },
    footerLink:{
        fontSize: 14,
        lineHeight: 24,
        color: '#467FD3',
    },
    footer:{
        flexDirection: 'row',
    },

});
