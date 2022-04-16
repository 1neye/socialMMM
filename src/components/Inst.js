

import { Button, Container, Divider, Grid, Link, Typography } from '@mui/material'
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

let list = ['Dfcz', 'Petya', 'party_k1ng']

const Inst = () => {
    return (
        <Container sx={{ my: '30px' }} maxWidth='xs'>
            <div sx={{ maxWidth: '480px' }}>
                <Typography sx={{ textAlign: 'center' }} variant='h2'>Instagram</Typography>
                {list.map(el => {
                    return (
                        <div>
                            <Grid sx={{ my: '15px' }}>
                                <Link href={`https://www.instagram.com/${el}`}>
                                    <Typography sx={{ textAlign: 'center' }} variant='subtitle1'>{el}</Typography>
                                </Link>
                            </Grid>
                            <Divider />
                        </div>

                    )
                })}
                <Link underline="none"  color="inherit" component={RouterLink} to='form'>
                <Button sx={{ width: '100%', my: '30px' }} variant="contained">Попасть в список</Button>
                </Link>
            </div>
        </Container>
    )
}

export default Inst