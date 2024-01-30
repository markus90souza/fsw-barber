'use client'

import { SearchIcon } from 'lucide-react'
import { FC } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export const Search: FC = () => {
  return (
    <div className="flex items-center gap-2">
      <Input placeholder="busque por uma barbearia..." />
      <Button variant={'default'} size={'icon'}>
        <SearchIcon size={18} />
      </Button>
    </div>
  )
}
