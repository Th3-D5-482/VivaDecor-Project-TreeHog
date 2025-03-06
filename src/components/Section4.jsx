import './Section4.css';
import group7 from '../assets/group7.png';

function Section4() {
    return(
        <>
            <main className ="section4">
                <div className ="maskGroupImg"></div>
                <div className ="container1">
                    <h1>Designing Your Dream
                    <p/> With Brilliance
                    </h1>
                    <p className ='elevateYour'>
                        Elevate your space with bespoke interior design that reflect
                        <p/>your unique style and aspiration, crafted with precision and 
                        <p/>brillance for an unforgettable living experience.
                    </p>
                    <div className ="group24">
                        <h3>Living Room Interior Design</h3>
                        <img src ={group7} className='group7Img'/>
                    </div>
                    <div className ="group23">
                        <h3>Commercial Office Room Interior Design</h3>
                        <img src ={group7} className='group7Img'/>
                    </div>
                    <button className ="learnMoreBtn">Learn More</button>
                </div>
            </main>
        </>
    );
}
export default Section4;