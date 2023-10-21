import React, { useState, useEffect } from "react";
import { Image, SafeAreaView, Pressable, View, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

const RestScreen = () => {
    const navigation = useNavigation();

    let timer = 0;
    const [timeLeft, setTimeLeft] = useState(3);
    const startTime = () => {
        setTimeout(() => {
            if (timeLeft <= 0) {
                navigation.goBack();
                clearTimeout(timer);
            }
            setTimeLeft(timeLeft - 1);
        }, 1000);
    };
    useEffect(() => {
        startTime();
        // clean up
        return () => clearTimeout(timer);
    });
    return (
        <SafeAreaView>
            <Image
                source={{
                    uri: "https://static2.bigstockphoto.com/1/7/4/large1500/471310617.jpg",
                }}
                style={{ width: "100%", height: 420 }}
            />
            <Text
                style={{
                    fontSize: 30,
                    fontWeight: "900",
                    marginTop: 50,
                    textAlign: "center",
                }}
            >
                TAKE A BREKE
            </Text>
            <Text
                style={{
                    fontSize: 40,
                    fontWeight: "800",
                    marginTop: 50,
                    textAlign: "center",
                }}
            >
                {timeLeft}
            </Text>
        </SafeAreaView>
    );
};
export default RestScreen;
