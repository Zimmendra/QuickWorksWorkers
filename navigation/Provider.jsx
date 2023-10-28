import React, { createContext, useState } from "react";
import { requestUserData } from "../api/userDataRequest";
import { useEffect } from "react";
import { View } from "react-native";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [approvedJob, setApprovedJob] = useState({});
  const [quotationData, setQuotationData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    requestUserData("653c1dcd497699afa869fd0a").then((res) => {
      console.log(res?.data, "user data");
      setUser(res?.data);
      setLoading(true);
    });
  }, []);
  return loading ? (
    <AppContext.Provider
      value={{
        user,
        setUser,
        quotationData,
        setQuotationData,
        approvedJob,
        setApprovedJob,
      }}
    >
      {children}
    </AppContext.Provider>
  ) : (
    <View></View>
  );
};

export default AppProvider;
