import {Card, CardMedia, Grid, Box, Button, CardContent} from "@mui/material"
import "../css/_HomePageCarousel.scss"
import React, {useState} from "react";
import {toast} from "react-toastify";
import {Link} from "react-router-dom"

const moviepostersdict = {
    "Trending in India": [
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
            portraitImage: "harrypotterland.jpg",
            landScapeImage: "harrypotter.jpg",
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
        }],
    "Science Fiction": [

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
            portraitImage: "arrival.jpg",
            landScapeImage: "arrivalland.jpg",
            name: "Arrival"
        },
        {
            portraitImage: "free-guy.jpg",
            landScapeImage: "free-guyland.jpg",
            name: "Free guy"
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
            portraitImage: "harrypotterland.jpg",
            landScapeImage: "harrypotter.jpg",
            name: "Harry Potter"
        },
        {
            portraitImage: "pk.jpg",
            landScapeImage: "pkland.jpg",
            name: "PK"
        }
    ],
    "Action": [

        {
            portraitImage: "endgame.jpg",
            landScapeImage: "endgameland.jpg",
            name: "Avengers: Endgame"
        },
        {
            portraitImage: "matrix.jpg",
            landScapeImage: "matrixland.jpg",
            name: "Matrix"
        },
        {
            portraitImage: "ironman.png",
            landScapeImage: "ironmanland.png",
            name: "Iron Man"
        },
        {
            portraitImage: "kgf.jpg",
            landScapeImage: "kgfland.jpg",
            name: "KGF"
        },
        {
            portraitImage: "arrival.jpg",
            landScapeImage: "arrivalland.jpg",
            name: "Arrival"
        },
        {
            portraitImage: "free-guy.jpg",
            landScapeImage: "free-guyland.jpg",
            name: "Free guy"
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
            portraitImage: "harrypotterland.jpg",
            landScapeImage: "harrypotter.jpg",
            name: "Harry Potter"
        },
        {
            portraitImage: "pk.jpg",
            landScapeImage: "pkland.jpg",
            name: "PK"
        }
    ],
    "Drama": [

        {
            portraitImage: "moneyheistland.jpg",
            landScapeImage: "moneyheist.jpg",
            name: "Money Heist"
        },
        {
            portraitImage: "Okja.png",
            landScapeImage: "okjaland.jpg",
            name: "Matrix"
        },
        {
            portraitImage: "wm.jpg",
            landScapeImage: "wmland.jpg",
            name: "Iron Man"
        },
        {
            portraitImage: "punisher.jpg",
            landScapeImage: "punisherland.jpg",
            name: "KGF"
        },
        {
            portraitImage: "arrival.jpg",
            landScapeImage: "arrivalland.jpg",
            name: "Arrival"
        },
        {
            portraitImage: "free-guy.jpg",
            landScapeImage: "free-guyland.jpg",
            name: "Free guy"
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
            portraitImage: "harrypotter.jpg",
            landScapeImage: "harrypotterland.jpg",
            name: "Harry Potter"
        },
        {
            portraitImage: "pk.jpg",
            landScapeImage: "pkland.jpg",
            name: "PK"
        }
    ]
};


export default function HomePageCarousel(props) {
    const [current, setCurrent] = useState(0);
    const [image1, setImage1] = useState(1);
    const [image2, setImage2] = useState(2);
    const [image3, setImage3] = useState(3);
    const [image4, setImage4] = useState(4);

    const carouselName = props.index;

    const nextSlide = () => {
        setCurrent(current === 9 ? 0 : current + 1);
        setImage1(image1 === 9 ? 0 : image1 + 1)
        setImage2(image2 === 9 ? 0 : image2 + 1)
        setImage3(image3 === 9 ? 0 : image3 + 1)
        setImage4(image4 === 9 ? 0 : image4 + 1)
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? 9 : current - 1);
        setImage1(image1 === 0 ? 9 : image1 - 1)
        setImage2(image2 === 0 ? 9 : image2 - 1)
        setImage3(image3 === 0 ? 9 : image3 - 1)
        setImage4(image4 === 0 ? 9 : image4 - 1)
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
                                            {carouselName}
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
                                      className="popup landscape-poster">

                                    {moviepostersdict[carouselName].map((slide, index) => {
                                        return (
                                            <div
                                                className={index === current ? 'slide active' : 'slide'}
                                                key={index}
                                            >
                                                {index === current && (
                                                    <Link
                                                        to={`/player?name=${slide.name}&lndimg=${slide.landScapeImage}`}
                                                        style={{textDecoration: "none"}}>
                                                        <CardMedia
                                                            component="img"
                                                            image={"/assets/moviePosters/" + slide.landScapeImage}
                                                            alt={slide.name}
                                                            className="card-image landscape-poster"
                                                        />
                                                        <p className={"movie-rating-landscape"}>
                                                            {index + 1}
                                                        </p>
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
                                      className="popup portrait-poster">
                                    {moviepostersdict[carouselName].map((slide, index) => {
                                        return (
                                            <div
                                                className={index === image1 ? 'slide active' : 'slide'}
                                                key={index}
                                            >
                                                {index === image1 && (
                                                    <Link
                                                        to={`/player?name=${slide.name}&lndimg=${slide.landScapeImage}`}
                                                        style={{textDecoration: "none"}}>
                                                        <CardMedia
                                                            component="img"
                                                            image={"/assets/moviePosters/" + slide.portraitImage}
                                                            alt={slide.name}
                                                            className="card-image portrait-poster"
                                                        />
                                                        <p className={"movie-rating-portrait"}>
                                                            {index + 1}
                                                        </p>
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
                                      className="popup portrait-poster">
                                    {moviepostersdict[carouselName].map((slide, index) => {
                                        return (
                                            <div
                                                className={index === image2 ? 'slide active' : 'slide'}
                                                key={index}
                                            >
                                                {index === image2 && (
                                                    <Link
                                                        to={`/player?name=${slide.name}&lndimg=${slide.landScapeImage}`}
                                                        style={{textDecoration: "none"}}>
                                                        <CardMedia
                                                            component="img"
                                                            image={"/assets/moviePosters/" + slide.portraitImage}
                                                            alt={slide.name}
                                                            className="card-image portrait-poster"
                                                        />
                                                        <p className={"movie-rating-portrait"}>
                                                            {index + 1}
                                                        </p>
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
                                      className="popup portrait-poster">
                                    {moviepostersdict[carouselName].map((slide, index) => {
                                        return (
                                            <div className={index === image3 ? 'slide active' : 'slide'}
                                                 key={index}
                                            >
                                                {index === image3 && (
                                                    <Link
                                                        to={`/player?name=${slide.name}&lndimg=${slide.landScapeImage}`}
                                                        style={{textDecoration: "none"}}>
                                                        <CardMedia
                                                            component="img"
                                                            image={"/assets/moviePosters/" + slide.portraitImage}
                                                            alt={slide.name}
                                                            className="card-image portrait-poster"
                                                        />
                                                        <p className={"movie-rating-portrait"}>
                                                            {index + 1}
                                                        </p>
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
                                      className="popup portrait-poster">
                                    {moviepostersdict[carouselName].map((slide, index) => {
                                        return (
                                            <div className={index === image4 ? 'slide active' : 'slide'}
                                                 key={index}
                                            >
                                                {index === image4 && (
                                                    <Link
                                                        to={`/player?name=${slide.name}&lndimg=${slide.landScapeImage}`}
                                                        style={{textDecoration: "none"}}>
                                                        <CardMedia
                                                            component="img"
                                                            image={"/assets/moviePosters/" + slide.portraitImage}
                                                            alt={slide.name}
                                                            className="card-image portrait-poster"
                                                        />
                                                        <p className={"movie-rating-portrait"}>
                                                            {index + 1}
                                                        </p>
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
