import Header from "./components/Header";
import MetricsDashboard from "./components/MetricsDashboard";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <p>Click on the links above to see the Kubernetes resources.</p>
      </div>
      <div>
        <MetricsDashboard />
      </div>
    </div>
  );
}

export default App;
