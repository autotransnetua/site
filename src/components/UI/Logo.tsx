import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
	return (
		<Link href='/' className='w-fit h-auto'>
			<Image src='/images/logo_s.png' alt='AutoTrans' width={180} height={52} priority />
		</Link>
	)
}
export default Logo
