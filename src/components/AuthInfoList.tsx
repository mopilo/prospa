import React from "react";
import { View, Text , StyleSheet} from "react-native";
import { Avatar } from "react-native-paper";
import tw from "twrnc";
import colors from "../utils/colors";


export function AuthInfoList({title}: {title: string}){
    return (
      <View style={styles.container}>
        <Avatar.Icon
          size={25}
          icon="check"
          color="#4CD964"
          style={tw`bg-[#4CD96410]`}
        />
        <Text style={styles.textStyle}>{title} </Text>
      </View>
    );
}

const styles = StyleSheet.create({
  textStyle: tw.style(
    `text-[${colors.deepBlue}] text-[15px] self-center ml-[20px]`,
    {
      fontFamily: "BR-Firma-Medium",
    }
  ),
  container: tw.style(`flex-row items-center justify-start  my-[15px]`),
});