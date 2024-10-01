import Layout from '@/components/Layout/Layout'
import React from 'react'
import styles from '@/styles/detail.module.css'
import Image from 'next/image';
import { Item } from '@/types/Item';
import Link from 'next/link';
import { GetServerSideProps } from 'next';

const Detail = ({item}: {item: Item}) => {
  return (
    <Layout>
      {item && 
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>{item.title}</h2>
        <div className={styles.flex_container}>
          <Image src={item.url} alt={item.title} width={400} height={400} className={styles.image} priority/>
          <div className={styles.explanation}>
            {item.texts.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
            <p>¥{item.price} +tax</p>
            <dl className={styles.specs}>
              <dt className={styles.title}>SIZE:</dt>
              <dd className={styles.detail}>W{item.size.width} × D{item.size.depth} × H{item.size.height}</dd>
              <dt className={styles.title}>COLOR:</dt>
              <dd className={styles.detail}>{item.color}</dd>
              <dt className={styles.title}>MATERIAL:</dt>
              <dd className={styles.detail}>{item.material}</dd>
            </dl>
          </div>
        </div>
        <div className={styles.more}>
          <Link href={"/products/"}>Back To Products</Link>
        </div>
      </div>}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context.params?.slug;
  const response = await fetch(`http://localhost:3000/api/detail/${slug}`);
  const item = await response.json();

  return {
      props: {
          item,
      },
  };
}; 

export default Detail