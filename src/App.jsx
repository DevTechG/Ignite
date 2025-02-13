// JSX = JavaScript + XML

import { Header } from "./components/Header"
import { Post }from "./Post"
import './global.css'

export function App() {

  return (
    <div>
      <Header />
      <Post 
        author = "Author01" 
        content = "Lorem ipsum dolor sit amet consectetur  dipisicing elit. Deserunt, numquam."
      />
      <Post 
        author = "Author02" 
        content = "Lorem."
      />
    </div>
  )
}

