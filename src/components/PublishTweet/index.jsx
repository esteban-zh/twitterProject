import React from 'react'
import { FaImage } from 'react-icons/fa'
import { CiLocationOn } from 'react-icons/ci'
import { saveInLocalStorage } from '../../utilities/saveInLocalStorage'
import styles from './styles.module.css'

export const PublishTweet = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const content = e.target.content.value;
        console.log(content)
        const user = {
            tweet: content,
            username: "EstebanZ",
            name: "Esteban"
        }
        saveInLocalStorage("my-tweet", user)
    }
  return (
    <div className={styles.publishTweet}>
        <img src="https://picsum.photos/100" alt="profile pic" className={`${styles.profilePic} img-default`} />
        <form className={styles.form} onSubmit={handleSubmit}>
            <textarea cols="30" rows="10" placeholder='escribe un tweet' name="content">

            </textarea>
            <div className={styles.footer}>
                <ul className={styles.list}>
                    <li>
                        <button onClick={() => console.log("agregando imagen")}>
                            <FaImage />
                        </button>
                    </li>
                    <li>
                        <button onClick={() => console.log("location")}>
                            <CiLocationOn />
                        </button>
                    </li>
                </ul>
                <button type="submit" className={styles.submit}>twitear</button>
            </div>
        </form>
    </div>
  )
}
