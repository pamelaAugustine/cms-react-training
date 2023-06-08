import Image from 'next/image'
import FooterLink from './FooterLink'
import Copyright from './Copyright'
import styles from '../../styles/footer/Footer.module.css'

export default function Footer() {
	return (
		<footer className={styles.footerContainer}>
			<Image
				src='/logo.svg'
				alt='Comic Closet Logo'
				className={styles.logo}
				width={106}
				height={106}
			/>

			<div className={styles.linksContainer}>
				<FooterLink url={'https://www.google.com'} text={'Privacy Policy'}/>
				<span> | </span>
				<FooterLink url={'https://www.firefox.com'} text={'Terms of Service'}/>
			</div>
				
			<Copyright />
		</footer>
	);
}