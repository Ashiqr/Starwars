import React, { useEffect } from "react";
import { ReactElement } from "react";
import  { GlobalContext } from '../../context/GlobalContext';
import { StateContextType, personType } from "../../types/state";
import usePersonFetch from "../../hooks/query/usePersonFetch";
import usePersonSearch from "../../hooks/query/usePersonSearch";
import PersonSearch from "./search";
import { Link } from "react-router-dom";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import Box from "@mui/material/Box";
import { Grid, Typography } from "@mui/material";

export default function PersonList(): ReactElement {
    const { state, setPage, setPeople } = React.useContext(GlobalContext) as StateContextType;
    const { data, loading, error, count } = usePersonFetch(state.page);
    const { data: searchResults, loading: searchLoading, error: searchError, count : searchCount } = usePersonSearch(state.query);
    const [paginationModel, setPaginationModel] = React.useState({
        page: 0,
        pageSize: 10,
      });
    const [rowCountState, setRowCountState] = React.useState(state.query ? searchCount : count);
    useEffect(() => {
        setRowCountState((prevRowCountState) =>
            count !== undefined ? count : prevRowCountState,
    );
    }, [count, searchCount, setRowCountState]);

    useEffect(() => {
        setPage((paginationModel.page + 1).toString());
    }, [paginationModel]);

    const columns: GridColDef[] = [
        {
            field: 'name',
            headerName: 'Name',
            width: 350,
        },
        {
            field: 'gender',
            headerName: 'Gender',
            width: 250,
            valueGetter: (params: GridValueGetterParams) =>
                params.value.toString().toUpperCase(),
        },
        {
            field: 'height',
            headerName: 'Height (cm)',
            type: 'number',
            width: 210,
        },
        {
            field: 'mass',
            headerName: 'Mass (kg)',
            type: 'number',
            width: 210,
        },
        {
            field: 'homeworld',
            headerName: 'Home World',
             width: 250,
              valueGetter: (params: GridValueGetterParams) =>
            `${params.row.homeworld.name || ''}`,
        },
        {
            field: 'id',
            headerName: '',
            renderCell: (params) => {
                return <Link to={`/view/${params.value}`}>View</Link>;
            }
        },
      ];
    useEffect(() => {
        return setPeople(state.query ? searchResults ?? [] : data ?? []);
    }, [data, searchResults]);

    const results = state.query ? searchResults ?? [] : data ?? [];

    return (<Box m={2}>
        <Typography variant="h2">Star wars characters</Typography>
        <Grid container justifyContent="flex-end"><PersonSearch /></Grid>
        <Box mx={2} my={3} >
            <DataGrid
                rows={results}
                columns={columns}
                paginationMode="server"
                loading={loading}
                rowCount={rowCountState}
                onPaginationModelChange={setPaginationModel}
                initialState={{
                    pagination: {
                        paginationModel: {
                        pageSize: 10,
                        },
                    },
                    }}
                autoHeight
                pageSizeOptions={[10]}
                disableRowSelectionOnClick
            />
        </Box>
    </Box>)
}
