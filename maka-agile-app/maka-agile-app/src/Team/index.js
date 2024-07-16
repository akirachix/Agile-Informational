import './index.css';
import React from 'react';

const Team = ()=>{

    return(
        <div id='team-members'>
            <p className="heading">Our Team</p>
            <div className='threeImagesColumn'>
            <div className='image'>
            <img src='/images/Screenshot from 2024-06-16 15-51-33.png' alt='Maureen' className='image'/>
            <p className='mau'>Maureen Njeri</p>
            </div>
            <div className='image'>
            <img src='/images/Screenshot from 2024-06-16 15-50-14.png' alt='Margarete' className='image'/>
            <p className='maggie'>Margarete Nyambura</p>
            </div>
            <div className='image'>
            <img src='/images/Screenshot from 2024-06-16 15-52-27.png' alt='Susan' className='image'/>
            <p className='susan'>Susan Favour</p>
            </div>
            </div>
            
            
            <div id='twoImagesColumn'>
            <div>
            <img src='/images/Screenshot from 2024-06-16 15-52-01.png' alt='Priscilla' className='image'/>
            <p className='pris'>Priscilla Nunda</p>
            </div>
            <div>
            <img src='/images/Screenshot from 2024-06-16 15-53-00.png' alt='Wato' className='image'/>
            <p className="wato">Wato Bucha</p>
            </div>
            </div>
            
        </div>
    )
}
export default Team;