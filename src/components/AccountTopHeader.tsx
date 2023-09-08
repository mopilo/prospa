import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { SvgXml } from "react-native-svg";
import tw from "twrnc";
import { backIcon } from "../utils/svg_images";
import colors from "../utils/colors";


export function AccountTopHeader({onclick}: {onclick:()=> void}){
    return (
      <View style={styles.topHeader}>
        <Pressable onPress={()=> onclick()}>
        <SvgXml xml={backIcon}  />
        </Pressable>
        <View>
          <Text style={styles.textHeaderStyle}>Current Account</Text>
          <Text style={styles.accountStyle}>7274640071</Text>
        </View>
        <Text style={styles.textOptionStyle}>Options</Text>
      </View>
    );
}

const styles = StyleSheet.create({
  topHeader: tw.style(`flex-row mt-[40px] items-start justify-between`),
  textHeaderStyle: tw.style(`text-[20px] text-[${colors.deepBlue}]`, {
    fontFamily: "BR-Firma-Bold",
  }),
  textOptionStyle: tw.style(`text-[12px] text-[${colors.red}]`, {
    fontFamily: "BR-Firma-Medium",
  }),
  accountStyle: tw.style(
    `text-[12px] text-[${colors.fadedColor}] self-center mt-[9px]`,
    {
      fontFamily: "BR-Firma-Medium",
    }
  ),
});