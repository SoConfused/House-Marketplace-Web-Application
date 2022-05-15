import {useState} from 'react'
import {Link} from 'react-router-dom'
import {getAuth, sendPasswordResetEmail} from 'firebase/auth'
import {toast} from 'react-toastify'
import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'

function ForgotPassword() {
  const [email, setEmail] = useState('') // sets email parameter to an empty string; basically users can enter their email if they forgot password

  const onChange = e => setEmail(e.target.value)

  const onSubmit = async e =>{
    e.preventDefault()

    try {
      const auth = getAuth()
      await sendPasswordResetEmail(auth, email)
      toast.success('Email was sent')
    } catch (error) {
      toast.error('Could not send reset email')
    }
  }

    return (
      <div className='pageContainer'>
        <header>
          <p className="pageHeader">Forgot Password</p>
        </header>

        <main>
          <form onSubmit={onSubmit}> 
            <input type="email" className="emailInput" placeholder='Email' id='email' value={email} onChange={onChange} />
          </form>
          <Link className='ForgotPasswordLink' to='/sign-in'>
            Sign In
          </Link>

          <div className="signInBar">
            <div className="signInText">Send Reset Link</div>
            <button className='signInButton'>
              <ArrowRightIcon fill='purple' width='36px' height='36px' />
            </button>
          </div>
        </main>
      </div>
    )
  }
  
  export default ForgotPassword