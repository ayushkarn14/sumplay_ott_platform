import {Card, CardMedia, Grid, Box, Button} from "@mui/material"
import "../css/_HomePageCarousel.scss"
import React, {useState} from "react";
import {toast} from "react-toastify";
import {Link} from "react-router-dom"

const moviepostersdict = [
    {
        portraitImage: "arrival.jpg",
        landScapeImage: "",
        name: ""
    },
    {
        portraitImage: "dune.jpg",
        landScapeImage: "",
        name: ""
    },
    {
        portraitImage: "eot.jpg",
        landScapeImage: "",
        name: ""
    },
    {
        portraitImage: "ff7.jpg",
        landScapeImage: "",
        name: ""
    },
    {
        portraitImage: "inception.jpg",
        landScapeImage: "",
        name: ""
    }
];

export default function HomePageCarousel() {
    const [current, setcurrent] = useState(0);
    const [image1, setImage1] = useState(1);
    const [image2, setImage2] = useState(2);
    const [image3, setImage3] = useState(3);
    const [image4, setImage4] = useState(4);

    const nextSlide = () => {
        setcurrent(current === 4 ? 0 : current + 1);
        setImage1(image1 === 4 ? 0 : image1 + 1)
        setImage2(image2 === 4 ? 0 : image2 + 1)
        setImage3(image3 === 4 ? 0 : image3 + 1)
        setImage4(image4 === 4 ? 0 : image4 + 1)
    };

    const prevSlide = () => {
        setcurrent(current === 0 ? 5 - 1 : current - 1);
        setImage1(image1 === 0 ? 4 : image1 - 1)
        setImage2(image2 === 0 ? 4 : image2 - 1)
        setImage3(image3 === 0 ? 4 : image3 - 1)
        setImage4(image4 === 0 ? 4 : image4 - 1)
    };

    return (
        <div id="parent" style={{padding: "0px", zIndex: '3'}}>
            <div id="child" style={{padding: "0px"}}>
                <Grid container style={{
                    padding: "0vw 1vw"
                }}>
                    <Grid item justifyContent={"center"}>
                        <button onClick={prevSlide}
                                className="carousel-button">
                            <img src={"assets/svg/arrow.svg"} className={"arrow rotate-180"}/>
                        </button>
                    </Grid>
                    <Grid item className="bg">

                        <Box className="sumplay-trending">
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
                                        marginLeft: "2.6vw",
                                        backgroundColor: "transparent"
                                    }}
                                          className="popup">
                                        {moviepostersdict.map((slide, index) => {
                                            return (
                                                <div
                                                    className={index === image1 ? 'slide active' : 'slide'}
                                                    key={index}
                                                >
                                                    {index === image1 && (
                                                        <CardMedia
                                                            component="img"
                                                            image={"/assets/moviePosters/" + slide.portraitImage}
                                                            alt="Paella dish"
                                                            className="card-image portrait-poster"
                                                        />
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </Card>
                                </Grid>
                            </Link>
                            <Link to={"/player"}>
                                <Grid item sx={{display: {xs: "none", md: "flex"}}}>
                                    <Card style={{
                                        borderRadius: "2vh",
                                        marginLeft: "2.6vw",
                                        backgroundColor: "transparent"
                                    }}
                                          className="popup">
                                        {moviepostersdict.map((slide, index) => {
                                            return (
                                                <div
                                                    className={index === image2 ? 'slide active' : 'slide'}
                                                    key={index}
                                                >
                                                    {index === image2 && (
                                                    <CardMedia
                                                        component="img"
                                                        image={"/assets/moviePosters/" + slide.portraitImage}
                                                        alt="Paella dish"
                                                        className="card-image portrait-poster"
                                                    />
                                                        )}
                                                </div>
                                            );
                                        })}
                                    </Card>
                                </Grid>
                            </Link>
                            <Link to={"/player"}>
                                <Grid item sx={{display: {xs: "none", md: "flex"}}}>
                                    <Card style={{
                                        borderRadius: "2vh",
                                        marginLeft: "2.6vw",
                                        backgroundColor: "transparent"
                                    }}
                                          className="popup">
                                        {moviepostersdict.map((slide, index) => {
                                            return (
                                                <div className={index === image3 ? 'slide active' : 'slide'}
                                                     key={index}
                                                >
                                                    {index === image3 && (
                                                    <CardMedia
                                                        component="img"
                                                        image={"/assets/moviePosters/" + slide.portraitImage}
                                                        alt="Paella dish"
                                                        className="card-image portrait-poster"
                                                    />
                                                        )}
                                                </div>
                                            );
                                        })}
                                    </Card>
                                </Grid>
                            </Link>
                            <Link to={"/player"}>
                                <Grid item sx={{display: {xs: "none", md: "flex"}}}>
                                    <Card style={{
                                        borderRadius: "2vh",
                                        marginLeft: "2.6vw",
                                        backgroundColor: "transparent"
                                    }}
                                          className="popup">
                                        {moviepostersdict.map((slide, index) => {
                                            return (
                                                <div className={index === image4 ? 'slide active' : 'slide'}
                                                     key={index}
                                                >
                                                    {index === image4 && (
                                                    <CardMedia
                                                        component="img"
                                                        image={"/assets/moviePosters/" + slide.portraitImage}
                                                        alt="Paella dish"
                                                        className="card-image portrait-poster"
                                                    />
                                                        )}
                                                </div>
                                            );
                                        })}
                                    </Card>
                                </Grid>
                            </Link>

                        </Grid>
                    </Grid>
                    <Grid item justifyContent={"center"}>
                        <button className="carousel-button" onClick={nextSlide}>
                            <img src={"assets/svg/arrow.svg"} className={"arrow"}/>
                        </button>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}
