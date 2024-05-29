import { useState } from "react"
import { calculateInvestmentResults } from "../util/investment"
export default function Results({initialInvestment,annualInvestment,expectedReturn,duration}){
    
    console.log(initialInvestment,typeof(initialInvestment))
    const item={
        initialInvestment:parseInt(initialInvestment),
        annualInvestment:annualInvestment,
        expectedReturn:expectedReturn,
        duration:duration

    }
    // inititalInvestment,annualInvestment,expectedReturn,duration
    // console.log("yes",item)
    const resultz=calculateInvestmentResults(item)
    console.log("From results",resultz)
    console.log("Results",typeof(initialInvestment),typeof(annualInvestment),typeof(expectedReturn),typeof(duration))
    
    return(
        <>
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest(Year)</th>
                    <th>Total Interest</th>
                    <th>Investment Capital</th>
                </tr>
            </thead>
            <tbody>
               {
                resultz.map(itemz=>{
                    return(<tr>
                        <td>{itemz.year}</td>
                        <td>{itemz.annualInvestment}</td>
                        <td>{Math.round(itemz.interest)}</td>
                        <td>{Math.round(itemz.valueEndOfYear)}</td>
                        
                    </tr>)
                })
               }
            </tbody>
        </table>
        </>
    )
}