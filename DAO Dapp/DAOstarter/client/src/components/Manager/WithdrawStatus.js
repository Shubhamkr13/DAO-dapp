function WithdrawSatus({state,account}){
  async function allowFunc(){
    const {contract} = state;
    const _address1 = document.querySelector(".addressAllow").value;
    try{
        await contract.methods.allow(_address1).send({from: account, gas: 1000000})
        alert("You are allowed to withdraw")
        window.location.reload();
    }catch(error){
        alert(error)
    }
  }
  async function disAllowFunc(){
    const {contract} = state;
    const _address2 = document.querySelector(".addressDisallow").value;
    try{
        await contract.methods.disallow(_address2).send({from: account, gas: 1000000})
        alert("You are not allowed to withdraw")
        window.location.reload();
    }catch(error){
        alert(error)
    }
  }

    return<><form onSubmit = {allowFunc}>
    <label className="label1" htmlFor="address">
      Address:
        </label>
    <input type="text" className="addressAllow"></input>
    <button type="submit">Allow</button>
    </form><br></br>
    
    <form onSubmit = {disAllowFunc}>
    <label className="label1" htmlFor="address">
     Address:
        </label>
    <input type="text" className="addressDisallow"></input>
    <button type="submit">Disallow</button>
    </form><br></br></>
   }
   export default WithdrawSatus;