import React from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import tw from "twrnc";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../utils/colors";
import { SvgXml } from "react-native-svg";
import { graph, point } from "../utils/svg_images";
export function DashbaordEssentials(){
    return (
      <View>
        <Text
          style={tw.style(`text-[#1C1335] text-[12px] mt-[25px] mb-[18px]`, {
            fontFamily: "BR-Firma-Bold",
          })}
        >
          Essentials
        </Text>
        <View style={tw.style(`flex-row`)}>
          <LinearGradient
            colors={["#7E51FF", "#FA4A84"]}
            style={tw.style(
              `h-[124px] w-[147px] rounded-[8px] justify-end mr-[9px]`
            )}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
          >
            {/* <SvgXml xml={point} style={tw.style(`absolute right-[60px] top-[30px]`)} /> */}
            <SvgXml xml={graph} style={tw.style(`mt-[0px]`)} />
            <View style={tw.style(`p-[13px]`)}>
              <Text
                style={tw.style(`text-[${colors.white}] text-[8px] w-[89px]`, {
                  fontFamily: "BR-Firma-Regular",
                })}
              >
                Last 30 days outgoing
              </Text>
              <Text
                style={tw.style(
                  `text-[${colors.white}] text-[12px] my-[3px] w-[89px]`,
                  {
                    fontFamily: "BR-Firma-Bold",
                  }
                )}
              >
                N2,346,908.00
              </Text>
              <Text
                style={tw.style(`text-[${colors.white}] text-[6px] w-[40px]`, {
                  fontFamily: "BR-Firma-Medium",
                })}
              >
                All accounts
              </Text>
            </View>
          </LinearGradient>
          <LinearGradient
            colors={["#FA4A84", "#7E51FF"]}
            style={tw.style(`h-[124px] w-[147px] rounded-[8px] p-[13px] `)}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
          >
            <View style={tw.style(`flex-row items-center`)}>
              <Text
                style={tw.style(`text-[${colors.white}] text-[30px]`, {
                  fontFamily: "BR-Firma-Bold",
                })}
              >
                7
              </Text>
              <Text
                style={tw.style(`text-[${colors.white}] text-[5px] ml-[6px]`, {
                  fontFamily: "BR-Firma-Regular",
                })}
              >
                {"Customer \nreferrals"}
              </Text>
            </View>
            <Text
              style={tw.style(`text-[${colors.white}] text-[8px] mt-[15px]`, {
                fontFamily: "BR-Firma-Regular",
              })}
            >
              Refer & Earn
            </Text>
            <Text
              style={tw.style(`text-[${colors.white}] text-[11px] my-[4px]`, {
                fontFamily: "BR-Firma-Bold",
              })}
            >
              N10,000.00
            </Text>
            <Text
              style={tw.style(`text-[${colors.white}] text-[5px] w-[62px]`, {
                fontFamily: "BR-Firma-Medium",
              })}
            >
              {"Earn rewards for inviting businesses to Prospa"}
            </Text>
          </LinearGradient>
        </View>
      </View>
    );
}