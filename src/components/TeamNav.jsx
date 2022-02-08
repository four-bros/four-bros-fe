import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";


export default function TeamNav() {

    const [teams, setTeams] = useState([]);
    const [selected, setSelected] = useState(false)
    const [dropDownClass, setDropDownClass] = useState('cpu_team_links_hidden')


    useEffect(() => {

        const fetchTeams = () => {
            axios.get('http://localhost:5000/teams')
            .then(res => {
                setTeams(res.data.teams)
                console.log(res)
            })
            .catch((e) => {
                console.log(e)
            });
        }
        fetchTeams();

    }, [])

    let userTeams = [];
    let cpuTeams = [];

    teams.forEach( team => {

        let href = `/teams/${team.team_id}`;

        if (team.is_user === true) {
            let a = (
                <a className='user_team_link' href={href}>{team.team_name}</a>
            );
            userTeams.push(a);
        } else {
            let option = (
                <a className="selected_cpu_team" href={href}>{team.team_name}</a>
            );
            cpuTeams.push(option)
        }
    })


    const handleClick = () => {
        if (!selected) {
            setDropDownClass('cpu_team_links_responsive')
        } else {
            setDropDownClass('cpu_team_links_hidden')
        };
        setSelected(!selected)
    };


    const displayTeams = () => {

        if (!teams) {

            let empty_header = React.createElement("h1", {className: "empty_header"}, "Error, no teams found.");
            return empty_header;
        }
        else {

            let user_team_element = (
                <div className='user_team_container'>
                    {userTeams}
                </div>
            );


            let cpu_dropdown = (
                <div className='cpu_team_dropdown_container'>
                    <button className="cpu_dropdown_btn" onClick={handleClick}>
                        Select CPU Team
                        <i class="fa fa-caret-down"></i>
                    </button>
                    <div className={dropDownClass}>
                        {cpuTeams}
                    </div>
                </div>
            ) 

            let component = (
                <div>
                    {user_team_element}
                    {cpu_dropdown}
                </div>
            )


            return component;
        }
    }

    return (
        <div>{displayTeams()}</div>
    )
}
