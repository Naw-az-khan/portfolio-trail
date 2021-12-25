import React from 'react';
import {Link} from 'react-router-dom';


const Navigation = () =>{
    return(
        <div >
                
                <div>
                    <h2 className='Me'><Link to ={'/Me'}  style={{ textDecoration: 'none' }}>Me</Link></h2>
                    <h2 className='Skills'><Link to ={'/SkillsTools'}  style={{ textDecoration: 'none' }}>Skills and Tools</Link></h2>
                    <h2 className='About'><Link to = {'/About'}  style={{ textDecoration: 'none' }}>About</Link></h2>
                </div>
        </div>
    )
}
export default Navigation;