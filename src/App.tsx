import { useState } from 'react'

import logo from './assets/logo.png'
import './App.css'

function App() {

  const [texto, setTexto] = useState('')

  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0)

  const allFrases = [
    {
      id: 1,
      nome: "Motivação",
      frases: [
        'Siga os bons e aprenda com eles.',
        'O bom-senso vale mais do que muito conhecimento.',
        'O riso é a menor distância entre duas pessoas.', 
        'Deixe de lado as preocupações e seja feliz.',
        'Realize o óbvio, pense no improvável e conquiste o impossível.',
        'Acredite em milagres, mas não dependa deles.',
        'A maior barreira para o sucesso é o medo do fracasso.',
        'Acorde todas as manhãs com um sorriso. Esta é mais uma oportunidade que você tem para ser feliz. Seja seu próprio motor de ignição. O dia de hoje jamais voltará .... Não o desperdice!!!',
        'O que me preocupa não é o grito dos maus. É o silêncio dos bons.',
        'O riso é a menor distância entre duas pessoas.',
        'O bom-senso vale mais do que muito conhecimento.',
        'Agradeço todos os dias pela minha vida, por tudo o que conquistei até aqui. E tenho fé de que o futuro me reserva realizações ainda maiores',
        'Agradeço todos os dias pela minha vida, por tudo o que conquistei até aqui. E tenho fé de que o futuro me reserva realizações ainda maiores',
        

        

      ]
    },

    {
      id: 2,
      nome: "Bom dia",
      frases: [
      'Acordar de bem com a vida é o primeiro passo para ter um dia abençoado! Bom dia, família!', 
      'A melhor forma de acordar é pular da cama e se preparar para correr atrás de todos os seus sonhos! Bom dia, mundo!', 
      'Escreva em seu coração: todo dia é o melhor dia do ano.',
      'Bom dia! Não se esqueça que a sua alma é o reflexo do sol, tão forte e brilhante quanto um girassol.',
      ]
    },
  ]

  function handleSwitchCategory(index: number){
    setCategoriaSelecionada(index)
  }

  function gerarFrase(){

    let numeroAleatorio = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length)
    setTexto(allFrases[categoriaSelecionada].frases[numeroAleatorio])

  }

 
  return (
    <section className='container'>
        <img className='logo' src={logo} alt="Logo do site"  />

        <h2 id='category'>Categorias</h2>

        <div className="buttons">

          
        {allFrases.map((categoria, index)=> (
          <button key={categoria.id} 
          className='btn-category'
          style={{
            borderWidth: categoria.nome === allFrases[categoriaSelecionada].nome ? '2px' : '1px',
            backgroundColor: categoria.nome === allFrases[categoriaSelecionada].nome ? 'white' : 'transparent', 
           
          }}
          onClick={() => handleSwitchCategory(index)}
          >
            {categoria.nome}
          </button>
        ))}

        </div>
        <button id='gerar' onClick={gerarFrase}>Gerar Frase</button>

        {texto !=='' && (
           <p>{`"${texto}"`}</p>
        )}
    </section>
  )
}

export default App
