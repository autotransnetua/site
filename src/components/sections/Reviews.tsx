import ReviewsList from '../ReviewsList'
import Title from '../UI/Title'
import { QuoteIcon } from '../assets/iconst'
import Container from '../base/Container'
import Section from '../base/Section'

const Reviews = () => {
	return (
		<Section className='py-16 lg:py-20 bg-primary relative'>
			<QuoteIcon className='absolute top-8 right-8 z-0 opacity-15' />
			<Container className='w-full flex flex-col'>
				<Title className='' title='Відгуки' />

				<ReviewsList />
			</Container>
		</Section>
	)
}
export default Reviews
