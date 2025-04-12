import Header from './Header'
import Button, { LinkBtn, GroupBtn } from './Buttons'


import { GroupBtn as RbsGbtn } from './React-Bootstap/Button'
import Alert from './Alert'

export default function App() {

  return (
    <div> 
 
      <Header />

      <RbsGbtn />

      <section>My section content</section>
      <h2>Welcome</h2>

      <GroupBtn />

      <GroupBtn />

      <p>Lorem ipsum dolor sit amet.</p>
      <LinkBtn></LinkBtn>
      <ul>
        <li>Lorem, ipsum.</li>
        <li>Mollitia, atque!</li>
        <li>Provident, quae.</li>
      </ul>
      <Button text='Login'></Button>

      <div />

      <Alert color='darkgreen' bgColor='lightgreen'>
        <h3>Success Alert</h3>
        <p>Saved Successfully!!!. </p>
      </Alert>

      <Alert color='darkred' bgColor='lightcoral'>
        <h3>Danger Alert</h3>
        <p>Lorem ipsum dolor sit amet.</p>
      </Alert>

    </div>
  )
}


