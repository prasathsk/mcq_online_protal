import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Container } from '@mui/material';
import axios from 'axios';

function DataTableApi() {
    const [user, setUser] = useState([]);
    const [firstPage, setFirstPage] = useState(0);
    const [lastPage, setLastPage] = useState(0);

    useEffect(() => {
        getUser();
    }, [])

    const getUser = () => {
        axios.get('https://meithee.in/hihres/api/position/open')
            .then((data) => {
                setUser(data.data.data.data);
                setFirstPage(data.data.data.current_page);
                setLastPage(data.data.data.last_page);
            })
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 40 },
        { field: 'prospect_id', headerName: 'Prospect Id', width: 90 },
        { field: 'candidate_type', headerName: 'Candidate Type', width: 90 },
        { field: 'created_by', headerName: 'CreatedBy', width: 90 },
        { field: 'job_title', headerName: 'Job Title', width: 140 },
        { field: 'role_type', headerName: 'Role Type', width: 90 },
        { field: 'work_location', headerName: 'Work Location', width: 90 },
        { field: 'job_location_country', headerName: 'Job Location Country', width: 90 },
        { field: 'job_location_state', headerName: 'Job Location State', width: 90 },
        { field: 'job_location_city', headerName: 'Job Location City', width: 90 },
        { field: 'ado_id', headerName: 'Ado Id', width: 90 },
        { field: 'status', headerName: 'Status', width: 90 },
        { field: 'applicant_count', headerName: 'Applicant Count', width: 90 },
        { field: 'created_at', headerName: 'Created At', width: 140 },
    ]

    // const rows = [
    //     {
    //         id: 1, prospect_id: 'null', created_by: 'null', job_title: "JAVA", role_type: "Permanent", work_location: "Onsite",
    //         job_location_country: "India", job_location_state: "Tamil nadu", job_location_city: "Erode"
    //     }
    // ]

    return (
        <div style={{ marginTop: '8%' }}>
            <Container>
                <p>Data Table</p>
                <DataGrid
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: { page: firstPage, pageSize: 5 },
                        },
                    }}
                    pageSizeOptions={[5, 10]}
                    rows={user}
                />
            </Container>
        </div>
    )
}

export default DataTableApi;