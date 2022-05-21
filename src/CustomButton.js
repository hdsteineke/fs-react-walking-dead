import React from 'react';
import Button from '@mui/material/Button';

export default function CustomButton({ children, onClick }) {
  return (
    <Button className='custom-button' onClick={onClick} variant="contained">{children}</Button>
  );
}
