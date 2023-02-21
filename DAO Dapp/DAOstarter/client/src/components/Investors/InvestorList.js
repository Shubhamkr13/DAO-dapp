import { useState, useEffect } from "react";
function InvestorList({state}){

   const [list, setList] = useState([]);

   useEffect(() => {
      const {contract} = state;
      async function investorsList(){
         const list = await contract.methods.investorsLists().call();
         setList(list);
      }
      contract && investorsList();
   },[state])

   return<>
   <table>
      <tbody> Investor List
         {
            list.map((investorsAddress) => {
               return <tr key={investorsAddress}>{investorsAddress}</tr>
            })
         }
      </tbody>
   </table>
   </>
  }
  export default InvestorList;