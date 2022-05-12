import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Pagination({ index, data }) {
  return (
    <View style={styles.container}>
      {data.map((slide, idx) => (
        <View
          key={idx}
          style={[
            styles.dot,
            index === idx ? styles.dotActive : styles.dotInactive,
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    position: "absolute",
    bottom: 50,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 3,
  },
  dotActive: {
    backgroundColor: "blue",
  },
  dotInactive: {
    backgroundColor: "grey",
  },
});
