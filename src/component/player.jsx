import Grid from "@mui/material/Grid";
import * as React from "react";
import Card from "@mui/material/Card";
import {styled} from "@mui/material/styles";
import {Box, CardMedia, Paper} from "@mui/material";
import "../css/player.scss";
import Header from "./Header";
import SumplayFooter from "./footer";
import "../css/_HomePageCarousel.scss";
import VideoApp from "./VideoPlayer";
import {Link} from "react-router-dom";
import useDocumentTitle from "../documentTitle";

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
    {portraitImage: "dune.jpg", name: "dune", landScapeImage: "duneland.jpg"},
    {portraitImage: "free-guy.jpg", name: "Freeguy", landScapeImage: "free-guyland.jpg"},
    {portraitImage: "FF7.jpg", name: "Furious 7", landScapeImage: "ff7land.jpg"},
    {portraitImage: "wm.jpg", name: "Watchmen", landScapeImage: "wmland.jpg"},
    {portraitImage: "godfather.jpg", name: "Godfather", landScapeImage: "godfatherland.jpg"},
    {portraitImage: "inception.jpg", name: "Inception", landScapeImage: "inceptionland.jpg"},
    {portraitImage: "te.jpg", name: "Theory Of Everything", landScapeImage: "teland.jpg"},
    {portraitImage: "shangchi.jpg", name: "Shang Chi", landScapeImage: "shangchiland.jpg"},
    {portraitImage: "madmax.jpg", name: "Madmax", landScapeImage: "madmaxland.png"},
    {portraitImage: "eot.jpg", name: "Edge Of Tomorrow", landScapeImage: "eotland.jpg"},
    {portraitImage: "interstellar.jpg", name: "Interstellar", landScapeImage: "interstellarland.jpg"},
    {portraitImage: "Okja.png", name: "Okja", landScapeImage: "Okjaland.jpg"},
    // {src: "kingsmen.jpg", name: "Kingsmen"},
    // {src: "arrival.jpg", name: "Arrival"},
    // {src: "endgame.jpg", name: "Avengers: Endgame"},
    // {src: "eot.jpg", name: "Edge of Tomorrow"},
    // {src: "ironman.png", name: "Ironman"},
    // {src: "godfather.jpg", name: "Godfather"},
    // {src: "harrypotter.jpg", name: "Harry Potter and The Prisoner of Azkaban"},
    // {src: "inception.jpg", name: "Inception"},
    // {src: "interstellar.jpg", name: "Interstellar"},
    // {src: "joker.jpg", name: "Joker"},
    // {src: "kgf.jpg", name: "KGF"},
    // {src: "matrix.jpg", name: "Matrix"},
    // {src: "moneyheist.jpg", name: "Money Heist"},
    // {src: "Okja.png", name: "Okja"},
    // {src: "pk.jpg", name: "PK"},
    // {src: "punisher.jpg", name: "Punisher"}
];

let actorsdic = [
    {src: "yash.png", real_name: "Yash Chauhan", char_name: "as Randomrofi"},
    {src: "ayush.png", real_name: "Ayush Karn", char_name: "as Rok Vin"},
    {src: "yash2.png", real_name: "Randomrofi", char_name: "as Yash Chauhan"},
    {src: "rick.png", real_name: "Rick Astley", char_name: "as Rickky"},
    {src: "girl.png", real_name: "Kristin Seifert", char_name: "as Larki"},
    {src: "bartender.png", real_name: "Clive Clarke", char_name: "as Bartender"},
    {src: "black.jpg", real_name: "", char_name: ""}
];
export default function Player() {
    let name;
    let landscape;
    const queryParams = new URLSearchParams(window.location.search)
    name = queryParams.get("name") === null ? "Harry Potter and The Prisioner of Azkaban" : queryParams.get("name");
    landscape = queryParams.get("lndimg") == null ? "endgame2.jpg" : queryParams.get("lndimg");
    useDocumentTitle(name);

    let movieposters = moviepostersdic.map((data) => (
        <Link to={`/player?name=${data.name}&lndimg=${data.landScapeImage}`} onClick={() => setTimeout(function () {
            window.location.reload()
        }, 500)}>
            <Grid item>
                <Card className="popup movie-poster-card movieposter">
                    <CardMedia
                        component="img"
                        image={`assets/moviePosters/${data.portraitImage}`}
                        alt={data.name}
                        className="movieposter"
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
                        src={`assets/playerpics/${data.src}`}
                        className="castimg"
                    />
                </Item>
            </Grid>
            <Grid item xs={9}>
                <Item>
                    <p className="castnames">
                        <p className="realname">{data.real_name}</p>
                        <p className="charname">{data.char_name}</p>
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
                    <div style={{marginTop: "4vw", marginLeft: "3vw"}}>
                        <VideoApp/>
                    </div>
                </Grid>
                <Grid item md={3.8} sm={12}>
                    <div className="moviename" id="des-div">
                        <h1 style={{marginTop: "0"}}>{name}</h1>
                        <p className="desctitle">Description</p>
                        <p className="desc">
                            Rickrolling or a Rickroll, is an Internet meme involving pranking an unexpected appearance
                            of the music video for the 1987 song "Never Gonna Give You Up," performed by the English
                            singer Rick Astley. The meme is a type of bait and switch, usually using a disguised
                            hyperlink that leads to the music video. When victims click on a seemingly unrelated link,
                            the site with the music video loads instead of what was expected, and they have been
                            "Rickrolled".
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