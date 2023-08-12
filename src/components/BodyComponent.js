import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import MultiActionAreaCard from "./cardComponent";
import {Container} from "@mui/material";


export default function ResponsiveGrid() {
    return (
        <Container maxWidth="lg" sx={{display: 'flex', justifyContent: 'space-around',}}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-around',
                paddingTop: 1,

            }}>
                <Grid container spacing={{sm: 2, md: 4}} columns={{xs: 2, sm: 8, md: 12, lg: 16}} sx={{
                    justifyContent: 'center',

                }}>
                    {Array.from(Array(6)).map((_, index) => (
                        <Grid xs={2} sm={4} md={4} key={index} sx={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                            <MultiActionAreaCard/>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
}