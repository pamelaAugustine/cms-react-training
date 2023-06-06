import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { Comic } from './components/Comic';
import  useMarvelApi  from './api/useMarvelApi';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
const md5 = require('md5');

export const getStaticProps: GetStaticProps = async() => {
  const timestamp: number = Date.now();
	const hash: string = md5(`${timestamp}${process.env.PRIVATE_API_KEY}${process.env.PUBLIC_API_KEY}`)
	let API_URL: string = `https://gateway.marvel.com:443/v1/public/comics?ts=${timestamp}&apikey=${process.env.PUBLIC_API_KEY}&hash=${hash}`
    return { props: {API_URL}}
}

export default function Home({ API_URL }: InferGetStaticPropsType<typeof getStaticProps>) {
	const { isLoading, serverError, comics } = useMarvelApi(API_URL);

  return (
    <>
      <Head>
        <title>Exercise 4</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {isLoading && <h2>Loading Comics...</h2>}
      {serverError && !isLoading && <h2>Error Loading Comics</h2>}

      {!isLoading && !serverError && comics && 
        <main className={styles.slides} style={{display:'grid', gap: 30 + 'px', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', padding: 50 + 'px'}}>
        
        {comics.map(comic => 

          <Comic
          key={comic.id}
          comicData={comic}
          />

        )} 

      </main>}

    </>
  )
}

