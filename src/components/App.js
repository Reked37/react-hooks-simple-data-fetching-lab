import React, {useState, useEffect} from "react"

function App(){
    const [dog, setDog]= useState(false)
    
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((res) => res.json())
            .then((data) => setDog(data.message))
    },[])

    // useEffect(() => {
    //     fetch("https://dog.ceo/api/breeds/image/random")
    //       .then(r => r.json())
    //       .then(data => setDog(data.message))
    // }, [])

    if(!dog){
        return <p>Loading...</p>
    }

    return(
        <div>
            <img src={dog} alt="A Random Dog"></img>
        </div>
    )
}

export default App