function TransferShare({state,account}){
    async function transferShares(event){
        event.preventDefault();
        const {contract} = state;
        const amount = document.querySelector("#amount").value;
        const to = document.querySelector("#to").value;
        try{
            await contract.methods.transferShare(amount,to).send({from: account, gas: "1000000"})
            alert("Transfer successfull")
            window.location.reload();
        }catch(error){
            alert(error)
        }
    }
   
    return<><form onSubmit={transferShares} >
    <label className="label1" htmlFor="to"> Amount: </label>
    <input type="text" id="amount"></input>
    <label className="label1" htmlFor="amount"> Address: </label> 
    <input type="text" id="to"></input>
    <button type="submit">Transfer Share</button>
    </form><br></br></>
   }
   export default TransferShare;