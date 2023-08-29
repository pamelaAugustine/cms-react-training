import { useContext } from 'react'
import { favoritesContextType, favoritesContext } from '../../context/favorties'
import FavoritesItem from './FavoritesItem'
import { FaBolt } from 'react-icons/fa'
import { montserrat } from '../../fonts/index'
import styles from '../../styles/filter/Favorites.module.css'

type FavoritesProps = {
	handleCloseButtonClick: React.MouseEventHandler;
}

export default function Favorites({handleCloseButtonClick}: FavoritesProps) {
	const context = useContext<favoritesContextType | null>(favoritesContext)

	return (
		<div className={`${styles.favoritesContainer} ${montserrat.variable}`}>
			<div className={styles.inner}>
				<h2 className={styles.favoritesTitle}>Favorites</h2>
				<div className={styles.comicGrid}>
					{
						context?.favorites.map((comic) => {
							return (
								<FavoritesItem 
									key={comic.id}
									id={comic.id}
									title={comic.title}
									issueNumber={comic.issueNumber}
									thumbnail={comic.thumbnail}
								/>
							)
						})
					}
				</div>
			</div>
			<button
				className={styles.closeButton}
				onClick={handleCloseButtonClick}
			>
				Hide Favorites
				<FaBolt />
			</button>
		</div>
	)
}