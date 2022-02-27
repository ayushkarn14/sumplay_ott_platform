import React from "react";
import {Grid, Box} from '@mui/material';
import "../css/footer.css"

export default function SumplayFooter() {
    return <footer className="footer-up">
        <Box className="sumplay-footer">
            <Box width={"90vw"} height={"3px"} className="footer-line"/>
            <Box sx={{flexGrow: 1}} width="90vw" className="content-box">
                <Grid container >
                    <Grid item>
                        <Box>
                            © 2022. Made with ❤ by Sumplay.
                        </Box>
                    </Grid>
                    <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}/>
                    <Grid item>
                        <Box>
                            Powered by React.js<img src={"assets/svg/logo.svg"} width="30px"/>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    </footer>
}
