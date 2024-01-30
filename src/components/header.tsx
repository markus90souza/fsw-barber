import { MenuIcon } from 'lucide-react'
import Image from 'next/image'
import { FC } from 'react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export const Header: FC = () => {
  return (
    <Card>
      <CardContent className="flex items-center justify-between p-6">
        <Image src={'/images/logo.png'} alt="" width={120} height={22} />

        <Button variant={'outline'} size={'icon'} className="h-8 w-8">
          <MenuIcon size={18} />
        </Button>
      </CardContent>
    </Card>
  )
}
