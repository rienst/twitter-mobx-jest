import Wrapper from 'components/wrapper'
import Topbar from 'components/topbar'
import { FC } from 'react'
import TweetForm from 'components/tweet-form'
import Timeline from 'components/timeline'
import { observer } from 'mobx-react-lite'

const App: FC = observer(() => (
  <Wrapper>
    <Topbar />

    <div className="mb-10">
      <TweetForm />
    </div>

    <Timeline />
  </Wrapper>
))

export default App
