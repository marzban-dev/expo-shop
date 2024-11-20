import { Image } from "expo-image";

type CustomIconDimensions = {
    icon: keyof typeof icons;
    width?: number;
    height?: number;
}

type CustomIconAutoDimensions = {
    icon: keyof typeof icons;
    size?: number;
}

type CustomIconProps = CustomIconDimensions & CustomIconAutoDimensions

const icons = {
    "wallet": require("@/assets/icons/Wallet.svg"),
    "map": require("@/assets/icons/Map.svg"),
    "search": require("@/assets/icons/Search.svg"),
    "chevron-right": require("@/assets/icons/Chevron - Right.svg"),
    "chevron-right-white": require("@/assets/icons/Chevron - Right-white.svg"),
    "chevron-right-orange": require("@/assets/icons/Chevron - Right-orange.svg")
};

const CustomIcon = ({ icon, width = 20, height = 20, size }: CustomIconProps) => {
    return (
        <Image
            contentFit="cover"
            source={icons[icon]}
            style={{
                width: size ?? width,
                height: size ?? height
            }}
        />
    );
};

export default CustomIcon;