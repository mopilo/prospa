import React from "react";
import { View, Text, StyleSheet } from "react-native";
import tw from "twrnc";
import colors from "../utils/colors";


export function AccountInfo() {
    return (
      <View style={styles.accountInfoStyle}>
        <Text style={styles.textHeaderStyle}>N5,000,000.00</Text>
        <Text style={styles.balanceStyle}>Ledger balance</Text>
        <View style={tw`mt-[30px]`}>
          <Text style={styles.textAvailableAmtStyle}>N750,000.00</Text>
          <Text style={styles.balanceStyle}>Available balance</Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  accountInfoStyle: tw.style(`items-center mt-[42px]`),
  textHeaderStyle: tw.style(`text-[20px] text-[${colors.deepBlue}]`, {
    fontFamily: "BR-Firma-Bold",
  }),
  textAvailableAmtStyle: tw.style(
    `text-[18px] text-[${colors.circleIconColor}]`,
    {
      fontFamily: "BR-Firma-Bold",
    }
  ),
  balanceStyle: tw.style(
    `text-[12px] text-[${colors.deepBlue}] self-center mt-[10px]`,
    {
      fontFamily: "BR-Firma-Medium",
    }
  ),
});