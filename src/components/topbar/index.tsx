import Logo from 'components/logo'
import { FC } from 'react'
import UsernameInput from 'components/username-input'

const Topbar: FC = () => (
  <div className="flex justify-between items-center gap-10 py-10">
    <div className="flex items-center gap-5">
      <div className="w-12">
        <Logo />
      </div>

      <div className="font-semibold text-lg">Twitter</div>
    </div>

    <UsernameInput />
  </div>
)

export default Topbar
