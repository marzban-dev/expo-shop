import { Button, View, YStack } from "tamagui";
import { Plus } from "@tamagui/lucide-icons";
import { router } from "expo-router";
import BankCard from "@/components/BankCard";
import { useMemo } from "react";
import { ScrollView } from "react-native";
import Bank2 from "@/assets/images/bank-pasargad.svg"
import Bank1 from "@/assets/images/bank-maskan.svg"

export default function Index() {

    const cards = [
        {
            hue: "25",
            title: "Mansour Marzban1",
            number: "6280-2313-2546-9558",
            logo: Bank1,
            date: "04/11"
        },
        {
            hue: "45",
            title: "Mansour Marzban2",
            number: "6280-2313-2546-9558",
            logo: Bank2,
            date: "04/11"
        },
        {
            hue: "45",
            title: "Mansour Marzban3",
            number: "6280-2313-2546-9558",
            logo: Bank2,
            date: "04/11"
        }
    ];

    const renderCards = useMemo(() => {
        return cards.map((card) => {
            return (
                <BankCard
                    key={card.title}
                    colorHue={card.hue}
                    title={card.title}
                    cardNumber={card.number}
                    logo={card.logo}
                    date={card.date}
                />
            );
        });
    }, []);

    return (
        <View
            style={{
                height: "100%"
            }}
        >
            <ScrollView>
                <YStack gap="$5" padding="$5">
                    {renderCards}
                </YStack>
            </ScrollView>
            <Button
                elevation="$5"
                onPress={() => {
                    router.push("/cards/create");
                }}
                style={{
                    position: "absolute",
                    bottom: 30,
                    right: 20
                }}
                animation="fast"
                pressStyle={{
                    scale: 0.9
                }}
                size="$6"
                scaleIcon={1.5}
                icon={Plus}
                circular
            />
        </View>
    );
}

