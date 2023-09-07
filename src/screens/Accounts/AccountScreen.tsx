import React from "react";
import { SafeAreaView, View, StyleSheet, Text } from "react-native";
import { useFonts } from "expo-font";
import tw from "twrnc";
import colors from "../../utils/colors";
import { mainBody } from "../../utils/styles";
import { AccountTopHeader } from "../../components/AccountTopHeader";
import { AccountInfo } from "../../components/AccountInfo";
import { SvgXml } from "react-native-svg";
import { bookIcon, combinedShapeIcon, starIcon, transferIcon } from "../../utils/svg_images";
import { AccountActions } from "../../components/AccountActions";
import { ProgressBar } from "react-native-paper";
import { AccountStats } from "../../components/AccountStats";
import { TransactionHistory } from "../../components/TransactionHistory";


const AccountScreen = () => {
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
        <AccountTopHeader />
        <AccountInfo />
        <View style={styles.actionStyle}>
          <AccountActions
            text={"Transfer"}
            icon={transferIcon}
            color={colors.circleIconColor}
          />
          <AccountActions
            text={"Bookkeeper"}
            icon={bookIcon}
            color={colors.circleIconColor}
          />
          <AccountActions
            text={"Upgrade"}
            icon={starIcon}
            color={colors.circleIconColor}
          />
        </View>
        <AccountStats color={colors.linearColor} text={"Money in"} />
        <AccountStats color={colors.red} text={"Money out"} />
        <AccountStats color={colors.deepBlue} text={"Wallet balance"} />
      </View>
      <View style={styles.bottomContainer}>
        <TransactionHistory/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topContainer: tw.style(
    `flex-2.5 bg-[${colors.white}] rounded-b-[40px] px-[19px]`
  ),
  bottomContainer: tw.style(`flex-1 bg-[${colors.containerColor}] px-[19px] `),
  actionStyle: tw.style(`flex-row items-center justify-evenly`),

});

export default AccountScreen;
