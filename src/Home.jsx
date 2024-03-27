import {CustomNav} from './assets/components//Nav'
import {Header} from './assets/components/home/Header'
import {Products} from './assets/components/home/Products'
import {Why} from './assets/components/home/Why'
import {Members} from './assets/components/home/Members'
import {Contact} from './assets/components/home/Contact'
import '../src/assets/css/Home.css'

export const Home = () => {
  return (
    <>
      <CustomNav />
      <Header />
      <Products />
      <Why />
      <Members />
      <Contact />
    </>
  )
}