import React, { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
import { DataGrid, GridToolbar } from '@mui/x-data-grid';


export default function TeamPlayers() {
    const [isLoading, setIsLoading] = useState(true);
    const [players, setPlayers] = useState([]);
    const {teamId} = useParams();
    const [columnFilter, setColumnFilter] = useState('');
    const [positionFilter, setPositionFilter] = useState('');
    const [filter, setFilter] = useState(null)

    const positions = [
        'All',
        'QB', 'RB', 'FB', 'WR', 'TE', 'LT', 'LG', 'C', 'RG', 'RT', 
        'LE', 'RE', 'DT', 'LOLB', 'MLB', 'ROLB', 'CB', 'FS', 'SS',
        'K','P'
    ];

    // Roster table variables
    const tableHeaders = [
        {field: 'name', headerName: 'Name', width: 150, renderCell: (cell) => {
            return (<a href={`/players/${cell.id}`}>{cell.value}</a>)
        }}, 
        {field: 'year', headerName: 'Year'}, 
        {field: 'position', headerName: 'Position'}, 
        {field: 'number', headerName: 'Number'}, 
        {field: 'overall', headerName: 'Overall'}, 
        {field: 'speed', headerName: 'Speed'}, 
        {field: 'strength', headerName: 'Strength'},
        {field: 'agility', headerName: 'Agility'}, 
        {field: 'acceleration', headerName: 'Acceleration'}, 
        {field: 'stamina', headerName: 'Stamina'}, 
        {field: 'awareness', headerName: 'Awareness'}, 
        {field: 'break_tackle', headerName: 'Break Tackle'}, 
        {field: 'trucking', headerName: 'Trucking'}, 
        {field: 'elusiveness', headerName: 'Elusiveness'}, 
        {field: 'bcv', headerName: 'Ball Carrier Vision'}, 
        {field: 'stiff_arm', headerName: 'Stiff Arm'}, 
        {field: 'spin_move', headerName: 'Spin Move'}, 
        {field: 'juke_move', headerName: 'Juke Move'},
        {field: 'carry', headerName: 'Carry'}, 
        {field: 'catch', headerName: 'Catch'}, 
        {field: 'spec_catch', headerName: 'Spec. Catch'}, 
        {field: 'catch_traff', headerName: 'Catch in Traffic'}, 
        {field: 'route_running', headerName: 'Route Running'}, 
        {field: 'jump', headerName: 'Jump'},
        {field: 'throwing_pow', headerName: 'Throwing Power'}, 
        {field: 'throwing_acc', headerName: 'Throwing Acc.'},
        {field: 'pass_block', headerName: 'Pass Blocking'}, 
        {field: 'run_block', headerName: 'Run Blocking'},
        {field: 'impact_block', headerName: 'Impact Blocking'},
        {field: 'tackling', headerName: 'Tackling'}, 
        {field: 'hit_power', headerName: 'Hit Power'}, 
        {field: 'power_moves', headerName: 'Power Moves'},
        {field: 'finesse_moves', headerName: 'Finesse Moves'}, 
        {field: 'block_shed', headerName: 'Block Shedding'}, 
        {field: 'pursuit', headerName: 'Pursuit'}, 
        {field: 'play_rec', headerName: 'Play Rec.'}, 
        {field: 'man_coverage', headerName: 'Man Coverage'},
        {field: 'zone_coverage', headerName: 'Zone Coverage'}, 
        {field: 'press', headerName: 'Press'}, 
        {field: 'release', headerName: 'Release'}, 
        {field: 'kick_power', headerName: 'Kick Power'}, 
        {field: 'kick_acc', headerName: 'Kick Acc.'}, 
        {field: 'kick_return', headerName: 'Kick Return'}, 
        {field: 'injury', headerName: 'Injury'}
    ]
    let tableData = [];

    
    useEffect(() => {

        const fetchPlayers = () => {
            axios.get(`https://four-bros-be.herokuapp.com/players/team/${teamId}`)
            .then(res => {
                setPlayers(res.data.players)
                console.log(res)
            })
            .catch((e) => {
                console.log(e)
            });
            setIsLoading(false);
        }

        fetchPlayers();

    }, []);

    if (!isLoading) {
        players.forEach( p => {
            const row = {
                id: `${p.player_details.id}`,
                name: `${p.player_details.first_name} ${p.player_details.last_name}`, 
                year: `${p.player_details.year}`,
                position: `${p.player_details.position}`,
                number: `${p.player_details.jersey_number}`,
                overall: `${p.player_abilities.overall}`,
                speed: `${p.player_abilities.speed}`,
                strength: `${p.player_abilities.strength}`,
                agility: `${p.player_abilities.agility}`,
                acceleration: `${p.player_abilities.acceleration}`,
                stamina: `${p.player_abilities.stamina}`,
                awareness: `${p.player_abilities.awareness}`,
                break_tackle: `${p.player_abilities.break_tackle}`,
                trucking: `${p.player_abilities.trucking}`,
                elusiveness: `${p.player_abilities.elusiveness}`,
                bcv: `${p.player_abilities.ball_carrier_vision}`,
                stiff_arm: `${p.player_abilities.stiff_arm}`,
                spin_move: `${p.player_abilities.spin_move}`,
                juke_move: `${p.player_abilities.juke_move}`,
                carry: `${p.player_abilities.carry}`,
                catch: `${p.player_abilities.catch}`,
                spec_catch: `${p.player_abilities.spec_catch}`,
                catch_traff: `${p.player_abilities.catch_in_traffic}`,
                route_running: `${p.player_abilities.route_running}`,
                jump: `${p.player_abilities.jump}`,
                throwing_pow: `${p.player_abilities.throwing_power}`,
                throwing_acc: `${p.player_abilities.throwing_accuracy}`,
                pass_block: `${p.player_abilities.pass_blocking}`,
                run_block: `${p.player_abilities.run_blocking}`,
                impact_block: `${p.player_abilities.impact_blocking}`,
                tackling: `${p.player_abilities.tackling}`,
                hit_power: `${p.player_abilities.hit_power}`,
                power_moves: `${p.player_abilities.power_moves}`,
                finesse_moves: `${p.player_abilities.finesse_moves}`,
                block_shed: `${p.player_abilities.block_shedding}`,
                pursuit: `${p.player_abilities.pursuit}`,
                play_rec: `${p.player_abilities.play_recognition}`,
                man_coverage: `${p.player_abilities.man_coverage}`,
                zone_coverage: `${p.player_abilities.zone_coverage}`,
                press: `${p.player_abilities.press}`,
                release: `${p.player_abilities.release}`,
                kick_power: `${p.player_abilities.kick_power}`,
                kick_acc: `${p.player_abilities.kick_accuracy}`,
                kick_return: `${p.player_abilities.kick_return}`,
                injury: `${p.player_abilities.injury}`
            };
            tableData.push(row);
        })
    }


    const displayPositionLinks = () => {

        let buttons = []

        positions.forEach( p => {

            let btn = (
                <button id={`${p}_btn`} value={p} onClick={e => {handleClick(e)}} >{p}</button>
            );

            buttons.push(btn);
        })
        let positionLinks = (
            <div className="position_btns_container">
                { buttons }
            </div>
        )

        return positionLinks;
    }


    const handleClick = (e) => {

        const btnValue = e.target.value;

        console.log(btnValue);

        if (btnValue === 'All') {
            setColumnFilter('');
            setPositionFilter('');
            setFilter({ columnField: '', operatorValue: 'contains', value: '' })
        } else {
            setColumnFilter('position');
            setPositionFilter(btnValue);
            setFilter({ columnField: 'position', operatorValue: 'contains', value: {btnValue}  })
        }

    };


    return (
        <div>
            {displayPositionLinks()}
            <div className="roster_containter" style={{
                height: 700, 
                width: '90%',
                margin: '0 auto 20px auto',
                color: 'white',
                }}>
                <DataGrid
                    rows={tableData}
                    columns={tableHeaders}
                    rowsPerPageOptions={[5, 10, 20, 100]}
                    components={{
                        Toolbar: GridToolbar,
                    }}
                    filterModel={{
                        items: [
                            {filter}
                        ],
                    }}
                    onFilterModelChange={null}
                />
            </div>
        </div>
    )
}
