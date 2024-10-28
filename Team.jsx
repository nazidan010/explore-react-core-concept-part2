import { useEffect, useState } from "react"

export default function Team(){
    const [team,setTeam]=useState(11);
    const handleAdd=()=>{
        const newTeam=team+1;
        setTeam(newTeam);
    }
    const handleDeCount=()=>{
        const deCountTeam=team-1;
        setTeam(deCountTeam);
    }
    const teamStyle={
            border: '2px solid purple',
            margin: '15px',
            padding: '15px',
            borderRadius:'15px',
    }
    return(
        <div style={teamStyle}>
            <h3>Players:{team} </h3>
            <button onClick={handleAdd}>Count Players</button>
            <button onClick={handleDeCount}>DeCount Players</button>
        </div>
    )
}