import Image from 'next/image'
import icon1 from '../../../public/icon1.svg'
import icon2 from '../../../public/icon2.svg'
import icon3 from '../../../public/icon3.svg'
import icon4 from '../../../public/icon4.svg'
import { Separator } from './separator'

interface Iprops {
  title: string
  cardType: 'posicionamento' | 'visibilidade' | 'conexão' | 'inovação'
  content: string
}

const getIconByCardType = (cardType: Iprops['cardType']) => {
  switch (cardType) {
    case 'posicionamento':
      return icon1
    case 'visibilidade':
      return icon2
    case 'conexão':
      return icon3
    case 'inovação':
      return icon4
    default:
      return null
  }
}

export function CardsGlasmorfism({ title, cardType, content }: Iprops) {
  const icon = getIconByCardType(cardType)
  return (
    <div className="py-5 px-10 flex flex-col gap-[10px] rounded-lg backdrop-blur-[20px] shadow-glasmorphism-shadow bg-glasmorphism-opacity ">
      {/* Icone e label */}
      <div className="flex gap-[10px] items-center">
        {icon && <Image src={icon} alt="Icon do card" />}
        <span className="text-slate-50 font-semibold text-xl leading-7">
          {title}
        </span>
      </div>
      {/* Div do separador */}

      <Separator className="w-[133px] bg-teal-700 h-[3px]" />

      <span className="text-slate-50 font-semibold text-base">{content}</span>
    </div>
  )
}
