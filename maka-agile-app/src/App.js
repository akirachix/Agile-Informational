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
    </div>
  )
}
export default App;