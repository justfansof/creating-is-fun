import styles from './Banner.module.css'

import Text from '@components/Text'


export default function Banner(props) {
    return (
        <div className={styles.banner}>
            <Text 
                type={props.textType}
                text={props.text}
            />
        </div>
    )
}
  