import ContactForm from '../ContactForm'
import Title from '../UI/Title'
import Container from '../base/Container'
import Section from '../base/Section'

import Image from 'next/image'

const Form = () => {
	return (
		<Section className='py-16 lg:py-20 bg-bg'>
			<Container className='w-full flex flex-col items-center gap-y-10 xl:gap-y-14'>
				<Title
					className=''
					title='Зв`яжіться з нами'
					description='Ми Завжди на Зв`язку'
					subtitle='Потрібна консультація, розрахунок вартості або термінова евакуація? Наші оператори працюють 24/7.'
					isCentered
				/>
				<div className='flex flex-col md:flex-row items-start justify-between w-full'>
					<div className='w-full md:w-[50%] rounded-lg overflow-hidden flex items-center justify-center'>
						<Image
							src='/images/form-photo.jpg'
							alt='Form Image'
							width={600}
							height={400}
							className='w-full h-auto object-cover'
						/>
					</div>
					<ContactForm />
				</div>
			</Container>
		</Section>
	)
}
export default Form
