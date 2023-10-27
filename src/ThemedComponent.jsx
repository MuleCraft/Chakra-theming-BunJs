import React from "react";
import { Box, Text, Button } from "@chakra-ui/react";

function ThemedComponent() {
  return (
    <>
      {" "}
      <Box bg="primary.500" p={4}>
        <Text fontFamily="body" color="primary" fontWeight="bold">
          This is a themed component.
        </Text>
        <Button variant="primary" mt={4} fontWeight="bold">
          Themed Button
        </Button>
      </Box>
    </>
  );
}

export default ThemedComponent;
