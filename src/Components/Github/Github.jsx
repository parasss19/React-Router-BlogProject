import { useState,  useEffect} from 'react' 

import { useLoaderData } from 'react-router-dom'  //for using loader


 function Github() {

    // 1 Using useState and useEffect
    //use useState to update the state
    const [data, setData] = useState([])

    // here we use github api get info 
    useEffect(() => {
        fetch('https://api.github.com/users/parasss19')
        .then((res) => res.json())
        .then((data) =>{
            console.log(data) 
            setData(data)
        })
    }, [])

    // 2 Using loader which is more optimize(we make githubInfoLoader and useLoaderData hook)
    // const data = useLoaderData()

  return (
    <div className='bg-slate-900 text-white text-center p-3 text-2xl'>
     <div className='flex justify-center p-2 '>
     Github Followers : {data.followers} <br></br>
     Location : {data.location} <br></br>
     name : {data.name}  <br></br>
     Bio : {data.bio}
     </div>
      
    <img className='w-[300px]' src={data.avatar_url} alt="github image" /> 
    </div>
  )
}

export default Github;

//2 for using loader
// export const githubInfoLoader = async () => {
//     const res = await fetch('https://api.github.com/users/parasss19')
//     return res.json()
// }

