import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Container } from "react-bootstrap";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function Dashboard(props) {
  const data = {
    label: ["red", "blue"],
    datasets : [
      {
        label: "Dataset 1",
        data: [3, 6],
        backgroundColor: ["red", "blue"],
        borderColor: "black"
      }
    ]
  };
  console.log("It's from dashboard", props);
  const options = {

  }
  return(
    <section id="background">
    <Container fluid className="project-section">
        <div style={ {width: "20%"}}>
          <Doughnut
            data = {data}
            options={options}
          />
        </div>
    </Container>
    </section>
  )
}

export default Dashboard;