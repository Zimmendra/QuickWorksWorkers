import React, { useEffect, useState } from "react";
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
  Button,
} from "react-native";
import JobCard from "../components/JobCard";
import Menu from "../assets/Menu.svg";
import { requestGetJobs } from "../api/availableJobsRequest";
import LoadingModal from "../components/LoadingModal";

export default function AvailableJobs({ navigation }) {
  const [isBringingGoods, setIsBringingGoods] = useState(false);
  const [loading, setLoading] = useState(false);
  const [jobs, setJobs] = useState([]);

  const toggleBringingGoods = () => {
    setIsBringingGoods(!isBringingGoods);
  };

  useEffect(() => {
    setLoading(true);
    requestGetJobs().then((res) => {
      console.log(res);
      setJobs(res?.data);
      setLoading(false);
    });
    console.log("hello");
  }, []);
  return (
    <View style={styles.container}>
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
        <View style={styles.mainView}>
          <View style={styles.row}>
            <View style={styles.column}>
              <Text style={{ fontSize: 30, color: "white" }}>
                Available Jobs
              </Text>
            </View>
            <View style={styles.column}>
              <Image
                style={styles.logo}
                source={require("../assets/plumber.png")}
              />
            </View>
          </View>
        </View>

        <FlatList
          data={jobs}
          contentContainerStyle={{ paddingBottom: 300 }}
          renderItem={({ item, index }) => (
            <JobCard
              title={item.jobDescription}
              key={index}
              item={item}
              navigation={navigation}
              buttonName={"View Job"}
            />
          )}
        />
      </ImageBackground>

      <LoadingModal visible={loading} />
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
