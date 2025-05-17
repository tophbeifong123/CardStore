import usapixel from './usapixel.jpeg'
import catlogo from '../catlogo.png'
import Link from 'next/link'
export default function Navbar() {
    return(
        <div className="w-full h-24 border-b-4 border-gray-300 bg-[#f79244] px-10 flex justify-between items-center gap-4">
            <div className='flex  items-center gap-10'>
                <img className="w-24 h-24" src={catlogo.src} alt="Logo" />
            <div className='flex items-center gap-4 justify-self-center'>
                <ul className="flex items-center gap-10 text-3xl pt-4 font-semibold text-gray-600">
                    <li><Link href={'/'} >HOME</Link></li>
                    <li><Link href={'/Card'} >CARD</Link></li>
                </ul>
            </div>
            </div>
            <div>
                <img className="w-24 h- bg-[#f79244]" src={usapixel.src} alt="Logo" />
            </div>
        </div>
    )
}