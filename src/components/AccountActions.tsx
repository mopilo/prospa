import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SvgXml } from "react-native-svg";
import tw from "twrnc";
import { transferIcon } from "../utils/svg_images";
import colors from "../utils/colors";

export function AccountActions( {text, icon, color} : {text?: string, icon: string, color: string}){
    return (
      <View style={[styles.actionStyle, tw.style(text ?` mt-[35px]` : `mt-[0px]`)]}>
        <View style={[styles.iconContainer, tw.style(`bg-[${color}]`)]}>
          <SvgXml xml={icon} />
        </View>
        {text ? <Text style={styles.actionTextStyle}>{text}</Text> : null}
      </View>
    );
}

const styles = StyleSheet.create({
  actionStyle: tw.style(`items-center`),
  actionTextStyle: tw.style(
    `text-[${colors.fadedColor}] text-[10px] font-500 mt-[10px]`,
    {
      fontFamily: "BR-Firma-Regular",
    }
  ),
  iconContainer: tw.style(
    `rounded-full h-[40px] w-40px items-center justify-center`
  ),
});