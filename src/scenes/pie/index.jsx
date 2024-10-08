import { Box } from "@mui/material";
// import Header from "../../components/Header";
// import PieChart from "../../components/PieChart";
import Headerr from "../../MyComponents/Headerr.jsx";
import PieChart from "../../MyComponents/PieChart.jsx";

const Pie = () => {
  return (
    <Box m="20px">
      <Headerr title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;