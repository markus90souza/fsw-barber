import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'

import { Header } from '@/components/header'

import { Search } from './components/search'

export default function Home() {
  return (
    <>
      <Header />

      <div className="flex flex-col px-5 pt-5">
        <strong className="text-xl font-bold">Olá Marcos</strong>
        <span className="text-sm capitalize">
          {format(new Date(), "EEEE','dd 'de' MMMM", {
            locale: ptBR,
          })}
        </span>
      </div>

      <div className="mt-6 px-5">
        <Search />
      </div>
    </>
  )
}
