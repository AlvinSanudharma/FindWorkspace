import { colors } from "@/assets/styles/Colors";
import { Gs } from "@/assets/styles/GlobalStyle";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const BottomNav = (props: BottomTabBarProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.activeTab}>
          <Image source={require("../../../assets/icons/discover.png")} />
          <Text style={styles.tabLabel}>Discover</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Image source={require("../../../assets/icons/messages.png")} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Image source={require("../../../assets/icons/payment.png")} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Image source={require("../../../assets/icons/settings.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.greyLight,
    height: 100,
    paddingVertical: 30,
    paddingHorizontal: 54,
  },
  tabContainer: {
    ...Gs.flexRow,
    ...Gs.justifyBetween,
  },
  activeTab: {
    ...Gs.flexRow,
    ...Gs.itemsCenter,
    ...Gs.cornerXS,
    paddingHorizontal: 14,
    paddingVertical: 8,
    backgroundColor: colors.secondary,
  },
  tabLabel: {
    ...Gs.font600,
    ...Gs.textPrimary,
    color: colors.primary,
    marginLeft: 8,
  },
  tab: {
    padding: 8,
  },
});
