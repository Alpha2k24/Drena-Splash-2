const caixa = document.getElementById('caixa');

const members = [
    {
        id: 1,
        nome: 'Shelsea',
        descricao: 'Mulata do cabelo liso',
        idade: '21',
        imagem: 'IMG-20240229-WA0061.jpg',
        controlImg: false,
    },
    {
        id: 2,
        nome: 'Ariel',
        descricao: 'Langa',
        idade: '00',
        imagem: 'IMG-20240229-WA0059.jpg',
        controlImg: false,
    },
    {
        id: 3,
        nome: 'Leonardo',
        descricao: 'Camarada Presidente',
        idade: '',
        imagem: 'IMG-20240229-WA0062.jpg',
        controlImg: false,
    },
    {
        id: 4,
        nome: 'Uzonda',
        descricao: 'Coisa mais fofa do grupo',
        idade: '',
        imagem: 'IMG-20240301-WA0004~2.jpg',
        controlImg: false,
    },
    {
        id: 5,
        nome: 'Christina',
        descricao: 'Pão Alemão',
        idade: '17',
        imagem: 'IMG-20240301-WA0072.jpg',
        controlImg: false,
    },
    {
        id: 6,
        nome: 'Gaspar',
        descricao: 'Yoga',
        idade: '18',
        imagem: 'IMG-20240301-WA0074.jpg',
        controlImg: false,
    },{
        id: 7,
        nome: 'Joel',
        descricao: 'Virgem',
        idade: '18',
        imagem: 'IMG-20240301-WA0085.jpg',
        controlImg: false,
    },{
        id: 8,
        nome:'Ediandra',
        descricao:'Blogueirinha',
        idade:'17',
        imagem:'IMG-20231126-WA0082.jpg',
        controlImg: false,
    },
];
const doubledMembers = [...members, ...members];

const shuffledMembers = doubledMembers.sort(() => Math.random() - 0.5);

let cartasAbertas = [];
let cartasBloqueadas = [];
let tentativas = 0;

const resultado = document.createElement('span');
resultado.innerHTML = `Tentativas: 0`;
caixa.appendChild(resultado);

const criar = (id, imagem) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const imagemElement = document.createElement('img');
    imagemElement.setAttribute('src', 'nophotointerroga.jpg');
    imagemElement.setAttribute('data-id', id);
    card.appendChild(imagemElement);

    caixa.appendChild(card);

    card.addEventListener('click', () => {
        // Verifica se a carta clicada já está aberta
        if (cartasAbertas.find(carta => carta.id === id)) return;

        if (cartasBloqueadas.includes(id) || cartasAbertas.length >= 2) return;

        cartasAbertas.push({ id, imagem, element: imagemElement });
        imagemElement.setAttribute('src', imagem);

        if (cartasAbertas.length === 2) {
            const [carta1, carta2] = cartasAbertas;

            if (carta1.id === carta2.id) {
                cartasBloqueadas.push(carta1.id, carta2.id);
                carta1.element.classList.add('blocked');
                carta2.element.classList.add('blocked');

                if (cartasBloqueadas.length === shuffledMembers.length) {
                    setTimeout(() => {
                        alert('Parabéns, você conseguiu!');
                        resetarJogo();
                    }, 1000);
                }
            } else {
                setTimeout(() => {
                    carta1.element.setAttribute('src', 'nophotointerroga.jpg');
                    carta2.element.setAttribute('src', 'nophotointerroga.jpg');
                    tentativas++;
                    resultado.innerHTML = `Tentativas: ${tentativas}`;
                    if (tentativas === 5) {
                        alert('Você perdeu! Tente novamente.');
                        resetarJogo();
                    }
                }, 1000);
            }

            cartasAbertas = [];
        }
    });
};

const resetarJogo = () => {
    cartasAbertas = [];
    cartasBloqueadas = [];
    tentativas = 0;
    caixa.querySelectorAll('.card').forEach(card => card.remove());
    shuffledMembers.sort(() => Math.random() - 0.5);
    shuffledMembers.forEach((member) => criar(member.id, member.imagem));
    resultado.innerHTML = `Tentativas: ${tentativas}`;
};

shuffledMembers.forEach((member) => criar(member.id, member.imagem));
