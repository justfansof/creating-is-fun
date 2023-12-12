import styles from './Inventory.module.css'
import Text from '@components/Text'

import { useState } from 'react'

import Modal from '@components/Modal'

import { inventoryItems } from "/public/data/inventory-about.js"

export default function Inventory(props) {
  
  const [show, setShow] = useState(false)

  return (
    <>
      <div className={styles['menu']}>
        <ul className={styles['ul']}>
          {inventoryItems.map((data, key) => {
            return (
              <div className="">
                <Modal title={data.text} body={data.description} image={data.image} onClose={() => setShow(false)} show={show}></Modal>
                <li onClick={() => setShow(true) } className={styles["inventoryList"] + " p-2 my-6"}>
                  <img 
                      className={styles["inventoryImage"] + " p-2 inline bg-blue-dark"}
                      src={data.image}
                  />
                  <Text
                    type="a"
                    className={styles["inventoryItem"] + " text-white text-xl tracking-wider inventory-shadow align-middle pl-2 " + data.status}
                    text={data.text}
                    //link={data.link}
                  />
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  )
}
