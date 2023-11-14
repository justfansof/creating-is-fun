import styles from './Footer.module.css'

import Text from '@components/Text'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <Text
          type="p"
          className="text-white"
          text="A site by Adam Elsedoudi"
        />
      </footer>
    </>
  )
}
