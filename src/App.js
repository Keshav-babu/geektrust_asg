
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import { Admin } from './component/Admin';
import { Pagination } from './component/Pagination';
import {debounce} from "lodash"

function App() {
  const [data,setData]=useState([])
  const [loading,setLoading]=useState(false)
  const [currentPage,setCurrentPage]=useState(1)
  const [dataPerPage]=useState(10)

  useEffect(()=>{
    setLoading(true)
    getData()
    //setLoading(false)
  },[])

  const getData=async ()=>{
    const admins=await axios.get("https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json")
    setData(admins.data)
  }

  const indexOfLastData=currentPage*dataPerPage;
  const indexOfFirstData=indexOfLastData-dataPerPage;
  const currentData=data.slice(indexOfFirstData,indexOfLastData);
  const paginate=(pageNumber)=>{
    setCurrentPage(pageNumber)
  }
  const deleteSingleAdmin=(id)=>{
    setLoading(true)
    let restAdmin=data.filter((data)=>{
      return data.id!==id
    })
    setData(restAdmin)
    console.log(restAdmin)
  }

  const handleSearch=(text)=>{
   const debounce_fun=debounce(()=>findBySearch(text),1000)
   debounce_fun()
  // findBySearch(text)
  }
  const findBySearch=(text)=>{
    const searchedAdmin=data.filter((admin)=>{
      if(admin.name.includes(text) ||admin.email.includes(text) ||admin.role.includes(text)){
        return admin
      }
    })
    console.log(searchedAdmin)
   setData(searchedAdmin)
    
  }

  
  return (
    <div className="App">
      <h3>Geektrust</h3>
      {loading?<Admin data={currentData} handleSearch={handleSearch} deleteSingleAdmin={deleteSingleAdmin}/>:<h3>Loading...</h3>}
      <Pagination dataPerPage={dataPerPage} totaldatas={data.length} paginate={paginate}/>
    </div>
  );
}

export default App;
