import Link from "next/link";

export default function Menu() {
  return (
    <ul className="menu">
      <li><Link href="/">Home</Link></li>
      <li><Link href="/#">Sobre</Link></li>
      <li><Link href="/#">Contato</Link></li>
      <li><Link href="/imc">IMC</Link></li>
    </ul>
  )
}