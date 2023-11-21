import styles from './Banner.module.css'

import Text from '@components/Text'


export default function Banner(props) {
    return (
        <div className={styles.banner + " flex flex-row w-full justify-center"}>
            <div className={styles.bannerSide + " banner-left"}>
                <img
                    src="/assets/BannerSegmentLeft.png"
                />
            </div>
            <div className={styles.bannerMiddle + " banner-middle flex justify-center items-center w-4/5"}>
                <Text 
                    type={props.textType}
                    text={props.text}
                    className={props.className}
                />
            </div>
            <div className={styles.bannerSide + " banner-right"}>
                <img
                    src="/assets/BannerSegmentRight.png"
                />
            </div>
        </div>
    )
}
  