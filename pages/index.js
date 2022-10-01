import Image from 'next/image'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import Head from 'next/head'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Donations Dapp</title>
      </Head>
      <Header wallet={ 'Connect Wallet ' } />
    </div>
  )
}
