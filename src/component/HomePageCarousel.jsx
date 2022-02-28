import {Card, CardMedia, Grid, Box, Button} from "@mui/material"
import "../css/_HomePageCarousel.scss"
import React, {useState} from "react";
import {toast} from "react-toastify";
import {Link} from "react-router-dom"

const moviepostersdict = [[
    {
        portraitImage: "arrival.jpg",
        landScapeImage: "arrivalland.jpg",
        name: "Arrival"
    },
    {
        portraitImage: "dune.jpg",
        landScapeImage: "duneland.jpg",
        name: "Dune"
    },
    {
        portraitImage: "eot.jpg",
        landScapeImage: "eotland.jpg",
        name: "Edge Of Tomorrow"
    },
    {
        portraitImage: "ff7.jpg",
        landScapeImage: "ff7land.jpg",
        name: "Fast And Furious 7"
    },
    {
        portraitImage: "inception.jpg",
        landScapeImage: "inceptionland.jpg",
        name: "Inception"
    },
    {
        portraitImage: "free-guy.jpg",
        landScapeImage: "free-guyland.jpg",
        name: "Free guy"
    },
    {
        portraitImage: "harrypotter.jpg",
        landScapeImage: "harrypotterland.jpg",
        name: "Harry Potter"
    },
    {
        portraitImage: "interstellar.jpg",
        landScapeImage: "interstellarland.jpg",
        name: "Interstellar"
    },
    {
        portraitImage: "kgf.jpg",
        landScapeImage: "kgfland.jpg",
        name: "KGF"
    },
    {
        portraitImage: "pk.jpg",
        landScapeImage: "pkland.jpg",
        name: "PK"
    }]
];

export default function HomePageCarousel(props) {
    const [current, setCurrent] = useState(0);
    const [image1, setImage1] = useState(1);
    const [image2, setImage2] = useState(2);
    const [image3, setImage3] = useState(3);
    const [image4, setImage4] = useState(4);

    const nextSlide = () => {
        setCurrent(current === 4 ? 0 : current + 1);
        setImage1(image1 === 4 ? 0 : image1 + 1)
        setImage2(image2 === 4 ? 0 : image2 + 1)
        setImage3(image3 === 4 ? 0 : image3 + 1)
        setImage4(image4 === 4 ? 0 : image4 + 1)
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? 5 - 1 : current - 1);
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
                            <Grid item>
                                <Card style={{borderRadius: "2vh"}}
                                      className="popup">

                                {moviepostersdict[0].map((slide, index) => {
                                    return (
                                        <div
                                            className={index === current ? 'slide active' : 'slide'}
                                            key={index}
                                        >
                                            {index === current && (
                                                <Link to={`/player?name=${slide.name}&lndimg=${slide.landScapeImage}`}>
                                                    <CardMedia
                                                        component="img"
                                                        image={"/assets/moviePosters/" + slide.landScapeImage}
                                                        alt="Paella dish"
                                                        className="card-image landscape-poster"
                                                    />
                                                </Link>
                                            )}
                                        </div>
                                    );
                                })}
                                </Card>
                            </Grid>
                            <Grid item>
                                <Card style={{
                                    borderRadius: "2vh",
                                    marginLeft: "2.6vw",
                                    backgroundColor: "transparent"
                                }}
                                      className="popup">
                                    {moviepostersdict[0].map((slide, index) => {
                                        return (
                                            <div
                                                className={index === image1 ? 'slide active' : 'slide'}
                                                key={index}
                                            >
                                                {index === image1 && (
                                                    <Link to={`/player?name=${slide.name}&lndimg=${slide.landScapeImage}`}>
                                                        <CardMedia
                                                            component="img"
                                                            image={"/assets/moviePosters/" + slide.portraitImage}
                                                            alt="Paella dish"
                                                            className="card-image portrait-poster"
                                                        />
                                                    </Link>
                                                )}
                                            </div>
                                        );
                                    })}
                                </Card>
                            </Grid>
                            <Grid item className="gonecard" >
                                <Card style={{
                                    borderRadius: "2vh",
                                    marginLeft: "2.6vw",
                                    backgroundColor: "transparent"
                                }}
                                      className="popup">
                                    {moviepostersdict[0].map((slide, index) => {
                                        return (
                                            <div
                                                className={index === image2 ? 'slide active' : 'slide'}
                                                key={index}
                                            >
                                                {index === image2 && (
                                                    <Link to={`/player?name=${slide.name}&lndimg=${slide.landScapeImage}`}>
                                                        <CardMedia
                                                            component="img"
                                                            image={"/assets/moviePosters/" + slide.portraitImage}
                                                            alt="Paella dish"
                                                            className="card-image portrait-poster"
                                                        />
                                                    </Link>
                                                )}
                                            </div>
                                        );
                                    })}
                                </Card>
                            </Grid>
                            <Grid item className="gonecard" >
                                <Card style={{
                                    borderRadius: "2vh",
                                    marginLeft: "2.6vw",
                                    backgroundColor: "transparent"
                                }}
                                      className="popup">
                                    {moviepostersdict[0].map((slide, index) => {
                                        return (
                                            <div className={index === image3 ? 'slide active' : 'slide'}
                                                 key={index}
                                            >
                                                {index === image3 && (
                                                    <Link to={`/player?name=${slide.name}&lndimg=${slide.landScapeImage}`}>
                                                        <CardMedia
                                                            component="img"
                                                            image={"/assets/moviePosters/" + slide.portraitImage}
                                                            alt="Paella dish"
                                                            className="card-image portrait-poster"
                                                        />
                                                    </Link>
                                                )}
                                            </div>
                                        );
                                    })}
                                </Card>
                            </Grid>
                            <Grid item className="gonecard">
                                <Card style={{
                                    borderRadius: "2vh",
                                    marginLeft: "2.6vw",
                                    backgroundColor: "transparent"
                                }}
                                      className="popup">
                                    {moviepostersdict[0].map((slide, index) => {
                                        return (
                                            <div className={index === image4 ? 'slide active' : 'slide'}
                                                 key={index}
                                            >
                                                {index === image4 && (
                                                    <Link to={`/player?name=${slide.name}&lndimg=${slide.landScapeImage}`}>
                                                        <CardMedia
                                                            component="img"
                                                            image={"/assets/moviePosters/" + slide.portraitImage}
                                                            alt="Paella dish"
                                                            className="card-image portrait-poster"
                                                        />
                                                    </Link>
                                                )}
                                            </div>
                                        );
                                    })}
                                </Card>
                            </Grid>

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
