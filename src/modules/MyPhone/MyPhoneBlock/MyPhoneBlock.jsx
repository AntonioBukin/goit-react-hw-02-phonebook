import styles from "./my-phone-block.module.scss";

const MyPhoneBlock = ({title, children}) => { //в пропсах отримуємо title та children, який нам передадуть
    return (
        <div className={styles.wrapper}>
            <h4 className={styles.title}>{title}</h4>
            {children}
        </div>
    )

}

export default MyPhoneBlock;