import React from 'react'
import { Container } from './Container'
import AboutUsMockUp from './../../public/aboutUsMockUp.png'
import bulletFirst from '../../public/bulletOne.svg'
import bulletSecond from '../../public/bulletTwo.svg'
import bulletThird from '../../public/bulletThird.svg'
import Image from 'next/image'
import { Separator } from './UI/separator'

function AboutUs() {
  return (
    <section className="bg-neutral-100 font-raleWay">
      <Container>
        {/* container */}
        <div className="px-4 py-8">
          <div>
            <h2 className="text-2xl leading-8 mb-3">
              <b>Somos mais</b> que uma agência de sites
              <span className="text-teal-500">.</span>
            </h2>
            <Separator className="w-[120px] bg-teal-600 h-[6px] mb-[28px]" />
            <ul className="mb-6">
              <li className="flex items-center gap-[10px] mb-[10px]">
                <span>
                  <Image src={bulletFirst} alt="Primeiro:" />
                </span>
                <span>
                  Criamos o <b>site perfeito</b> para o seu <br /> negócio.
                </span>
              </li>
              <li className="flex items-center gap-[10px] mb-[10px]">
                <span>
                  <Image
                    className="h-8 w-8"
                    src={bulletSecond}
                    alt="Segundo:"
                  />
                </span>
                <span>
                  Damos todo o <b>suporte</b> necessário que <br /> você
                  precisa.
                </span>
              </li>
              <li className="flex items-center gap-[10px] mb-[10px]">
                <span>
                  <Image src={bulletThird} alt="Terceiro:" />
                </span>
                <span>
                  Fazemos <b>todas as manutenções</b> do seu site.
                </span>
              </li>
            </ul>
          </div>
          <div className="mt-20 mb-[46px]">
            <Image
              className="-ml-[165px] scale-[1.4]"
              src={AboutUsMockUp}
              alt="Tela de computador e tela de celular"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default AboutUs
