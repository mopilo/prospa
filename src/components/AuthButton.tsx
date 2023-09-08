import React from "react";

import { StyleSheet, View, Text } from "react-native";
import { SvgXml } from "react-native-svg";
import tw from "twrnc";
import colors from "../utils/colors";

export function AuthButton({bgColor, title, icon}:{bgColor: string, title: string, icon:string}){
    return (
      <View style={[styles.buttonContainer, tw`bg-[${bgColor}]`]}>
        <SvgXml xml={icon} />
        <Text style={styles.buttonTitle}>{title}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  buttonContainer: tw.style(
    `flex-row items-center justify-center h-[50px] mx-[16px] rounded-[8px]`
  ),
  buttonTitle: tw.style(`text-[${colors.white}] text-[15px] ml-[14px]`, {
    fontFamily: "BR-Firma-Medium",
  }),
});