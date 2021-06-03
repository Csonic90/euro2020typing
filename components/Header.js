import React from 'react'
import Link from 'next/link'

const nfaDependencyVersion = require('../package.json').dependencies[
  'next-firebase-auth'
]
const nextDependencyVersion = require('../package.json').dependencies.next


const Header = ({ email, signOut }) => (
  <div className="row">

    {email ? (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">EURO 2020 WAKRO</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menuNavs" aria-controls="menuNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="menuNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item m-2">
                <Link href="/">
                  <a >Home</a>
                </Link>
              </li>
              <li className="nav-item m-2">
                <Link href="/tablica">
                  <a >Tablica</a>
                </Link>
              </li>
              <li className="nav-item m-2">
                <Link href="/twojetrafy">
                  <a >Twoje Typy</a>
                </Link>
              </li>
            </ul>
          </div>

          <p className="navbar-text justify-content-end m-2">Zalogowany jako {email}</p>
          <button
            type="button"
            className="btn btn-outline-info m-1 justify-content-end"
            onClick={() => {
              signOut()
            }}
          >Wyloguj
        </button>
        </nav>
      </>

    ) : (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">EURO 2020 WAKRO</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
           
            </ul>
          </div>

          <p className="navbar-text justify-content-end m-2">Nie jesteś zalogowany</p>
          <Link href="/auth">
            <button type="button"
              className="btn btn-outline-info m-1 justify-content-end"
            >
              Zaloguj
            </button>
          </Link>
        </nav>
      </>


    )}
  </div>
)

export default Header
