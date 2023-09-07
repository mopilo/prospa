import React from "react";
import { View, Text, StyleSheet } from "react-native";
import tw from "twrnc";
import colors from "../utils/colors";
import { cupIcon, lIcon, transferIcon } from "../utils/svg_images";
import { AccountActions } from "./AccountActions";

export function DashboardPoints() {
  return (
    <View>
      <View style={tw.style(`flex-row items-start justify-between mt-[32px]`)}>
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
      <View style={styles.containerStyle}>
        <View style={tw.style(`flex-row items-center justify-between`)}>
          <AccountActions icon={cupIcon} color={"#4CD96410"} />
          <View style={tw`ml-[20px]`}>
            <Text style={styles.tnxTypeStyle}>{"Transfer from Prospa"}</Text>
            <Text style={styles.timeStyle}>Today, 8:40 AM</Text>
          </View>
        </View>

        <AccountActions icon={lIcon} color={"#F4F8FB"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: tw.style(
    `flex-row items-center justify-between mt-[14px] bg-[${colors.white}] py-[18px] px-[14px] rounded-[8px] border-[0.5px]  border-[#4CD964]`
  ),
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
