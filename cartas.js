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
    },
];

// Duplicar os membros para criar pares de cartas
const doubledMembers = [...members, ...members];

// Embaralhar os membros
const shuffledMembers = doubledMembers.sort(() => Math.random() - 0.5);

let cartasAbertas = [];
let cartasBloqueadas = [];

const criar = (id, imagem) => {
    const card = document.createElement('div');
    card.classList.add('card');

    const imagemElement = document.createElement('img');
    imagemElement.setAttribute('src', 'nophotointerroga.jpg');
    imagemElement.setAttribute('data-id', id);
    card.appendChild(imagemElement);

    caixa.appendChild(card);

    card.addEventListener('click', () => {
        if (cartasBloqueadas.includes(id) || cartasAbertas.length >= 2) return;

        cartasAbertas.push({ id, imagem, element: imagemElement });
        imagemElement.setAttribute('src', imagem);

        if (cartasAbertas.length === 2) {
            const [carta1, carta2] = cartasAbertas;

            if (carta1.id === carta2.id) {
                // Cartas iguais, bloquear e adicionar div verde opaca
                cartasBloqueadas.push(carta1.id, carta2.id);
                carta1.element.classList.add('blocked');
                carta2.element.classList.add('blocked');

                if (cartasBloqueadas.length === shuffledMembers.length) {
                    // Todas as cartas estão bloqueadas, mostrar o alerta
                    setTimeout(() => {
                        alert('Parabéns, você conseguiu!');
                        // Resetar o jogo
                        resetarJogo();
                    }, 1000); // 1 segundo
                }
            } else {
                // Cartas diferentes, esconder após um tempo
                setTimeout(() => {
                    carta1.element.setAttribute('src', 'nophotointerroga.jpg');
                    carta2.element.setAttribute('src', 'nophotointerroga.jpg');
                }, 1000); // 1 segundo
            }

            cartasAbertas = [];
        }
    });
};

const resetarJogo = () => {
    // Resetar todas as variáveis e imagens
    cartasAbertas = [];
    cartasBloqueadas = [];
    caixa.innerHTML = '';
    shuffledMembers.forEach((member) => criar(member.id, member.imagem));
};

// Criar as cartas para cada imagem embaralhada
shuffledMembers.forEach((member) => criar(member.id, member.imagem));
