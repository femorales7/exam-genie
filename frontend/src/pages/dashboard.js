import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Container } from "react-bootstrap";
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
    <Container fluid className="project-section">
        <div style={ {width: "20%"}}>
          <Doughnut
            data = {data}
            options={options}
          />
        </div>
    </Container>
  )
}

export default Dashboard;