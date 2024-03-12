import classNames from 'classnames'
import layout from '@/styles/Layout.module.scss'
import style from './Home.module.scss'
import Image from '@/components/Image/Image'

function Home({ data }) {

  return (
    <section className={classNames([style.home], [layout.section])} id='home'>
      <div
        className={classNames(
          [style.home__container],
          [layout.container],
          [layout.grid]
        )}
      >
        {data && <div><Image id={data?.image} className={classNames(
          [layout.svg__img],
          [layout.svg__color],
          [style.home__img]
        )} /></div>}
        <div className={[style.home__data]}>
          <h1 className={[style.home__title]}>{data?.title}</h1>
          <p className={[style.home__description]}>
            {data?.description}
          </p>
          <a href='#' className={[layout.button]}>
            {data?.btn}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Home
