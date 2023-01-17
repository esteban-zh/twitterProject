import React, { useContext } from 'react'
import { useApi } from '../../hooks/useApi'
import { PublishTweet } from '../PublishTweet'
import { Tweet } from '../Tweet'
import { LoadingTweets } from '../LoadingTweets'
import { TwContext } from '../../context/TweetsContext'
import styles from './styles.module.css'

export const Timeline = () => {
    const {data, error, loading} = useApi(import.meta.env.VITE_API)
    const value = useContext(TwContext);
    console.log("context", value)
  return (
    <div className={styles.timeline}>
        <PublishTweet />
        {
            data &&
                data.map((tweet, index) => <Tweet userName={tweet.author.split(" ")[0]} name={tweet.author} key={index}>
            <p>{tweet.quote}</p>
            <img src="https://picsum.photos/250" alt="img" />
            
            </Tweet>)
        }
        {
            loading && <LoadingTweets />
        }
    </div>
  )
}
