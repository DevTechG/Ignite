// JSX = JavaScript + XML

import { Post }from "./Post"

export function App() {

  return (
    <div>
      <Post 
        author = "Author01" 
        content = "Lorem ipsum dolor sit amet consectetur  dipisicing elit. Deserunt, numquam."
      />
      <Post />
    </div>
  )
}

