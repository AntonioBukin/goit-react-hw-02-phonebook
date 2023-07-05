import { Component } from "react";

import MyPhoneBlock from "./MyPhoneBlock/MyPhoneBlock";

import styles from "./my-phone.module.scss";

//1. Створюємо класовий компонент
class MyPhone extends Component {
    render() { //пишемо метод render, який буде повертати розмітку
        return(
            <div className={styles.wrapper}>
                <h3 className={styles.title}>My Phone</h3>
                <div className={styles.blocks}>
                    <MyPhoneBlock title="Add number">
                        <form>
                            <div>
                                <label></label>
                                <input/>
                            </div>
                        </form>

                    </MyPhoneBlock>
                    <MyPhoneBlock title="Phone list">

                    </MyPhoneBlock>

                </div>
            </div>
        )

    }

}


export default MyPhone;