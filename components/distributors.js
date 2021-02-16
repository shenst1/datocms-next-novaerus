import {useState, useEffect} from 'react'
export default function Distributors() {
  
  const [distributors, setDistributors] = useState([]);
 
  useEffect(() => {
    const fetchDistributors = async () => {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_CMSIFY_HOST}/api/distributors.json`
      );
      const data = await res.json()
 
      setDistributors(data.distributors);
    };
 
    fetchDistributors();
  }, []);

  return (
    <ul>
        {
          distributors.map((distributor) => 
            <li key={distributor.id}>
              {distributor.name}
            </li>
          )
        }
    </ul>
  )
}
