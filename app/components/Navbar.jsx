import Image from 'next/image'
import Link from 'next/link'

import logo from '../../public/logo.png'

export default function Navbar() {
  return (
    <nav>
        <Image src={logo} alt='Help desk logo' width={70} quality={100}/>
        <h1>Help Desk</h1>
        <Link href='/'>Dashboard</Link>
        <Link href='/tickets'>Tickets</Link>
        <Link href='/tickets/create'>Create Ticket</Link>
    </nav>
  )
}
