import styles from './Menu.module.css'
import Text from '@components/Text'

import { menuItems } from "/public/data/menu.js"

export default function Menu(props) {
  return (
    <>
      <div className={styles['menu']}>
        <ul className={styles['ul']}>
          {menuItems.map((data, key) => {
            return (
              <li className="my-6">
                <Text
                  type="a"
                  className={"text-white text-xxl " + data.status}
                  text={data.text}
                  link={data.link}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  )
}
