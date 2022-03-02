import { createContext, FC, useContext } from 'react'
import { autorun } from 'mobx'
import {
  timelineTweetsLocalStorageKey,
  userNameLocalStorageKey,
} from 'utilities/local-storage'
import User from 'state/user'
import Timeline from 'state/timeline'

const globalState = {
  user: new User(),
  timeline: new Timeline(),
}

autorun(() => {
  localStorage.setItem(
    userNameLocalStorageKey,
    JSON.stringify(globalState.user.name)
  )
})

autorun(() => {
  localStorage.setItem(
    timelineTweetsLocalStorageKey,
    JSON.stringify(globalState.timeline.tweets)
  )
})

const globalStateContext = createContext(undefined as any as typeof globalState)

export const GlobalStateProvider: FC = ({ children }) => (
  <globalStateContext.Provider value={globalState}>
    {children}
  </globalStateContext.Provider>
)

const useGlobalState = () => useContext(globalStateContext)

export default useGlobalState
