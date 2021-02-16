import Distributors from "../components/distributors"

function FindARepresentative({distributors}) {
  return (
    <>
      <h1>Rendered asyncronously</h1>
      <Distributors />
      <h1>Statically precompiled</h1>
      <ul>
        {
          distributors.map((distributor) => 
            <li key={distributor.id}>
              {distributor.name}
            </li>
          )
        }
      </ul>
    </>
  )

}


export async function getStaticProps() {

  const res = await fetch(`${process.env.NEXT_PUBLIC_CMSIFY_HOST}/api/distributors.json`)
  const {distributors } = await res.json()

  return {
    props: {
      distributors,
    },
  }
}
export default FindARepresentative