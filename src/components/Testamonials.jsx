import './Testamonials.css'
import maskGroup2 from '../assets/maskGroup2.png'
import doubleQuotes from '../assets/doubleQuotes.png'

function Testamonials () {
    return(
        <>
            <main className ="testamonials">
                <div className ="cat1">
                    <img src ={maskGroup2} className ="maskGroup2Img"/>
                    <h1>What Our Customers
                    <p/>Say About Us
                    </h1>
                </div>
                <div className ="catTestamonials">
                    <div className ="testamonial1">
                        <img src ={doubleQuotes} className ="doubleQuotesImg"/>
                        <p className ="workingWith">Working with your design team was an 
                        <p/>absolute pleasure. The attention to detail 
                        <p/>and creativity exceeded my expectations. 
                        <p/>Thank you for making my home beautiful!
                        </p>
                    </div>
                    <div className ="testamonial2">
                        <img src ={doubleQuotes} className ="doubleQuotesImg"/>
                        <p className ="workingWith">Exceptional Service! From the initial 
                        <p/>consulation to the final reveal, your team
                        <p/>demonstrated professionalism and a keen  
                        <p/>eye for design. Highly recommend!
                        </p>
                    </div>
                </div>
            </main>
        </>
    );
}
export default Testamonials;