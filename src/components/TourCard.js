import Paper from '@mui/material/Paper';
import Box  from '@mui/system/Box';
import Grid  from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Rating } from '@mui/material';
import { AccessTime } from "@mui/icons-material";
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';

const theme = createTheme({
    components: {
        MuiTypography: {
            variants: [
                {
                    props: {
                        variant: "body2"
                    },
                    style: {
                        fontSize: 11,
                    },
                },
                {
                    props: {
                        variant: "body3"
                    },
                    style: {
                        fontSize: 9,
                    },
                },
            ],
        },
    },
})

const TourCard = () => {
    return <Grid item xs={3}>
            <ThemeProvider theme={theme}>
             <Paper elevation={3}>
                 <img className='img' 
                 src="https://www.placecage.com/248/100" 
                 alt='Rage Cage' />
                 <Box paddingX={1}>
                 <Typography component="h2" variant='subtitle1'>
                     Immerse into the Falls
                 </Typography>
                 <Box
                    sx={{
                        display: "flex",
                        alignItems: "center"
                    }}
                 >
                     <AccessTime sx={{ width: 12.5 }} />
                     
                 </Box>
                 <Box
                    sx={{
                        display: "flex",
                        alignItems: "center"
                        }}
                        marginTop={3}
                 >
                    <Rating name="read-only" value={4.5}  precision={0.5} readOnly size='small' /> 
                    <Typography variant='body2' component="p" marginLeft={0.5}>
                         4.5
                     </Typography>
                     <Typography variant='body3' component="p" marginLeft={1.5}>
                         (655 reviews)
                     </Typography>
                 </Box>
                    <Box>
                    <Typography variant="h6" component="h3" marginTop={0}>
                            From C $147
                        </Typography>
                    </Box>
                 </Box>
                 
             </Paper>
             </ThemeProvider>
           </Grid>;
};

export default TourCard;