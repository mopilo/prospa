import React from "react";
import { View, Text, StyleSheet } from "react-native";
import tw from "twrnc";
import colors from "../utils/colors";
import { transferIcon } from "../utils/svg_images";
import { AccountActions } from "./AccountActions";

export function DashbaordTransactionInfo() {
  return (
    <View>
      <View style={tw.style(`flex-row items-start justify-between mt-[42px]`)}>
        <View>
          <Text
            style={tw.style(`text-[12px] text-[#2E3A59]`, {
              fontFamily: "BR-Firma-Bold",
            })}
          >
            Transactions
          </Text>
        </View>
        <Text
          style={tw.style(`text-[12px] text-[${colors.red}]`, {
            fontFamily: "BR-Firma-Medium",
          })}
        >
          View all
        </Text>
      </View>
      <View
        style={tw.style(
          `flex-row items-center justify-between mt-[14px] bg-[${colors.containerColor}] py-[18px] px-[14px] rounded-[12px]`
        )}
      >
        <View style={tw.style(`flex-row items-center justify-between`)}>
          <AccountActions icon={transferIcon} color={colors.circleIconColor} />
          <View style={tw`ml-[20px]`}>
            <Text style={styles.tnxTypeStyle}>{"Transfer from Prospa"}</Text>
            <Text style={styles.timeStyle}>Today, 8:40 AM</Text>
          </View>
        </View>

        <Text style={styles.amtStyle}>- 1.33 USD</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  timeStyle: tw.style(`text-[${colors.secondaryTextColor}] text-[10px]`, {
    fontFamily: "BR-Firma-Regular",
  }),
  amtStyle: tw.style(`text-[#192038] text-[12px]`, {
    fontFamily: "BR-Firma-Regular",
  }),
  tnxTypeStyle: tw.style(`text-[#192038] text-[12px]`, {
    fontFamily: "BR-Firma-Bold",
  }),
});
