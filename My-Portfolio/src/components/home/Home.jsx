import style from '../home/home.module.css'
import myImage from './avatar/SHARJEEL2.jpg'
import React from 'react'

const Home = () => {

    const social = [{
        icon: <svg width="22" height="22" viewBox="0 0 24 24" fill='#4ade80'>
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>,
            //   paste my facebook url here
        url: 'https://www.facebook.com/profile.php?id=61571826546491'
    }, {
        icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
            stroke="#4ade80" stroke-width="2" stroke-linecap="round">
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="#4ade80" stroke="none" /> </svg>,

            // paste my instgram url here
        url: 'https://www.instagram.com/shrjl_ahmd/'
    }, {
        icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="#4ade80">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect x="2" y="9" width="4" height="12" />
            <circle cx="4" cy="4" r="2" /></svg>,

            // paste my linkedin url here
        url: 'https://www.linkedin.com/in/syed-sharjeel-b231a7399/'
    },
    {
        icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
            stroke="#4ade80" stroke-width="2" stroke-linecap="round">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0
    0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0
    20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38
    13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0
    5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44
    7A3.37 3.37 0 0 0 9 18.13V22"/>
        </svg>,

        // paste my github url here
        url: 'https://github.com/jeelumHere'
    }]

    return (
        <div className={style.container} id="home">

            {/* Left side starts here */}
            <div>


                <div className={style.colorIt}>Hi , Myself</div>

                <h1 className={style.name}>Sharjeel</h1>

                <h2 className={style.intro}>And I'm a <span className={style.colorIt}>Frontend Developer</span></h2>


                <p className={style.para}>I build fast, clean, and responsive websites that users love. Focused on pixel-perfect design, smooth interactions, and writing code that actually makes a difference.</p>


                {/* soial media links */}
                <div className={style.socialMedia}>
                    {social.map((link, index) => (
                        <a                          
                            key={index}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            className={style.mediaIcon}
                        >
                            {link.icon}
                        </a>
                    ))}
                </div>


            </div>
            {/* Left side ends here */}


            {/* Right side starts here */}
            <div className={style.wrapper}>
                <div className={style.avatar}>
                    <img src={myImage} alt="my avatar" />
                </div>
            </div>
            {/* Right side ends here */}


        </div>
    )
}

export default Home
