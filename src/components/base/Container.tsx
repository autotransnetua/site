const Container = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
	return (
		<div
			className={`w-full max-w-480 mx-auto px-4 md:px-8 lg:px-12 xl:px-16 flex ${className}`}
		>
			{children}
		</div>
	)
}
export default Container
