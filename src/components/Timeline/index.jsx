import React, { useContext } from 'react'
import { useApi } from '../../hooks/useApi'
import { PublishTweet } from '../PublishTweet'
import { Tweet } from '../Tweet'
import { LoadingTweets } from '../LoadingTweets'
import { TwContext } from '../../context/TweetsContext'
import { getRandomNumber } from '../../utilities/getRandomNumber'
import styles from './styles.module.css'

export const Timeline = () => {
    const {data, error, loading} = useApi(`${import.meta.env.VITE_API}/10`)
    const value = useContext(TwContext);
  return (
    <div className={styles.timeline}>
        <PublishTweet />
        {
            value && 
                value.map((tweet, index) =>
                <Tweet username={tweet.username} name={tweet.  name} key={index}>
                    <p>{tweet.tweet}</p>
                </Tweet>)
        }
        {
            data &&
                data.map((tweet, index) => {
                    const random = getRandomNumber()
                    return(
                        <Tweet username={tweet.author.split(" ")[0]} name={tweet.author} key={index}>
                            <p>{tweet.quote}</p>
                            {
                            random > 4 && <img src="https://picsum.photos/250" alt="img" />                                 
                            }               
                        </Tweet>
                    )
                }
                )
        }
        {
            loading && <LoadingTweets />
        }
    </div>
  )
}
