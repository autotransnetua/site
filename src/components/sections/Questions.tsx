import FAQList from '../FAQList'
import Title from '../UI/Title'
import Container from '../base/Container'
import Section from '../base/Section'

const Questions = () => {
	return (
		<Section className='py-16 lg:py-20'>
			<Container className='w-full flex flex-col'>
				<Title
					className=''
					description='Поширені запитання про наші послуги перевезення.'
					subtitle='Часті Запитання'
					isCentered
				/>
				<FAQList />
			</Container>
		</Section>
	)
}
export default Questions
