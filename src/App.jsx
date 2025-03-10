// JSX = JavaScript + XML

import { Header } from "./components/Header"
import { Post } from './components/Post'
import { Sidebar } from "./components/Sibebar"

import styles from './App.module.css';

import './global.css'


export function App() {

  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author = "Author01" 
            content = "Lorem ipsum dolor sit amet consectetur  dipisicing elit. Deserunt, numquam."
          />
          <Post 
            author = "Author02" 
            content = "Lorem."
          />
        </main>
      </div>
    </div>
  )
}

