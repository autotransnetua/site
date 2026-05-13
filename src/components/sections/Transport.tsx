import TechnologyList from '../TransportList'
import Title from '../UI/Title'
import Container from '../base/Container'
import Section from '../base/Section'

const Transport = () => {
	return (
		<Section className='py-16 lg:py-20 bg-bg' id='transport'>
			<Container className='w-full flex flex-col items-center gap-y-10 xl:gap-y-14'>
				<Title
					className='w-full mx-auto'
					title='Наш Автопарк'
					description='Сучасна Техніка'
					subtitle='Ми регулярно оновлюємо наш автопарк, щоб гарантувати надійність перевезень.'
					isCentered
				/>

				<TechnologyList />
			</Container>
		</Section>
	)
}
export default Transport
