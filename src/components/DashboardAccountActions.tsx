import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import tw from "twrnc";
import { useFonts } from "expo-font";
import colors from "../utils/colors";

export function DashboardAccountActions ({
  selectTab,
  setSelectTab,
  tabLabel1,
  tabLabel2,
  Tab1Item,
  Tab2Item,
}: {
  selectTab: number;
  setSelectTab: (value: number) => void;
  tabLabel1: string;
  tabLabel2: string;
  Tab1Item: any;
  Tab2Item: any;
})  {
  const [fontsLoaded] = useFonts({
    "BR-Firma-Medium": require("../../assets/fonts/BR-Firma-Medium.otf"),
    "BR-Firma-Regular": require("../../assets/fonts/BR-Firma-Regular.otf"),
    "BR-Firma-Light": require("../../assets/fonts/BR-Firma-Light.otf"),
    "BR-Firma-Bold": require("../../assets/fonts/BR-Firma-Bold.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View>
      <View style={tw`flex-row justify-between mt-[40px]`}>
        <Pressable
          onPress={() => setSelectTab(1)}
          style={[
            styles.itemContainer,
            tw.style(
              selectTab === 1
                ? "bg-[#FEC9DB] "
                : `bg-[${colors.containerColor}]`
            ),
          ]}
        >
          <Text
            style={tw.style(
              `text-[12px]`,
              selectTab === 1 ? `text-[${colors.red}]` : "text-[#1C1335]",
              {
                fontFamily: "BR-Firma-Bold",
              }
            )}
          >
            {tabLabel1}
          </Text>
        </Pressable>
        <View style={tw`mx-[12px]`}></View>
        <Pressable
          onPress={() => setSelectTab(2)}
          style={[
            styles.itemContainer,
            tw.style(
              selectTab === 2
                ? "bg-[#FEC9DB] "
                : `bg-[${colors.containerColor}]`
            ),
          ]}
        >
          <Text
            style={tw.style(
              `text-[12px]`,
              selectTab === 2 ? `text-[${colors.red}]` : "text-[#1C1335]",
              {
                fontFamily: "BR-Firma-Bold",
              }
            )}
          >
            {tabLabel2}
          </Text>
        </Pressable>
      </View>
      {selectTab === 1 ? Tab1Item : Tab2Item}
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: tw.style(
    `flex-1 justify-center items-center h-[40px] rounded-[8px] px-[35px]`),
});
