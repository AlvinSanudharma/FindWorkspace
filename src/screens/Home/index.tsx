import { colors } from "@/assets/styles/Colors";
import { Gs } from "@/assets/styles/GlobalStyle";
import InputText from "@/src/components/InputText";
import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

type Props = {};

const Home = (props: Props) => {
  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        <View style={Gs.flexRow}>
          <Image
            source={require("../../../assets/images/profile_1.png")}
            style={styles.profileContainer}
          />
          <View>
            <Text style={Gs.textBlack}>Hi, Shayna</Text>
            <Text style={[Gs.font700, Gs.textBlack]}>@shaynawork</Text>
          </View>
        </View>
        <View style={Gs.flexRow}>
          <Image
            source={require("../../../assets/icons/gift.png")}
            style={styles.iconContainer}
          />
          <Image
            source={require("../../../assets/icons/notification.png")}
            style={styles.iconContainer}
          />
        </View>
      </View>
    );
  };

  const renderSearch = () => {
    return (
      <View style={styles.sectionContainer}>
        <InputText
          icon={require("../../../assets/icons/location.png")}
          placeholder="Find work spaces in Jakarta"
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View>
        {renderHeader()}
        {renderSearch()}
        <ScrollView>
          {/* {renderPopularSection()} */}
          {/* {renderNewsorthy()} */}
        </ScrollView>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.greyLight,
  },
  headerContainer: {
    ...Gs.flexRow,
    ...Gs.itemsCenter,
    ...Gs.justifyBetween,
    padding: 24,
  },
  profileContainer: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  iconContainer: {
    width: 24,
    height: 24,
    marginLeft: 10,
  },
  sectionContainer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
});
