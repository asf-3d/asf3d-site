/*
  ============================================================
  CONFIGURAÇÃO PRINCIPAL DO SITE
  ============================================================

  Este é o arquivo que você mais vai alterar.

  1) Troque companyName pelo nome definitivo.
  2) Troque whatsappNumber pelo número com DDI + DDD, somente números.
     Exemplo Brasil/SC: 5547999999999
  3) Troque logo pelo caminho da logo real.
  4) Edite, adicione ou remova produtos no array "products".
  5) Coloque as fotos reais dentro de assets/img/ e altere "image".
*/

window.SITE_CONFIG = {
  companyName: "ASF3D",
  whatsappNumber: "5547999999999",
  whatsappDefaultMessage: "Olá! Vim pelo site da ASF3D e gostaria de fazer um orçamento.",
  whatsappCustomMessage: "Olá! Vim pelo site da ASF3D e gostaria de solicitar uma impressão personalizada. Posso enviar a ideia, referência ou arquivo para vocês avaliarem?",
  instagramUrl: "#",
  logo: "assets/img/logo-asf3d.png",

  products: [
    {
      id: 1,
      name: "Vaso Geométrico",
      description: "Modelo decorativo com visual moderno, disponível em diferentes cores.",
      category: "Decoração",
      price: "Sob consulta",
      image: "assets/img/produto-01.svg",
      featured: true,
      available: true
    },
    {
      id: 2,
      name: "Suporte para Controle",
      description: "Suporte de mesa para organizar controles, acessórios ou pequenos eletrônicos.",
      category: "Organização",
      price: "Sob consulta",
      image: "assets/img/produto-02.svg",
      featured: true,
      available: true
    },
    {
      id: 3,
      name: "Miniatura Decorativa",
      description: "Peça decorativa para mesa, estante ou coleção.",
      category: "Miniaturas",
      price: "Sob consulta",
      image: "assets/img/produto-03.svg",
      featured: true,
      available: true
    },
    {
      id: 4,
      name: "Organizador Modular",
      description: "Organizador compacto que pode ser adaptado para diferentes usos.",
      category: "Organização",
      price: "Sob consulta",
      image: "assets/img/produto-04.svg",
      featured: false,
      available: true
    },
    {
      id: 5,
      name: "Chaveiro Personalizado",
      description: "Modelo para nomes, marcas, símbolos ou pequenos presentes.",
      category: "Personalizados",
      price: "Sob consulta",
      image: "assets/img/produto-05.svg",
      featured: false,
      available: true
    },
    {
      id: 6,
      name: "Suporte de Mesa",
      description: "Peça funcional para celular, tablet ou pequenos objetos.",
      category: "Utilidades",
      price: "Sob consulta",
      image: "assets/img/produto-06.svg",
      featured: false,
      available: true
    }
  ]
};
