import { Box } from "@mui/material";
import Headerr from "../../MyComponents/Headerr.jsx";
import LineChart from "../../MyComponents/LineChart.jsx";

const Line = () => {
  return (
    <Box m="20px">
      <Headerr title="Line Chart" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;