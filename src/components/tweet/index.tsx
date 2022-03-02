import { formatDistanceToNow } from 'date-fns'
import { FC } from 'react'
import ProfilePicture from 'components/profile-picture'
import useGlobalState from 'hooks/use-global-state'
import { observer } from 'mobx-react-lite'

interface TweetProps {
  id: string
  author: string
  content: string
  postedOn: Date
}

const Tweet: FC<TweetProps> = observer(({ id, author, content, postedOn }) => {
  const { timeline } = useGlobalState()

  const onRemoveClick = () => {
    timeline.removeTweet(id)
  }

  return (
    <div className="group flex gap-5">
      <ProfilePicture />

      <div>
        <div>
          <span className="font-semibold">{author}</span>
          <span className="text-slate-500">
            {' '}
            &middot; {formatDistanceToNow(postedOn, { addSuffix: true })}
          </span>
          <span className="text-slate-400">
            {' '}
            &middot;{' '}
            <button
              onClick={onRemoveClick}
              className="transition-colors hover:text-slate-600"
            >
              Delete
            </button>
          </span>
        </div>

        <div>{content}</div>
      </div>
    </div>
  )
})

export default Tweet
