import { Container } from './Container'
import { Separator } from './UI/separator'
import arrowBg from '../../public/arrow-bg.svg'
import Image from 'next/image'
import { CardsGlasmorfism } from './UI/CardsGlasmorfism'
import { Button } from './UI/button'

function WhyUs() {
  return (
    <section>
      <Container>
        <div className="bg-neutral-900 py-8 px-6 flex flex-col lg:flex-row md:px-20 gap-10 overflow-x-hidden md:overflow-y-hidden relative md:overflow-x-hidden">
          {/* bg da seta */}
          <div className="absolute left-0 top-[336px] h-[420px] lg:top-[170px] lg:left-96">
            <Image
              src={arrowBg}
              height={1100}
              width={900}
              alt="Setas de background"
            />
          </div>
          {/* TextDiv */}
          <div className="flex flex-col gap-5 md:pt-5 lg:w-[540px]">
            <span className="font-semibold leading-5 text-neutral-300 md:text-lg">
              Design Estratégico
            </span>

            <h2 className="text-[24px] leading-8 text-slate-50 md:w-[342px]">
              Tudo que sua marca{' '}
              <span className="text-teal-500 font-bold">precisa</span> para ter{' '}
              <b>relevância</b> online em um só lugar.
            </h2>

            <Separator className="w-[120px] bg-teal-600 h-[6px]" />

            <span className="font-medium text-base z-20 text-slate-50 md:w-[640px] lg:w-[440px] lg:pb-20 text-justify">
              Nossos produtos vão além de um simples site: proporcionam{' '}
              <b>experiências</b> que comunicam o <b>valor da sua marca</b> de
              forma eficaz, alinhadas às <b>metas do seu negócio.</b>
            </span>
          </div>
          {/* Container dos cards */}
          <div className="flex flex-col gap-5 md:grid md:grid-cols-2 lg:h-1/2">
            <CardsGlasmorfism
              title="Posicionamento"
              content="Agregue mais valor e autoridade a sua marca ao se posicionar de forma estratégica"
              cardType="posicionamento"
            />

            <CardsGlasmorfism
              title="Visibilidade"
              content="Tenha a estrutura necessária para aparecer nas primeiras posições em pesquisas do Google"
              cardType="visibilidade"
            />

            <CardsGlasmorfism
              title="Conexão"
              content="Crie conexões profundas com o seu público através de uma experiência imersiva memorável"
              cardType="conexão"
            />

            <CardsGlasmorfism
              title="Inovação"
              content="Tenha um site de alto desempenho, fácil de atualizar e implementar funcionalidades"
              cardType="inovação"
            />
          </div>
          <Button className="w-full text-base font-semibold text-[#fff] bg-teal-600 hover:bg-teal-800 py-2">
            Fale com um Especialista
          </Button>
        </div>
      </Container>
    </section>
  )
}

export { WhyUs }
