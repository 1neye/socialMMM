import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

const InstForm = () => {
  return (
    <Grid sx={{my: '15px'}}>
      <Typography variant='subtitle1' component="h2" sx={{ textAlign: 'center', fontWeight: 600, fontSize: '24px' }}>Правила попадения в список</Typography>
      <ul>
        <li><Typography>Открытый аккаунт</Typography></li>
        <li><Typography>Подписка на весь список аккаунтов</Typography></li>
        <li><Typography>убедитесь в правильности никнейма</Typography></li>
      </ul>
      <TextField sx={{width: '100%'}} label="nickname" variant="standard" />
      <Button sx={{ width: '100%', my: '30px' }} variant="contained">Попасть в список</Button>
    </Grid>
  )
}

export default InstForm