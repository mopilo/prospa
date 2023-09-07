import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import tw from "twrnc";
import { useFonts } from "expo-font";
import colors from "../utils/colors";

export function DashboardActionTypes({
  selectTab,
  setSelectTab,
  
 
}: {
  selectTab: number;
  setSelectTab: (value: number) => void;
  
}) {
  const [fontsLoaded] = useFonts({
    "BR-Firma-Medium": require("../../assets/fonts/BR-Firma-Medium.otf"),
    "BR-Firma-Regular": require("../../assets/fonts/BR-Firma-Regular.otf"),
    "BR-Firma-Light": require("../../assets/fonts/BR-Firma-Light.otf"),
    "BR-Firma-Bold": require("../../assets/fonts/BR-Firma-Bold.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  const items = ["Accounts", "Cards", "Loans", "Savings"]
  return (
    <View>
      <View style={tw`flex-row justify-between mt-[38px] `}>
        {items.map((item: string, key: any) => (
          <Pressable
            key={key}
            onPress={() => setSelectTab(key)}
            style={tw.style(
              `justify-center items-center py-[4px] rounded-[20px] px-[16px] py-[6px]`,
              selectTab === key ? "bg-[#FFFFFF] shadow-lg" : ""
            )}
          >
            <Text
              style={tw.style(
                `text-[12px]`,
                selectTab === key ? "text-[#222B45]" : "text-[#2E3A59]",
                {
                  fontFamily: "BR-Firma-Regular",
                }
              )}
            >
              {item}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: tw.style(
    `flex-1 justify-center items-center h-[40px] rounded-[8px] px-[35px]`
  ),
});
