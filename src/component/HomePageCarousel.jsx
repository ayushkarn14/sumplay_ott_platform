import {Card, CardMedia, Grid, Box, Button} from "@mui/material"
import "../css/_HomePageCarousel.scss"
import React from "react";
import {toast} from "react-toastify";
import {Link} from "react-router-dom"

const moviepostersdict = [
    {
        portraitImage: "",
        landScapeImage: "",
        name: ""
    },
    {
        portraitImage: "",
        landScapeImage: "",
        name: ""
    },
    {
        portraitImage: "",
        landScapeImage: "",
        name: ""
    },
    {
        portraitImage: "",
        landScapeImage: "",
        name: ""
    },
    {
        portraitImage: "",
        landScapeImage: "",
        name: ""
    },
    {
        portraitImage: "",
        landScapeImage: "",
        name: ""
    },
    {
        portraitImage: "",
        landScapeImage: "",
        name: ""
    },
    {
        portraitImage: "",
        landScapeImage: "",
        name: ""
    },
    {
        portraitImage: "",
        landScapeImage: "",
        name: ""
    },
    {
        portraitImage: "",
        landScapeImage: "",
        name: ""
    }
];

export default function HomePageCarousel() {
    let landscapeMovie = 1;
    const leftArrow = () => {
        if (landscapeMovie > 1) {
            landscapeMovie -= landscapeMovie;
        } else {
            landscapeMovie = 10;
        }
    };

    const rightArrow = () => {
        if (landscapeMovie < 10) {
            landscapeMovie += landscapeMovie;
        } else {
            landscapeMovie = 1;
        }
    };

    return (
        <Grid container style={{
            padding: "0vw 2vw"
        }}>
            <Grid item justifyContent={"center"}>
                <button
                    className="carousel-button">
                    <img src={"assets/svg/arrow.svg"} className={"arrow rotate-180"}/>
                </button>
            </Grid>
            <Grid item className="bg">

                <Box className="sumplay-footer">
                    <Box sx={{flexGrow: 1}}>
                        <Grid container>
                            <Grid item>
                                <Box className="carousel-topic-typography">
                                    Trending in India
                                </Box>
                            </Grid>
                            <Box sx={{flexGrow: 1}}/>
                            <Grid item>
                                <button className='round-button' onClick={() => {
                                }}>
                                    View All
                                </button>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Grid container>
                    <Link to={"/player"}>
                        <Grid item>
                            <Card style={{borderRadius: "2vh"}}
                                  className="popup">
                                <CardMedia
                                    component="img"
                                    image="/assets/moviePosters/endgame2.jpg"
                                    alt="Paella dish"
                                    className="card-image landscape-poster"
                                />
                            </Card>
                        </Grid>
                    </Link>
                    <Link to={"/player"}>
                        <Grid item>
                            <Card style={{
                                borderRadius: "2vh",
                                marginLeft: "2.6vw"
                            }}
                                  className="popup">
                                <CardMedia
                                    component="img"
                                    image="/assets/moviePosters/joker.jpg"
                                    alt="Paella dish"
                                    className="card-image portrait-poster"

                                />
                            </Card>
                        </Grid>
                    </Link>
                    <Link to={"/player"}>
                        <Grid item sx={{display: {xs: "none", md: "flex"}}}>
                            <Card style={{
                                borderRadius: "2vh",
                                marginLeft: "2.6vw"
                            }}
                                  className="popup">
                                <CardMedia
                                    component="img"
                                    image="/assets/moviePosters/se.png"
                                    alt="Paella dish"
                                    className="card-image portrait-poster"

                                />
                            </Card>
                        </Grid>
                    </Link>
                    <Link to={"/player"}>
                        <Grid item sx={{display: {xs: "none", md: "flex"}}}>
                            <Card style={{
                                borderRadius: "2vh",
                                marginLeft: "2.6vw"
                            }}
                                  className="popup">
                                <CardMedia
                                    component="img"
                                    image="/assets/moviePosters/eot.jpg"
                                    alt="Paella dish"
                                    className="card-image portrait-poster"
                                />
                            </Card>
                        </Grid>
                    </Link>
                    <Link to={"/player"}>
                        <Grid item sx={{display: {xs: "none", md: "flex"}}}>
                            <Card style={{
                                borderRadius: "2vh",
                                marginLeft: "2.6vw"
                            }}
                                  className="popup">
                                <CardMedia
                                    component="img"
                                    image="/assets/moviePosters/dune.jpg"
                                    alt="Paella dish"
                                    className="card-image portrait-poster"
                                />
                            </Card>
                        </Grid>
                    </Link>

                </Grid>
            </Grid>
            <Grid item justifyContent={"center"} sx={{display: {xs: "none", md: "flex"}}}>
                <button className="carousel-button">
                    <img src={"assets/svg/arrow.svg"} className={"arrow"}/>
                </button>
            </Grid>
        </Grid>
    );
}
