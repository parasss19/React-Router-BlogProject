import { useState,  useEffect} from 'react' 
import { useLoaderData } from 'react-router-dom'  //for using loader

export default function Github() {

    // 1 Using useState and useEffect
    //use useState to update the state
    const [data, setData] = useState([])      //here we pass the empty object in case there is no fetch call the our app will not crash

    // here we use github api to get info 
    useEffect(() => {
        fetch('https://api.github.com/users/parasss19')
        .then((res) => res.json())
        .then((res) =>{
            console.log(res) 
            setData(res)
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
      
    <img 
      className='w-[300px]' 
      src={data.avatar_url} 
      alt="github image" 
    /> 
    </div>
  )
}

//2 for using loader
// export const githubInfoLoader = async () => {
//     const res = await fetch('https://api.github.com/users/parasss19')
//     return res.json()
// }

