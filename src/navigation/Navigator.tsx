import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Screens, StackParamList } from "../types/NavigationTypes";
import PlayersList from "../screens/PlayersList";
import PlayerPresentation from "../screens/PlayerPresentation";
import { useChampionship } from "../context/ChampionshipContext";
import { FakeSplashScreen } from "../components/FakeSplashScreen";

const Stack = createNativeStackNavigator<StackParamList>();

const Navigator = () => {
  const { isReady } = useChampionship();

  if (!isReady) {
    return <FakeSplashScreen />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={Screens.PLAYERS_LIST}
          component={PlayersList}
          options={DEFAULT_STACK_SCREEN_OPTIONS}
        />
        <Stack.Screen
          name={Screens.PLAYER}
          component={PlayerPresentation}
          options={DEFAULT_STACK_SCREEN_OPTIONS}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const DEFAULT_STACK_SCREEN_OPTIONS = {
  headerShown: false,
};

export default Navigator;
