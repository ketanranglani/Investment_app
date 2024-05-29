import { useState } from "react"
import Body from "./components/Body"
import './index.css'
import Header from "./components/Header"
import Results from "./components/Results"
function App() {
  const [initialInvestment,setInitialInvestment]=useState(0)
  const [annualInvestment,setAnnualInvestment]=useState(0)
  const [expectedReturn,setExpectedReturn]=useState(0)
  const [duration,setDuration]=useState(0)
  console.log("App",typeof(initialInvestment),typeof(annualInvestment),typeof(expectedReturn),typeof(duration))
  return (
    <>
    <Header/>
    <Body setInitialInvestment={setInitialInvestment} setAnnualInvestment={setAnnualInvestment} setExpectedReturn={setExpectedReturn} setDuration={setDuration}/>
    <Results initialInvestment={initialInvestment} annualInvestment={annualInvestment} expectedReturn={expectedReturn} duration={duration}/>
    </>
    
  )
}

export default App
