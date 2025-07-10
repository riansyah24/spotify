import { useEffect } from 'react'
import { Browser } from '@capacitor/browser';

const App = () => {
  const openCapacitorSite = async () => {
    await Browser.open({ url: 'https://open.spotify.com' });
  };
  
  useEffect(() => {
    openCapacitorSite()
  },[])
  return (
    <div></div>
  )
}

export default App