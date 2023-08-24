import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Removeuser } from '../store/UserSlice';

const DisplayData = () => {
    const dispatch = useDispatch()
    const data = useSelector((state)=>{
        return state.user
    })
    console.log(data);
    const removeUser = (id)=>{
        dispatch(Removeuser(id))
    }
    return (
        <div>
            {
                data.map((Single)=>{
                    return(
                        <div className='single-content' style={{display:'flex', justifyContent:'space-between'}} key={Single.id}>
                            <div className='single-user'>Name: {Single.name}   Class: {Single.class}</div>
                            <button className='btn' style={{height:'25px'}} onClick={() => removeUser(Single.id)} >Delet User</button>
                        </div>
                        )
                })
            }
        </div>
    )
}

export default DisplayData