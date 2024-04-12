import React, { useEffect, useState } from 'react'
import './EditEmployee.css'
import { Link, useNavigate, useParams } from 'react-router-dom'
import LogoutComponent from '../../Components/LogoutComponent/LogoutComponent'
import { deleteEmployeeApi, updateEmployeeApi, viewIndiEmployeeApi } from '../../Api/Employee'

const EditEmployee = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [formData, setformData] = useState({
    name: "",
    department: "",
    designation: "",
    mail: "",
    mobileNumber: ""
  })

  useEffect(() => {
    viewIndiEmployeeApi(id).then(res => {
      console.log(res.data.myEmployee);
      setformData({
        name: res.data.myEmployee.name,
        department: res.data.myEmployee.department,
        designation: res.data.myEmployee.designation,
        mail: res.data.myEmployee.email,
        mobileNumber: res.data.myEmployee.mobileNumber
      })
    }).catch(err => {
      console.log(err);
    })
  }, [1])

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setformData({
      ...formData,
      [name]: value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(formData);

    updateEmployeeApi(id, formData).then(res => {
      console.log(res);
      navigate('/')
    }).catch(err => {
      console.log(err);
    })
  }

  const handleDelete = () => {
    deleteEmployeeApi(id).then(res => {
      console.log(res);
      navigate('/')
    }).catch(err => {
      console.log(err);
    })
  }

  return (
    <div className='Home_container'>
      <div className='Home_container__inner'>
        <h3>View and Edit employee data</h3>
        <form onSubmit={onSubmit}>
          <input
            name='name'
            type='text'
            placeholder='Your name'
            onChange={handleChange}
            required
            value={formData.name}
          />
          <input
            name='mail'
            type='email'
            placeholder='Mail'
            onChange={handleChange}
            required
            value={formData.mail}
          />
          <input
            name='mobileNumber'
            type='tel'
            placeholder='Mobile Number'
            onChange={handleChange}
            required
            value={formData.mobileNumber}
          />
          <select
            name='department'
            value={formData.department}
            onChange={handleChange}
          >
            <option>HR and Payroll</option>
            <option>Developer</option>
            <option>Devops</option>
          </select>
          <select
            name='designation'
            value={formData.designation}
            onChange={handleChange}
          >
            <option>Junior</option>
            <option>Senior</option>
            <option>TL</option>
            <option>Manager</option>
          </select>

          <button className='formPrimaryButton' type='submit'>
            Update Employee
          </button>

          <button className='formDeleteButton' onClick={handleDelete}>
            Delete Employee
          </button>
          <Link to={`/`}>Back</Link>
        </form>
      </div>
      <LogoutComponent />
    </div>
  )
}

export default EditEmployee