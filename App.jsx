import { Header } from './components/Header'
import './global.css'
import styles from './App.module.css'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

const posts = [
  {
    id:1,
    author: {
      avatarUrl: "https://github.com/jlzimmerhansl",
      name: "Jessica Zimmerhansl",
      role: 'CTO Home'
    },
    content: [
      { type: 'paragraph', content:  'Fala galeraa 👋' },
      { type: 'paragraph', content:  'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'linh', content: '<a href="">jane.design/doctorcare</a>' },
    ],
    publishAt: new Date('2022-05-03 20:00:00')
  },
  {
    id:2,
    author: {
      avatarUrl: "https://github.com/diego3g",
      name: "Mayk Brito",
      role: 'Educator'
    },
    content: [
      { type: 'paragraph', content:  'Fala galeraa 👋' },
      { type: 'paragraph', content:  'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      { type: 'linh', content: '<a href="">jane.design/doctorcare</a>' },
    ],
    publishAt: new Date('2022-05-10 20:00:00')
  }
]

export function App() {

  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        
        <Sidebar />
        
        <main>
          {posts.map(post => {
           return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishAt={post.publishAt}
              />
           )
          })};
        </main>
      </div>
    </div>
  )
}

export default App
