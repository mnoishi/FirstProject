import "./global.css"
import React from 'react'
import { Post } from './Post'
import Button from './components/button/Index'
import "./styles.css"

function App() {

  return (
    <div className='container'>
      <Button name="Enviar" onClick={() => alert("Botão clicado")} />
      <Button name="Editar" />
      <Button name="Remover" />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default App
