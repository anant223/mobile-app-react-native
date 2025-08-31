import React from "react";
import {SafeAreaView, useColorScheme, ScrollView} from "react-native"
import FlatCards from "./src/components/FlatCards";
import ElevatedCards from "./src/components/ElevatedCards";
import FancyCard from "./src/components/FancyCard";
import ActionCard from "./src/components/ActionCard";
import ContactList from "./src/components/ContactList";

const App = () => {
  const color = useColorScheme() === "dark"
  return (
    <SafeAreaView style={{backgroundColor:"black"}} >
      <ScrollView>
        <FlatCards/>
        <ElevatedCards/>
        <FancyCard/>
        <ActionCard/>
        <ContactList/>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App