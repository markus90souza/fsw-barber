import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale/pt-BR'

import { Header } from '@/components/header'
import { SchedulingCard } from '@/components/scheduling-card'
import { db } from '@/lib/prisma'

import { BarbershopCard } from './components/barbershop-card'
import { Search } from './components/search'

export default async function Home() {
  const barbershops = await db.barbershop.findMany()

  console.log(barbershops)
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

      <div className="mt-6">
        <h2 className="mb-3 px-5 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>

        <div className="flex gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop: any) => (
            <BarbershopCard key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>

        <div className="mb-[4.5rem] mt-6">
          <h2 className="mb-3 px-5 text-xs font-bold uppercase text-gray-400">
            Populares
          </h2>

          <div className="flex gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden">
            {barbershops.map((barbershop: any) => (
              <BarbershopCard key={barbershop.id} barbershop={barbershop} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
