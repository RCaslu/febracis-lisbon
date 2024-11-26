import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Faq } from "@/components/Faq";

import { benefitOne, benefitTwo, benefitThree, Ecossistem } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="Sobre"
        title=" QUEM É A FEBRACIS?"
      >
        Considerada a maior e melhor escola de negócios do Brasil, começou sua trajetória no mercado em 1998, ainda com o nome de Instituto Paulo Vieira, a partir de 2009 passou a se chamar Febracis. Com matriz em Barueri (SP) e filial em Fortaleza (CE), a instituição já impactou mais de 70 milhões de pessoas pelo mundo. E já transformou milhares de vidas por meio do Coaching Integral Sistêmico (CIS), um processo que se adequa à realidade dos participantes, gerando as melhores possibilidades e estratégias para conquistar um estilo de vida extraordinário e abundamente.

Com uma estrutura diferenciada, a Febracis é presidida por Paulo Vieira, PhD e mestre em coaching pela Florida Christian University (FCU) e autor dos best sellers O Poder da Ação e O Poder da Autorresponsabilidade. Camila Vieira é a vice-presidente da empresa e autora do livro Viva a Sua Real Identidade. A Companhia atua na formação de profissionais com certificação emitida pela própria FCU e possui mais de 40 franquias espalhadas ao redor do mundo em três continentes.
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <Benefits data={benefitThree} />

      <SectionTitle
        preTitle="Quem Somos"
        title="Saiba mais sobre o instituto Febracis"
      >
        A Maior Escola de Negócios da Europa
      </SectionTitle>

      <Video videoId="OuUl88LQYVk" />

      <Benefits data={Ecossistem} imgPos="right"/>

    </Container>
  );
}
