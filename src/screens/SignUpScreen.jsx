import { bold, styles } from 'ansi-colors';
import React from 'react';
import {
     View,  StyleSheet, TextInput, Text, TouchableOpacity
} from 'react-native';

import Button from '../components/Button';

export default function SignUpScreen(props) {
    const { navigation } = props;
    return (
        <View style={Styles.container}>
            <View style={Styles.inner}>
                <Text style={Styles.title}>Sign Up</Text>
                <TextInput style={Styles.input} value="Email Address" />
                <TextInput style={Styles.input} value="Password" />
                <Button
                    label="submit"
                    onPress={() => {
                        navigation.reset({
                        index: 0,
                        routes: [{ name: 'MemoList'}],
                        })
                    }}
                />
                <View style={Styles.footer}>
                    <Text style={Styles.footerText}>Already registered?</Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.reset({
                                index: 0,
                                  routes: [{ name:'LogIn'}],
                            });
                         }}
                    >
                        <Text style={Styles.footerLink}>Log In.</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    );
}

const Styles =StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFCFD',
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
