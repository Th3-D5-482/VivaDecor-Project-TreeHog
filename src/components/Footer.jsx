import './Footer.css';
import facebook from '../assets/facebook.png';
import x from '../assets/x.png';
import instagram from '../assets/instagram.png';
import linkdin from '../assets/linkdin.png';

function Footer() {
    return(
        <>
            <footer>
                <div className ="footerSec">
                    <div className ="firstSec">
                        <div className ="logo">
                            <div className ="vector1">
                                Vi
                            </div>
                            <div className ="vector2">
                            vaDecor
                            </div>
                        </div>
                        <p className ="part1Uni">
                            VivaDecor your premier
                            <p/> destination for luxury and 
                            <p/> mordern interior design
                        </p>
                        <div className ="socialMedia">
                            <a href ="#"><img src ={facebook}/></a>
                            <a href ="#"><img src ={x}/></a>
                            <a href ="#"><img src ={instagram}/></a>
                            <a href ="#"><img src ={linkdin}/></a>
                        </div>
                    </div>
                    <div className ="firstSec">
                    <h3>Our Services</h3>
                        <p className ="part1">
                            <a href ="#">Interior design</a>
                        </p>
                        <p className ="part1">
                            <a href ="#">Outdoor design</a>
                        </p>
                        <p className ="part1">
                            <a href ="#">Lightning design</a>
                        </p>
                        <p className ="part1">
                            <a href ="#">Office design</a>
                        </p>
                    </div>
                    <div className ="firstSec">
                        <h3>Our Services</h3>
                        <p className ="part1">
                            <a href ="#">Reviews</a>
                        </p>
                        <p className ="part1">
                            <a href ="#">Careers</a>
                        </p>
                        <p className ="part1">
                            <a href ="#">Pricing</a>
                        </p>
                        <p className ="part1">
                            <a href ="#">Press inquires</a>
                        </p>
                    </div>
                    <div className ="firstSec">
                        <h3>Our Services</h3>
                        <p className ="part1">
                            <a href ="mailto:info@vivadecor.com">info@vivadecor.com</a>
                        </p>
                        <div className ="part2">
                            Design Avenue Cityville
                            <p/> CA 90210 United States
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
export default Footer;