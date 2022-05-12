import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  Platform,
  Dimensions,
} from "react-native";
import { useState } from "react";

import Item from "./src/components/Item";
import Pagination from "./src/components/Pagination";

const { width: windowWidth } = Dimensions.get("window");

const SLIDES = [
  {
    id: 1,
    title: "Envie de burger ?",
    image: require("./assets/burger.png"),
  },
  {
    id: 2,
    title: "Ou de tacos ?",
    image: require("./assets/tacos.png"),
  },
  {
    id: 3,
    title: "Ou alors de pizza ?",
    image: require("./assets/pizza.png"),
  },
  {
    id: 4,
    title: "Commande facilement depuis notre application !",
    image: require("./assets/smartphone.png"),
  },
  {
    id: 5,
    title: "La livraison est offerte lors de ta première commande !",
    image: require("./assets/delivery.png"),
  },
];

export default function App() {
  const [index, setIndex] = useState(0);

  const renderItem = ({ item }) => <Item item={item} />;

  const onScroll = (event) => {
    // Slide width
    const slideSize = windowWidth;
    // Offset
    const n = event.nativeEvent.contentOffset.x / slideSize;
    const roundIndex = Math.round(n);

    // setIndex
    if (index !== roundIndex) {
      setIndex(roundIndex);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={SLIDES}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onScroll={onScroll}
      />
      <Pagination index={index} data={SLIDES} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.height : 0,
  },
});
