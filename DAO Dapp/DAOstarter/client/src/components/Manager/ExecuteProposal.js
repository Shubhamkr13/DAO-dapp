function ExecuteProposal({state,account}){
  async function executeProposall(event){
    event.preventDefault();
    const {contract} = state;
    const proposalId = document.querySelector("#id").value;
    try{
        await contract.methods.executeProposal(proposalId).send({from: account, gas: 1000000})
        alert("Proposal executed successfully")
        window.location.reload();
    }catch(error){
        alert(error)
    }
  } 

  
    return<><form onSubmit={executeProposall}>
    <label className="label1" htmlFor="amount">
      Proposal Id:
        </label>
    <input type="text" id="id"></input>
    <button type="submit">Execute</button>
    </form><br></br></>
    
   }
   export default ExecuteProposal;