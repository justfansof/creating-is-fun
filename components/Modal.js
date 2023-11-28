import styles from './Modal.module.css'

import Text from '@components/Text'
import Button from "@components/Button"

/* Code for Connecting to Inventory Component */

export default function Modal(props) {

    if (props.show) {
        return null
    }

    return (
    <>
        <div className={styles["modal"]}>
            <div className={styles["modalContent"]}>
                <div className={styles["modalHeader"]}>
                    { /* Modal Title Code */ }
                    <Text 
                        type="h4"
                        text="This would be the dynamic Modal Title"
                        className={styles["modalTitle"]}
                    />
                </div>
                <div className={styles["modalBody"]}>
                    { /* Modal Content Code */ }
                    <Text
                        type="p"
                        text="Modal Body would be separately pulled content related to clicked content" 
                    />  
                </div>
                <div className={styles["modalFooter"]}>
                    { /* Modal Footer Code - Probably an exit button similar to Figma example or maybe in header */ }
                    <Button 
                        text="close"
                    />
                </div>
            </div> 
        </div>
    </>
    )
}
