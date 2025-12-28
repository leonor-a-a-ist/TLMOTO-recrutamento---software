# RECURSOS

* file-based routing:
    https://arnab-k.medium.com/understanding-the-file-based-routing-in-next-js-785cbd38613b

* elementos HTML:
    https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements

* trabalhar com scss:
    https://nextjs.org/docs/app/getting-started/css

* menu para navegar entre as páginas pessoais:
    https://www.youtube.com/watch?v=EXzotQV4tDM

* website respondivo:
    https://www.youtube.com/watch?v=l04dDYW-QaI
    
* posicionamento:
    https://www.youtube.com/watch?v=YEmdHbQBCSQ



* https://play.tailwindcss.com/

* https://www.youtube.com/watch?v=znbCa4Rr054

* https://www.hover.dev/components


# Biblioteca externa usada
No projeto foi integrada a biblioteca GSAP, que serve para criar animações em aplicações web. É usada para implementar uma animação de escrita (typing animation) no título da homepage "recrutamento Software".
O componente foi integrado no projeto a partir do seguinte recurso:
https://reactbits.dev/text-animations/text-type


# O que aprendemos, e dúvidas que restam:

Maria:
* Ao fazer este projeto aprendi a trabalhar com Next.js e percebi melhor como funciona o file-based routing, que torna muito mais fácil criar páginas novas. A parte onde tive mais dificuldades foi mesmo na organização do projeto - perceber onde colocar cada coisa, quando criar componentes separados, e como estruturar os ficheiros de estilo.

Leonor:
* Neste projeto aprendi sobre diferentes tipos de routing, a implementar componentes num website e a criar páginas simples, bem como a trabalhar com Sass/SCSS. Aprendi também a tornar um website responsivo, garantindo que funciona corretamente em diferentes tamanhos de ecrã e dispositivos.
* Ainda tenho algumas dúvidas, principalmente em relação à organização dos ficheiros, sobretudo os ficheiros de estilos, e à forma como certos elementos das páginas devem ser organizados. Em termos de estilização, tenho também algumas dúvidas sobre as diferentes unidades de medida (em, rem, px) e sobre quando é melhor usar cada uma.


# Notas:
- Tendo em conta as dúvidas que ainda existem em relação à organização dos ficheiros, especialmente os de estilos, decidimos criar um ficheiro menu.module.scss para o botão de navegação entre as páginas pessoais, uma vez que o seu conteúdo se aplica apenas a esse componente. O restante conteúdo foi separado por página, já que não existiam classes dedicadas exclusivamente a componentes específicos, mas sim ao conteúdo geral das páginas. Esses ficheiros são, por isso, considerados globais.
- A estilização foi feita, por defeito, a pensar primeiro em mobile (ecrãs menores), por ser mais restritivo. Os ajustes em função do tamanho do ecrã foram depois feitos para adaptar as páginas a desktop (ecrãs maiores).


# Link do repositório GitHub
https://github.com/leonor-a-a-ist/TLMOTO-recrutamento---software
