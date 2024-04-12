import React, { useEffect, useState } from 'react'

import './Home.css';
import { Link } from 'react-router-dom';
import LogoutComponent from '../../Components/LogoutComponent/LogoutComponent';
import { getAdminId } from '../../utils/Localstorage';
import { deleteEmployeeApi, viewMyEmployeeApi } from '../../Api/Employee';

const Home = () => {
  const adminId = getAdminId()
  const [apiData, setapiData] = useState([])

  useEffect(() => {
    viewMyEmployeeApi(adminId).then(res => {
      console.log(res.data.myEmployees);
      setapiData(res.data.myEmployees);
    }).catch(err => {
      console.log(err);
    })
  }, [])

  // console.log("This is API data", apiData);


  return (
    <div className='Mainpage_Container'>
      <div className='Mainpage_Container__inner'>
        <header>
          <Link to={`/add-employee`} className='addEmployee_Button'>Add employee</Link>
        </header>
        <table className="table">
          <thead>
            <tr>
              <th>Sno</th>
              <th>Emp Name</th>
              <th>Department</th>
              <th>Desigination</th>
              <th>Mail</th>
              <th>Number</th>
            </tr>
          </thead>
          <tbody>
            {apiData.map((apiData, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{apiData.name}</td>
                <td>{apiData.name}</td>
                <td>{apiData.designation}</td>
                <td>{apiData.email}</td>
                <td>{apiData.mobileNumber}</td>
                <td>
                  <Link to={`/view-edit-employee/${apiData._id}`}>View / Edit</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <LogoutComponent />
    </div>
  )
}

export default Home