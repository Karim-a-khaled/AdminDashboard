import React, { useState, useEffect } from "react";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";
import Button from "@mui/material/Button";
import { DownloadOutlined } from "@mui/icons-material";
import { Box, Stack, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";

const Dashboard = () => {
  const theme = useTheme();
  const [showRow3, setShowRow3] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowRow3(true);
    }, 1000); // Adjust the timeout duration as needed (in milliseconds)

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Header
          isDashboard={true}
          title={"DASHBOARD"}
          subTitle={"Welcome to your dashboard"}
        />

        <Box sx={{ textAlign: "right", mb: 1.3 }}>
          <Button
            sx={{ padding: "6px 8px", textTransform: "capitalize" }}
            variant="contained"
            color="primary"
          >
            <DownloadOutlined />
            Download Reports
          </Button>
        </Box>
      </Stack>

      <Row1 />
      <Row2 />
      {showRow3 && <Row3 />}
    </div>
  );
};

export default Dashboard;
