import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { combinedShapeIcon } from "../utils/svg_images";
import { AccountActions } from "./AccountActions";
import tw from "twrnc";
import colors from "../utils/colors";
import { useFonts } from "expo-font";


export function TransactionHistory(){

    return (
      <View style={{}}>
        <Text style={styles.dateStyle}>11 December 2021</Text>
        <View
          style={tw.style(`flex-row items-center justify-between mt-[20px]`)}
        >
          <AccountActions icon={combinedShapeIcon} color={"#000"} />
          <View>
            <Text style={styles.tnxTypeStyle}>{"Transfer from Prospa"}</Text>
            <Text style={styles.timeStyle}>8:40 AM</Text>
          </View>
          <Text style={styles.amtStyle}>+N200,000</Text>
        </View>
        <View style={tw.style(`bg-[#EFF0F2] h-[1px]`)}></View>
      </View>
    );
}
const styles = StyleSheet.create({
  dateStyle: tw.style(
    `text-[${colors.secondaryTextColor}] text-[14px]`,
    {
      fontFamily: "BR-Firma-Bold",
    }
  ),
  timeStyle: tw.style(
    `text-[${colors.secondaryTextColor}] text-[12px] font-700`,
    {
      fontFamily: "BR-Firma-Medium",
    }
  ),
  amtStyle: tw.style(
    `text-[${colors.secondaryTextColor}] text-[14px]`,
    {
      fontFamily: "BR-Firma-Bold",
    }
  ),
  tnxTypeStyle: tw.style(
    `text-[${colors.deepBlue}] text-[14px]`,
    {
      fontFamily: "BR-Firma-Bold",
    }
  ),
});