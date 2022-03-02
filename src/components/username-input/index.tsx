import { ChangeEventHandler, FC } from 'react'
import { observer } from 'mobx-react-lite'
import useGlobalState from 'hooks/use-global-state'

const UsernameInput: FC = observer(() => {
  const { user } = useGlobalState()

  const onChangeUsernameInput: ChangeEventHandler<HTMLInputElement> = event => {
    user.setName(event.target.value)
  }

  return (
    <input
      type="text"
      className="w-full rounded text-right text-sm text-slate-500 border border-transparent ring-primary-300 px-3 py-1 transition-colors hover:border-slate-300 focus:outline-none focus:text-black focus:border-primary-500 focus:ring"
      value={user.name}
      placeholder="What's your name?"
      onChange={onChangeUsernameInput}
    />
  )
})

export default UsernameInput
