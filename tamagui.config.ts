import { tokens } from "@tamagui/config/v3";
import { createTamagui, createTokens } from "tamagui";
import * as websiteThemes from "@/theme/website-theme-output";
import { createAnimations } from "@tamagui/animations-moti";

const customTokens = createTokens({
    ...tokens,
    color: {

        // Ink Color

        ink: "#040C22",
        inkLight : "#363D4E",
        inkLighter : "#5C616F",
        inkLightest : "#A7AAB2",


        // Sky Color

        sky: "#CDD4DB",
        skyLight: "#DEE3E7",
        skyLighter: "#E8EBEE",
        skyLightest: "#F6F7F8",


        // Orange Color

        orangeShade30 : "#912400",
        orangeShade20 : "#B12E02",
        orangeShade10 : "#D94310",
        orangePrimary : "#F26333",
        orangeTint10 : "#F47A51",
        orangeTint20 : "#FFA080",
        orangeTint30 : "#FFC9B8",
        orangeTint40 : "#FFEBE4",


        // Cyan Color

        cyanShade30 : "#005267",
        cyanShade20 : "#006F8B",
        cyanShade10 : "#0093B9",
        cyanPrimary : "#0BB8E4",
        cyanTint10 : "#44C8E9",
        cyanTint20 : "#87DDF3",
        cyanTint30 : "#CAF4FF",
        cyanTint40 : "#E5F9FE",


        // Green Color

        greenShade30 : "#00482F",
        greenShade20 : "#006240",
        greenShade10 : "#008859",
        greenPrimary : "#00B167",
        greenTint10 : "#26BD7E",
        greenTint20 : "#4DC895",
        greenTint30 : "#A6EDCF",
        greenTint40 : "#D9F3E8",


        // Red Color

        redShade30 : "#A0070A",
        redShade20 : "#C62B2E",
        redShade10 : "#DE3A3D",
        redPrimary : "#F55053",
        redTint10 : "#F26669",
        redTint20 : "#FF8C8E",
        redTint30 : "#F7B4B5",
        redTint40 : "#FEE5E5",
    }
});

const config = createTamagui({
    tokens: customTokens,
    themes: websiteThemes,
    animations: createAnimations({
        fast: {
            type: "spring",
            damping: 50,
            mass: 2,
            stiffness: 350
        },
        medium: {
            type: "spring",
            damping: 10,
            mass: 0.9,
            stiffness: 100
        },
        slow: {
            type: "spring",
            damping: 20,
            stiffness: 60
        }
    })
});

export default config;