import React,{useState,useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { updateUser } from './UsersSlice';

const EditUser = ({ user,setEditState }) => {


  const [formData, setFormData] = useState({
    userName: '',
    email: '',
    mobileNumber: '',
    department: '',
    salary: '',
    password: ''
  });



   useEffect(() => {
    if (user) {
      setFormData({
        userName: user.userName,
        email: user.email,
        mobileNumber: user.mobileNumber,
        department: user.department,
        salary: user.salary,
        password: user.password
      });
    }
  }, [user]);

  const formObj = new FormData();
  for(const[key,value] of Object.entries(formData))
  {
    formObj.append(key,value);
  }

  const dispatch = useDispatch();




  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  
  const handleSubmit= (e)=>{
      e.preventDefault();

      dispatch(updateUser(formObj));

      setFormData({
        userName:'',
        email:'',
        mobileNumber:'',
        department:'',
        salary :'',
        password:''
      })

      setEditState(false)
  }





  return (
    <div className='border border-blue-400 border-4 p-2'>
        <h1 className='text-center text-xl mb-1'>Edit User</h1>
        <form onSubmit={handleSubmit}>
            <div className="mb-4 w-[100%]">
              <label htmlFor="userName" className="block text-sm font-medium text-gray-700">User Name</label>
              <input
                type="text"
                id="userName"
                name="userName"
                value={formData.userName}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              />  
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              /> 
            </div>

            <div className="mb-4">
              <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">Mobile Number</label>
              <input
                type="number"
                id="mobileNumberil"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              /> 
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Department</label>
              <input
                type="text"
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              /> 
            </div>

            <div className="mb-4">
              <label htmlFor="salary" className="block text-sm font-medium text-gray-700">Salary</label>
              <input
                type="number"
                id="salary"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              /> 
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              /> 
            </div>

            <button type='submit' className='text-2xl bg-cyan-500 hover:bg-cyan-600'>Sign UP</button>

        </form>

    </div>
  )
}

export default EditUser
