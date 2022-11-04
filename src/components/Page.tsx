import React from "react";
import { Box } from "@mui/material";

type Props = {
  children: React.ReactNode;
};

const Page: React.FC<Props> = ({ children }) => {
  return (
    <Box
      sx={{
        backgroundColor: "rgb(220, 220, 220)",
        minHeight: "100vh",
      }}
      p={6}
    >
      {children}
    </Box>
  );
};

export default Page;
