import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import Header from '../utils/header'
import Carousel from '../utils/carousel'

export default function Home() {
  return (
    <div>
      <Header />
      <div className="landing">
        <Carousel/>
        <h3>some words</h3>
        <h3>some more words</h3>
      </div>
    </div>
  )
}