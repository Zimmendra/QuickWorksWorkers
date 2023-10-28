import { View, Text, Button } from "react-native";
import React from "react";

const TestButton = (props) => {
  const { test } = props;
  return (
    <Button
      title="Test Button"
      onPress={() => console.log(test, "test button")}
    />
  );
};

export default TestButton;
