import Image from 'next/image'
import logo from '../../public/logo.svg'

import { Container } from './Container'
import { Menu } from 'lucide-react'

export function Header() {
  return (
    <header className="bg-neutral-950">
      <Container>
        <div className="px-6 py-3 flex items-center justify-between">
          <Image src={logo} alt="Logo" />
          <Menu size={24} className="text-neutral-50" />
        </div>
      </Container>
    </header>
  )
}
