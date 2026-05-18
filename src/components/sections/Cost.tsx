import CostsList from '../CostsList'
import Title from '../UI/Title'
import Container from '../base/Container'
import Section from '../base/Section'

const Cost = () => {
	return (
		<Section className='py-16 lg:py-20 bg-bg' id='price'>
			<Container className='w-full flex flex-col items-center gap-y-10 xl:gap-y-14'>
				<Title
					className='max-w-5xl mx-auto'
					title='Вартість перевезень'
					subtitle='Вартість перевезення автомобілів в Україні та за кордоном.'
					isCentered
				/>
				<CostsList />
			</Container>
		</Section>
	)
}
export default Cost
