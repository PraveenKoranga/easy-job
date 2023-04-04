import { Stack, useRouter } from "expo-router";
import { View, Text, SafeAreaView } from "react-native";
import { COLORS, icons } from "../constants";
import { ScreenHeaderBtn } from "../components";

const Home = () => {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimensions="60%" />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.menu} dimensions="60%" />
          ),
          headerTitle: "",
        }}
      />
    </SafeAreaView>
  );
};
export default Home;
