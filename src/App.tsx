import './App.css'
import ButtonGerar  from './ButtonGerar.tsx'
import ButtonLimpar from './ButtonLimpar.tsx'
import Header from './Header.tsx'
import Input from './Input.tsx'


function App(){
  return( 
    <>
    <div className='container_header'>
      <Header/>
      <ButtonGerar name="Gerar"/>
      <ButtonLimpar name="Limpar"/>
    </div>
    <div className='container_input'>
      <Input value="Senha Gerada"/>
    </div>
    </>
  )
}

export default App
