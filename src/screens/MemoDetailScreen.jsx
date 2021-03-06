import { bold, styles } from 'ansi-colors';
import { func, shape } from 'prop-types';
import React from 'react';
import {
    View, ScrollView, Text, StyleSheet ,
} from 'react-native';

import CircleButton from '../components/CircleButton';

export default function MemoDetailScreen(props) {
    const { navigation } = props;
    return(
        <View style={Styles.container}>
            <View style={Styles.memoHeader}>
                <Text style={Styles.memoTitle}>買い物リスト</Text>
                <Text style={Styles.memoDate}>2022年1月17日10:00</Text>
            </View>
            <ScrollView style={Styles.memoBody}>
                <Text style={Styles.memoText}>
                    買い物リスト
                    書体やレイアウトなどを確認するために用います。
                </Text>
            </ScrollView>
            <CircleButton style={{ top: 60,bottom: 'auto' }}
            name="edit-2"
            onPress={() => { navigation.navigate('MemoEdit'); }}
            />
        </View>
    );
}

const Styles =StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    memoHeader: {
        backgroundColor: '#FFC6F2',
        height: 96,
        justifyContent: 'center',
        paddingVertical: 24,
        paddingHorizontal: 19,
    },
    memoTitle: {
        color: '#ffffff',
        fontSize: 20,
        lineHeight: 32,
        fontWeight: 'bold',
    },
    memoDate: {
        color: '#ffffff',
        fontSize: 12,
        lineHeight: 16,
    },
    memoBody: {
        paddingVertical: 32,
        paddingHorizontal: 27,
    },
    memoText:{
        fontSize: 16,
        lineHeight: 24,
    },
});
