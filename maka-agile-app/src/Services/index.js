import './index.css';


const Services = () => {

     
    return (

        <div className="services-text">
 <h1 className ="heading">Services</h1>
            <div className="services">
            <p className= "text">We make learning fun for learners by engaging them 
            in games that are educative and interactive to help
            foster a community kind of perspective while they grow
            and learn. </p>
            <p><img src = "/images/edu-games.png" className = "visuals"/></p>
            </div>

            <div className="services">
            <p className= "text">We have discovered the main support system for our
            learners is the emotional and physical encouragement
            from our parents and teachers. This helps learners to 
            feel uplifted and mostly encouraged. We foster this by 
            ensuring effective communication among the parents 
            and teachers in regards to their learners.</p>
            <p><img src = "/images/comm.jpg" className = "visuals-communication"/></p>
            </div>

            <div className="services">
            <p className= "text">We  Like to appreciate the efforts that we see in our learners
            as much as our parents and teachers. In our notice board we 
            put the spotlight on the amazing work that our members do 
            to contribute towards the success of our learners.</p>
            <p><img src = "/images/noticeboard.webp" className = "visuals-notice"/></p>
            </div>


        </div>

    )
}

export default Services;