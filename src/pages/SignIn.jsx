import {useState} from 'react'
import {toast} from 'react-toastify'
import {Link, useNavigate} from 'react-router-dom'
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import OAuth from '../components/OAuth'
import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'


function SignIn() {
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const {email, password} = formData // destructures the email and password for later use

  const onChange = (e) => { // will allow the user to update the text bars with data
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const auth = getAuth()

      const userCredential = await signInWithEmailAndPassword(auth, email, password)
  
      if (userCredential.user) {
        navigate('/')
      }
    } catch (error) {
      toast.error('Bad User Crendtials')
    }
  }

  const navigate = useNavigate()

  return (
    <>
     <div className="PageContainer">
      <header>
        <p className="pageHeader">Welcome Back!</p>
      </header>

      <form onSubmit={onSubmit}>
        <input 
        type="email" 
        className="emailInput" 
        placeholder='Email' 
        id='email' 
        value={email} 
        onChange={onChange}
        />

            <div className="passwordInputDiv">
            <input 
            type={showPassword ? 'text' : 'password'} 
            className='passwordInput' 
            placeholder='Password' 
            id='password' 
            value={password} 
            onChange={onChange}
            />
          
          <img src={visibilityIcon} alt="show password" className="showPassword" onClick={() =>
          setShowPassword((prevState) => !prevState)}/> 
          </div>
            <Link to='/forgot-password' className='forgotPasswordLink'>
              Forgot Password
            </Link>

            <div className="signInBar">
              <p className="signInText">
                Sign In
              </p>
              <button className="signInButton">
                <ArrowRightIcon fill='white' width='40px' height='40px' /> 
              </button>
            </div>
        </form>

        <OAuth />

        <Link to='/sign-up' className='registerLink'>
          Sign Up Instead
        </Link>
     </div>
    </>
  )
  }
  
  export default SignIn