import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { leadsData } from '../data/leads';
import { callLogsData } from '../data/callLogs';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const { user,logout } = useContext(AuthContext);
  const [filter, setFilter] = useState('ALL')
  // console.log(user
  const tenant = leadsData[user.tenant]
  console.log(leadsData);
  return (
    <>
      <div style={{ backgroundColor: 'white', padding: '20px' }}>
        <div>
          <div style={{ display: "flex", backgroundColor: "white" }}>
            <h3 style={{ width: '70%' }}>Welcome {user?.name}!!</h3>
            <h3 style={{ width: '15%' }}>Role: {user?.role}</h3>
            <h3 style={{ width: '15%'}}>Org: {user?.tenant}</h3>
            <button onClick={()=>logout()} style={{padding:'8px' , backgroundColor:'red', fontWeight:'bold',
              border:'0', color:'white', cursor:'pointer', borderRadius: '5px'
            }}>Logout</button>
          </div>
        </div>
      </div>

      <div style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        textAlign: 'center', marginTop: '50px'
      }}>
        <div>
          <h3 style={{ textAlign: 'center', color: 'white' }}>Lead Data :- <Link to={"/leads"}
            style={{ color: 'black', backgroundColor: 'white', padding: '5px' , borderRadius: '5px'}}>Leads Data</Link>
          </h3>
          <h3 style={{ textAlign: 'center', color: 'white', marginTop:'20px' }}>Call Logs Data:- <Link to={"/calls"}
            style={{ color: 'black', backgroundColor: 'white', padding: '5px', borderRadius: '5px' }}>Call Logs</Link>
          </h3>
        </div>
      </div>
    </>

  )
}
