

import { Button, Container, Divider, Grid, Link, Typography } from '@mui/material'
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import InstForm from './InstForm';

let list = ['Dfcz', 'Petya', 'party_k1ng']

const Inst = () => {

    const [open, setOpen] = React.useState(false)

    let openForm = () => {
        setOpen(true)
    }

    return (
        <Container sx={{ my: '30px' }} maxWidth='sm'>
            <Typography sx={{ textAlign: 'center' }} variant='h4' color='grey'>Сайт который сделает <strong>+100 подписчиков</strong> инстаграм.</Typography>
            <p></p>
            <Typography>На сайте список аккаунтов инстаграм, те кто внизу списка подписываются на тех кто выше. Для того что бы попасть в список нажми на <Link>кнопку</Link></Typography>
            <p></p>
            <Typography>Новые участники попадают в конец списка и подымается в вверх по мере прибытия новых участников. Список не превышает свыше 101 аккаунта</Typography>
            {open ? <InstForm /> : true}
            {open ? null : <Button sx={{ width: '100%', marginTop: '30px' }} onClick={openForm} variant="contained">Попасть в список</Button>}
            {list.map(el => {
                return (
                    <>
                        <Grid key={el} sx={{ my: '15px' }}>
                            <Link underline="none" href={`https://www.instagram.com/${el}`}>
                                <Typography sx={{ textAlign: 'center' }} variant='subtitle1'>{el}</Typography>
                            </Link>
                        </Grid>
                        <Divider />
                    </>

                )
            })}
        </Container>
    )
}

export default Inst