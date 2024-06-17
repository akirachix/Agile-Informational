import Team from "./Team";
import "./index.css"
import About from "./About";
import "./index.css"



export const Introduction = () => {
  return <h1 className ="heading">Services</h1>
};


const App=()=>{
  return(
    <div>
            <Introduction/>
            <About/>
      <p className="heading">Our Team</p>
    <Team/>
    </div>
  )
}
export default App;