function ReedemShare({state,account}){
    async function redeemShare(event){
        event.preventDefault();
        const {contract} = state;
        const amount = document.querySelector("#amount").value;
        try{
            await contract.methods.redeemShare(amount).send({from: account, gas: 1000000})
            alert("Redeem successfull")
            window.location.reload();
        }catch(error){
            alert(error)
        }
    }

    return<><form onSubmmit={redeemShare}>
         <label className="label1" htmlFor="amount">
      Number of Shares:
        </label>
    <input type="text" id="amount"></input>

    <button type="submit">Reedem Share</button>
    </form><br></br></>
}
export default ReedemShare;