import axios from 'axios';
import { useState, useEffect } from 'react';
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { Link } from 'react-router-dom';

const url = 'https://reqres.in/api/users';

export const TableData = () => {

    const [data, setData] = useState();

    const columnDefs = [
        {
            field: 'avatar',
            cellRenderer: (src) => <img src={(src.value)} alt='imges' height="100px" width="100px" />,

        },
        { field: 'id' },
        { field: 'first_name' },
        { field: 'email' }
    ];


    useEffect(() => {
        axios.get(url).then(response => {
            setData(response.data.data)
        }).catch(err => {
            setData(null);
            console.error(err);
        });


    }, [])

    const defaultColDef = {
        sortable: true
    };

    if (!data) {
        return <p>No data</p>
    }

    return (
        <>
            <div>
                <div style={{ textAlign: "center" }}>
                    <h2>Total User</h2>
                </div>
                <div style={{ textAlign: "right", margin: "10px" }}>
                    <Link to="/create" >
                        <button>Create User</button>
                    </Link>
                </div>
                <div className="ag-theme-alpine" style={{ height: 800, width: 800 }}>
                    <AgGridReact
                        rowData={data}
                        columnDefs={columnDefs}
                        defaultColDef={defaultColDef}
                        rowHeight={100}
                    >
                    </AgGridReact>
                </div>
            </div>
        </>
    )
}