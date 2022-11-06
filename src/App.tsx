import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <header>
        <div className='flex h-24 justify-center items-center bg-slate-600'>
          <img className=' h-20 rounded-full'  src="https://s.tmimgcdn.com/scr/1200x627/80800/modelo-de-logotipo-de-logistica_80816-original.jpg"  />
        </div>

        <main className='flex justify-center items-center flex-col gap-24'>
            <div className='flex justify-center items-center flex-col gap-8'>
              <h1 className='mt-16 text-5xl'>Log Deck</h1>

              <h2 className='text-2xl'>Priorização e confiabilidade</h2>
            </div>

            <input type="file" />
        </main>

      </header>
    </div>
  )
}

export default App
