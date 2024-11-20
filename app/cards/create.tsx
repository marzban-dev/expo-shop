import { Text, View } from "tamagui";
import { Link, router } from "expo-router";


export default function CreateCard() {
    const isPresented = router.canGoBack();

    return (
        <View
            style={{
                width: "100%",
                height: "100%",
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            {!isPresented ? <Link href="/" style={{color : "red"}}>
                Go Back
            </Link> :
                <Text>TEST</Text>
            }
        </View>
    );
}
