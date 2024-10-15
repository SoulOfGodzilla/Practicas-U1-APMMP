import React from "react";
import { View, Text, Button } from "react-native"; 

function MainScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Main Screen</Text>
            <Button title="Go to Details" onPress={() => navigation.navigate('Details')} />
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        </View>
    );
}

export default MainScreen;
