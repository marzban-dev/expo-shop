import { Text, View, XStack } from "tamagui";
import { LinearGradient } from "@tamagui/linear-gradient";
import { Image } from "expo-image";
import Svg, { Path } from "react-native-svg";
import { useMemo } from "react";

type Props = {
    colorHue: string;
    title: string;
    cardNumber: string;
    logo: string;
    date: string;
}

const BankCard = ({ cardNumber, date, logo, title, colorHue }: Props) => {

    const renderCardNumber = useMemo(() => {
        return (
            cardNumber.split("-").map(section => {
                return (
                    <Text fontWeight="300" fontSize="$4.5">
                        {section}
                    </Text>
                );
            })
        );
    }, [cardNumber]);

    return (
        <View
            overflow="hidden"
            animation="fast"
            pressStyle={{
                scale : 0.9
            }}
            style={{
                overflow: "hidden"
            }}
        >
            <LinearGradient
                padding="$4"
                width="full"
                height="fit"
                minHeight="$15"
                borderRadius="$6"
                colors={[
                    `hsl(${colorHue},100%,35%)`,
                    `hsl(${colorHue},100%,10%)`
                ]}
                start={[1, 0]}
                end={[0, 0]}
                justifyContent="space-between"
            >
                <Image
                    style={{
                        width: 35,
                        height: 35
                    }}
                    source={logo}
                    contentFit="cover"
                    transition={500}
                />
                <XStack
                    style={{ zIndex: 10 }}
                    gap="$4"
                    justifyContent="space-between"
                    marginTop="$5"
                >
                    {renderCardNumber}
                </XStack>
                <XStack
                    style={{ zIndex: 10 }}
                    alignItems="center"
                    justifyContent="space-between"
                    opacity={0.75}
                >
                    <Text fontWeight="300">
                        {title}
                    </Text>
                    <Text fontWeight="300" letterSpacing="$1">
                        {date}
                    </Text>
                </XStack>

                <Svg style={{
                    position: "absolute",
                    right: 0,
                    bottom: -10,
                    transform: [{ rotate: "-30deg" }, { scale: 4 }]
                }} viewBox="0 0 1440 320">
                    <Path fill={`hsla(0, 0%, 0%, 0.15)`} fill-opacity="1"
                          d="M0,256L30,256C60,256,120,256,180,234.7C240,213,300,171,360,165.3C420,160,480,192,540,197.3C600,203,660,181,720,154.7C780,128,840,96,900,112C960,128,1020,192,1080,208C1140,224,1200,192,1260,176C1320,160,1380,160,1410,160L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></Path>
                </Svg>

                <Svg style={{
                    position: "absolute",
                    right: 0,
                    bottom: -10,
                    transform: [{ rotate: "-30deg" }, { scale: 4 }, { translateY: 10 }]
                }} viewBox="0 0 1440 320">
                    <Path fill={`hsla(0, 0%, 0%, 0.15)`} fill-opacity="1"
                          d="M0,256L30,256C60,256,120,256,180,234.7C240,213,300,171,360,165.3C420,160,480,192,540,197.3C600,203,660,181,720,154.7C780,128,840,96,900,112C960,128,1020,192,1080,208C1140,224,1200,192,1260,176C1320,160,1380,160,1410,160L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></Path>
                </Svg>

                <Svg style={{
                    position: "absolute",
                    right: 0,
                    bottom: -10,
                    transform: [{ rotate: "-30deg" }, { scale: 4 }, { translateY: 20 }]
                }} viewBox="0 0 1440 320">
                    <Path fill={`hsla(0, 0%, 0%, 0.15)`} fill-opacity="1"
                          d="M0,256L30,256C60,256,120,256,180,234.7C240,213,300,171,360,165.3C420,160,480,192,540,197.3C600,203,660,181,720,154.7C780,128,840,96,900,112C960,128,1020,192,1080,208C1140,224,1200,192,1260,176C1320,160,1380,160,1410,160L1440,160L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></Path>
                </Svg>

            </LinearGradient>
        </View>
    );
};

export default BankCard;