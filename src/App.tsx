import Calculator from "./components/Calculator"
import barbie from "./assets/barbie.png"

function App() {
  return (
    <div className="container">
      <Calculator/>
      <img src={barbie} width={280} height={669}/>
    </div>
  )
}

export default App
