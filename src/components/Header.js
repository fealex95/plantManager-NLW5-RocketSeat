import React from 'react'
import { StyleSheet, Text, Image, View, Platform } from 'react-native'
import colors from '../styles/colors'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import userImg from '../assets/UserImg.png'
import fonts from '../styles/fonts'

export function Header() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.greeting}>Olá, </Text>
                <Text style={styles.userName}>Felipe </Text>
            </View>

            <Image style={styles.image} source={userImg} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        marginTop: getStatusBarHeight(),

    },

    image: {
        width: 80,
        height: 80,
        borderRadius: 40,
    },

    greeting: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.text,

    },

    userName: {
        fontSize: 32,
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 40,
    }
})