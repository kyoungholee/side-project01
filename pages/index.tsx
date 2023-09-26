import styles from '@/styles/Home.module.css';
import Header from '@/pages/components/header/header';
import Slides from '@/pages/components/autoslide/slides';
import Category from '@/pages/components/category/category'

export default function Home() {
  return (
    <>
      <Header />
      <Slides />
      <Category />
    </>
  );
}
