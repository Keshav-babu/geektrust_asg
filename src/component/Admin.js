//import {Table,Thead,Tbody,Tfoot,Tr,Th,Td,TableCaption,TableContainer}

import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/table"
import { useState } from "react"



export const Admin=({data,deleteSingleAdmin,handleSearch})=>{
  const [text,setText]=useState("")
    return <div style={{border:"1px solid red"}} >
        <h3>Admin Dashboard</h3>
        <div>
            <input type="text" onChange={(e)=>{handleSearch(e.target.value)}} placeholder="Search by email name role"/>
            <button onClick={()=>handleSearch(text)}>Find</button>
        </div>
        <TableContainer>
    <Table size="lg">
    <Thead>
      <Tr>
        <Th>Sl.</Th>
        <Th>Select</Th>
        <Th>Name</Th>
        <Th>email</Th>
        <Th>Role</Th>
        <Th>Action</Th>
      </Tr>
    </Thead>
    <Tbody>
      {data.map((admin,index)=>(
          <Tr key={admin.id}>
              <Td>{admin.id}</Td>
              <Td> <input type={"checkbox"}  /> </Td>
              <Td>{admin.name}</Td>
              <Td>{admin.email}</Td>
              <Td>{admin.role}</Td>
              <Td> <button onClick={()=>{
                  deleteSingleAdmin(admin.id)
              }} >Delete</button> </Td>
          </Tr>
      ))}
    </Tbody>
    
  </Table>
</TableContainer>
    </div>
}