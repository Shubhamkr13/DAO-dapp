import { useState, useEffect } from "react";
function ProposalList({state}){

   const [list, setList] = useState([]);

   useEffect(() => {
      const {contract} = state
      async function proposalList(){  
         const list = await contract.methods.proposalList().call();
         setList(list)
      }
      contract && proposalList();     
   },[state])

   return<>
   <table>
      <tbody> Proposal List
         {
            list.map((proposal) => {
               return(
                  <tr key={proposal.id}>
                     <td>{proposal.id}</td>
                     <td>{proposal.description}</td>
                     <td>{proposal.amount}</td>
                     <td>{proposal.recipient}</td>
                     <td>{proposal.votes}</td>
                     <td>{proposal.end}</td>
                     <td>{String(proposal.isExecuted)}</td>
                     
                  </tr>
                  

               )
            })
         }
      </tbody>
   </table>
   </>
   }
   
export default ProposalList;