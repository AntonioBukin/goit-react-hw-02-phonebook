import { Component } from "react";
import propTypes from "prop-types";
import styles from "./my-phone-form.module.scss";

class MyPhoneForm extends Component {
    state = {
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
        const {onSubmit} = this.props;
        onSubmit({...this.state});
        this.reset();
    }

    reset() {
        this.setState({name: "", number: ""})
    }

    render() {
        const {name, number} = this.state;

        return (
            <form onSubmit={this.handleSubmit} className={styles.form}>
                            <div className={styles.formGroup}>
                                <label>Name:</label>
                                <input value={name} name="name" onChange={this.handleChange} className={styles.textField} placeholder="add name"
                                  type="text"
                                //   name="name"
                                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                                  required/>
                                {/* <input className={styles.textField} placeholder="add name"/> */}
                            </div>
                            <div className={styles.formGroup}>
                                <label>Number:</label>
                                <input value={number} name="number" onChange={this.handleChange} className={styles.textField} placeholder="add number"
                                  type="text"
                                //   name="name"
                                  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                                  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                                  required/>
                                {/* <input className={styles.textField} placeholder="add name"/> */}
                            </div>
                            <button className={styles.button} type="submit">Add contacts</button>
                        </form>
        )

    }

}

MyPhoneForm.propTypes = {
    handleSubmit: propTypes.func.isRequired,
};

export default MyPhoneForm;