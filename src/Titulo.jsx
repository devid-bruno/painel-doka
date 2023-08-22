function Titulo({nome}){
    return(
        <div>
            <h1>oi eu sou {nome ? nome : 'Fulano'}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quasi doloremque ipsam sint provident. Illo, temporibus veritatis adipisci suscipit a molestiae repellat quaerat rem odit recusandae fugit assumenda, expedita porro?</p>
        </div>
    )
}

export default Titulo