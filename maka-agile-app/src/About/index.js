import './index.css';


const About = () => {
    return (
        <div className="about-text">
            <div className="services">
            <p>By including students in interactive, educational activities,
            <br></br> we help them develop a sense of community while they 
            <br></br>study and grow.This makes learning enjoyable for them. </p>
            <p><img src = "/images/edu-games.png" className = "visuals"/></p>
            </div>

            <div className="services">
            <p>We have discovered the main support system for our
            <br></br>learners is the emotional and physical encouragement
            <br></br>from our parents and teachers. This helps learners to 
            <br></br>feel uplifted and mostly encouraged. We foster this by 
            <br></br>ensuring effective communication among the parents 
            <br></br>and teachers in regards to their learners.</p>
            <p><img src = "/images/communication.png" className = "visuals-communication"/></p>
            </div>

            <div className="services">
            <p>We  Like to appreciate the efforts that we see in our learners
            <br></br>as much as our parents and teachers. In our notice board we 
            <br></br>put the spotlight on the amazing work that our members do 
            <br></br>to contribute towards the success of our learners.</p>
            <p><img src = "/images/noticeboard.webp" className = "visuals-notice"/></p>
            </div>


        </div>

    )
}

export default About;