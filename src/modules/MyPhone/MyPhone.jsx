import { Component } from "react";
import { nanoid } from "nanoid";

import MyPhoneBlock from "./MyPhoneBlock/MyPhoneBlock";

import styles from "./my-phone.module.scss";

//1. Створюємо класовий компонент
class MyPhone extends Component {
    state = {
        contacts: [
            {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
            {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
            {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
            {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
          ],
          filter: "",
          name: "",
          number: "",
    }

    handleChange = ({target}) => {
        const {name, value} = target; //value - значення яке ми записуємо в state
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.isDublicate()) {
            const {name, number} = this.state;
            alert(`${name} - ${number} is alredy in contacts`);
            return;
        }
        this.setState(prevState => {
            const {name, number, contacts} = prevState;
            const newNumber = {
                id: nanoid(),
                name,
                number,
            }

            return {contacts: [...contacts, newNumber], name: "", number: ""}
        })
    }

    onDeletePhone(id) {
        this.setState(prevState => {
            const newContacts = prevState.contacts.filter(contact => contact.id !== id)

            return {
                contacts: newContacts,
            }
        })
    }

    isDublicate() {
        const {name, number, contacts} = this.state;
        const normalizedName = name.toLowerCase();
        const normalizedNumber = number.toLowerCase();

        const dublicate = contacts.find(contact => {
            return (contact.name.toLowerCase() === normalizedName && contact.number.toLowerCase() === normalizedNumber)
        });

        return Boolean(dublicate);
    }

    render() { //пишемо метод render, який буде повертати розмітку
        const {name, number, contacts} = this.state;

        const elements = contacts.map(({id, name, number}) => (
            <li className={styles.listItem} key={id}>
                Name: {name}, Number: {number}. <button onClick={()=> this.onDeletePhone(id)}>delete</button>
            </li>

        ))

        return(
            <div className={styles.wrapper}>
                <h3 className={styles.title}>My Phone</h3>
                <div className={styles.blocks}>
                    <MyPhoneBlock title="">
                        <form onSubmit={this.handleSubmit} className={styles.form}>
                            <div className={styles.formGroup}>
                                <label>Name</label>
                                <input value={name} name="name" onChange={this.handleChange} className={styles.textField} placeholder="add name"
                                  type="text"
                                //   name="name"
                                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                                  required/>
                                {/* <input className={styles.textField} placeholder="add name"/> */}
                            </div>
                            <div className={styles.formGroup}>
                                <label>Number</label>
                                <input value={number} name="number" onChange={this.handleChange} className={styles.textField} placeholder="add number"
                                  type="text"
                                //   name="name"
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
                            {elements}
                        </ol>
                    </MyPhoneBlock>

                </div>
            </div>
        )

    }

}


export default MyPhone;