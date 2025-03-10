import './Newsletter.css';
function Newsletter() {
    return(
        <>
            <main className ="newsletter">
                <h1> Subscribe to Our Newsletter
                <p/> for Design Insights 
                </h1>
                <p className ="beThe">Be the first to discover trends, inspirations, and special offers as
                <p/> we bring the world of design directly to your inbox.
                </p>
                <div className ="emailNBtn">
                    <input type ="email" placeholder="Enter your email address" className ="emailID"/>
                    <button className ="subscribeBtn">Subscribe</button>
                </div>
            </main>
        </>
    );
}
export default Newsletter;