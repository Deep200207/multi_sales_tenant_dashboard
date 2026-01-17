import React, { useContext } from 'react'
import { callLogsData } from '../data/callLogs'
import { AuthContext } from '../context/AuthContext'
import { Link } from 'react-router-dom'

export default function Calllog() {
    const {user}=useContext(AuthContext)

    const callLog=callLogsData[user.tenant]

    return (
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <div>
                <h2 style={{textAlign:'center', color:'white', marginTop:'20px'}}>Call Logs Data</h2>
                <table border='2' bgcolor='' cellPadding="1" style={{ marginTop: "10px" }} >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>time</th>
                            <th>duration</th>
                            <th>outcome</th>
                            <th>Organiasation</th>
                            {user.role === 'Admin' && <th>Action</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {callLog.map(lead => (
                            <tr key={lead.id}>
                                <td>{lead.lead}</td>
                                <td>{lead.time}</td>
                                <td>{lead.duration}</td>
                                <td>{lead.outcome}</td>
                                <td>{user.tenant}</td>
                                {user.role === 'Admin' && <td><button style={{padding:"2px"}}>Update</button></td>}
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
                <div style={{display:'flex', justifyContent:'center', marginTop:'10px',
                }}><Link to={'/dashboard'} style={{color:'white'}}>Dashboard</Link></div>
            </div>
        </div>
    )
}
