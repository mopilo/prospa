import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Pressable,
} from "react-native";
import tw from "twrnc";
import colors from "../../utils/colors";
import { useFonts } from "expo-font";
import { googleIcon, iosIcon } from "../../utils/svg_images";
import { AuthButton } from "../../components/AuthButton";
import { AuthInfoList } from "../../components/AuthInfoList";
import { LinearGradient } from "expo-linear-gradient";
import { Wavy } from "../../components/Wavy";
import { RootStackScreenProps } from "../../navigators/RootNavigator";

const AuthScreen = ({ navigation }: RootStackScreenProps<"AuthScreen">) => {
  const [fontsLoaded] = useFonts({
    "BR-Firma-Medium": require("../../../assets/fonts/BR-Firma-Medium.otf"),
    "BR-Firma-Regular": require("../../../assets/fonts/BR-Firma-Regular.otf"),
    "BR-Firma-Light": require("../../../assets/fonts/BR-Firma-Light.otf"),
    "BR-Firma-Bold": require("../../../assets/fonts/BR-Firma-Bold.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={tw.style(`flex-1 bg-[${colors.white}]`)}>
      <View style={styles.container}>
        <LinearGradient
          id="grad"
          colors={[colors.deepBlue, colors.deepBlue]}
          // colors={["#FA4A84", "#7E51FF", "#f0d884"]}
          style={tw.style(`h-[${Dimensions.get("window").height / 3.5}px]`)}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Wavy />
        </LinearGradient>
        <Pressable
          style={tw`absolute top-[40px] right-[30px]`}
          onPress={() => navigation.navigate("Tab")}
        >
          <Text style={styles.loginStyle}>Sign in</Text>
        </Pressable>

        <Image
          source={require("../../../assets/app.png")}
          style={tw.style(
            `absolute h-[300px] w-[400px] top-[${
              Dimensions.get("window").height / 7.5
            }px]`
          )}
          resizeMode="contain"
        />
      </View>

      <View style={styles.container}>
        <View style={tw`mx-[60px]`}>
          <AuthInfoList title={"Business bank account"} />
          <AuthInfoList title={"Up to N1M in loans"} />
          <AuthInfoList title={"Send invoices"} />
          <AuthInfoList title={"POS for offline sale and more"} />
        </View>
        <AuthButton
          bgColor={"#23064C"}
          title={"Sign up with Google"}
          icon={googleIcon}
        />
        <View style={tw`mt-[15px]`} />
        <AuthButton
          bgColor={"#141414"}
          title={"Sign up with Apple"}
          icon={iosIcon}
        />
        <Pressable onPress={() => navigation.navigate("Tab")}>
          <Text style={styles.textInfo}>Continue with email</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: tw.style(`flex-1`),

  textInfo: tw.style(
    `text-[${colors.deepBlue}] text-[15px] self-center mt-[25px]`,
    {
      fontFamily: "BR-Firma-Bold",
    }
  ),
  loginStyle: tw.style(
    `text-[${colors.white}] text-[15px] `,
    {
      fontFamily: "BR-Firma-Bold",
    }
  ),
});

export default AuthScreen;
