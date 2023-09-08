import React from "react";
import { View, Text, Pressable } from "react-native";

import tw from "twrnc";
import colors from "../utils/colors";

export function DashboardBalanceDetails({onclick}: {onclick: ()=> void}) {
  return (
    <View style={tw.style(`flex-row items-start justify-between  mt-[45px]`)}>
      <View>
        <Text
          style={tw.style(`text-[24px] text-[${colors.deepBlue}]`, {
            fontFamily: "BR-Firma-Bold",
          })}
        >
          N22,250,000
          <Text
            style={tw.style(`text-[17px] text-[${colors.secondaryTextColor}]`, {
              fontFamily: "BR-Firma-Bold",
            })}
          >
            .98
          </Text>
        </Text>
        <Text
          style={tw.style(
            `text-[10px] text-[${colors.secondaryTextColor}] mt-[12px]`,
            {
              fontFamily: "BR-Firma-Bold",
            }
          )}
        >
          Available balance
        </Text>
      </View>
      <Pressable onPress={()=>onclick()}>
        <Text
          style={tw.style(`text-[10px] text-[${colors.red}]`, {
            fontFamily: "BR-Firma-Medium",
          })}
        >
          View accounts
        </Text>
      </Pressable>
    </View>
  );
}
