import Chart from "./components/Chart"
import data from "./data/data"
import "./App.css"

function App() {
  return (
    <div class="container">
      <Chart type="left" data={data}  />
      <Chart type="right" data={data}  />
    </div>
  )
}

export default App