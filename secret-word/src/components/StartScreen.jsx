import "./StartScreen.css"

const StartScreen = ({startGame}) => {

  return (
    <div className="start">
        <h1>Jogo da Advinhação</h1>
        <p>Clique no botão abaixo para jogar!</p>
        <button onClick={startGame}>Começar o Jogo</button>
    </div>
  )
}

export default StartScreen