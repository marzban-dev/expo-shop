import { Button, Text, View, XStack, YStack } from "tamagui";
import CustomIcon from "@/components/CustomIcon";
import TestImg from "@/assets/images/test-category.png";
import { Image } from "expo-image";

const FoodCard = () => {
    return (
        <View
            paddingTop={40}
        >
            <View
                position="relative"
                width={150}
                height={148}
            >
                <Image
                    source={TestImg}
                    contentFit="cover"
                    style={{
                        zIndex: 10,
                        top: -60,
                        left: "50%",
                        transform: [{ translateX: "-50%" }],
                        position: "absolute",
                        width: 125,
                        height: 125
                    }}
                />
                <View
                    borderRadius={10}
                    width="100%"
                    height="100%"
                    backgroundColor="white"
                    shadowRadius={2}
                    shadowColor="black"
                    shadowOpacity={0.06}
                    padding="$3"
                >
                    <YStack
                        flex={1}
                        justifyContent="flex-end"
                        gap="$2.5"
                    >
                        <YStack gap={6}>
                            <Text
                                color="$color.inkLight"
                                fontSize={16}
                                fontWeight="500"
                            >
                                Breakfast
                            </Text>
                            <Text
                                color="$color.inkLightest"
                                fontSize={13}
                            >
                                30+ menu
                            </Text>
                        </YStack>
                        <XStack alignItems="center" justifyContent="space-between">
                            <XStack alignItems="flex-end" gap={6}>
                                <Text
                                    color="$color.inkLighter"
                                    fontSize={12}
                                    lineHeight={18}
                                >
                                    From
                                </Text>
                                <Text
                                    fontSize={17}
                                    fontWeight="600"
                                    color="$color.ink"
                                >
                                    $20
                                </Text>
                            </XStack>
                            <Button
                                borderRadius={10}
                                size={32}
                                circular
                                icon={<CustomIcon size={20} icon="chevron-right-white" />}
                            />
                        </XStack>
                    </YStack>
                </View>
            </View>
        </View>
    );
};

export default FoodCard;