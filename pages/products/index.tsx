import Card from '@/components/Card/Card'
import Layout from '@/components/Layout/Layout'
import React, { useEffect, useState } from 'react'
import styles from '@/styles/products.module.css'
import { Item } from '@/types/Item'
import Paginator from '@/components/Paginator/Paginator'

const Products = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);
  const limit = 8;

  useEffect(() => {
    async function fetchItems() {
      const response = await fetch(`/api/?page=${page}&limit=${limit}`);
      const data = await response.json();
      setItems(data.items);
      setTotalPages(data.totalPages);
    }

    fetchItems();
  }, [page]);

  return (
    <Layout>
      <div className={styles.wrapper}>
        <h2 className={styles.heading}>Products</h2>
        <div className={styles.grid_container}>
          {items.map((item, index) => (
            <Card item={item} key={index} />
          ))}
        </div>
        <Paginator totalPages={totalPages} setPage={setPage} />
      </div>
    </Layout>
  )
}

export default Products