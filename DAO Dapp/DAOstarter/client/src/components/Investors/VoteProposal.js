function VoteProposal({state,account}){
  async function voteProposal(event){
    event.preventDefault();
    const {contract} = state;
    const proposalId = document.querySelector("#voteId").value;
    try{
        await contract.methods.voteProposal(proposalId).send({from: account, gas: 1000000})
        alert("Successfully voted for the proposal")
        window.location.reload();
    }catch(error){
        alert(error)
    }
  } 
   
    return<><form onSubmit={voteProposal}>
     <label className="label1" htmlFor="voteId">
      Proposal Id:
        </label>
    <input type="text" id="voteId"></input>
    <button type="submit">Vote</button>
    </form><br></br></>
   }
   export default VoteProposal;