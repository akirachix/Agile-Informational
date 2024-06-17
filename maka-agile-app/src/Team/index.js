import './index.css';

const Team = ()=>{

    return(
        <div id='team-members'>
            <div className='image'>
            <img src='/images/Screenshot from 2024-06-16 15-51-33.png' className='image' alt='Maureen'/>
            <p>Senior developer</p>
            </div>
            <div className='image'>
            <img src='/images/Screenshot from 2024-06-16 15-50-14.png' className='image' alt='Margarete'/>
            <p>UI/UX Designer</p>
            </div>
            <div className='image'>
            <img src='/images/Screenshot from 2024-06-16 15-52-27.png' className='image' alt='Susan'/>
            <p>Android Developer</p>
            </div>
            <div className='image'>
            <img src='/images/Screenshot from 2024-06-16 15-52-01.png' className='image' alt='Priscilla'/>
            <p className='p'>ProductManager</p>
            </div>
            <div className='image'>
            <img src='/images/Screenshot from 2024-06-16 15-53-00.png' className='image' alt='Wato'/>
            <p className='p' alt="Wato">Researcher</p>
            </div>
        </div>
    )
}
export default Team;