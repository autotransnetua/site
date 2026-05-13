import ServicesList from '../ServicesList'
import Title from '../UI/Title'
import Section from '../base/Section'

const Services = () => {
	return (
		<Section id='services' className='pt-16 md:pt-24 bg-white'>
			<div className='w-full flex flex-col gap-y-12'>
				<Title
					title='Наші послуги'
					subtitle='Що ми пропонуємо.'
					description='Комплексні рішення для перевезення вашого автомобіля по Україні та за кордон.'
					isCentered
				/>

				<ServicesList />
			</div>
		</Section>
	)
}
export default Services
