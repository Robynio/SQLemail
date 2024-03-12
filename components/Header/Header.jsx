import { useState, useEffect } from 'react'
import classNames from 'classnames'
import layout from '@/styles/Layout.module.scss'
import style from './Header.module.scss'

function Header({ data }) {
  const [toggle, setToggle] = useState(false)
  const headerData = data.header

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      const header = document.getElementById('header')
      window.scrollY >= 80
        ? header?.classList.add(style['scroll-header'])
        : header?.classList.remove(style['scroll-header'])
    })
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      const navMenu = classNames(style.nav__menu)
      if (navMenu) {
        const sectionList = document.querySelectorAll('section[id]')
        sectionList.forEach((section) => {
          const sectionId = section.getAttribute('id')
          const querySelector = `.${navMenu} a[href*='${sectionId}']`
          const menuItem = document.querySelector(querySelector)
          if (menuItem) {
            const scrollY = window.scrollY
            const sectionTop = section.offsetTop - 50
            const activeLinkClass = classNames(style['nav__link--active'])
            if (
              scrollY > sectionTop &&
              scrollY <= sectionTop + section.offsetHeight
            ) {
              menuItem.classList.add(activeLinkClass)
            } else {
              menuItem.classList.remove(activeLinkClass)
            }
          }
        })
      }
    })
  })

  const clickHandler = (e) => {
    if (e.target.tagName === 'A') {
      setToggle(!toggle)
    }
  }

  return (
    !headerData ? <>loading..</> :
      <header className={style.header} id='header'>
        <nav className={classNames([style.nav], [layout.container])}>
          <a href='#' className={style.nav__logo} title={headerData?.logo}>
            {headerData?.logo}
          </a>
          <div
            className={classNames({
              [style.nav__menu]: true,
              [style['menu-show']]: toggle
            })}
          >
            <ul className={style.nav__list} onClick={clickHandler}>
              {headerData.navTab.map((n, i) => <li key={i} className={style.nav__item}>
                <a
                  href={`#${n}`}
                  title={n}
                  className={style.nav__link}
                >
                  {n}
                </a>
              </li>)}
            </ul>
          </div>
          <div className={style.nav__toggle} onClick={() => setToggle(!toggle)}>
            <i className='bx bx-grid-alt' />
          </div>
          <a
            href='#'
            className={classNames([layout.button])}
            title="Download"
          >
            Download
          </a>
        </nav>
      </header>
  )
}

export default Header
