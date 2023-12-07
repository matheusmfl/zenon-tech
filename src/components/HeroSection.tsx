import Link from 'next/link'
import ellipse from '../../public/ellipse.svg'
import hero from '../../public/heroImg.png'
import { Container } from './Container'
import { Button } from './UI/button'
import { Separator } from './UI/separator'
import { ChevronRight } from 'lucide-react'
import Image from 'next/image'

export function HeroSection() {
  return (
    <section className="bg-neutral-900 font-raleWay z-10">
      <Container>
        <>
          {/* Main Container */}
          <div className="flex flex-col pt-8 px-4 gap-6">
            <h1 className="text-slate-50 text-[32px] font-light text-left font-raleWay">
              <strong className="font-bold">
                Criação de sites profissionais
              </strong>{' '}
              sem complicações
            </h1>

            <Separator className="w-[120px] bg-teal-600 h-[6px]" />

            <h2 className="text-base text-slate-50 font-semibold leading-[28px]">
              Decole sua presença online com ajuda de especialistas.
            </h2>

            {/* CTA Divs */}
            <div className="pt-[16px] flex flex-col gap-2 pb-6">
              <Button className="w-full text-base font-semibold leading-6 text-[#fff] bg-teal-600 hover:bg-teal-800">
                Solicite um orçamento
              </Button>

              <div className="w-full flex items-center justify-center py-2">
                <Link href={'/'}>
                  <span className="font-roboto text-base font-normal items-center justify-center leading-5 text-slate-50 hover:underline flex">
                    Fale com nossos atendentes{' '}
                    <ChevronRight size={16} className="text-center pt-0.5" />
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Img Div */}

          <div className="flex relative overflow-y-visible">
            <Image
              src={ellipse}
              alt="Ellipse"
              className="absolute bottom-0 -top-10 z-20"
            />

            <Image
              src={hero}
              alt="Mulher segurando notebook"
              className="object-cover object-top h-[350px] z-30"
            />
          </div>
        </>
      </Container>
    </section>
  )
}
