import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { leadsData } from '../data/leads';

export default function Login() {
    const [ name, setName ] = useState("");
    const [ error, setError ] = useState("");
    const [ role, setRole ] = useState("Agent");
    const [ orgs, setOrg ] = useState("OrgA");
    const { login,user } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogin = () => {
        for (let org in leadsData) {
            for (let lead of leadsData[org]) {
                if (name === lead.userName && role !=="NA" && orgs !== "NA") {
                    console.log(role)
                    login(name,role,orgs);
                    console.log(user)
                    navigate('/dashboard');
                    // console.log(user)
                    return;
                }
            }
        }
        setError("Invalid Details");
    }
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: "center" }}>
                <h1 style={{color:'white', padding:'20px'}}>Login Page</h1>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px', color:'black' }}>
                <div style={{ backgroundColor: "white", padding: "50px", borderRadius: "20px", width: "350px" }}>
                    <label style={{justifyContent:'center', alignItems:"center", display:'flex', color:"red", 
                        fontWeight:"bold"
                    }}>{error}</label>
                    <div style={{ display: 'flex', float: 'right', marginBottom: "20px", marginTop: "20px" }}>
                        <label style={{ padding: "2px", fontWeight: "bold", float: "right" }}>UserName:</label>
                        <div style={{}}>
                            <input type="text" style={{ width: '125px', padding: '3px', outline: "none",}}
                                placeholder='Enter User Name' onChange={(e)=>setName(e.target.value)} />
                        </div>
                    </div>
                    <div style={{ padding: '2px', float: 'right', display:'flex',marginBottom:"20px" }}>
                        <label style={{ fontWeight: "bold" }}>Organization:</label>
                            <select style={{ marginLeft: "2px", padding: "2px", outline: "none", width: '125px' }}
                                onChange={(e) => setOrg(e.target.value)}>
                                <option value="NA">NA</option>
                                <option value="orgA">Organization A</option>
                                <option value="orgB">Organization B</option>
                            </select>
                    </div>
                    <div style={{ padding: '2px', float: 'right' }}>
                            <label style={{ fontWeight: "bold"}}>Role:</label>
                            <select style={{ marginLeft: "2px", padding: "2px", outline: "none", width: '125px' }}
                                onChange={(e) => setRole(e.target.value)}>
                                <option value="NA">NA</option>
                                <option value="Agent">Agent</option>
                                <option value="Admin">Admin</option>
                            </select>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: "center", width: "100%" }}>
                        <div style={{ marginTop: '25px', }}>
                            <h3><button style={{
                                width: '100px', outline: 'none', backgroundColor: 'blue', color: 'white',
                                border: 'none', padding: '5px'
                            }} onClick={handleLogin}>Login</button></h3>
                        </div>
                    </div>
                </div>

                {/* <button onClick={handleClick}>check</button> */}
            </div>
        </div>
    )
}
