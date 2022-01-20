import React from 'react';
import {
    View, Text, StyleSheet, TouchableOpacity, Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Feather } from '@expo/vector-icons';

export default function MemoList() {
    const navigation = useNavigation() ;
    return (
        <View>
            <TouchableOpacity
                style={styles.memoListItem}
                onPress={() => { navigation.navigate('MemoDetail'); }}
            >
                <View>
                    <Text style={styles.memoListTitle}>買い物リスト</Text>
                    <Text style={styles.memoListDate}>2022年1月17日 10:00</Text>
                </View>
                <TouchableOpacity
                    style={styles.memoDelete}
                    onPress={() => { Alert.alert('Are you sure?'); }}
                >
                <Feather name="x" size={16} color={"#FFC6F2"}/>
                </TouchableOpacity>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.memoListItem}
                onPress={() => { navigation.navigate('MemoDetail'); }}
            >
                <View>
                    <Text style={styles.memoListTitle}>買い物リスト</Text>
                    <Text style={styles.memoListDate}>2022年1月17日 10:00</Text>
                </View>
                <TouchableOpacity
                    style={styles.memoDelete}
                    onPress={() => { Alert.alert('Are you sure?'); }}
                >
                <Feather name="x" size={16} color={"#FFC6F2"}/>
                </TouchableOpacity>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.memoListItem}
                onPress={() => { navigation.navigate('MemoDetail'); }}
            >
                <View>
                    <Text style={styles.memoListTitle}>買い物リスト</Text>
                    <Text style={styles.memoListDate}>2022年1月17日 10:00</Text>
                </View>
                <TouchableOpacity
                    style={styles.memoDelete}
                    onPress={() => { Alert.alert('Are you sure?'); }}
                >
                <Feather name="x" size={16} color={"#FFC6F2"}/>
                </TouchableOpacity>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    memoListItem:{
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 19,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: 'rgba(0, 0, 0, 0.15)',
    },
    memoListTitle: {
        fontSize: 16,
        lineHeight: 32,
    },
    memoListDate: {
        fontSize: 12,
        lineHeight: 16,
        color: '#848484',
    },
    memoDelete: {
        padding: 8,
    },
});
