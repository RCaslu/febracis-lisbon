import {
  CheckBadgeIcon
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/Paulo Vieira.png";
import benefitTwoImg from "../../public/img/Camila Vieira.png";
import benefitThreeImg from "../../public/img/julia.avif";
import EcossistemImg from "../../public/img/ecossistema.png";
import { title } from "process";

const benefitOne = {
  title: "Aprenda diretamente com Paulo Vieira",
  desc: "Master Coach, PhD em Business Administration e Mestre em Coach pela Florida Christian University Criador do Método CIS, metodologia de desenvolvimento humano que mudou a vida de mais de 1,5 milhões de pessoas nos últimos 26 anos. Fundador da Febracis, a maior escola de negócios da América Latina e da Europa, presente em 3 continentes. Escritor de mais de 30 livros com 10 milhões de cópias vendidas.",
  image: benefitOneImg,
  bullets: [
    {
      title: "MÉTODO CIS",
      desc: "Mais de 232 turmas de Método CIS.",
      icon: <  CheckBadgeIcon />,
    },
    {
      title: "BEST-SELER",
      desc: "O autor mais vendido do Brasil pelo quarto ano consecutivo.",
      icon: <CheckBadgeIcon />,
    },
    {
      title: "CAMPEÃO",
      desc: "13 livros best sellers no rankingda VEJA.",
      icon: <CheckBadgeIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Camila Vieira",
  desc: "Camila é considerada a maior autoridade brasileira no campo do desenvolvimento pessoal voltado para mulheres, tendo treinado e auxiliado mais de 500 mil mulheres a revelarem a sua real identidade e descobrirem o seu propósito.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Vice-presidente da Febracis Coaching",
      desc: "Maior instituição de Coaching do mundo.",
      icon: <CheckBadgeIcon />,
    },
    {
      title: "Autora Best-Seller",
      desc: "Camila Vieira é autora Best-Seller do Livro Viva a Sua Real Identidade.",
      icon: <CheckBadgeIcon />,
    },
    {
      title: "Mulheres Experience",
      desc: "Camila Vieira desenvolveu o maior programa do Brasil voltado para mulheres que são mães, empresárias e desejam conciliar a vida profissional e pessoal, sem negligenciar nenhuma área da vida.",
      icon: <CheckBadgeIcon />,
    },
  ],
};

const benefitThree = {
  title: "Julia Vieira",
  desc: "Palestrante, Mentora e precursora de poderosas ferramentas que já impactaram a vida de mais de 1 milhão de pessoas, Júlia Vieira é Mentora de Jovens e Ministrante no maior treinamento de Inteligência Emocional do mundo.",
  image: benefitThreeImg,
  bullets: [
    {
      title: "Missão",
      desc: "A Missão de Júlia é fazer com que os jovens do dia de hoje tenham clareza sobre suas identidades, sejam encontradas por seus propósitos e vivam um futuro extraordinário.",
      icon: <CheckBadgeIcon />,
    },
    {
      title: "Mentora Mundial",
      desc: "Sua mentoria conta com mais de 1.300 alunos, além disso, mais de 100 mil pessoas são mensalmente edificadas através de seus conteúdos na internet.",
      icon: <CheckBadgeIcon />,
    },
  ],
};

const Ecossistem = {
  title: "ECOSSISTEMA FEBRACIS",
  desc: "Ao longo de mais de 20 anos, a Febracis vem aperfeiçoando a metodologia do Coaching Integral Sistêmico (CIS), construindo um robusto ecossistema de empresas que oferecem ao cliente novas possibilidades de aprendizado e desenvolvimento de sua carreira em áreas estratégicas. Comprometidas com a missão de transformar e impactar vidas e negócios por meio da metodologia do Coaching Integral Sistêmico, as empresas que compõem o ecossistema Febracis atuam nas áreas de perfil comportamental, formação superior, treinamento e desenvolvimento de pessoas e empresas, editoração, tecnologia e inovação. Tudo isso torna o ecossistema Febracis a maior escola de negócios da América Latina, formando mais de 20 mil coaches, que já alcançaram e transformaram a vida de mais de 160 mil clientes. A Febracis segue se diferenciando no mercado por aliar a metodologia do CIS com áreas de atuação essenciais para o desenvolvimento do profissional, oferecendo a experiência mais completa do mercado e a conquista da alta performance pessoal e profissional para seu clientes.",
  image: EcossistemImg,
  bullets: [
    
  ],
};


export {benefitOne, benefitTwo, benefitThree, Ecossistem};
