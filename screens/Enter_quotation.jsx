import React, { useContext, useEffect, useState } from "react";
import {
  Pressable,
  Image,
  ImageBackground,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import { AntDesign } from "@expo/vector-icons"; // Import the AntDesign icons
import { AppContext } from "../navigation/Provider";

export default function EnterQuotation({ navigation, route }) {
  const { quotationData, setQuotationData } = useContext(AppContext);

  const [quotation, setQuotation] = useState(quotationData);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  //Add Quotation
  const addQuotation = (payload) => {
    console.log("addQuotation", payload);
    setQuotation([...quotation, payload]);
  };

  //Remove Quotation
  const removeQuotation = (index) => {
    console.log("removeQuotation");
    let temp = [...quotation];
    temp.splice(index, 1);
    setQuotation(temp);
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bgimg}
        source={require("../assets/backgroundimg.png")}
      >
        <FlatList
          contentContainerStyle={{ paddingBottom: 300 }}
          data={quotation}
          renderItem={({ item, index }) => (
            <View style={styles.mainView}>
              <View style={styles.row}>
                <View style={styles.column}>
                  <Text style={styles.label}>Item Name</Text>
                  <TextInput
                    value={item.name}
                    editable={false}
                    style={styles.input}
                  />
                </View>
                <View style={styles.column}>
                  <Text style={styles.label}>Quantity</Text>
                  <TextInput
                    value={item.quantity}
                    editable={false}
                    style={styles.input}
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.column}>
                  <Text style={styles.label}>Price</Text>
                  <TextInput
                    value={item.price}
                    editable={false}
                    style={styles.input}
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.row}>
                  <TouchableOpacity
                    onPress={() => {
                      removeQuotation(index);
                    }}
                    style={styles.deleteIconContainer}
                  >
                    {/* Delete Icon */}
                    <AntDesign name="delete" size={24} color="white" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
          ListFooterComponent={
            <View style={styles.mainView}>
              <View style={styles.row}>
                <View style={styles.column}>
                  <Text style={styles.label}>Item Name</Text>
                  <TextInput
                    value={name}
                    onChangeText={setName}
                    style={styles.input}
                  />
                </View>
                <View style={styles.column}>
                  <Text style={styles.label}>Quantity</Text>
                  <TextInput
                    value={quantity}
                    onChangeText={setQuantity}
                    style={styles.input}
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.column}>
                  <Text style={styles.label}>Price</Text>
                  <TextInput
                    value={price}
                    onChangeText={setPrice}
                    style={styles.input}
                    keyboardType="numeric"
                  />
                </View>
                <View style={styles.row}></View>
              </View>
            </View>
          }
        />

        <View style={styles.row2}>
          <View style={styles.column}>
            <TouchableOpacity
              onPress={() => {
                setQuotationData(quotation);
                navigation.goBack();
              }}
              style={styles.Button}
            >
              <Text style={{ color: "white", fontSize: 15 }}>Save Item</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.column}>
            <TouchableOpacity
              onPress={() => {
                addQuotation({
                  name: name,
                  price: price,
                  quantity: quantity,
                });
                setName("");
                setPrice("");
                setQuantity("");
              }}
              style={styles.Button}
            >
              <Text style={{ color: "white", fontSize: 15 }}>Add Items</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.column}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              style={styles.Button}
            >
              <Text style={{ color: "white", fontSize: 15 }}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bgimg: {
    flex: 1,
    width: width,
    height: height,
    paddingTop: 50,
  },
  mainView: {
    width: "98%",
    backgroundColor: "#3330E4",
    borderRadius: 20,
    padding: 20,
    marginTop: 10,
    marginLeft: "1%",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  row2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    marginLeft: "1%",
  },
  column: {
    flex: 1,
    flexDirection: "column",
  },
  label: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  deleteIconContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "red",
  },
  input: {
    height: 40,
    width: 80,
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 5,
  },
  emptyView: {
    width: 30, // Width same as delete icon container
  },
  Button: {
    backgroundColor: "#FFC436",
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    height: 53,
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
  },
});
