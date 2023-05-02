import React, { useEffect, useState } from "react";
import { ReactElement } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { StateContextType } from "../../types/state";
import { Box, Button, FilledInput, IconButton, InputAdornment } from "@mui/material";
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

export default function PersonSearch(): ReactElement {
    const { setQuery } = React.useContext(GlobalContext) as StateContextType;
    const [searchQuery, setSearchQuery] = useState('');
    const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === 'Enter'){
           search();
        }
    }
    const search = () => {
        setQuery(searchQuery);
    }
    const clear = () => {
        setSearchQuery('');
        setQuery('');
    }
    return(
    <>
        <FilledInput
            placeholder="Search Person"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} 
            onKeyUp={handleKeyPress}
            endAdornment={
              <InputAdornment position="end">
                <CloseOutlinedIcon
                  onClick={clear}
                >
                </CloseOutlinedIcon>
              </InputAdornment>
            }
        />
        <Box mx={2}><Button variant="outlined" onClick={search}>Search</Button></Box>
    </>
    );
};
