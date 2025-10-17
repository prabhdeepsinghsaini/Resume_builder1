import React , { useState , useContext } from 'react'
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { validateEmail } from '../utils/helper';
import axiosInstance from '../utils/axiosInstance';
import { API_PATHS } from '../utils/apiPath';
import Dashboard from '../pages/Dashboard';

import { authStyles as styles } from '../assets/dummystyle'
import { Input } from './Inputs';

const Login = ({setCurrentPage}) => {

  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async (e) =>{
   e.preventDefault();
    if (!validateEmail(email)) {
          setError('Please enter a valid email address.');
          return;
         
        }if(!password) {
          setError('Please enter a password.');
          return;
          
        }
        setError('');

        try {
          const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN , {
            email,
            password,
          });
          const { token} = response.data;
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
    <div className={styles.container} >
      <div className={styles.headerWrapper} >
      <h3 className={styles.title} >Welcome Back!

      </h3>
      <p className={styles.subtitle}  >
        Sign in to continue building your resune

      </p>
    </div>

    {/* FORM */}

    <form className={styles.form} onSubmit={handleLogin} >
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
                <button type='submit' className={styles.submitButton} >
                  Sign IN
                </button>

                <p className={styles.switchText} >
                  Don't have an account?{' '}
                  <button 
                  type='button'
                  className={styles.switchButton}
                  onClick={()=> setCurrentPage('signup')}
                  >
                    Sign Up
                  </button>
                  


                </p>



                </form>
    </div>
    
  )
}

export default Login