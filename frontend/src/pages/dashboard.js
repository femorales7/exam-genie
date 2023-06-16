import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Container } from "react-bootstrap";
import { Doughnut } from "react-chartjs-2";
import { useLocation } from "react-router";

ChartJS.register(ArcElement, Tooltip, Legend);

function Dashboard() {
  const location = useLocation();
  const { score, currentQuestion } = location.state
  console.log(score, currentQuestion);
  const data = {
    label: ["Score", "Total Question"],
    datasets : [
      {
        label: "Results",
        data: [score, currentQuestion],
        backgroundColor: ["red", "blue"],
        borderColor: "black"
      }
    ]
  };
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