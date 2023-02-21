function Contribute({state,account}){

  async function contributionFunc(event){
    event.preventDefault();
    const {contract} = state;
    const weiValue = document.querySelector("#weiValue").value;
    try{
      await contract.methods.contribution().send({from: account, value: weiValue, gas: 1000000});
      alert("Contribution successful")
      window.location.reload();

    }catch(error){
      alert(error);
    }
   
  }
  
 return<>

 <form onSubmit={contributionFunc}>
   <label className="label1" htmlFor="weiValue"> Contribution Amount: </label> 
    <input type="text" id="weiValue"></input>
    <button type="submit">Contribute</button>
 </form>
    <br></br></>
}
export default Contribute;