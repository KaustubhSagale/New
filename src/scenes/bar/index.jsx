import { Box } from "@mui/material";
//import Headerr from "../MyComponents/Headerr";
//../MyComponents
//import Headerr from '../MyComponents/Headerr.jsx';


import BarCharts from "../../MyComponents/BarCharts.jsx";
import Headerr from "../../MyComponents/Headerr.jsx";

const Bar = () => {
  return (
    
    <Box m="20px">
      <Headerr title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarCharts />
      </Box>
    </Box>
  );
};

export default Bar;