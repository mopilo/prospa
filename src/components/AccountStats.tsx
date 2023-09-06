import React from "react";
import { SafeAreaView, View, StyleSheet, Text } from "react-native";
import tw from "twrnc";
import colors from "../utils/colors";
import { ProgressBar } from "react-native-paper";

export function AccountStats({text, color}: {text :string, color: string}){
    return (
      <View style={tw.style(`mt-[24px]`)}>
        <View style={styles.statsTextStyle}>
          <Text style={styles.statsTextTitleStyle}>{text}</Text>
          <Text style={styles.statsTextAmtStyle}>N20,000</Text>
        </View>
        <ProgressBar
          animatedValue={0.5}
          color={color}
          style={tw.style(`rounded-[3px] h-[6px] opacity-30`)}
        />
      </View>
    );
}

const styles = StyleSheet.create({
  statsTextTitleStyle: tw.style(
    `text-[12px] text-[${colors.deepBlue}] self-center mt-[10px]`,
    {
      fontFamily: "BR-Firma-Regular",
    }
  ),
  statsTextAmtStyle: tw.style(
    `text-[12px] text-[${colors.deepBlue}] self-center mt-[10px] `,
    {
      fontFamily: "BR-Firma-Bold",
    }
  ),
  statsTextStyle: tw.style(`flex-row items-center justify-between mb-[5px]`),
});