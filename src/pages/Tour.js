import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container"
import Box from "@mui/material/Box";
import ImageCollage from "../components/ImageCollage";
import CustomizedAccordions from "../components/Accordian";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BasicModal from "../components/Modal";

const Tour = () => (
<Container sx={ {width: 900} }>
    <Typography variant="h3" component="h1" marginTop={3}>
        Explore the World in Vegas
    </Typography>
    <Box marginTop={3} sx={{display: "flex"}}>
        <img src="https://www.placecage.com/c/200/279" 
        alt="cage"
        width={300}
        height={325}
        />
        <ImageCollage />
    </Box>
    <Box>
        <Typography variant="h6" component="h4" marginTop={3}>
            About this ticket
        </Typography>
        <Typography variant="paragraph" component="p" marginTop={3}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in purus ligula. Morbi vel feugiat velit, a finibus risus. Morbi quam diam, convallis ac pharetra non, cursus sit amet ipsum. Ut sed est posuere elit iaculis euismod vitae ut purus. Cras euismod justo nunc, tincidunt semper tellus gravida sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. In nibh velit, consectetur id lacus nec, malesuada iaculis turpis. Aenean condimentum quam vitae nisl bibendum placerat. Pellentesque posuere porta dui, in elementum est efficitur vel. 
        </Typography>
        </Box>
        <Box marginBottom={10}>
        <Typography variant="h6" component="h4" marginTop={3}>
            Frequently asked questions
        </Typography>
        <CustomizedAccordions />
    </Box>
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation>
            <BasicModal />
        </BottomNavigation>
      </Paper>
</Container>
)




export default Tour;