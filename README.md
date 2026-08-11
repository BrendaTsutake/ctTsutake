# 🏋️ CT Tsutake

Site institucional do **Centro de Treinamento Tsutake**, desenvolvido para apresentar a academia, seus serviços, planos, estrutura e formas de contato, além de disponibilizar uma página dedicada à loja oficial.

> **CrossTraining • Pilates • CrossKids**

---

## 📌 Sobre o projeto

O **CT Tsutake** é um site institucional desenvolvido para proporcionar uma experiência moderna e responsiva aos alunos e visitantes do centro de treinamento.

A página apresenta informações sobre o CT, modalidades oferecidas, planos, galeria de fotos, localização, contatos e uma loja virtual com produtos personalizados.

O projeto foi desenvolvido utilizando tecnologias web fundamentais, sem a necessidade de frameworks ou ferramentas de build.

---

## ✨ Funcionalidades

### 🏠 Página inicial

* Apresentação do CT Tsutake
* Banner principal com chamada para aula experimental
* Navegação por seções
* Botões de acesso aos planos e contatos

### 👥 Quem somos

Apresentação da história e dos valores do CT Tsutake, destacando a comunidade, evolução e ambiente de treinamento.

### 🏋️ Modalidades e benefícios

O site apresenta as principais opções disponíveis:

* **CrossTraining**
* **Pilates**
* **CrossKids**

Também são apresentados diferenciais como:

* Equipamentos de ponta
* Saúde e bem-estar
* Comunidade
* Treinadores certificados

### 🖼️ Galeria de fotos

Galeria interativa com navegação entre imagens utilizando um slider desenvolvido em JavaScript.

### 💰 Planos e serviços

Exibição dos planos disponíveis para CrossTraining e CrossKids, além de informações sobre Pilates.

Também são apresentados os parceiros de benefícios:

* Wellhub
* TotalPass
* GuruPass

### ⭐ Depoimentos

Seção destinada às avaliações e experiências dos alunos.

### 📍 Localização

Integração com o Google Maps para apresentar a localização do CT Tsutake.

**Endereço:**

> Estr. Mauá e Adutora Rio Claro, 1017
> Jardim Ipê, Mauá – SP
> CEP 09390-500

### 📱 Contato

O site disponibiliza acesso direto para:

* Instagram
* WhatsApp
* Formulário de contato

### 🛍️ Loja oficial

O projeto também possui uma página de loja independente (`loja.html`), contendo produtos personalizados do CT Tsutake.

Atualmente são apresentados produtos como:

* Camiseta Oversized Preta
* Camiseta Oversized Cinza
* Camiseta Oversized Vermelha
* Regata Murph 2026

Os produtos possuem cards interativos e uma janela modal para exibição dos detalhes.

---

## 🛠️ Tecnologias utilizadas

| Tecnologia       | Utilização                   |
| ---------------- | ---------------------------- |
| **HTML5**        | Estrutura das páginas        |
| **CSS3**         | Estilização e responsividade |
| **JavaScript**   | Interações e funcionalidades |
| **Font Awesome** | Ícones da interface          |
| **Google Maps**  | Exibição da localização      |

O projeto utiliza HTML, CSS e JavaScript sem dependências de frameworks como React, Vue ou Angular.

---

## 📂 Estrutura do projeto

```text
ctTsutake/
│
├── assets/
│   ├── fontes/
│   │   └── gang_of_three/
│   │       └── go3v2.ttf
│   │
│   ├── img/
│   │   ├── camisapreta.jpg.png
│   │   ├── camisacinza.jpg.png
│   │   ├── camisavermelha.jpg.png
│   │   ├── murph.jpg.png
│   │   ├── inauguracao.jpg
│   │   ├── quem somos.jpg
│   │   ├── tcb.jpeg
│   │   ├── tcb2.jpeg
│   │   ├── wodleague2025.jpg
│   │   ├── nauru.jpg
│   │   ├── MetaExperience.jpeg
│   │   ├── wellhub-logo-0.png
│   │   ├── totalpass.png
│   │   ├── gurupass.png
│   │   └── ...
│   │
│   ├── script.js
│   └── style.css
│
├── index.html
├── loja.html
└── README.md
```

---

## 🚀 Como executar o projeto

Por ser um projeto web estático, não é necessário instalar dependências ou configurar um servidor backend.

### 1. Clone o repositório

```bash
git clone https://github.com/BrendaTsutake/ctTsutake.git
```

### 2. Entre na pasta

```bash
cd ctTsutake
```

### 3. Execute

Abra o arquivo `index.html` diretamente no navegador.

Uma alternativa é utilizar uma extensão como **Live Server** no Visual Studio Code.

---

## 🌐 Páginas

### Página principal

```text
index.html
```

Contém:

* Início
* Quem somos
* Por que treinar conosco
* Galeria
* Planos
* Depoimentos
* Localização
* Contatos

### Loja

```text
loja.html
```

Página dedicada aos produtos oficiais do CT Tsutake.

---

## 🎨 Design

O projeto utiliza uma identidade visual predominantemente escura, com destaque para a cor vermelha.

### Paleta principal

```text
#121212  → Fundo principal
#1A1A1A  → Cards e seções
#242424  → Elementos secundários
#E62B1E  → Cor de destaque
#FFFFFF  → Textos principais
#AAAAAA  → Textos secundários
```

O CSS também possui regras de responsividade para adaptar a interface a dispositivos menores.

---

## ⚙️ JavaScript

O JavaScript é responsável principalmente pelas interações da interface.

Entre as funcionalidades implementadas estão:

* Slider da galeria
* Navegação entre imagens
* Loop automático do slider ao chegar ao final
* Recalculo do tamanho dos slides ao redimensionar a janela
* Abertura e fechamento da barra lateral de contatos

Essas funcionalidades estão implementadas em `assets/script.js`.

A página da loja também utiliza JavaScript para abrir e fechar o modal de detalhes dos produtos.

---

## 📱 Responsividade

O projeto possui adaptações para telas menores através de media queries CSS.

Em dispositivos com largura de até **768px**, elementos como:

* Navegação
* Seção "Quem somos"
* Planos
* Localização
* Galeria

são reorganizados para proporcionar uma melhor experiência em dispositivos móveis.

---

## 🛒 Loja

A loja atualmente funciona como uma **vitrine de produtos**, permitindo visualizar informações e detalhes através de modais.

> **Observação:** o botão "Adicionar ao Carrinho" atualmente é apenas visual e não implementa um sistema completo de carrinho, checkout ou processamento de pagamentos.

---

## 🔮 Possíveis melhorias futuras

Algumas funcionalidades que podem ser adicionadas ao projeto:

* [ ] Implementar carrinho de compras funcional
* [ ] Adicionar integração com pagamento online
* [ ] Implementar controle de estoque
* [ ] Criar backend para gerenciamento de produtos
* [ ] Integrar formulário de contato com WhatsApp ou e-mail
* [ ] Adicionar painel administrativo
* [ ] Melhorar acessibilidade
* [ ] Adicionar SEO e Open Graph
* [ ] Otimizar imagens
* [ ] Adicionar animações e microinterações
* [ ] Criar integração com redes sociais
* [ ] Adicionar sistema de agendamento de aulas
* [ ] Criar versão PWA

---

## 📍 CT Tsutake

**Centro de Treinamento Tsutake**

📌 Estr. Mauá e Adutora Rio Claro, 1017
Jardim Ipê — Mauá, SP
CEP 09390-500

📸 Instagram: **@ct.tsutake**

📱 WhatsApp: **+55 11 91877-0148**

---

## 👩‍💻 Autoria

Projeto desenvolvido por **Brenda S. Tsutake**.

© Brenda S. Tsutake — Todos os direitos reservados.

---

## 📄 Licença

Este projeto não possui uma licença open source especificada no repositório atualmente.

Caso o projeto seja disponibilizado para uso, modificação ou distribuição por terceiros, recomenda-se adicionar um arquivo `LICENSE` com os termos de utilização desejados.

---

## 🔗 Repositório

[CT Tsutake — GitHub](https://github.com/BrendaTsutake/ctTsutake?utm_source=chatgpt.com)
