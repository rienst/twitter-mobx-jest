import { createContext, FC, useContext } from 'react'
import { autorun } from 'mobx'
import User from 'state/user'
import Timeline from 'state/timeline'
import {
  NameLocalStorageManager,
  TweetsLocalStorageManager,
} from 'utilities/local-storage'

const globalState = {
  user: new User(),
  timeline: new Timeline(),
}

autorun(() => {
  NameLocalStorageManager.setValue(globalState.user.name)
})

autorun(() => {
  TweetsLocalStorageManager.setValue(globalState.timeline.tweets)
})

const globalStateContext = createContext(undefined as any as typeof globalState)

export const GlobalStateProvider: FC = ({ children }) => (
  <globalStateContext.Provider value={globalState}>
    {children}
  </globalStateContext.Provider>
)

const useGlobalState = () => useContext(globalStateContext)

export default useGlobalState
