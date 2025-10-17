<<<<<<< HEAD
import React  ,{ useState , useContext } from 'react'
import { authStyles as styles } from '../assets/dummystyle'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom';
import { validateEmail } from '../utils/helper';

import axiosInstance from '../utils/axiosInstance';
import { API_PATHS } from '../utils/apiPath';

import { Input } from './Inputs';


const SignUp = ({setCurrentPage}) => {

  
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!fullName ) {
      setError('Please fill in all fields.');
      return;
      
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
     
    }if(!password) {
      setError('Please enter a password.');
      return;
      
    }
    setError('');

    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER , {
        name: fullName,
        email,
        password,
      })
      const { token  } = response.data;
  if(token){
        updateUser(response.data);
        localStorage.setItem('token', token);
        navigate('/dashboard');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred during sign up. Please try again.');
    }

   


  }

  return (
    <div className={styles.signupContainer}>
        <div className={styles.headerWrapper} >
            <h3 className={styles.signupTitle}>
                Create Account
            </h3>
            <p className={styles.signupSubtitle} >
                Join thousands of users and start building your resume today!
            </p>

            {/* Form */}
            <form onSubmit={handleSignUp} className={styles.signupForm}>
                <Input value={fullName} onChange={({target})=> setFullName(target.value)}
                label='Full Name'
                placeholder='John Doe'
                type='text'
                />

                <Input value={email} onChange={({target})=> setEmail(target.value)}
                label='Email'
                placeholder='email@exmaple.com'
                type='email'
                />

                <Input value={password} onChange={({target})=> setPassword(target.value)}
                label='Password'
                placeholder='min 8 characters'
                type='password'
                />
                {error && <div className={styles.errorMessage} >{error}</div>}
                <button type='submit' className={styles.signupButton} >
                    Create Account
                </button>

              {/* FOOTER */}
              <p className={styles.switchText} > 
                ALready have an account?{' '}
                <button onClick={()=> setCurrentPage('Login')}
                type='button' className={styles.signupSwitchButton}>
                  Sign In
                </button>
              </p>

                

            </form>

        </div>
    </div>
  )
}

=======
import React  ,{ useState , useContext } from 'react'
import { authStyles as styles } from '../assets/dummystyle'
import { UserContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom';
import { validateEmail } from '../utils/helper';

import axiosInstance from '../utils/axiosInstance';
import { API_PATHS } from '../utils/apiPath';

import { Input } from './Inputs';


const SignUp = ({setCurrentPage}) => {

  
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!fullName ) {
      setError('Please fill in all fields.');
      return;
      
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
     
    }if(!password) {
      setError('Please enter a password.');
      return;
      
    }
    setError('');

    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER , {
        name: fullName,
        email,
        password,
      })
      const { token  } = response.data;
  if(token){
        updateUser(response.data);
        localStorage.setItem('token', token);
        navigate('/dashboard');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'An error occurred during sign up. Please try again.');
    }

   


  }

  return (
    <div className={styles.signupContainer}>
        <div className={styles.headerWrapper} >
            <h3 className={styles.signupTitle}>
                Create Account
            </h3>
            <p className={styles.signupSubtitle} >
                Join thousands of users and start building your resume today!
            </p>

            {/* Form */}
            <form onSubmit={handleSignUp} className={styles.signupForm}>
                <Input value={fullName} onChange={({target})=> setFullName(target.value)}
                label='Full Name'
                placeholder='John Doe'
                type='text'
                />

                <Input value={email} onChange={({target})=> setEmail(target.value)}
                label='Email'
                placeholder='email@exmaple.com'
                type='email'
                />

                <Input value={password} onChange={({target})=> setPassword(target.value)}
                label='Password'
                placeholder='min 8 characters'
                type='password'
                />
                {error && <div className={styles.errorMessage} >{error}</div>}
                <button type='submit' className={styles.signupButton} >
                    Create Account
                </button>

              {/* FOOTER */}
              <p className={styles.switchText} > 
                ALready have an account?{' '}
                <button onClick={()=> setCurrentPage('Login')}
                type='button' className={styles.signupSwitchButton}>
                  Sign In
                </button>
              </p>

                

            </form>

        </div>
    </div>
  )
}

>>>>>>> a36c4b3afb22ec33d55f98c1f135cb4b4bbfb571
export default SignUp