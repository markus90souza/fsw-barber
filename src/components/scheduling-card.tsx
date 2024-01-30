'use client'

import { FC } from 'react'

import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Badge } from './ui/badge'
import { Card, CardContent } from './ui/card'

export const SchedulingCard: FC = () => {
  return (
    <Card>
      <CardContent className="flex justify-between p-5 py-0">
        <div className="flex flex-col gap-3 py-5">
          <Badge className="w-fit bg-[#221C3D] text-primary hover:bg-[#221C3D]">
            Confirmado
          </Badge>
          <strong className="font-bold">Corte de cabelo</strong>
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src="https://utfs.io/f/0ddfbd26-a424-43a0-aaf3-c3f1dc6be6d1-1kgxo7.png" />
              <AvatarFallback>MS</AvatarFallback>
            </Avatar>

            <span className="text-sm">Barber vintage</span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center border-l border-secondary px-3">
          <span className="text-sm">Fevereiro</span>
          <span className="text-xl">06</span>
          <span className="text-sm">09:00</span>
        </div>
      </CardContent>
    </Card>
  )
}
