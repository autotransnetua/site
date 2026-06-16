import ContactForm from '../ContactForm'
import Title from '../UI/Title'
import Container from '../base/Container'
import Section from '../base/Section'

import Image from 'next/image'

const Form = () => {
	return (
		<Section className='py-16 bg-bg' id='contact'>
			<Container className='w-full flex flex-col items-center gap-y-10 xl:gap-y-14'>
				<Title
					className='max-w-5xl mx-auto'
					title='Зв`яжіться з нами'
					subtitle='Наші оператори працюють 24/7.'
					isCentered
				/>
				{/* items-stretch — обидві колонки однакової висоті */}
				<div className='flex flex-col lg:flex-row items-stretch justify-between w-full gap-10'>
					<div className='w-full lg:w-[50%] rounded-2xl overflow-hidden'>
						<Image
							src='/images/form-photo.jpg'
							alt='Form Image'
							width={600}
							height={400}
							className='w-full h-full object-cover'
						/>
					</div>
					<ContactForm />
				</div>
			</Container>
		</Section>
	)
}
export default Form
