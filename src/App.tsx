// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>   
    <main className="flex justify-center items-center h-screen">
    <section className="bg-[url('/assets/pictures/gameWorld.png')] z-0 max-w-[1400px] w-full max-h-[900px] h-full bg-cover " >
      <div className=" bg-black bg-opacity-50 z-1 flex flex-col items-center justify-center w-full h-full">
      <h1 className="text-white text-[70px] z-10">Game Title</h1>
      <h2 className="text-white text-[50px] z-10">Play</h2>
      <h2 className="text-white text-[50px] z-10">Settings</h2>
      </div>
    </section>
    </main>
  </>
  )
}

export default App
