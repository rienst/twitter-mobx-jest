import Tweet from 'components/tweet'
import useGlobalState from 'hooks/use-global-state'
import { FC } from 'react'
import { observer } from 'mobx-react-lite'

const Timeline: FC = observer(() => {
  const { timeline } = useGlobalState()

  return (
    <ul className="flex flex-col gap-5">
      {timeline.tweets.map(tweet => (
        <li key={tweet.id}>
          <Tweet
            id={tweet.id}
            author={tweet.author}
            content={tweet.content}
            postedOn={tweet.postedOn}
          />
        </li>
      ))}
    </ul>
  )
})

export default Timeline
