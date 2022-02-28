import HomePageBanner from "./HomePageBanner";
import Header from "./Header";
import HomePageCarousel from "./HomePageCarousel";
import SumplayFooter from "./footer";
import useDocumentTitle from "../documentTitle";

export default function Home() {
    useDocumentTitle("Sumplay")
    return (
        <div style={{
            background: "black",
            height: "100vh",
            overflowX:"hidden",
        }}>
                <Header/>
                <HomePageBanner/>
                <HomePageCarousel index={"Trending in India"}/>
                <HomePageCarousel index={"Science Fiction"}/>
                <HomePageCarousel index={"Action"}/>
                <HomePageCarousel index={"Drama"}/>
                <div style={{marginBottom:"6vh"}}/>
                <SumplayFooter/>
        </div>
    );
}