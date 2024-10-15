import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

function HomeScreen() {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <TouchableOpacity
             onPress={() => navigation.navigate('Details', {
                item: 86,
                otherParam: 'Parámetros de pantalla Home'
             })}>
                <Text>Press Here</Text>
            </TouchableOpacity>
        </View>
    );
}

export default HomeScreen;
