import { Tweet } from 'types'

export const userNameLocalStorageKey = 'user.name'
export const timelineTweetsLocalStorageKey = 'timeline.tweets'

export const getUserNameFromLocalStorage = () => {
  const stringifiedName = localStorage.getItem(userNameLocalStorageKey)

  if (!stringifiedName) {
    return
  }

  const name = JSON.parse(stringifiedName)

  if (typeof name !== 'string') {
    return
  }

  return name
}

export const getValidTweetsFromLocalStorage = () => {
  const stringifiedTweets = localStorage.getItem(timelineTweetsLocalStorageKey)

  if (!stringifiedTweets) {
    return
  }

  const tweets = JSON.parse(stringifiedTweets, (key, value) =>
    typeof value === 'string' &&
    /^\d\d\d\d-\d\d-\d\dT\d\d:\d\d:\d\d.\d\d\dZ$/.test(value)
      ? new Date(value)
      : value
  )

  if (!Array.isArray(tweets)) {
    return
  }

  console.log(tweets)

  const completeTweets = tweets.filter(
    tweet =>
      tweet &&
      typeof tweet.id === 'string' &&
      tweet.id.length &&
      typeof tweet.author === 'string' &&
      tweet.author.length &&
      typeof tweet.content === 'string' &&
      tweet.content.length &&
      tweet.postedOn instanceof Date
  )

  if (!completeTweets.length) {
    return
  }

  return completeTweets.map(tweet => {
    return {
      id: tweet.id,
      author: tweet.author,
      content: tweet.content,
      postedOn: tweet.postedOn,
    } as Tweet
  })
}
