type TitleProps = {
	title?: string
	subtitle?: string
	description?: string
	className?: string
	isCentered?: boolean
	titleColor?: 'primary' | 'white'
}

const titleColors = {
	primary: 'text-primary',
	white: 'text-white'
}

// Головний заголовок секції — subtitle (h2); title — надпис над ним.
// Якщо subtitle немає, h2 стає сам title.
const Title = ({
	title,
	subtitle,
	description,
	className,
	isCentered,
	titleColor = 'primary'
}: TitleProps) => {
	const Label = subtitle ? 'p' : 'h2'

	return (
		<div className={`w-full max-w-480 mx-auto flex flex-col ${className}`}>
			{title && (
				<Label
					className={`heading font-bold uppercase text-accent-secondary flex items-center gap-3 ${isCentered ? 'justify-center' : 'justify-start'}`}
				>
					{isCentered && <span className='w-12 h-px bg-accent-secondary opacity-50' />}
					{title}
					<span className='w-12 h-px bg-accent-secondary opacity-50' />
				</Label>
			)}
			{subtitle && (
				<h2
					className={`mt-2 text-3xl font-bold ${titleColors[titleColor]} ${isCentered ? 'text-center' : ''}`}
				>
					{subtitle}
				</h2>
			)}
			{description && (
				<p className={`mt-6 text-lg ${isCentered ? 'text-center' : ''}`}>{description}</p>
			)}
		</div>
	)
}
export default Title
