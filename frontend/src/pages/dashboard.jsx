import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Container } from "react-bootstrap";
import { Pie } from "react-chartjs-2";
import { useLocation } from "react-router";
import { useEffect } from "react";  

ChartJS.register(ArcElement, Tooltip, Legend);

function Dashboard() {
  const location = useLocation();
  console.log("This is location", location)
  let score, currentQuestion; 
  useEffect(() => {
    if(location.state){
      // const { score, currentQuestion } = location.state
      score = location.state;
      currentQuestion = location.state.currentQuestion;
    }
  }, [location])
  console.log("score", score);
  console.log("current question number", currentQuestion)
  const data = {
    label: ["Score", "wrong question"],
    datasets : [
      {
        labels: ["correct", "wrong"], 
        // data: [score, (currentQuestion + 1) - score],
        backgroundColor: ["blue", "red"],
        borderColor: "black"
      }
    ]
  };
  const options = {
    responsive : true,
    title : {
      display : true,
      text : "Pia chart"
    },
  }
  return(
    <section id="background">
    <Container fluid className="project-section">
        <div style={ {width: "20%"}}>
          <Pie
            data = {data}
            options={options}
          />
        </div>
    </Container>
    </section>
  )
}

export default Dashboard;