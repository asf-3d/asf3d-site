# Loja de Impressão 3D — Site Base

Site estático, responsivo e sem backend, pensado para a ASF3D. O site apresenta um catálogo de modelos e também permite que clientes solicitem impressões personalizadas enviando ideias, referências ou arquivos pelo WhatsApp.


## Identidade visual atual — ASF3D

A versão atual usa como base a logo fornecida da ASF3D e uma paleta derivada dela:

- Azul principal: `#0B9CE0`
- Turquesa: `#13D0C8`
- Azul profundo: `#0E75DB`
- Grafite: `#1B232C`
- Cinza azulado: `#304958`
- Branco: `#F7F7F7`

A logo principal está em:

```text
assets/img/logo-asf3d.png
```

## Estrutura

```text
loja-impressao-3d/
├── index.html
├── catalogo.html
├── 404.html
├── robots.txt
├── sitemap.xml.example
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   ├── config.js
    │   └── main.js
    └── img/
        ├── logo-placeholder.svg
        └── produto-01.svg ... produto-06.svg
```

## Rodar localmente

### Opção simples — Python

Abra um terminal dentro da pasta do projeto e execute:

```bash
python -m http.server 5500
```

Depois acesse:

```text
http://localhost:5500
```

Também é possível abrir `index.html` diretamente, mas usar um servidor local é a forma mais próxima do funcionamento em produção.

## O arquivo mais importante: `assets/js/config.js`

Nele você pode alterar:

- nome da empresa;
- número do WhatsApp;
- mensagem padrão;
- Instagram;
- caminho da logo;
- produtos;
- categorias;
- descrições;
- preços;
- imagens;
- produtos em destaque.

### Formato do WhatsApp

Use DDI + DDD + número, somente números:

```js
whatsappNumber: "5547999999999"
```

O `55` é o DDI do Brasil.

## Trocar imagens

1. Coloque a nova imagem em `assets/img/`.
2. Abra `assets/js/config.js`.
3. Troque, por exemplo:

```js
image: "assets/img/produto-01.svg"
```

por:

```js
image: "assets/img/minha-foto.jpg"
```

Você pode usar JPG, PNG, WEBP ou SVG.

## Trocar a logo

Coloque o arquivo em `assets/img/` e altere:

```js
logo: "assets/img/logo-asf3d.png"
```

para algo como:

```js
logo: "assets/img/logo.png"
```

## Alterar as cores

As principais cores ficam no início de `assets/css/style.css`, dentro de `:root`.

Exemplo:

```css
--accent: #0b9ce0;
--accent-2: #13d0c8;
```

## Publicação no GitHub Pages — conta ASF3D

Este projeto está preparado para ser publicado gratuitamente no GitHub Pages usando a conta:

```text
asf-3d
```

Crie um repositório público com o nome exato:

```text
asf-3d.github.io
```

O endereço gratuito do site será:

```text
https://asf-3d.github.io/
```

Depois de enviar os arquivos para a raiz do repositório, configure:

```text
Settings → Pages
Source: Deploy from a branch
Branch: main
Folder: / (root)
```

O arquivo `index.html` deve ficar diretamente na raiz do repositório.

### Estrutura esperada no GitHub

```text
asf-3d.github.io/
├── index.html
├── catalogo.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── .nojekyll
└── assets/
```

O projeto já contém URLs canônicas, sitemap e robots configurados para:

```text
https://asf-3d.github.io
```


## Adicionar um novo produto

Dentro de `products`, em `assets/js/config.js`, adicione:

```js
{
  id: 7,
  name: "Nome do Produto",
  description: "Descrição do produto.",
  category: "Categoria",
  price: "Sob consulta",
  image: "assets/img/produto-07.jpg",
  featured: false,
  available: true
}
```

Se `featured` for `true`, o produto pode aparecer na página inicial.

## Próximas evoluções possíveis

- galeria com várias fotos por produto;
- página de detalhes;
- cálculo de frete;
- formulário de orçamento;
- painel administrativo;
- banco de dados;
- integração com Instagram;
- SEO avançado;
- Google Analytics;
- Meta Pixel;
- pagamento online, caso no futuro a venda deixe de ser apenas via WhatsApp.
