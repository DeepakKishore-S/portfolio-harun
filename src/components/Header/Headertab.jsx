import React from 'react';
import { View, Text } from "react-native";


const Header = () => {
    console.log("Harun");
    return (
        <View>
            <Image
                source={url('../assets/front-end-developer-1609x555.png')}
                style={{ width: '100%', height: 150 }}
            />
            <Icon name="md-close"
                style={{
                    position: 'absolute',
                    right: 5,
                    top: 5,
                }} />
        </View>

    );
}

export default Header;