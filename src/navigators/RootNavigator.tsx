import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import AuthScreen from "../screens/Auth/AuthScreen";
import AccountScreen from "../screens/Accounts/AccountScreen";
import BottomTabNav from "./BottonTabNav";

export type RootStackParamList = {
  AuthScreen: undefined;
  Tab: undefined;
  AccountScreen: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Group
        screenOptions={{
          headerShown: false,
          animation: "fade",
        }}
      >
        <RootStack.Screen name="AuthScreen" component={AuthScreen} />
        <RootStack.Screen name="Tab" component={BottomTabNav} />
        <RootStack.Screen name="AccountScreen" component={AccountScreen} />
        
      </RootStack.Group>
    </RootStack.Navigator>
  );
};

export default RootNavigator;