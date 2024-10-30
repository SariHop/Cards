import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';


export const StyledInput = styled(InputBase)(() => ({
    '& .MuiInputBase-input': {
      border: 'none',
      background: 'transparent',
      color: 'white',
      textAlign: 'center',
      fontSize: '25px',
    },
  }));