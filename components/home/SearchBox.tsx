import { Button, XStack } from "tamagui";
import { TextInput } from "react-native";
import { useState } from "react";
import CustomIcon from "@/components/CustomIcon";

const SearchBox = () => {
    const [text, onChangeText] = useState("Useless Text");

    return (
        <XStack
            borderRadius="$3"
            alignItems="center"
            justifyContent="space-between"
            paddingVertical="$1.5"
            paddingRight="$1.5"
            paddingLeft="$3.5"
            backgroundColor="white"
        >
            <XStack flex={1} paddingRight="$3" alignItems="center" gap="$3">
                <CustomIcon size={22} icon="search" />
                <TextInput
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="what do you want to eat?"
                    style={{
                        flex: 1,
                        fontSize: 15,
                        fontWeight: "500"
                        // color: "$color.inkLightest"
                    }}
                />
            </XStack>
            <Button
                circular
                borderRadius="$3"
                icon={
                    <CustomIcon icon="map" />
                }
            />
        </XStack>
    );
};

export default SearchBox;