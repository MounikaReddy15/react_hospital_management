// import React, { Component } from "react";
// import { Table, Tag, Space } from "antd";

// const PatientDetailk = ({ patient, match }) => {
//   //   const { patient } = props;
//   console.log("patinet", patient.first_name);
//   console.log("params", match.params.id);
//   // const deleteDetails = () => {
//   //   const url = "http://localhost:7000/patients?q=${`patient.first_name`}";
//   //   // console.log("addPatientDetails");
//   //   fetch(url, {
//   //     method: "DELETE",
//   //     //   headers: {
//   //     //     "Content-Type": "application/json",
//   //     //   },

//   //     //   body: JSON.stringify(_data),
//   //   });
//   // };

//   const data = [
//     {
//       first_name: patient.first_name,
//       last_name: patient.last_name,
//       phone: patient.phone,
//       pincode: patient.pincode,
//       key: patient.id,
//       symptons: patient.symptons,
//       diagnosis: patient.diagnosis,
//       medicines: patient.medicines,
//     },
//   ];

//   const columns = [
//     {
//       title: "First Name",
//       dataIndex: "first_name",
//       key: "first_name",
//     },
//     {
//       title: "Last Name",
//       dataIndex: "last_name",
//       key: "last_name",
//     },
//     {
//       title: "Phone",
//       dataIndex: "phone",
//       key: "phone",
//     },
//     {
//       title: "Pincode",
//       dataIndex: "pincode",
//       key: "pincode",
//     },
//     {
//       title: "Symptons",
//       dataIndex: "symptons",
//       key: "symptons",
//     },
//     {
//       title: "Diagnosis",
//       dataIndex: "diagnosis",
//       key: "diagnosis",
//     },
//     {
//       title: "Medicines",
//       dataIndex: "medicines",
//       key: "medicines",
//     },
//     {
//       title: "Action",
//       key: "action",
//       render: (text, record) => (
//         <Space size="middle">
//           {/* <a onClick={deleteDetails}>Delete</a> */}
//         </Space>
//       ),
//     },
//   ];

//   return (
//     <div>
//       <Table columns={columns} dataSource={data} />
//     </div>
//   );
// };

// export default PatientDetailk;
