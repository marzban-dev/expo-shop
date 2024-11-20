import { View, XStack, YStack } from "tamagui";
import StatusBar from "@/components/home/StatusBar";
import SearchBox from "@/components/home/SearchBox";
import ItemsStack from "@/components/ItemsStack";
import PromotionSlider from "@/components/home/PromotionSlider";
import useProducts from "@/hooks/api/useProducts";

export default function Index() {
    const { data } = useProducts();

    return (
        <View>
            <StatusBar />
            <YStack gap={30} paddingTop="$5">
                <View paddingHorizontal="$5">
                    <SearchBox />
                </View>
                <PromotionSlider />
                <ItemsStack />
            </YStack>
        </View>
    );
}
