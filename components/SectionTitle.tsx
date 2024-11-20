import { Text, XStack } from "tamagui";
import { Link } from "expo-router";
import CustomIcon from "@/components/CustomIcon";
import { Pressable } from "react-native";

type SectionTitleProps = {
    title: string;
    showMoreLink?: string;
}

const SectionTitle = ({ title, showMoreLink = "See All"}: SectionTitleProps) => {
    return (
        <XStack justifyContent="space-between" paddingHorizontal="$5">
            <Text fontSize={20} fontWeight="bold" color="$color.ink">
                {title}
            </Text>
            {
                showMoreLink && (
                    <Link
                        asChild
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "center",
                            fontSize: 16,
                            fontWeight: "600"
                        }}
                        href="/"
                    >
                        <Pressable>
                            <Text color="$color.orangePrimary" fontWeight="600" fontSize={16}>
                                {showMoreLink}
                            </Text>
                            <CustomIcon icon="chevron-right-orange" />
                        </Pressable>
                    </Link>
                )
            }
        </XStack>
    );
};

export default SectionTitle;