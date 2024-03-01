const caixa = document.getElementById('caixa')

const members = [
    {
        nome:'Shelsea',
        descricao:'Mulata do cabelo liso',
        idade:'21',
        imagem:'IMG-20240229-WA0061.jpg',
        controlImg: false,
    },{
        nome:'Ariel',
        descricao:'Langa',
        idade:'00',
        imagem:'IMG-20240229-WA0059.jpg',
        controlImg: false
    },{
        nome:'Leonardo',
        descricao:'Camarada Presidente',
        idade:'',
        imagem:'IMG-20240229-WA0062.jpg',
        controlImg: false
    },{
        nome:'Uzonda',
        descricao:'Coisa mais fofa do grupo',
        idade:'',
        imagem:'IMG-20240301-WA0004~2.jpg',
        controlImg: false
    },{
        nome:'Christina',
        descricao:'Pão Alemão',
        idade:'17',
        imagem:'IMG-20240301-WA0072.jpg',
        controlImg: false
    },{
        nome:'',
        descricao:'',
        idade:'',
        imagem:'',
        controlImg: false
    },{
        nome:'',
        descricao:'',
        idade:'',
        imagem:'',
        controlImg: false
    },{
        nome:'',
        descricao:'',
        idade:'',
        imagem:'',
        controlImg: false
    },{
        nome:'',
        descricao:'',
        idade:'',
        imagem:'',
        controlImg: false
    },{
        nome:'',
        descricao:'',
        idade:'',
        imagem:'',
        controlImg: false
    },
]

const criar = (n,i,d,controlImg) => {
    const card = document.createElement('div')
    card.setAttribute('class', 'card')

    const imagem = document.createElement('img')

    const h2 = document.createElement('h2')
    h2.innerHTML = n

    const info = document.createElement('div')
    info.setAttribute('class', 'info')

    h2.addEventListener('click', (event) => {

        info.innerHTML = d

        const eli = document.createElement('button')
        eli.setAttribute('id', 'eli')
        eli.innerHTML = 'X'
        eli.addEventListener('click', () => {
            document.body.removeChild(info)
        })
        
        
        
        info.style.top = `${event.clientY}px`;
        info.style.left = `${event.clientX}px`;
        
        info.appendChild(eli)
        document.body.appendChild(info)
    })

    imagem.setAttribute('src','nophotointerroga.jpg')
    card.appendChild(imagem)
    card.appendChild(h2)
    caixa.appendChild(card)

    card.addEventListener('click', () => {
        controlImg = !controlImg
        console.log(controlImg)
        if (controlImg) {
            imagem.setAttribute('src',i)
        }else{
            imagem.setAttribute('src','nophotointerroga.jpg')
            if (document.body.contains(info)) {
                document.body.removeChild(info);
            }            
        }
    })


}
 members.forEach((e)=> criar(e.nome,e.imagem,e.descricao,e.controlImg,e.showPic))


