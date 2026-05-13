const Section = ({
	className,
	children,
	id
}: {
	className?: string
	children?: React.ReactNode
	id?: string
}) => {
	return (
		<section className={`w-full mx-auto ${className}`} id={id}>
			{children}
		</section>
	)
}
export default Section
