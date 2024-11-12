import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
}

export default function Card({ children }: CardProps) {
  return <section className="bg-red-500 p-3 rounded-lg ">{children}</section>;
}
