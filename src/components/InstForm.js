import { Button, Grid, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React from 'react'

const InstForm = (props) => {

  const [input, setInput] = React.useState('')

  const [error, setError] = React.useState(false)

  const [helperText, setHelperText] = React.useState('')

  const onSubmit = async () => {
    
    if(input === '') {
      setError(true)
      setHelperText('incorrect')
    } else {
      setError(false)
      setHelperText('')
      let res = await axios.post(`${process.env.REACT_APP_API}/addList`, {
        account: input
      })
  
      props.fethList()
    }
    
  }

  return (
    <Grid sx={{ my: '15px' }}>
      <Typography variant='subtitle1' component="h2" sx={{ textAlign: 'center', fontWeight: 600, fontSize: '24px' }}>Правила попадения в список</Typography>
      <ul>
        <li><Typography>Открытый аккаунт</Typography></li>
        <li><Typography>Подписка на весь список аккаунтов</Typography></li>
        <li><Typography>убедитесь в правильности никнейма</Typography></li>
      </ul>
      <TextField error={error} helperText={helperText} onChange={(e) => setInput(e.target.value)} sx={{ width: '100%' }} label="nickname" variant="standard" />
      <Button onClick={onSubmit} sx={{ width: '100%', my: '30px' }} variant="contained">Попасть в список</Button>
    </Grid>
  )
}

export default InstForm