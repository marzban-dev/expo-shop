import { Sheet, Text, View } from "tamagui";
import { useLocalSearchParams } from "expo-router";
import { useMemo, useState } from "react";

const RestaurantScreen = () => {
    const { id, product } = useLocalSearchParams<{ id?: string, product?: string }>();
    const [position, setPosition] = useState(0)

    const showProductModal = useMemo(() => {
        return !!product;
    }, [product, id]);

    return (
        <View>
            <View>
                <Text color="black">
                    Restaurant {id} {product}
                </Text>
                {/*<Sheet*/}
                {/*    forceRemoveScrollEnabled={false}*/}
                {/*    modal={true}*/}
                {/*    open={false}*/}
                {/*    // onOpenChange={setOpen}*/}
                {/*    snapPoints={[85, 50, 25]}*/}
                {/*    snapPointsMode="percent"*/}
                {/*    dismissOnSnapToBottom*/}
                {/*    position={position}*/}
                {/*    onPositionChange={setPosition}*/}
                {/*    zIndex={100_000}*/}
                {/*    animation="medium"*/}
                {/*>*/}
                {/*    <Sheet.Overlay*/}
                {/*        animation="lazy"*/}
                {/*        enterStyle={{ opacity: 0 }}*/}
                {/*        exitStyle={{ opacity: 0 }}*/}
                {/*    />*/}

                {/*    <Sheet.Handle />*/}
                {/*    <Sheet.Frame padding="$4" justifyContent="center" alignItems="center" gap="$5">*/}
                {/*        /!*<Button size="$6" circular icon={ChevronDown} onPress={() => setOpen(false)} />*!/*/}
                {/*        /!*<Input width={200} />*!/*/}
                {/*        <Text color="black">*/}
                {/*            asdadasd*/}
                {/*        </Text>*/}
                {/*    </Sheet.Frame>*/}
                {/*</Sheet>*/}
            </View>
        </View>
    );
};

export default RestaurantScreen;