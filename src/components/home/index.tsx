import React from "react"
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Linking,
    Text,
} from "react-native"

export default function HomeComponent() {
    const openUrl = async () => {
        await Linking.openURL("https://www.kelvinkamara.com")
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={openUrl}>
                <Text>
                    www.kelvinkamara.com
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
})