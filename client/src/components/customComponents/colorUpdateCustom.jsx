import { styled } from '@mui/material/styles';

export const ColorCircle = styled('button')(({ bgColor }) => ({
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    backgroundColor: bgColor,
    border: 'none',
    margin: '5px',
    cursor: 'pointer',
    '&:hover': {
        transform: 'scale(1.1)',
    },
    '&:active': {
    transform: 'scale(0.95)',
  },
}));