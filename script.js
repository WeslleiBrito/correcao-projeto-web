const turmas = [{
        turma: 'Hipátia',
        curso: 'JavaScript',
        inicio: '30/11/2022',
        termino: '30/01/2023',
        numeroDeAlunos: 150,
        periodo: 'Noturno',
        concluido: false
    },

    {
        turma: 'Sibyla',
        curso: 'JavaScript',
        inicio: '30/10/2022',
        termino: '30/12/2022',
        numeroDeAlunos: 200,
        periodo: 'Integral',
        concluido: false
    },

    {
        turma: 'Curie',
        curso: 'HTML e CSS',
        inicio: '15/09/2022',
        termino: '15/10/2022',
        numeroDeAlunos: 180,
        periodo: 'Noturno',
        concluido: true
    },

    {
        turma: 'Zhenyi',
        curso: 'HTML e CSS',
        inicio: '01/11/2022',
        termino: '01/01/2023',
        numeroDeAlunos: 80,
        periodo: 'Integral',
        concluido: false
    },

    {
        turma: 'Clarke',
        curso: 'HTML e CSS',
        inicio: '04/07/2022',
        termino: '04/09/2022',
        numeroDeAlunos: 200,
        periodo: 'Noturno',
        concluido: true
    },

    {
        turma: 'Blackwell',
        curso: 'APIs REST',
        inicio: '20/03/2022',
        termino: '20/06/2022',
        numeroDeAlunos: 100,
        periodo: 'Noturno',
        concluido: true
    },

    {
        turma: 'Elion',
        curso: 'APIs REST',
        inicio: '12/01/2022',
        termino: '12/06/2022',
        numeroDeAlunos: 200,
        periodo: 'Noturno',
        concluido: true
    },

    {
        turma: 'Burnell',
        curso: 'APIs REST',
        inicio: '18/10/2022',
        termino: '18/04/2023',
        numeroDeAlunos: 90,
        periodo: 'Integral',
        concluido: false
    },
]

function buscarCurso(nomeCurso) {

    const dadosCurso = cursos.filter(objeto => objeto.curso.includes(nomeCurso))

    return dadosCurso
}

function buscarTurma(nomeTurma = "") {
    if (nomeTurma) {

        const pesquisa = turmas.filter((objeto) => { return objeto.turma.toLowerCase().includes(nomeTurma.toLowerCase()) })
        return pesquisa.length > 0 ? pesquisa : 'Turma não encontrada!'


    } else {

        return turmas
    }

}

function buscaAutomatica() {
    const textoInput = document.getElementById('caixa-busca')
    const listaTurma = buscarTurma(textoInput.value)
    criarCard(listaTurma)

}

function criarCard(listaTurma) {
    if (document.getElementById('aluno-nao-encontrado')) {
        const removeMensagem = document.getElementById('aluno-nao-encontrado')
        removeMensagem.parentNode.removeChild(removeMensagem)
    }

    if (document.getElementById('cards')) {
        const removeCards = document.getElementById('cards')
        removeCards.parentNode.removeChild(removeCards)
    }

    const curso = document.querySelector('.cursos')

    const cards = document.createElement('div')
    cards.setAttribute('id', 'cards')
    curso.appendChild(cards)

    if (typeof listaTurma === 'object') {

        for (dicionario of listaTurma) {
            const card = document.createElement('div')
            card.setAttribute('class', 'card')

            const turma = document.createElement('h4')
            turma.appendChild(document.createTextNode(`${dicionario.turma}`))
            card.appendChild(turma)

            const listaUl = document.createElement('ul')

            const curso = document.createElement('li')
            curso.innerHTML = `<span class="titulo">Curso: </span>${dicionario.curso}`

            const inicio = document.createElement('li')
            inicio.innerHTML = `<span class="titulo">Início: </span>${dicionario.inicio}`

            const termino = document.createElement('li')
            termino.innerHTML = `<span class="titulo">Término: </span>${dicionario.termino}`

            const numeroDeAlunos = document.createElement('li')
            numeroDeAlunos.innerHTML = `<span class="titulo">Número de alunos: </span>${dicionario.numeroDeAlunos}`

            const periodo = document.createElement('li')
            periodo.innerHTML = `<span class="titulo">Período: </span>${dicionario.periodo}`

            const concluido = document.createElement('li')
            concluido.innerHTML = `<span class="titulo">Concluido: </span>${dicionario.concluido ? 'Sim' : 'Não'}`

            listaUl.appendChild(curso)
            listaUl.appendChild(inicio)
            listaUl.appendChild(termino)
            listaUl.appendChild(numeroDeAlunos)
            listaUl.appendChild(periodo)
            listaUl.appendChild(concluido)

            card.appendChild(listaUl)
            cards.appendChild(card)

        }
    } else {
        if (!document.getElementById('aluno-nao-encontrado')) {
            const mensagem = document.createElement('p')
            mensagem.setAttribute('id', 'aluno-nao-encontrado')
            mensagem.innerHTML = `${listaTurma}`
            curso.appendChild(mensagem)
        }

    }

}

function renderizaTurmas() {

    const caminhoStyle = document.getElementById('style')
    caminhoStyle.setAttribute('href', './assets/styles/style_turmas.css')

    if (document.querySelector('.cursos')) {
        document.querySelector('.cursos').remove()
    }
    const container = document.querySelector('.container')
    const sectionCurso = document.createElement('section')
    sectionCurso.setAttribute('class', 'cursos')

    const divPesquisar = document.createElement('div')
    divPesquisar.setAttribute('class', 'pesquisar')

    const inputPesquisar = document.createElement('input')
    inputPesquisar.setAttribute('type', 'text')
    inputPesquisar.setAttribute('name', 'caixa-busca')
    inputPesquisar.setAttribute('id', 'caixa-busca')
    inputPesquisar.setAttribute('placeholder', 'Digite o nome da turma!')
    const botao = document.createElement('button')
    botao.innerHTML = 'Buscar'
    botao.setAttribute('id', 'btn-buscar')

    divPesquisar.appendChild(inputPesquisar)
    divPesquisar.appendChild(botao)
    sectionCurso.appendChild(divPesquisar)
    container.appendChild(sectionCurso)

    criarCard(buscarTurma())

}

function renderizaFinanceiroAluno() {

    const caminhoStyle = document.getElementById('style')
    caminhoStyle.setAttribute('href', './assets/styles/style_financeiro_aluno.css')

    if (document.querySelector('.compra')) {
        document.querySelector('.compra').remove()
    }

    if (document.querySelector('.cursos')) {
        document.querySelector('.cursos').remove()
    }

    const container = document.querySelector('.container')
    const sectionCompra = document.createElement('section')
    sectionCompra.setAttribute('class', 'compra')

    const sectionFinanceiro = document.createElement('section')
    sectionFinanceiro.setAttribute('class', 'financeiro')
    const pTitulo = document.createElement('p')
    const pTituloPadrao = document.createElement('p')

    pTitulo.setAttribute('class', 'titulo')
    pTitulo.innerHTML = 'Financeiro'

    pTituloPadrao.setAttribute('class', 'titulo-padrao')
    pTituloPadrao.innerHTML = 'Curso'

    const divCarrinho = document.createElement('div')
    divCarrinho.setAttribute('class', 'carrinho')

    const botaoAddCurso = document.createElement('button')
    botaoAddCurso.setAttribute('id', 'add-curso')

    botaoAddCurso.setAttribute('onclick', '{clickAtivaTela(), exibeTelaAddCurso()}')
    botaoAddCurso.innerHTML = 'Adicionar outro curso'

    const lableAddNParcela = document.createElement('label')
    lableAddNParcela.setAttribute('for', 'add-curso')
    lableAddNParcela.setAttribute('class', 'titulo-padrao')
    lableAddNParcela.innerHTML = 'Número de parcelas'

    const inputNParcelas = document.createElement('input')
    inputNParcelas.setAttribute('type', 'number')
    inputNParcelas.setAttribute('name', 'n-parcelas')
    inputNParcelas.setAttribute('id', 'n-parcelas')
    inputNParcelas.setAttribute('class', 'input-parcelas')
    inputNParcelas.setAttribute('min', '1')
    inputNParcelas.setAttribute('max', '10')

    const botaoVerValor = document.createElement('button')
    botaoVerValor.setAttribute('id', 'btn-ver-valor')
    botaoVerValor.innerHTML = 'Ver valor'

    const pValor = document.createElement('p')
    pValor.innerHTML = 'Valor'

    const pResumo = document.createElement('p')
    pResumo.setAttribute('id', 'resumo-valor-compra')

    const listaDeElementos = [
        pTitulo,
        pTituloPadrao,
        divCarrinho,
        botaoAddCurso,
        lableAddNParcela,
        inputNParcelas,
        botaoVerValor,
        pValor,
        pResumo
    ]

    for (let elemento of listaDeElementos) {
        sectionFinanceiro.appendChild(elemento)
    }

    sectionCompra.appendChild(sectionFinanceiro)
    container.appendChild(sectionCompra)
}