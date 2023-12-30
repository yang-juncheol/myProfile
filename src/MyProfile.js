import style from "./myProfile.module.css";

function MyProfile() {
    return <div className={style.profileContiner}>
        <img src={`${process.env.PUBLIC_URL}/profile_image.jpg`} />
        <ul className={style.profileInfo}>
            <li className={style.profileRow}>
                <h5>이름</h5>
                <p>정택유</p>
            </li>
            <li className={style.profileRow}>
                <h5>나이</h5>
                <p>27</p>
            </li>
            <li className={style.profileRow}>
                <h5>직업</h5>
                <p>프톤트개발자</p>
            </li>
            <li className={style.profileRow}>
                <h5>직장</h5>
                <p>투네이션</p>
            </li>
        </ul>
    </div>;
}

export default MyProfile;