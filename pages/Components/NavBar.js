import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.css'

export const NavBar = () => {
    const router = useRouter();
    return (
        <div style={{zIndex:'99'}}>
        <div className={styles.container}>
            <div className={styles.logo}>team.</div>
            <div className={styles.links}>
                <div onClick={()=>router.push("/")}>Products</div>
                <div onClick={()=>router.push("/services")}>Services</div>
                <div onClick={()=>router.push("/contact")}>Contact</div>
                <div onClick={()=>router.push("/login")}>Log in</div>
                <div onClick={()=>router.push("/getaccess")}>Get Access</div>
            </div> 
        </div>
        </div>
    )
}