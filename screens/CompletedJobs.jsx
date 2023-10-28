import React, { useContext, useEffect, useState } from "react";
import {
  SafeAreaView,
  Image,
  ImageBackground,
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import JobCard from "../components/JobCard";
import Menu from "../assets/Menu.svg";
import { requestCompletedJobs } from "../api/completedJobsRequest";
import { AppContext } from "../navigation/Provider";

export default function CompletedJobs({ navigation }) {
  const [isBringingGoods, setIsBringingGoods] = useState(false);
  const [data, setData] = useState([]);
  const { user } = useContext(AppContext);

  const toggleBringingGoods = () => {
    setIsBringingGoods(!isBringingGoods);
  };

  useEffect(() => {
    requestCompletedJobs(user._id).then((res) => {
      console.log(res?.data, "completed jobs");
      setData(res?.data);
    });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 300 }}>
        <ImageBackground
          style={styles.bgimg}
          source={require("../assets/backgroundimg.png")}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.toggleDrawer();
            }}
            style={styles.menu}
          >
            <Menu />
          </TouchableOpacity>

          <Image
            style={styles.img}
            source={require("../assets/CompletedJobs.png")}
          />
          <FlatList
            data={data}
            renderItem={({ item, index }) => (
              <JobCard
                key={index}
                title={item.jobDescription}
                item={item}
                navigation={navigation}
                buttonName={"Job HISTORY"}
              />
            )}
          />
        </ImageBackground>
      </ScrollView>
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
  },
  img: {
    width: "97%",
    height: "40%",
    alignSelf: "center",
    resizeMode: "contain",
  },
  menu: {
    marginTop: 10,
    marginLeft: 10,
  },
  mainView: {
    width: "98%",
    backgroundColor: "#3330E4",
    borderRadius: 20,
    padding: 20,
    marginTop: "20%",
    marginLeft: "1%",
    height: 191,
    alignItems: "center",
    justifyContent: "space-between",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  toggleButton: {
    backgroundColor: "#FFC436",
    padding: 10,
    borderRadius: 10,
    height: 40,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  row2: {
    backgroundColor: "#3330E4",
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: "10%",
    marginLeft: "1%",
    borderRadius: 20,
  },
  logo: {
    backgroundColor: "rgba(0,0,0,0)",
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  column: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
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
