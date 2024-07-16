import "./index.css"
import AboutCopy from "./About copy";


export const IntroductionToAbout= ()=>{
  return <h1 className = "heading">About Us</h1>
};


const App=()=>{
  return(
    <div>
      <IntroductionToAbout/>
      <AboutCopy/>
    </div>
  )
}
export default App;