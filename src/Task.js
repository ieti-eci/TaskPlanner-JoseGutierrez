import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const OutlinedCard = ({name, description, dueDate}) => {
    const bull = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          •
        </Box>
    );

    const hanldeLearnMore = () => {
        alert('esta característica se encuentra en mantenimiento');
    }
    return (
        <Box sx={{ minWidth: 275 }}>
          <Card variant="outlined" sx={{background: 'linear-gradient(to bottom, rgb(105, 6, 187), rgb(0, 0, 0))'}}>
            <React.Fragment>
                <CardContent>
                <Typography variant="h1" component="div" sx={{ fontSize: 14, color: 'white' }} gutterBottom>
                    {bull}TASK
                </Typography>
                <Typography variant="h5" component="div" sx={{ color: 'white' }}>
                    {name}
                </Typography>
                <Typography sx={{ mb: 1.5 }}  sx={{color: 'white' }}>
                    {description}
                </Typography>
                <Typography variant="body2" sx={{color: 'white' }}>
                    {dueDate}
                </Typography>
                </CardContent>
                <CardActions>
                <Button size="small" onClick={hanldeLearnMore}>Learn More</Button>
                </CardActions>
            </React.Fragment>
          </Card>
        </Box>
      );
}
export default OutlinedCard;
  
