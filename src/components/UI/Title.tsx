type TitleProps = {
	title?: string
	subtitle?: string
	description?: string
	className?: string
	isCentered?: boolean
}

const Title = ({ title, subtitle, description, className, isCentered }: TitleProps) => {
	return (
		<div className={`w-full max-w-480 mx-auto flex flex-col ${className}`}>
			{title && (
				<h2
					className={`font-bold uppercase text-accent-secondary flex items-center gap-3 ${isCentered ? 'justify-center' : 'justify-start'}`}
				>
					{isCentered && <span className='w-12 h-px bg-accent-secondary opacity-50' />}
					{title}
					<span className='w-12 h-px bg-accent-secondary opacity-50' />
				</h2>
			)}
			{subtitle && (
				<h3
					className={`mt-2 text-3xl font-bold text-primary ${isCentered ? 'text-center' : ''}`}
				>
					{subtitle}
				</h3>
			)}
			{description && (
				<p className={`mt-6 text-lg ${isCentered ? 'text-center' : ''}`}>{description}</p>
			)}
		</div>
	)
}
export default Title
