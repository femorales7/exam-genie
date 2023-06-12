import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function Dashboard() {
  const data = {
    label: ["red", "orange", "blue"],
    datasets : [
      {
        label: "Dataset 1",
        data: [3, 6, 9],
        backgroundColor: ["red", "orange", "blue"],
        borderColor: "black"
      }
    ]
  };

  const options = {

  }
  return(
    <div style={ {width: "20%"}}>
      <Doughnut
        data = {data}
        options={options}
      />
    </div>
  )
}

export default Dashboard;