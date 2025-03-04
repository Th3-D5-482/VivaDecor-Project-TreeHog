import './ServiceSection.css';
import lightDesIcon from '../assets/lightDesIcon.png';
import interDesIcon from '../assets/interDesIcon.png';
import outDesIcon from '../assets/outDesIcon.png';

function ServiceSection() {
    return (
        <>
            <main className ="serviceSection">
                <div className ="serviceHeader">
                    <hr className ="line1"></hr>
                    <h1 className ="ourServices">Our Services</h1>
                </div>
                <div className ="container">
                    <div className ="group20"> 
                        <img src ={lightDesIcon} className='group20Img'/>
                        <div className ="group4">
                            <h2>Ligtning Designs</h2>
                            <p className ="group4Para">Achieve the perfect balance of 
                            <p/> ambient, task, and acent lighting
                            <p/>for a functional atmosphere
                            </p>
                        </div>
                    </div>
                    <div className ="group20">
                        <img src ={interDesIcon} className='group20Img'/>
                        <div className ="group4">
                            <h2>Interior Designs</h2>
                            <p className ="group4Para"> From concept to completion, we
                            <p/> oversee every detail to bring your
                            <p/>vision to life efficiently
                            </p>
                        </div>
                    </div>
                    <div className ="group20">
                        <img src ={outDesIcon} className='group20Img'/>
                        <div className ="group4">
                            <h2>Outdoor Designs</h2>
                            <p className ="group4Para"> Celebrate the changing seasons
                            <p/> with our seasonal outdoor decor
                            <p/> services
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
export default ServiceSection;