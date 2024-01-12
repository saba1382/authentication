import { useEffect, useState } from 'react';
import styles from './style.module.css'
import { useFetch } from '../../hooks/useFetch';


const Authentication = () => {

  const url='http://localhost:3000/register/'
  // const allowShowLogin = useRef(true);
  const{postData, error} = useFetch('http://localhost:3000/register', 'POST')

   const{ data, isLoading} = useFetch(url)

  const [allowShowLogin, setAllowShowLogin] = useState(true);
  const[firstName, setFirstName] = useState('');
  const[lastName, setLastName] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault()
    postData({firstName, lastName, email,password})
    console.log(data, error);
    if (!error) {
      clearRegisterForm()
    }
  }

  const clearRegisterForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('')
  }


  const handleLogin = (e) => {
    e.preventDefault()
    console.log('data', data);
    const checkAuth = data.filter(user => user.email === email && user.password === password)
    console.log('', checkAuth);
    if (checkAuth.length) {
      console.log('ورود با موفقیت انجام شد')
    }else {
      console.log('ورود ناموفق بود');
    }
    // data.map(user => {
    //   if (user.email === email && user.password === password) {
    //     console.log('ورود با موفقیت انجام شد')
    //     return;
    //   }else {
    //     console.log('ورود ناموفق بود');
    //     return
    //   }
    // })
  }

  return (
    <div class="form">
      <ul class="tab-group">
        <li className={`tab ${!allowShowLogin?'active' : ''}`}><a onClick={() =>setAllowShowLogin(false)}>ثبت نام</a></li>
        <li className={`tab ${allowShowLogin?'active' : ''}`} ><a onClick={() =>setAllowShowLogin(true)}>ورود</a></li>
      </ul>

      <div class="tab-content">
        {!allowShowLogin ?
        
          <div id="signup">
            <h1>Register for Free!</h1>

            <form onSubmit={handleRegister}>

              <div class="top-row">
                <div class="field-wrap">
                  
                    
                  
                  <input type="text" required autocomplete="off"  placeholder='First name' onChange={(e) => setFirstName(e.target.value)} value={firstName}/>
                </div>

                <div class="field-wrap">
                   
                  <input type="text" required autocomplete="off" placeholder='Last name' onChange={(e) => setLastName(e.target.value)} value={lastName}/>
                </div>
              </div>

              <div class="field-wrap">
                 
                <input type="email" required autocomplete="off"  placeholder='Emall' onChange={(e) => setEmail(e.target.value)} value={email}/>
              </div>

              <div class="field-wrap">
                
                <input type="password" required autocomplete="off" minLength={6}  placeholder='Password, Minimum 6 characters! ' onChange={(e) => setPassword(e.target.value)} value={password}/>
              </div>

              <button class="button button-block">Register</button>

            </form>

          </div>
          :
          <div id="login">
          <h1>Welcome!</h1>

          <form onSubmit={handleLogin}>

            <div class="field-wrap">
              <input type="email" required autocomplete="off" placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email}/>
            </div>

            <div class="field-wrap">
            <input type="password" required autocomplete="off" minLength={6}  placeholder='Password, Minimum 6 characters! ' onChange={(e) => setPassword(e.target.value)} value={password}/>
            </div>

            {/* <p class="forgot"><a href="#">Forgot Password?</a></p>
            <p class="forgot"><a href="#">Forgot Email?</a></p>
            <p class="forgot"><a href="#">YEET</a></p> */}

            <button class="button button-block" >Log In</button>

          </form>

          </div>
          
        }
        
      </div>

    </div>
  )
}

export default Authentication;