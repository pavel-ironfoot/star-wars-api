import React, {useEffect, useState} from 'react';
import './MainThemes.css';
import yoda from './../../../static/wp6674193.jpg';
import veider from './../../../static/6d3f8f443.jpg';

const MainThemes = () => {
    const [theme,setTheme] = useState('light');

    const toggleTheme = () =>setTheme(theme==='light'?'dark':'light');
    
    useEffect(()=>{
        document.body.setAttribute('data-theme',theme)
    },[theme]);

    return (
        <div className='MainThemes'>
            {/* <h3>Main Themes</h3>
            <button onClick={toggleTheme}>Change Theme</button> */}
            <div className='button__settheme' onClick={()=>setTheme('light')}>
                <img src={yoda} alt="yoda" />
                light theme
            </div>
            <div className='button__settheme' onClick={()=>setTheme('dark')}>
                <img src={veider} alt="veider" />
                dark theme
            </div>
        </div>
    );
    
}
  export default MainThemes;