import "../css/banner.scss";
import Grid from "@mui/material/Grid";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { styled } from "@mui/material/styles";
import { Box, CardMedia, Paper } from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#000",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));
export default function HomePageBanner() {
  return (
    <div>
      <img src="./assets/banner.png" alt="series banner" class="banner-image moving-up" />
      <img src="./assets/stpotrait.png" alt="series banner" class="banner-image-potrait moving-up" />
      <img
        src="./assets/strangerthingslogo.png"
        alt="series title"
        class="title-image"
      />
      <p className="banner-des">
        When a young boy disappears, his mother, a police chief and his friends
        must confront terrifying supernatural forces in order to get him back.
      </p>
      <Grid container className="button-grid" style={{padding:"0"}}>
            {/* <Grid item md={4.8} xs={4.5}>
                
            </Grid>
            <Grid item  md={1.2} xs={3.1}>
            <Button variant="contained" className="bannerbuttons"><span style={{fontSize:"150%"}}>&#9654;</span>&nbsp;Watch Now</Button>
            </Grid>
            <Grid item md={0.1} xs={3.75}>
            </Grid>
            <Grid item md={0.1} xs={4.5}>
            </Grid>
            <Grid item md={1.2} xs={3.1}>
                <Button variant="contained" className="bannerbuttons"><span style={{fontSize:"250%"}}>&#43;</span>&nbsp;Watch Later</Button>
            </Grid>
            <Grid item md={4.8} xs={1.5}>
            </Grid> */}
            <Grid item md={4.7} xs={4}>
                
            </Grid>
            <Grid item  md={1.2} xs={4} className="button-align" justify="center">
                <Button uppercase={false} variant="contained" className="bannerbuttons"><span style={{fontSize:"150%"}}>&#9654;</span>&nbsp;&nbsp;<p><span className="buttontext">Watch Now</span></p></Button>
            </Grid>
            <Grid item sx={{display:{md:"none"}}} xs={4}>
                
            </Grid>
            <Grid item sx={{display:{md:"none"}}} xs={4}>
                
            </Grid>
            <Grid item md={0.2}  sx={{display:{xs:"none", md:"flex"}}} >
                
            </Grid>
            <Grid item md={1.2} xs={4} className="button-align">
                <Button uppercase={false} variant="contained" className="bannerbuttons"><span style={{fontSize:"250%"}}>&#43;</span>&nbsp;&nbsp;<p><span className="buttontext">Watch Later</span></p></Button>
            </Grid>
            <Grid item md={4.7} xs={4}>
                
            </Grid>
        </Grid>
        </div>
    
  );
}
