import { View, Text, TouchableOpacity, Platform } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BottomTabData } from "../utils/BottomTabData";
import tw from "twrnc";
import { SvgXml } from "react-native-svg";
import { useFonts } from "expo-font";
import colors from "../utils/colors";

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  const [fontsLoaded] = useFonts({
    "BR-Firma-Medium": require("../../assets/fonts/BR-Firma-Medium.otf"),
    "BR-Firma-Regular": require("../../assets/fonts/BR-Firma-Regular.otf"),
    "BR-Firma-Light": require("../../assets/fonts/BR-Firma-Light.otf"),
    "BR-Firma-Bold": require("../../assets/fonts/BR-Firma-Bold.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const TabButton = ({
    icon,
    focusedIcon,
    accessibilityState,
    onPress,
    title,
  }: {
    icon: any;
    focusedIcon: any;
    accessibilityState: any;
    onPress: any;
    title: string;
  }) => {
    const focused = accessibilityState.selected;
    return (
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={1}
        style={tw`items-center flex-1 pt-[10px]`}
      >
        <View
          style={tw.style(
            title === "Business" &&
              `bg-[${colors.red}] h-[41px] w-[41px] rounded-full justify-center items-center absolute top-[-15px]`,
            {
              shadowColor: "rgba(8, 112, 217, 0.25)",
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 1,
              shadowRadius: 14,
              elevation: 5,
            }
          )}
        >
          {!focused ? (
            <SvgXml xml={icon} fill={colors.fadedColor} />
          ) : (
            <SvgXml xml={focusedIcon} fill={colors.red} />
          )}
        </View>

        <Text
          style={tw.style(
            `text-[10px] pt-[10px]`,
            !focused ? "text-[#8397AB]" : "text-[#FA4A84]",
            title === "Business" && "mt-[15px]",
            {
              fontFamily: "BR-Firma-Regular",
            }
          )}
        >
          {title}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <Tab.Navigator
      initialRouteName="Home"
      backBehavior="initialRoute"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: Platform.OS === "ios" ? 90 : 70,
          position: "absolute",
          backgroundColor: "#FFFFFF",
          borderWidth: 1,
          borderColor: "#F6F6F6",
        },
      }}
    >
      {BottomTabData.map(({ title, icon, id, component, focusedIcon }) => (
        <Tab.Screen
          key={id}
          name={title}
          component={component}
          options={{
            tabBarShowLabel: false,
            tabBarButton: (props) => (
              <TabButton
                icon={icon}
                title={title}
                accessibilityState={props.accessibilityState}
                onPress={props.onPress}
                focusedIcon={focusedIcon}
              />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabNav;
