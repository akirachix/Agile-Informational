import About from "./About";
import Team from "./Team";
import "./index.css"



export const Introduction = () => {
  return <h1 className ="heading">Services</h1>
};


const App=()=>{
  return(
    <div>
            <Introduction/>
            <About/>
            <Team/>
    </div>
  )
}
export default App;