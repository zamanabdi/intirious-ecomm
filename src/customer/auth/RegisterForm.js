import { Button, Grid, TextField } from '@mui/material'
import React from 'react'

function RegisterForm() {
    const handleSubmit = {

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <Grid container spacing={3} >
                <Grid item xs={12} sm={6}>
                    <TextField required
                    id='firstName'
                    name='firstName'
                    label='First Name'
                    fullWidth
                    autoComplete='given-name' /> 

                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField required
                    id='lastName'
                    name='lastName'
                    label='Last Name'
                    fullWidth
                    autoComplete='given-name' /> 

                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField required
                    id='email'
                    name='email'
                    label='Email'
                    fullWidth
                    autoComplete='email' /> 

                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField required
                    id='password'
                    name='password'
                    label='Password'
                    fullWidth
                    autoComplete='password' /> 

                </Grid>
                <Grid item xs={12}>
                    <Button 
                    className='bg-[#9155FD] w-full'
                    type='submit'
                    variant='contained'
                    size='large'
                    sx={{padding:".8rem 0"}}>
                        Register
                    </Button>


                </Grid>

            </Grid>

        </form>

    </div>
  )
}

export default RegisterForm