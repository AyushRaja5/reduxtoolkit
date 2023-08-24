import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Adduser, Deleteall} from '../store/UserSlice';
import DisplayData from './DisplayData';
const userList = [];

const UserDetails = () => {
    const dispatch = useDispatch();
    const [users, setUsers] = useState(userList);
    const[newuser,setnewUser] = useState("");
    const[userclass,setuserclass] = useState("");
    const inputhandle=(e)=>{
       setnewUser(e.target.value);
    }
    const classhandle=(e)=>{
        setuserclass(e.target.value);
     }

    const buttonHandle = () =>{
        if(newuser && userclass){
            setUsers([...users, { id: Date.now(),name:newuser, class:userclass}])
            dispatch(Adduser({id: Date.now(),name:newuser, class:userclass}))
        }   
        setnewUser('')
        setuserclass('')
    }
    const clearAllhandle = () => {
        // console.log('DEleted all data')
        dispatch(Deleteall())
    }
  return (
    <>
        <div className='content'>
            <div className='admin-table'>
                <div className='admin-subtitle'>List of Users</div>
                <input type='text' value={newuser} placeholder='Name' onChange={e=>inputhandle(e)}></input>
                <input type='text' value={userclass} placeholder='Class' onChange={e=>classhandle(e)}></input>
                <button className='btn' onClick={()=>buttonHandle()}>Add New User</button>
            </div>
            <DisplayData/>
            <hr/>
            <button className='btn' onClick={clearAllhandle}>Clear All</button>
        </div>
    </>
  )
}

export default UserDetails