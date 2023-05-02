import React, { useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { StateContextType, personType } from "../../types/state";
import { Link, useParams } from 'react-router-dom';
import { CardContent, Typography, CardActions, Box, Card, Grid } from "@mui/material";
import '../../App.css';

export default function View(): React.ReactElement {
    const { state, getPerson } = React.useContext(GlobalContext) as StateContextType;
    const [person, setPerson] = useState<personType | null>(null);
    const { id } = useParams();

    useEffect(() => {
        if (id){
            return setPerson(getPerson(id));
        }
    }, [id]);

    if (!person && !id) {
        return(<>Person not found</>)
    }
    if (!person) {
        return(<>Loading...</>)
    }

    const card = (
        <React.Fragment>
          <CardContent>
            <Grid container>
              <Grid item xs={6} textAlign="right">
                <Typography gutterBottom>
                  Name : 
                </Typography>
              </Grid>
              <Grid item xs={6} >
                <Typography  gutterBottom ml={1}>
                  {person.name}
                </Typography>
              </Grid>
              <Grid item xs={6} textAlign="right">
                <Typography gutterBottom>
                  Gender : 
                </Typography>
              </Grid> 
              <Grid item xs={6} >
                <Typography  gutterBottom ml={1}>
                {person.gender.toUpperCase()}
                </Typography>
              </Grid>
              <Grid item xs={6} textAlign="right">
                <Typography  gutterBottom>
                  Height : 
                </Typography>
              </Grid> 
              <Grid item xs={6} >
                <Typography  gutterBottom ml={1}>
                  {person.height ?? 'Unknown'} cm
                </Typography>
              </Grid>
              <Grid item xs={6} textAlign="right">
                <Typography  gutterBottom>
                  Mass : 
                </Typography>
              </Grid> 
              <Grid item xs={6} >
                <Typography  gutterBottom ml={1}>
                  {person.mass ?? 'Unknown'} kg
                </Typography>
              </Grid>
              <Grid item xs={6} textAlign="right">
                <Typography  gutterBottom>
                  Home world :
                </Typography>
              </Grid> 
              <Grid item xs={6} >
                <Typography  gutterBottom ml={1}>
                  {person.homeworld.name}
                </Typography>
              </Grid>
            </Grid> 
          </CardContent>
          <CardActions>
            <Link to={`/`}>Go Back</Link>
          </CardActions>
        </React.Fragment>
      );

    return (
        <Box my={5} mx={5}>
          <Typography variant="h2" textAlign="center" my={2}>
            View person's details
          </Typography>
          <Card variant="outlined">{card}</Card>
        </Box>
      );
};
