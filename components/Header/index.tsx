import React from "react";

import styles from "./Header.module.scss";

const Header: React.FC = () => {
    return(
        <header className={styles.header}>
            <div className = {styles.titleImage}>
                <svg className = {styles.titleImageSWG}
                     width="1229" height="98"
                     viewBox="0 0 1229 98" fill="none" xmlns="http://www.w3.org/2000/svg"
                >
                    <g filter="url(#filter0_f_544_6)">
                        <path
                            className={styles.svgLineHeaderShadow}
                            d="M15 77.1127C45.607 71.3369 214.134 28.1443 253.889 34.3852C323.679 45.3412 357.527 64.6506 401.111 78.9066C409.617 81.6889 414.41 85.7936 435.37 83.1467C479.758 77.5414 509.912 67.7505 546.944 60.8045C565.249 57.3713 751.685 23.0842 781.667 27.862C813.791 32.9811 818.183 50.0882 827.963 57.1352C850.477 73.3572 887.489 60.8824 927.037 52.6504C1005.69 36.2793 1111.47 24.9406 1215 14"
                            strokeOpacity="0.5"
                            strokeWidth="10"
                            strokeLinecap="round"
                        />
                    </g>
                    <g filter="url(#filter1_f_544_6)">
                        <path
                            className={styles.svgLineHeader}
                            d="M15 77.1127C45.607 71.3369 214.134 28.1443 253.889 34.3852C323.679 45.3412 357.527 64.6506 401.111 78.9066C409.617 81.6889 414.41 85.7936 435.37 83.1467C479.758 77.5414 509.912 67.7505 546.944 60.8045C565.249 57.3713 751.685 23.0842 781.667 27.862C813.791 32.9811 818.183 50.0882 827.963 57.1352C850.477 73.3572 887.489 60.8824 927.037 52.6504C1005.69 36.2793 1111.47 24.9406 1215 14"
                            strokeOpacity="0.1"
                            strokeWidth="20"
                            strokeLinecap="round"
                        />
                    </g>
                    <path
                        className={styles.svgLineHeaderInside}
                        d="M15 77.1127C45.607 71.3369 214.134 28.1443 253.889 34.3852C323.679 45.3412 357.527 64.6506 401.111 78.9066C409.617 81.6889 414.41 85.7936 435.37 83.1467C479.758 77.5414 509.912 67.7505 546.944 60.8045C565.249 57.3713 751.685 23.0842 781.667 27.862C813.791 32.9811 818.183 50.0882 827.963 57.1352C850.477 73.3572 887.489 60.8824 927.037 52.6504C1005.69 36.2793 1111.47 24.9406 1215 14"
                        strokeLinecap="round"/>
                    <defs>
                        <filter id="filter0_f_544_6" x="4.99908" y="3.99957" width="1220" height="90.0004" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_544_6"/>
                        </filter>
                        <filter id="filter1_f_544_6" x="0.998199" y="-0.000793457" width="1228" height="98.0008" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                            <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_544_6"/>
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className = {styles.titleName}>
                <div>
                    <h1>
                        Calorie tracker
                    </h1>
                    <i>Hello stranger!</i>
                </div>
            </div>
            <div className = { styles.SunHeader }>
                <div className={ styles.SunRays }/>
            </div>
        </header>
    )
}

export default Header