import { createContext, useState, useContext } from "react";

const ApiContext = createContext();

export function ApiProvider({ children }) {

  const [imageData, setImageData] = useState([]);

  let [callFunction,setCallFunction]=useState(true)

  let [makePhotosGrayscale,setGrayscale]=useState(false)

  async function fetchData() {
      for (let i = 0; i < 4; i++) {
        const randomID = Math.floor(Math.random() * 200);
        const response = await fetch(`https://picsum.photos/id/${randomID}/info`);
        const data = await response.json();
        setImageData((prev) => [...prev, data]);
      }
  }
  
    function newPhotos() {
      setImageData([]);
      fetchData();
    }

  function callNewPhotos(){
    if(callFunction){
      setTimeout(()=>{
        setCallFunction(true)
        newPhotos()
      },1000)
    }
    setCallFunction(false)
  }

  function toggleGrayscale(){
    setGrayscale(!makePhotosGrayscale)
  }
 
  return (
    <ApiContext.Provider value={{ imageData, fetchData,callNewPhotos,makePhotosGrayscale,toggleGrayscale}}>
      {children}
    </ApiContext.Provider>
  );

}

export function useApi() {
  return useContext(ApiContext);
}
