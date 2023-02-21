function WithdrawAmount({state,account}){
   async function withdrawAmount(){
      const {contract} = state;
      try{
          await contract.methods.withdrawAllEther().send({from: account, gas: 1000000})
          alert("Successfully withdraw all Ethers")
          window.location.reload();
      }catch(error){
          alert(error)
      }
   }
   
    return<>
    <label className="label1" htmlFor="amount">Withdraw Ether: </label>
    <button type="submit" onClick = {withdrawAmount}>Withdraw</button>
    <br></br></>
    
   }
   export default WithdrawAmount;