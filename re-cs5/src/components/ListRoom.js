// import axios from "axios";
// import { useEffect, useState } from "react";
// // import { getAll } from "../service/service";

// export default function ListRoom() {
//   const [rooms, setRooms] = useState([]);
//   async function getAllRooms() {
//     const data = await getAll();
//     setRooms(data);
//   }

//   useEffect(() => {
//     getAllRooms();
//   }, []);

//   return (
//     <>
//       <section className="ftco-section">
//         <div className="container">
//           <div className="row justify-content-center">
//             <div className="col-md-6 text-center mb-5">
//               <h2 className="heading-section">List Of Rooms</h2>
//             </div>
//           </div>
//           <div className="row">
//             <div className="col-md-12">
//               <h4 className="text-center mb-4">
//                 Information for Room Services
//               </h4>
//               <div className="table-wrap">
//                 <table className="table">
//                   <thead className="thead-primary">
//                     <tr>
//                       <th>No.</th>
//                       <th>Name</th>
//                       <th>Area of Usage</th>
//                       <th>Cost</th>
//                       <th>Type Of Hiring</th>
//                       <th>Capacity</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {rooms.length > 0 &&
//                       rooms.map((room, index) => {
//                         return (
//                           <>
//                             <tr key={`room_${index}`}>
//                               <td>{index + 1}</td>
//                               <td>{room.name}</td>
//                               <td>{room.area}</td>
//                               <td>{room.cost}</td>
//                               <td>{room.typeOfHiring.name}</td>
//                               <td>{room.maximum}</td>
//                             </tr>
//                           </>
//                         );
//                       })}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
