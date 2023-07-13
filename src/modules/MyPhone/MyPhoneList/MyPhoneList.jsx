import styles from "./my-phone-list.module.scss";

const MyPhoneList = ({contacts, onDeletePhone}) => {
    const elements = contacts.map(({id, name, number}) => (
        <li className={styles.listItem} key={id}>
            Name: {name}, Number: {number}. <button className={styles.button} onClick={()=> onDeletePhone(id)}>delete</button>
        </li>
    ))

    return ( 
    <ol className={styles.list}>
        {elements}
    </ol>)

}

export default MyPhoneList;