import {
  ChangeEventHandler,
  FC,
  FormEventHandler,
  KeyboardEventHandler,
  useState,
} from 'react'
import ProfilePicture from 'components/profile-picture'
import useGlobalState from 'hooks/use-global-state'
import { observer } from 'mobx-react-lite'

const TweetForm: FC = observer(() => {
  const { user, timeline } = useGlobalState()

  const [content, setContent] = useState('')

  const canTweet = user.name.length && content.length

  const submitTweet = () => {
    const success = timeline.addTweet(user.name, content)

    if (!success) {
      return
    }

    setContent('')
  }

  const onTextareaChange: ChangeEventHandler<HTMLTextAreaElement> = event => {
    setContent(event.target.value)
  }

  const onTextareaKeyDown: KeyboardEventHandler<
    HTMLTextAreaElement
  > = event => {
    if (!event.shiftKey || event.key !== 'Enter') {
      return
    }

    submitTweet()
  }

  const onSubmitTweetForm: FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault()

    submitTweet()
  }

  return (
    <form onSubmit={onSubmitTweetForm} className="flex gap-5">
      <ProfilePicture />

      <div className="flex flex-col items-start gap-3 w-full">
        <textarea
          className="w-full rounded-lg border border-slate-300 p-3 transition-colors resize-none ring-primary-300 placeholder:text-slate-400 focus:outline-none focus:border-primary-500 focus:ring"
          rows={2}
          placeholder={`What's happening, ${user.name}?`}
          value={content}
          onChange={onTextareaChange}
          onKeyPress={onTextareaKeyDown}
        />

        <button
          type="submit"
          disabled={!canTweet}
          className="font-medium bg-primary-500 text-white rounded px-3 py-1 transition-colors hover:bg-primary-600 ring-primary-400 focus:outline-none focus:ring disabled:bg-primary-400"
        >
          Tweet
        </button>
      </div>
    </form>
  )
})

export default TweetForm
