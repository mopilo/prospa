import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, ScrollView } from "react-native";
import tw from "twrnc";
import { useFonts } from "expo-font";
import { mainBody } from "../../utils/styles";
import colors from "../../utils/colors";
import { DashboardTopHeader } from "../../components/DashboardTopHeader";
import { DashboardBalanceDetails } from "../../components/DashboardBalanceDetails";
import { DashbaordTransactionInfo } from "../../components/DashbaordTransactionInfo";
import { DashboardAccountActions } from "../../components/DashboardAccountActions";
import { DashboardActionTypes } from "../../components/DashboardActionTypes";
import { DashboardPoints } from "../../components/DashboardPoints";
import { DashbaordEssentials } from "../../components/DashboardEssentials";

const DashboardScreen = ({
  navigation,
}: {navigation: any }) => {
  const [selectTab, setSelectTab] = useState(1 as number);
  const [selectTabType, setSelectTabType] = useState(0);

  const [fontsLoaded] = useFonts({
    "BR-Firma-Medium": require("../../../assets/fonts/BR-Firma-Medium.otf"),
    "BR-Firma-Regular": require("../../../assets/fonts/BR-Firma-Regular.otf"),
    "BR-Firma-Light": require("../../../assets/fonts/BR-Firma-Light.otf"),
    "BR-Firma-Bold": require("../../../assets/fonts/BR-Firma-Bold.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={[mainBody]}>
      <View style={styles.topContainer}>
        <DashboardTopHeader />
        <DashboardActionTypes
          selectTab={selectTabType}
          setSelectTab={setSelectTabType}
        />
        <DashboardBalanceDetails onclick={()=> navigation.navigate("AccountScreen") } />
        <DashboardAccountActions
          selectTab={selectTab}
          setSelectTab={setSelectTab}
          tabLabel1={"Transfer funds"}
          tabLabel2={"Share account"}
          Tab1Item={<View></View>}
          Tab2Item={<View></View>}
        />
        <DashbaordTransactionInfo />
      </View>
      <View style={styles.bottomContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <DashboardPoints />
          <DashbaordEssentials />
          <View style={tw.style(`mb-[120px]`)} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topContainer: tw.style(
    `flex-2 bg-[${colors.white}] rounded-b-[40px] px-[19px]`
  ),
  bottomContainer: tw.style(`flex-1 bg-[${colors.containerColor}] px-[19px] `),
});


export default DashboardScreen