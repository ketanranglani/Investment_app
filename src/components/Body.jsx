export default function Body({setInitialInvestment,setAnnualInvestment,setExpectedReturn,setDuration}) {
    function handleChange(event){
        
        event.target.id=="2" ? setAnnualInvestment( parseInt(event.target.value) ): 0
        event.target.id=="3" ? setExpectedReturn(parseInt(event.target.value)): 0
        event.target.id=="4" ? setDuration(parseInt(event.target.value)): 0
        event.target.id=="1" ? setInitialInvestment(parseInt(event.target.value)): 0
        
    }
  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <p>
            <label> Initial investment</label>
            <input id="1" type='number' required onChange={handleChange}/>
          </p>

          <p>
            <label>annual investment</label>
            <input id="2" type="number"  required onChange={handleChange}/>
          </p>
        </div>

        <div className="input-group">
          <p>
            <label>Expected Return</label>
            <input id="3" type="number" required onChange={handleChange}/>
          </p>

          <p>
            <label>Duration</label>
            <input id="4" type="number" required onChange={handleChange}/>
          </p>
        </div>
      </section>
    </>
  );
}
