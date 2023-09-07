import React from "react";
import { View, StyleSheet, Text } from "react-native";
import tw from "twrnc";
import colors from "../utils/colors";
import { AccountActions } from "./AccountActions";
import { dropDownIcon, infoIcon, userIcon } from "../utils/svg_images";
import { SvgXml } from "react-native-svg";

export function DashboardTopHeader() {
  return (
    <View style={styles.topContainerStyle}>
      <View style={tw.style(`flex-row items-center`)}>
        <AccountActions icon={userIcon} color={colors.circleIconColor} />
        <View style={tw`flex-row items-center ml-[15px]`}>
          <Text
            style={tw.style(`mr-[10px] text-[#1C1335] text-[12px]`, {
              fontFamily: "BR-Firma-Bold",
            })}
          >
            DailyBread Ltd
          </Text>
          <SvgXml xml={dropDownIcon} />
        </View>
      </View>

      <View
        style={tw.style(
          `flex-row items-center justify-between bg-[${colors.fadedRedColor}] h-[28px] px-[10px] rounded-[20px]`
        )}
      >
        <Text style={styles.supportStyle}>Support</Text>
        <SvgXml xml={infoIcon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  topContainerStyle: tw.style(
    `flex-row items-center justify-between mt-[50px]`
  ),
  supportStyle: tw.style(`mr-[8px] text-[${colors.red}] text-[12px]`, {
    fontFamily: "BR-Firma-Medium",
  }),
  bottomContainer: tw.style(`flex-1 bg-[${colors.containerColor}] px-[19px] `),
});
