import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import styles from '../../styles/pager/Pager.module.css'
import { karla } from '../../fonts/index'

type PagerProps = {
	firstComicIndex: number;
	totalComics: number;
	comicLimit: number;
	handlePagination: (event: React.MouseEvent<HTMLButtonElement> | React.TouchEvent<HTMLButtonElement>) => void;
}

export default function Pager({firstComicIndex, totalComics, handlePagination, comicLimit}: PagerProps) {
	const firstIndex = totalComics > 0 ? firstComicIndex + 1 : 0;
	const lastIndex = firstComicIndex + comicLimit > totalComics ? totalComics : firstComicIndex + comicLimit;

	return (
		<div className={styles.pagerContainer}>
			<div className={styles.inner}>
				<button className={styles.pagerButton} name="prev" onClick={event => handlePagination(event)}>
					<FontAwesomeIcon icon={faAngleLeft} aria-hidden="true"/>
				</button>
				<span className={`${styles.pagerInfo} ${karla.variable}`}>{firstIndex}-{lastIndex} of {totalComics}</span>
				<button className={styles.pagerButton} name="next" onClick={event => handlePagination(event)}>
					<FontAwesomeIcon icon={faAngleRight} aria-hidden="true"/>
				</button>
			</div>
		</div>
	)
}