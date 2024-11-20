import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useColorScheme } from "react-native";
import { TamaguiProvider } from "tamagui";
import config from "@/tamagui.config";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import TanstackProvider from "@/providers/tanstack.provider";

export default function RootLayout() {
    const colorScheme = useColorScheme();

    const [loaded] = useFonts({
        Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
        InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf")
    });

    useEffect(() => {
        if (loaded) {
            SplashScreen.hideAsync();
        }
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <TanstackProvider>
            <TamaguiProvider config={config} defaultTheme={`${colorScheme}_accent`!}>
                <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
                    <Stack>
                        <Stack.Screen
                            name="index"
                            options={{
                                title: "Home",
                                headerStyle: { backgroundColor: "#f4511e" },
                                headerTintColor: "#fff",
                                headerTitleStyle: {
                                    fontWeight: "bold"
                                }
                            }}
                        />
                        <Stack.Screen
                            name="restaurant/[id]"
                            options={{
                                title: "Restaurant",
                            }}
                        />
                    </Stack>
                </ThemeProvider>
            </TamaguiProvider>
        </TanstackProvider>
    );
}
