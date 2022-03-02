import { makeAutoObservable } from 'mobx'
import { Tweet } from 'types'
import { getValidTweetsFromLocalStorage } from 'utilities/local-storage'
import { v4 as createId } from 'uuid'

export default class Timeline {
  tweets

  constructor(tweets: Tweet[] = []) {
    this.tweets = tweets

    this.initFromLocalStorage()

    makeAutoObservable(this)
  }

  initFromLocalStorage() {
    const tweetsFromLocalStorage = getValidTweetsFromLocalStorage()

    if (!tweetsFromLocalStorage) {
      return
    }

    this.tweets = tweetsFromLocalStorage
  }

  static validateTweetInput = (author: string, content: string) =>
    author.length && content.length

  addTweet(author: string, content: string) {
    const valid = Timeline.validateTweetInput(author, content)

    if (!valid) {
      return
    }

    const newTweets = this.tweets

    newTweets.push({ id: createId(), author, content, postedOn: new Date() })

    this.tweets = newTweets.sort((a, b) =>
      a.postedOn.getTime() > b.postedOn.getTime() ? -1 : 1
    )

    return true
  }

  removeTweet(id: string) {
    this.tweets = this.tweets.filter(tweet => tweet.id !== id)
  }
}
