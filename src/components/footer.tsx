import { FC } from 'react'

export const Footer: FC = () => {
  return (
    <footer className="w-full bg-secondary px-5 py-6">
      <span className="text-sm font-bold text-gray-400 ">
        {' '}
        © {new Date().getFullYear()} | Copyright FSW Barber
      </span>
    </footer>
  )
}
