import Header from './Header'
import Button, { LinkBtn, GroupBtn } from './Buttons'


// import { GroupBtn as RbsGbtn } from './React-Bootstap/Button'
import Alert from './Alert'

export default function App() {

  return (
    <div>
      <h2>App Modify 2</h2>
      <p>Lorem, ipsum dolor.</p>
      
      <Alert color='darkgreen' bgColor='lightgreen'>
        <h3>Success Alert</h3>
        <p>Saved Successfully!!!. </p>
        
      </Alert>
      <h1 className='bg-sky-700'>Trying git clone and push edits </h1>
    </div>
  )
}


