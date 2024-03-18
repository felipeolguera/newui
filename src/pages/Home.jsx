import { Suspense } from 'react'
import Map from '../Map'
import Ui from '../Ui'
import Loader from '../Loader'

const Home = () => {
  return (
  <>
    <Suspense fallback={<Loader />}>
    <Map />
    <Ui />
    </Suspense>
  </>
      )
}

export default Home