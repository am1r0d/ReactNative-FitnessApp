import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import fitness from "../data/fitness";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const FitnessCards = () => {
    const FitnessData = fitness;

    return (
        <View>
            {FitnessData.map((item, key) => (
                <Pressable
                    style={{
                        alignItems: "center",
                        justifyContent: "cneter",
                        margin: 10,
                    }}
                    key={key}
                >
                    <Image
                        style={{
                            width: "95%",
                            height: 140,
                            borderRadius: 7 * 4,
                        }}
                        source={{ uri: item.image }}
                    />
                    <Text
                        style={{
                            position: "absolute",
                            color: "white",
                            fontSize: 16,
                            fontWeight: "bold",
                            left: 20,
                            top: 20,
                        }}
                    >
                        {item.name}
                    </Text>
                    <MaterialCommunityIcons
                        style={{
                            position: "absolute",
                            color: "white",
                            bottom: 15,
                            left: 20,
                        }}
                        name="lightning-bolt"
                        size={24}
                        color="black"
                    />
                </Pressable>
            ))}
        </View>
    );
};
export default FitnessCards;
