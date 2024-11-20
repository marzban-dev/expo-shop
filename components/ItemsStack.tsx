import { XStack, YStack } from "tamagui";
import SectionTitle from "@/components/SectionTitle";
import FoodCard from "@/components/FoodCard";
import { ScrollView } from "react-native";

const ItemsStack = () => {
    return (
        <YStack gap={20}>
            <SectionTitle title="All Categories" />
            <ScrollView horizontal>
                <XStack
                    gap="$4"
                    paddingHorizontal="$5"
                    paddingBottom="$4"
                >
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                </XStack>
            </ScrollView>
        </YStack>
    );
};

export default ItemsStack;