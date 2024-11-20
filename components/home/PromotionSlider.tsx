import { Text, View } from "tamagui";
import Carousel from "react-native-reanimated-carousel/src/Carousel";
import { Dimensions } from "react-native";
import SlideTestImage from "@/assets/images/slide-test.png";
import { Image } from "expo-image";
import { router } from "expo-router";

const data = [...new Array(6).keys()];
const width = Dimensions.get("window").width;

const PromotionSlider = () => {
    return (
        <View
            width="100%"
            height={150}
        >
            <Carousel
                width={width}
                height={150}
                data={data}
                renderItem={({ index }) => (
                    <View
                        onPress={() => {
                            router.push({
                                pathname: "/restaurant/[id]",
                                params: {
                                    id: 2,
                                    product: 45
                                }
                            });
                        }}
                        backgroundColor="$color.skyLighter"
                        style={{
                            overflow: "hidden",
                            flex: 1,
                            borderRadius: 10,
                            justifyContent: "center",
                            marginHorizontal: 24
                        }}
                    >
                        <Image
                            contentFit="contain"
                            source={SlideTestImage}
                            style={{
                                width: "100%",
                                height: "100%"
                            }}
                        />
                    </View>
                )}
            />
        </View>
    );
};

export default PromotionSlider;