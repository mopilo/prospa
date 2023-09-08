import React from "react";
import { View, Text, StyleSheet, SectionList } from "react-native";
import { combinedShapeIcon, phoneIcon } from "../utils/svg_images";
import { AccountActions } from "./AccountActions";
import tw from "twrnc";
import colors from "../utils/colors";
import { useFonts } from "expo-font";


export function TransactionHistory(){

  interface Data {
    id: string;
    type: string;
    title: string;
    info: string;
    amount: string
  }

  const JSON_DATA = [
    {
      id: "1",
      type: "transfer",
      title: "11 December 2021",
      info: "Transfer from Prosp",
      amount: "+N200,000",
    },
    {
      id: "2",
      type: "transfer",
      title: "10 December 2021",
      info: "Transfer to Sandalily",
      amount: "-N1,000,000",
    },
    {
      id: "3",
      type: "airtime",
      title: "10 December 2021",
      info: "Mobile Recharge",
      amount: "-N1,000",
    }
  ];

  const DATA = Object.values(
    JSON_DATA.reduce((acc : any, item) => {
      if (!acc[item.title])
        acc[item.title] = {
          title: item.title,
          data: [],
        };
      acc[item.title].data.push(item);
      return acc;
    }, {})
  );

  const renderItems = ({ item }: { item: Data }) => {
    return (
      <View style={{}}>
        <View
          style={tw.style(`flex-row items-center justify-between mb-[20px]`,item.type == "airtime" ? "mt-[20px]" : "")}
        >
          <View style={tw.style(`flex-row`)}>
            <AccountActions icon={item.type == "airtime" ?  phoneIcon : combinedShapeIcon} color={"#F5F5F7"} />
            <View style={tw.style(`ml-[15px]`)}>
              <Text style={styles.tnxTypeStyle}>{item.info}</Text>
              <Text style={styles.timeStyle}>8:40 AM</Text>
            </View>
          </View>

          <Text style={styles.amtStyle}>{item.amount}</Text>
        </View>
        <View style={tw.style(`bg-[#EFF0F2] h-[1px]`)}></View>
      </View>
    );
  };

  const renderHeader = ({ section }: { section: Data }) => {
    return (
        <Text style={styles.dateStyle}>{section.title}</Text>
    );
  };

    return (
      <SectionList
        showsVerticalScrollIndicator={false}
        sections={DATA}
        keyExtractor={(item, index) => item.id + index}
        renderItem={renderItems}
        renderSectionHeader={renderHeader}
      />
    );
}
const styles = StyleSheet.create({
  dateStyle: tw.style(
    `text-[${colors.secondaryTextColor}] text-[14px] my-[20px]`,
    {
      fontFamily: "BR-Firma-Bold",
    }
  ),
  timeStyle: tw.style(
    `text-[${colors.secondaryTextColor}] text-[12px]`,
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