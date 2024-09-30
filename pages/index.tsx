
import Layout from "@/components/Layout/Layout";
import Link from "next/link";
import styles from "@/styles/top.module.css"
import Card from "@/components/Cards/Card";
import { Item } from "@/types/Item";
import { useEffect, useState } from "react";

export default function Home() {

  const [items, setItems] = useState<Item[]>([])
  const limit = 8;

  useEffect(() => {
    async function fetchItems() {
      const response = await fetch(`/api/?limit=${limit}`);
      const data = await response.json();
      setItems(data.items);
    }

    fetchItems();
  }, []);

  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.grid_container}>
          <Card items={items} />
        </div>
        <div className={styles.more}>
          <Link href={"/products/1"}>View More</Link>
        </div>
      </div>
    </Layout>
  );
}
