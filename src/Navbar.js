import { useState } from 'react';
import style from './navbar.module.css';

const Navbar = ({ onChange }) => {
    const [value, setValue] = useState('');
    return <nav className={style.navbarContainer}>
        <img className={style.navbarImage} src={`${process.env.PUBLIC_URL}/navbar-image.png`} alt='logo' />
        <div className={style.navbarInputContainer}>
            <input
                className={style.navbarInput}
                defaultValue={value}
                onKeyUp={(e) => {
                    if (e.key === 'Enter' || e.keyCode === 13)
                        onChange(value);
                }}
                onInput={(e) => {
                    const value = e.target.value;
                    setValue(value);
                }}
            />
            <button className={style.navbarButton} onClick={() => onChange(value)}>
                <img src={`${process.env.PUBLIC_URL}/header_top_btn_search.gif`} alt='button' />
            </button>
        </div>
    </nav>
};

Navbar.defaultProps = {
    onChange(value) { }   /// string
};

export default Navbar;