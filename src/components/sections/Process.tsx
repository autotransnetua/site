import ProcessList from '../ProcessList'
import Title from '../UI/Title'
import Container from '../base/Container'
import Section from '../base/Section'

const Process = () => {
	return (
		<Section className='py-16 lg:py-20 bg-bg'>
			<Container className='w-full flex flex-col items-center gap-y-10 xl:gap-y-14'>
				<Title
					className='lg:max-w-[85%] xl:max-w-[70%] mx-auto'
					title='Процес'
					description='Як Це Працює'
					subtitle='Простий процес з 4 кроків для безпечного перевезення Вашого авто.'
					isCentered
				/>

				<ProcessList />
			</Container>
		</Section>
	)
}
export default Process
