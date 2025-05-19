import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser, fetchAllUsers } from './UsersSlice';
import EditUser from './EditUser';

const TotalUsers = () => {

  const [editState,setEditState]=useState(false);
  const [selectedUser, setSelectedUser] = useState(null)

  const allUsersData = useSelector((state)=>state.user.users);
  
  console.log(allUsersData);

    const dispatch = useDispatch();

  useEffect(()=>{
      dispatch(fetchAllUsers())
  },[dispatch])


  const handleDelete = (userId)=>{
    dispatch(deleteUser(userId));
  }

  

  return (
    <>
    <div className='mt-8'>

      <table class="table-auto w-full">
        <thead className='border border-2'>
          <tr className='p-2'>
            <th className='border border-2'>User Id</th>
            <th className='border border-2'>User Name</th>
            <th className='border border-2'>Email</th>
            <th className='border border-2'>Mobile Number</th>
            <th className='border border-2'>Department</th>
            <th className='border border-2'>Salary</th>
            <th className='border border-2'>Password</th>
            <th className='border border-2'>Role</th>
            <th className='border border-2'>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            allUsersData.map((eachUser,userId)=>(
              <tr key={eachUser.userId} className='border border-2 py-2 px-4'>
                <td className='border border-2'>{eachUser.userId}</td>
                <td className='border border-2'>{eachUser.userName}</td>
                <td className='border border-2'>{eachUser.email}</td>
                <td className='border border-2'>{eachUser.mobileNumber}</td>
                <td className='border border-2'>{eachUser.department}</td>
                <td className='border border-2'>{eachUser.salary}</td>
                <td className='border border-2'>{eachUser.password}</td>
                <td className='border border-2'>{eachUser.role}</td>
                <td className='px-2 border border-2 flex gap-2'>
                  <button className='bg-blue-800  px-2 py-1 rounded' onClick={()=>
                    {
                      setEditState(true);
                      setSelectedUser(eachUser);
                    }}>
                      Edit
                  </button>
                  <button className='bg-red-800  px-2 py-1 rounded' onClick={()=>handleDelete(eachUser.userId)}>Delete</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>

    </div>






          {
            editState && selectedUser&&(
              <div className='fixed top-0 right-[600px] w-[600px] flex justify-center items-center bg-opacity-50 z-50'>
                <div className="w-96 h-[708px] bg-white p-6 shadow-lg relative">
                  <button className='absolute top-2 right-2 text-xl ' onClick={()=>setEditState(false)}>
                    X
                  </button>
                  <EditUser user={selectedUser} setEditState={setEditState} />
                </div>
              </div>
            )
          }






    </>
  )
}

export default TotalUsers
