import HomePageBanner from "./HomePageBanner";
import Header from "./Header";
import HomePageCarousel from "./HomePageCarousel";
import SumplayFooter from "./footer";

export default function Home() {
    return (
        <div style={{
            background: "black",
            height: "100vh"
        }}>
            <div style={{
                background: "black",
                height: "100vh"
            }}>
                <Header/>
                {/*<HomePageBanner/>*/}
                <HomePageCarousel/>
            </div>
            <SumplayFooter/>
        </div>
    );
}