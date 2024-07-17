import './index.css';

const Team = ()=>{

    return(
        <div id='team-members'>
            <p className="heading">Our Team</p>
            <div className='threeImagesColumn'>
            <div className='image'>
            <img src='/images/maureen.png' alt='Maureen' className='image'/>
            <p className='mau'>Maureen Njeri</p>
            </div>
            <div className='image'>
            <img src='/images/maggie.png' alt='Margarete' className='image'/>
            <p className='maggie'>Margaret Nyambura</p>
            </div>
            <div className='image'>
            <img src='/images/susan.png' alt='Susan' className='image'/>
            <p className='susan'>Susan Favour</p>
            </div>
            </div>
            
            
            <div id='twoImagesColumn'>
            <div>
            <img src='/images/pris.png' alt='Priscilla' className='image'/>
            <p className='pris'>Priscilla Nunda</p>
            </div>
            <div>
            <img src='/images/wato.png' alt='Wato' className='image'/>
            <p className="wato">Wato Bucha</p>
            </div>
            </div>
            
        </div>
    )
}
export default Team;