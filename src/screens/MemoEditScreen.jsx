import { styles } from 'ansi-colors';
import React from 'react';
import {
     View,  StyleSheet, TextInput,KeyboardAvoidingView,
} from 'react-native';

import AppBar from '../components/AppBar';
import CircleButton from '../components/CircleButton';

export default function MemoEditScreen() {
    return (
        <KeyboardAvoidingView style={Styles.container} behavior="height">
            <AppBar />
            <View style={Styles.inputContainer}>
                <TextInput value="買い物リスト" multiline style={Styles.input} />
            </View>
            <CircleButton name="check" />
        </KeyboardAvoidingView>
    );
}

const Styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inputContainer: {
        paddingHorizontal: 27,
        paddingVertical:32,
        flex: 1,
    },
    input:{
        flex: 1,
        textAlignVertical: 'top',
        fontSize: 16,
        lineHeight: 24,
    },
});