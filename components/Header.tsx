import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import FilterToggleButton from "./FilterToggleButton";
import { FontAwesome5 } from "@expo/vector-icons";
import Filter from "./Filter";

export default function Header() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>
          Katatak <FontAwesome5 name="cat" size={24} color="black" />
        </Text>
        <FilterToggleButton isEnabled={isEnabled} toggleSwitch={toggleSwitch} />
      </View>
      {isEnabled && <Filter />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent:"space-evenly"
  },
});
