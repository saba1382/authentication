import Authentication from '../../modules/authentication'
import styles from './style.module.css'


const AuthLayout = () => {
  return (
    <div>
        {/* <p className={styles.authLayout}>Auth Layout</p> */}
        <Authentication/>
    </div>
  )
}

export default AuthLayout