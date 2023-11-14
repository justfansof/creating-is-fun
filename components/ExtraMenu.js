import styles from './ExtraMenu.module.css'
import Text from '@components/Text'

export default function ExtraMenu(props) {
  return (
    <>
      <div className={styles['menu']}>
        <Text 
          type="h5"
          text="Player Name: Adam Elsedoudi"
        />
        <Text 
          type="h5"
          text="Current Playtime: 12:54"
        />
        <Text 
          type="h5"
          text="Experience Points: 70 / 190"
        />
      </div>
    </>
  )
}
