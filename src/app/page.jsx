"use client"
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button, Alert, Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useRouter } from 'next/navigation';


const StyledForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
});
const WhiteTextField = styled(TextField)({
  backgroundColor: '#1d1e26',
  borderRadius: '4px',
  '& .MuiInputBase-input': {
    color: 'white', // Text color
  },
  '& .MuiInputLabel-root': {
    color: 'white', // Label color
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white', // Border color
    },
    '&:hover fieldset': {
      borderColor: 'white', // Hover border color
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white', // Focused border color
    },
  },
});
const StyledButton = styled(Button)({
  backgroundColor: '#a9dfd8',
  color: 'black',
  '&:hover': {
    backgroundColor: '#8fcfc8',
  },
});

export default function Home() {
  const { register, handleSubmit } = useForm();
  const [showBanner, setShowBanner] = useState(false);
  const router = useRouter();

  const onSubmit = (data) => {
    console.log(data);
    // Handle login logic here
    router.push('../components/dashboard');
  };

  return (
    <Container maxWidth='xl' sx={{ backgroundColor: '#a9dfd8', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Container className='container' maxWidth="sm" sx={{ backgroundColor: '#21222d', height: '80vh', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '10px' ,boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.75)',color:'white'}}>
        <Box sx={{width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'transparent',color:'white',width:'100%' }}>
          <Typography component="h1" variant="h5" sx={{ color: 'white', mb: 3 }}>
            Login
          </Typography>
          {showBanner && (
            <Alert severity="info" onClose={() => setShowBanner(false)} sx={{ mt: 2, mb: 2 }}>
              Username: sabaasgarian, Password: sabaasgarian
            </Alert>
          )}
          <StyledForm onSubmit={handleSubmit(onSubmit)} sx={{color:'white'}}>
            <WhiteTextField
              {...register('username')}
              label="Username"
              variant="outlined"
              fullWidth
              required
              onFocus={() => setShowBanner(true)}
              InputLabelProps={{
                style: { color: 'white' },
              }}
              InputProps={{
                style: { color: 'white' },
              }}
            />
            <WhiteTextField
              {...register('password')}
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              required
              InputLabelProps={{
                style: { color: 'white' },
                
              }}
              InputProps={{
                style: { color: 'white' },
              }}
            />
            <StyledButton type="submit" variant="contained" color="success" fullWidth>
              Login
            </StyledButton>
          </StyledForm>
        </Box>
      </Container>
    </Container>
  );
}