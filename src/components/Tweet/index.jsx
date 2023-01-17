import React, { useState } from 'react'
import { BiLike, BiComment } from 'react-icons/Bi';
import { FaRetweet } from 'react-icons/fa';
import styles from './styles.module.css'

export const Tweet = ({ name, userName, children }) => {
    const [likes, setLikes] = useState(0)
    const [rt, setRt] = useState(0)
    const [comments, setComments] = useState(0)

    const handleLikes = () => {
        setLikes(prevState => {
            if(prevState){
                return 0
            }
            return 1
        })
    }
    const handleRt = () => {
        setRt(prevState => {
            if(prevState){
                return 0
            }
            return 1
        })
    }
  return (
    <article className={styles.tweet}>
        <div className={styles.header}>
            <img src="https://picsum.photos/100" alt="profile pic" className="img-default"/>
            <div className={styles.container}>
                <span className={styles.name}>{name}</span>
                <span className={styles.gray}>@{userName}</span>
                <span className={styles.gray}>20h</span>
                <button>....</button>
            </div>
        </div>
        <div className={styles.children}>
            {children}
        </div>
        <div className={styles.footer}>
            <ul className={styles.list}>
                <li> <button onClick={handleLikes}> <BiLike /> </button> {likes}</li>
                <li> <button onClick={handleRt}> <FaRetweet /> </button> {rt}</li>
                <li> <button onClick={() => setComments(comments + 1)}> <BiComment /> </button> {comments}</li>
            </ul>
        </div>
    </article>
  )
}


