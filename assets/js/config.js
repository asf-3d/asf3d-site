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
  whatsappNumber: "554797475488",
  whatsappDefaultMessage: "Olá! Vim pelo site da ASF3D e gostaria de fazer um orçamento.",
  whatsappCustomMessage: "Olá! Vim pelo site da ASF3D e gostaria de solicitar uma impressão personalizada. Posso enviar a ideia, referência ou arquivo para vocês avaliarem?",
  instagramUrl: "#",
  logo: "assets/img/logo-asf3d.png",

 products: [
    {
      id: 1,
      name: "Suporte para Controle",
      description: "Suporte de mesa para organizar controles, acessórios ou pequenos eletrônicos.",
      category: "Decoração",
      price: "Sob consulta",
      image: "assets/img/suporte.png",
      featured: true,
      available: true
    },
    {
      id: 2,
      name: "Chaveiros de Lula",
      description: "Chaveiros personalizados com design de lula.",
      category: "Personalizados",
      price: "Sob consulta",
      image: "assets/img/lulas.png",
      featured: true,
      available: true
    },
    {
      id: 3,
      name: "Miniatura Decorativa do Mascote do Flamengo",
      description: "Miniatura detalhada do mascote do Flamengo, ideal para colecionadores e fãs do time.",
      category: "Miniaturas",
      price: "Sob consulta",
      image: "assets/img/urubu.png",
      featured: true,
      available: true
    },
    {
      id: 4,
      name: "Miniatura Decorativa do Mascote do Vasco",
      description: "Miniatura detalhada do mascote do Vasco, ideal para colecionadores e fãs do time.",
      category: "Miniaturas",
      price: "Sob consulta",
      image: "assets/img/vascao.png",
      featured: false,
      available: true
    }
  ]
};
