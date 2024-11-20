import { Text, XStack, YStack } from "tamagui";
import { Image } from "expo-image";
import IconWallet from "@/assets/icons/Wallet.svg";

const StatusBar = () => {
    return (
        <XStack
            padding="$4"
            alignItems="center"
            justifyContent="space-between"
            backgroundColor="white"
        >
            <YStack gap="$2">
                <Text fontWeight="500" fontSize={14} color="$color.inkLighter">
                    Your Location
                </Text>
                <Text fontWeight="600" fontSize={13} color="$color.inkLight">
                    2464 Royal Ln. Mesa
                </Text>
            </YStack>

            <XStack
                paddingVertical="$2"
                paddingHorizontal="$3"
                alignItems="center"
                gap="$1.5"
                borderRadius="$20"
                backgroundColor="$color.cyanTint40"
            >
                <Image
                    contentFit="cover"
                    source={IconWallet}
                    style={{
                        width: 20,
                        height: 20
                    }}
                />
                <Text
                    marginBottom={1
                }
                    fontSize="$4"
                    fontWeight="600"
                    color="$color.cyanPrimary"
                >
                    $230
                </Text>
            </XStack>
        </XStack>
    );
};

export default StatusBar;