import { Avatar } from './Avatar';
import styles from './Comment.module.css';

import { ThumbsUp, Trash } from 'phosphor-react';

export function Comment({ content, onDeleteComment }) {
  
  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
     <Avatar hasBorder={false}  src="https://images.unsplash.com/photo-1741412252402-0d965ea9970b?auto=format&fit=crop&w=500&q=50" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Cowboy do bisão</strong>
              <time title="10 de Março às 20:00h" dateTime="2025-03-10 20:00:00">Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}