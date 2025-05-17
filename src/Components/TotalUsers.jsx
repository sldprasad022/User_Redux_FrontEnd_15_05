import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllUsers } from './UsersSlice';

const TotalUsers = () => {

  const allUsersData = useSelector((state)=>state.user.users);

  console.log(allUsersData);

    const dispatch = useDispatch();

  useEffect(()=>{
      dispatch(fetchAllUsers())
  },[dispatch])

  return (
    <div className=''>

      <table class="table-auto">
        <thead>
          <tr>
            <th>User Id</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Password</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {
            allUsersData.map((eachUser,index)=>(
              <tr key={eachUser.index}>
                <td>{eachUser.userId}</td>
                <td>{eachUser.userName}</td>
                <td>{eachUser.email}</td>
                <td>{eachUser.mobileNumber}</td>
                <td>{eachUser.department}</td>
                <td>{eachUser.salary}</td>
                <td>{eachUser.password}</td>
                <td>{eachUser.role}</td>
              </tr>
            ))
          }
        </tbody>
      </table>

    </div>
  )
}

export default TotalUsers
