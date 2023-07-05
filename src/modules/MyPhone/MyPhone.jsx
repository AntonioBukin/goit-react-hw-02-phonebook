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
                    <MyPhoneBlock title="">
                        <form className={styles.form}>
                            <div className={styles.formGroup}>
                                <label>Name</label>
                                <input className={styles.textField} placeholder="add name"
                                  type="text"
                                  name="name"
                                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                                  required/>
                                {/* <input className={styles.textField} placeholder="add name"/> */}
                            </div>
                            <button type="submit">Add contacts</button>
                        </form>
                    </MyPhoneBlock>
                    <MyPhoneBlock title="Find contacts by name">
                        <input className={styles.textField} placeholder="enter number" />
                        <ol className={styles.list}>
                            <li className={styles.listItem}>
                                Rose Simpson: 459-12-56 <button>delete</button>
                            </li>
                            <li className={styles.listItem}>
                                Hermione Cline: 458-13-81 <button>delete</button>
                            </li>
                        </ol>
                    </MyPhoneBlock>

                </div>
            </div>
        )

    }

}


export default MyPhone;