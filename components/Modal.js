import styles from './Modal.module.css'

import {useState, useEffect} from "react"

import Text from '@components/Text'
import Button from "@components/Button"

/* Code for Connecting to Inventory Component */

export default function Modal(props) {

    const [show, setShow] = useState(false)

    if (!props.show) {
        return null
    }

    return (
    <>
        <div className={styles["modal"]} onClick={props.onClose}>
            <div className={styles["modalContent"]} onClick={e => e.stopPropagation()}>
                <div className={styles["modalHeader"] + " flex justify-center items-center"}>
                    { /* Modal Title Code */ }
                    <img 
                        className={styles["inventoryImage"] + " p-2 inline bg-blue-dark"}
                        src={props.image}
                    />
                    <Text 
                        type="h4"
                        text={props.title}
                        className={styles["modalTitle"] + " inline"}
                    />
                </div>
                <div className={styles["modalBody"]}>
                    { /* Modal Content Code */ }
                    <Text
                        type="p"
                        text={props.body}
                        className= " mx-8"
                    />  
                </div>
                <div className={styles["modalFooter"] + " mx-8 text-right text-red"}>
                    { /* Modal Footer Code - Probably an exit button similar to Figma example or maybe in header */ }
                    <button onClick={props.onClose}> X Close</button>
                </div>
            </div> 
        </div>
    </>
    )
}
