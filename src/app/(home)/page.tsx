import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'

import { Header } from '@/components/header'
import { SchedulingCard } from '@/components/scheduling-card'

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

      <div className="mt-6 space-y-3 px-5">
        <h2 className="text-sm font-bold uppercase text-gray-400">
          Agendamentos
        </h2>
        <SchedulingCard />
      </div>
    </>
  )
}
