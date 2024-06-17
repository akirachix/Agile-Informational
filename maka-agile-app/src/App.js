import Team from "./Team";
import "./index.css"
import About from "./About";
import "./index.css"
import AboutCopy from "./About copy";



export const Introduction = () => {
  return <h1 className ="heading">Services</h1>
};

export const IntroductionToAbout= ()=>{
  return <h1 className = "heading"> About Us </h1>
};


const App=()=>{
  return(
    <div>
      <IntroductionToAbout/>
      <AboutCopy/>

      <Introduction/>
      <About/>
      <p className="heading">Our Team</p>
    <Team/>
    </div>
  )
}
export default App;