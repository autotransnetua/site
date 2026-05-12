const Container = ({className, children}:{className?: string, children?: React.ReactNode}) => {
  return (
    <div className={`container-custom w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12 xl:px-16 ${className}`}>{children}</div>
  )
}
export default Container