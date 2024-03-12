import Home from './Home/Home'

function Main({ data }) {
  return (
    <main>
      <Home data={data.main?.home} />
    </main>
  )
}

export default Main
