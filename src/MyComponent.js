import { useState } from 'react';
import MyProfile from './MyProfile';
import Navbar from './Navbar';

import style from './myComponent.module.css';


function MyComponent() {
    return <div className={style.myComponent}>
        <header className={style.myComponentHeader}>
            <Navbar />
        </header>
        <div className={style.myComponentBody}>
            <h1>내 프로필을 검색해보자!</h1>
            <MyProfile />
        </div>
    </div>;
}

export default MyComponent;