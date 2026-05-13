import GuaranteesList from '../GuaranteesList'
import Title from '../UI/Title'
import Container from '../base/Container'
import Section from '../base/Section'

const Guarantees = () => {
	return (
		<Section className='py-16 lg:py-20 bg-white'>
			<Container className='w-full flex flex-col items-center gap-y-10 xl:gap-y-14'>
				<Title
					className='lg:max-w-[85%] xl:max-w-[70%] mx-auto'
					title='Чому Обирають Нас'
					description='Наші Гарантії'
					subtitle='Ми не просто перевозимо машини - ми доставляємо спокій.'
					isCentered
				/>

				<GuaranteesList />
			</Container>
		</Section>
	)
}
export default Guarantees
