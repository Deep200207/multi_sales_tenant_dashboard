import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import { leadsData } from '../data/leads';
import { Link } from 'react-router-dom';

export default function Leads() {
    const { user } = useContext(AuthContext);
    const [filter, setFilter] = useState("ALL");
    const leads = leadsData[user.tenant]
    const filterLeads = filter === "ALL" ? leads : leads.filter(l => l.status === filter);;
    return (
        <div style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
            <div>
                <h2  style={{color:'white' , marginTop:'20px' , textAlign:'center'}}>Leads Data</h2>
                <div style={{ marginTop: "20px",display:'flex' }}>
                    <div>
                        <Link to={"/dashboard"} style={{marginRight:"10px", backgroundColor:'white', 
                            padding:"5px", 
                        }}>DashBoard</Link>
                    </div>
                    <select onChange={(e) => setFilter(e.target.value)} style={{
                        outline: "none"
                    }}>
                        <option value='ALL'>
                            ALL
                        </option>
                        <option value='New'>
                            New
                        </option>
                        <option value='Contacted'>
                            Contacted
                        </option>
                    </select>
                </div>
                <table border='2' bgcolor='' cellPadding="8" style={{
                    marginTop: "10px",
                }}
                >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Status</th>
                            <th>Organization</th>
                            {user.role === 'Admin' && <th>Action</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {filterLeads.map(lead => (
                            <tr key={lead.id}>
                                <td>{lead.name}</td>
                                <td>{lead.phone}</td>
                                <td>{lead.status}</td>
                                <td>{user.tenant}</td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
