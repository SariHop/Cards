import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid2';

export const CardContainer = styled(Grid)({
    height: '200px',
    width: '380px',
    position: 'relative',
    borderRadius: '4px',
    display: 'flex',
    flexDirection: 'column',
    touchAction: 'none'
});

export const CardContent = styled('div')({
    flex: 1,
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
});

export const CardFooter = styled('div')(({ showColorPicker }) => ({
    padding: '8px',
    display: 'flex',
    justifyContent: showColorPicker ? 'space-evenly' : 'space-between',
    alignItems: 'center',
    backgroundColor: showColorPicker ? 'white' : 'transparent',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)',
}));