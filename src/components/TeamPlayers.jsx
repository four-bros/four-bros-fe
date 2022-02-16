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
        {field: 'class', headerName: 'Class'},
        {field: 'height', headerName: 'Height'},
        {field: 'weight', headerName: 'Weight'}, 
        {field: 'position', headerName: 'Position'}, 
        {field: 'number', headerName: 'Number'}, 
        {field: 'overall', headerName: 'Overall'}, 
    ]
    let tableData = [];

    
    useEffect(() => {

        const fetchPlayers = () => {
            axios.get(`https://four-bros-be.herokuapp.com/teams/${teamId}/roster`)
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
                id: `${p.id}`,
                name: `${p.first_name} ${p.last_name}`, 
                class: `${p.player_year}`,
                height: `${p.height}`,
                weight: `${p.weight}`,
                position: `${p.position}`,
                number: `${p.jersey_number}`,
                overall: `${p.overall}`,

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
