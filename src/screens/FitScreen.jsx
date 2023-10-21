import React, { useState } from "react";
import { Image, SafeAreaView, Pressable, View, Text } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

const FitScreen = () => {
    const route = useRoute();
    console.log(route.params);

    const [index, setIndex] = useState(0);
    const excersise = route.params.excersises;
    const current = excersise[index];
    console.log(current, "first excersise");
    return (
        <SafeAreaView>
            <Image
                source={{ uri: current.image }}
                style={{ width: "100%", height: 370 }}
            />
            <Text
                style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: 30,
                    fontSize: 30,
                    fontWeight: "bold",
                }}
            >
                {current.name}
            </Text>
            <Text
                style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: 30,
                    fontSize: 38,
                    fontWeight: "bold",
                }}
            >
                x{current.sets}
            </Text>
            <Pressable
                style={{
                    backgroundColor: "#0066CC",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: 30,
                    borderRadius: 20,
                    padding: 10,
                    width: 150,
                }}
            >
                <Text
                    style={{
                        textAlign: "center",
                        fontWeight: "bold",
                        fontSize: 20,
                        color: "white",
                    }}
                >
                    Done
                </Text>
            </Pressable>
        </SafeAreaView>
    );
};
export default FitScreen;
