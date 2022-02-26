import Grid from "@mui/material/Grid";
import * as React from "react";
import Card from "@mui/material/Card";
import {styled} from "@mui/material/styles";
import {Box, CardMedia, Paper} from "@mui/material";
import "../css/player.css";
import Header from "./Header";
import SumplayFooter from "./footer";
import "../css/_HomePageCarousel.scss";
import VideoApp from "./VideoPlayer";
import {Link} from "react-router-dom";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#000",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));
const bull = (
    <Box
        component="span"
        sx={{display: "inline-block", mx: "2px", transform: "scale(0.8)"}}
    >
        •
    </Box>
);

let moviepostersdic = [
    {src: "assets/playerpics/dune.jpg"},
    {src: "assets/playerpics/freeguy.jpg"},
    {src: "assets/playerpics/furious7.jpg"},
    {src: "assets/playerpics/watchmen.jpg"},
    {src: "assets/playerpics/godfather.jpg"},
    {src: "assets/playerpics/inception.jpg"},
    {src: "assets/playerpics/theoryofeverything.jpg"},
    {src: "assets/playerpics/shangchi.jpg"},
    {src: "assets/playerpics/madmax.jpg"},
    {src: "assets/playerpics/kingsmen.jpg"},
];

let actorsdic = [
    {src: "assets/playerpics/daniel.png", real_name: "Daniel Radcliffe", char_name: "as Harry Potter"},
    {src: "assets/playerpics/hagrid.png", real_name: "Marek Obertyn", char_name: "as Hagrid"},
    {src: "assets/playerpics/daniel.png", real_name: "Daniel Radcliffe", char_name: "as Harry Potter"},
    {src: "assets/playerpics/daniel.png", real_name: "Daniel Radcliffe", char_name: "as Harry Potter"},
    {src: "assets/playerpics/daniel.png", real_name: "Daniel Radcliffe", char_name: "as Harry Potter"}
];
export default function Player() {

    let movieposters = moviepostersdic.map((data) => (
        <Link to={"/player"}>
            <Grid item>
                <Card className="popup movie-poster-card">
                    <CardMedia
                        component="img"
                        image={data.src}
                        alt="Paella dish"
                        className="movieposter" alt="poster"
                    />
                </Card>
            </Grid>
        </Link>
    ));

    let actors = actorsdic.map((data) => (
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <Item>
                    <img
                        src={data.src}
                        className="castimg"
                    />
                </Item>
            </Grid>
            <Grid item xs={9}>
                <Item>
                    <p className="castnames">
                        <span className="realname">{data.real_name}</span>
                        <br/>
                        <span className="charname">{data.char_name}</span>
                    </p>
                </Item>
            </Grid>
        </Grid>
    ));

    return (

        <div style={{backgroundColor: "black"}}>
            <Header/>
            <Grid container spacing={2}>
                <Grid item md={8} sm={12}>
                    <div style={
                        {
                            marginTop: "4vw",
                            marginLeft: "3vw"
                        }
                    }>
                        <VideoApp/>
                    </div>
                </Grid>
                <Grid item md={3.8} sm={12}>
                    <div className="moviename">
                        <h1 style={{marginTop:"0"}}>Harry Potter and The Prisioner of Azkaban</h1>
                        <p className="desctitle">Description</p>
                        <p className="desc">
                            Harry Potter, Ron and Hermione return to Hogwarts School of
                            Witchcraft and Wizardry for their third year of study, where they
                            delve into the mystery surrounding an escaped prisoner who poses a
                            dangerous threat to the young wizard.
                        </p>
                        <p className="casttitle">Cast</p>
                        <div className="castrow">
                            <Grid container justifyContent="center">
                                {actors}
                            </Grid>
                        </div>
                    </div>
                    <div className="gradient"/>
                </Grid>
            </Grid>
            <div className="move-up">
                <p className="recommendations">Recommendations</p>
                <Grid container justifyContent="center">
                    {movieposters}
                </Grid>
            </div>
            <SumplayFooter/>
        </div>
    );
}