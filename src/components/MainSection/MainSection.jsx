import { use } from "react"


export default function MainSection({ticket}) {

   const ticketData = use(ticket)

   console.log(ticketData)
  
  return (
    <div className='w-10/12 mx-auto mt-10'>
      

      <div className="flex gap-10 space-y-3">
       
      <div className="space-y-3">
        <h1>Customer Tickets</h1>
         <div className="grid grid-cols-2 gap-5">
         {
          ticketData.map((data=><div key={data.id}><div className="card card-border bg-base-200 w-96">
  <div className="card-body">
    <div className="flex justify-between">
      <h1 className="text-xl font-bold">{data.title}</h1>
      <h1 className={`px-3 py-1 rounded-xl ${data.status==="Open"?"bg-green-400":"bg-yellow-300"}`}>{data.status}</h1>
    </div>
    <p>{data.description}</p>
    <div className="flex justify-between" >
     <div className="flex gap-3">
      <h1>#{data.id}</h1>
      <h1>{data.priority}</h1>
     </div>
     <div className="flex gap-3">
      <h1>{data.customer}</h1>
      <h1>{data.createdAt}</h1>
     </div>
    </div>
  </div>
</div></div>))
        }
       </div>
      </div>

        <div>

          <div>
            <h1>Task Status</h1>
          </div>
          <div>
            <h1>Resolved Task</h1>
          </div>

        </div>
      </div>
    </div>
  )
}
