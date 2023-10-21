import React, { useContext } from "react";
import {
    View,
    StyleSheet,
    Text,
    SafeAreaView,
    Image,
    ScrollView,
} from "react-native";
import FitnessCards from "../components/FitnessCards";
import { FitnessItems } from "../context/Context";

const HomeScreen = () => {
    const { workout, calories, minutes } = useContext(FitnessItems);
    return (
        <ScrollView style={{ marginTop: 52 }}>
            <View
                style={{
                    backgroundColor: "#CD853F",
                    padding: 10,
                    height: 200,
                    width: "100%",
                }}
            >
                <Text
                    style={{ color: "white", fontWeight: "bold", fontSize: 18 }}
                >
                    Home Workout
                </Text>

                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: 20,
                    }}
                >
                    <View>
                        <Text
                            style={{
                                textAlign: "center",
                                fontWeight: "bold",
                                color: "white",
                                fontSize: 18,
                            }}
                        >
                            {workout}
                        </Text>
                        <Text
                            style={{
                                color: "#D0D0D0",
                                fontSize: 17,
                                marginTop: 6,
                            }}
                        >
                            WORKOUTS
                        </Text>
                    </View>
                    <View>
                        <Text
                            style={{
                                textAlign: "center",
                                fontWeight: "bold",
                                color: "white",
                                fontSize: 18,
                            }}
                        >
                            {calories}
                        </Text>

                        <Text
                            style={{
                                color: "#D0D0D0",
                                fontSize: 17,
                                marginTop: 6,
                            }}
                        >
                            KCAL
                        </Text>
                    </View>
                    <View>
                        <Text
                            style={{
                                textAlign: "center",
                                fontWeight: "bold",
                                color: "white",
                                fontSize: 18,
                            }}
                        >
                            {minutes}
                        </Text>

                        <Text
                            style={{
                                color: "#D0D0D0",
                                fontSize: 17,
                                marginTop: 6,
                            }}
                        >
                            MINS
                        </Text>
                    </View>
                </View>
                <View
                    style={{ justifyContent: "cneter", alignItems: "center" }}
                >
                    <Image
                        source={{
                            url: "data:image/jpeg;base64,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",
                        }}
                        style={{
                            width: "90%",
                            height: 120,
                            marginTop: 20,
                            borderRadius: 7,
                        }}
                    />
                </View>
                <FitnessCards />
            </View>
        </ScrollView>
    );
};
export default HomeScreen;
