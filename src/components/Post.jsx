import styles from './Header.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>

        <div className={styles.author}>
          <img className={styles.avatar} src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
        />
          <div className={styles.authorInfo}>
            <strong>DevTechG</strong>
            <span>Full-Stack Developer</span>
          </div>
        </div>

        <time title="10 de Março às 15:25h" dateTime="2025-03-10 13:25:00">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Boa tarde galera 👋</p>
        <p>Acabei de subir mais um projeto no meu portfólio.</p>
        <p><a href="">devtechg.github/ignite</a></p>
        <p>
          <a href="">#novoprojeto</a>{' '}
          <a href="">#nlw</a>{' '}
          <a href="">#rocketseat</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Deixe um comentário"
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  )
}