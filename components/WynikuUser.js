import React from 'react'
import Link from 'next/link'

const nfaDependencyVersion = require('../package.json').dependencies[
  'next-firebase-auth'
]
const nextDependencyVersion = require('../package.json').dependencies.next

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 16,
  },
  versionsContainer: {
    marginLeft: 0,
    marginRight: 'auto',
  },
  button: {
    marginLeft: 16,
    cursor: 'pointer',
  },
}

const Header = ({ email, signOut }) => (
  <div style={styles.container}>
    <div style={styles.versionsContainer}>
      <div>EURO 2020 WAKRO</div>
      <ul>
        <li>
          <Link href="/">
            <a style={styles.linkAnchor}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/tablica">
            <a style={styles.linkAnchor}>Tablica</a>
          </Link>
        </li>
        <li>
          <Link href="/twojetrafy">
            <a style={styles.linkAnchor}>Twoje Trafy</a>
          </Link>
        </li>
      </ul>

    </div>
    {email ? (
      <>
        <p>Zalogowany jako {email}</p>
        <button
          type="button"
          onClick={() => {
            signOut()
          }}
          style={styles.button}
        >
          Wyloguj
        </button>
      </>
    ) : (
      <>
        <p>Nie jesteś zalogowany</p>
        <Link href="/auth">
          <a>
            <button type="button" style={styles.button}>
              Sign in
            </button>
          </a>
        </Link>
      </>
    )}
  </div>
)

export default Header
