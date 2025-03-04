import './HeroSection.css';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import arrow1 from '../assets/arrow1.png';
function HeroSection() {
    return(
        <>
            <main className ="heroSection">
                <h1 class ="header">Interior Design</h1>
                <img src = {image1} className ="image1"/>
                <p className ="subHeading">Step into a world where the art of Interior Design is meticulously <p/>crafted to bring together timeless elegance and cutting edge
                <p/>modern Innovation. Allowing you to transform your living spaces
                <p/>into the epitome of luxury and sophistication.</p>
                <div className ="rectangle60"></div>
                <img src = {image2} className ="image2" />
                <div className="arrowDown">
                    <img src = {arrow1}/>
                </div>
                <button class ="startProjectBtn">Start Project</button>
                <div className ="counts">
                    <div className ="countsInside">
                        <h1>400+</h1>
                        <p>Projects Completed</p>   
                    </div>
                    <div className ="countsInside">
                        <h1>600+</h1>
                        <p>Satisfied Clients</p>   
                    </div>
                    <div className ="countsInside">
                        <h1>100+</h1>
                        <p>Unique Styles</p>   
                    </div>
                </div>
            </main>
        </>
    );
}
export default HeroSection;