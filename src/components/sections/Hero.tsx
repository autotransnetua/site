const Hero = () => {
  return (
        <section className="w-full relative bg-slate-900 text-white overflow-hidden px-16" data-name="hero" data-file="components/Hero.js" id="home">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img 
                    src="https://app.trickle.so/storage/public/images/usr_1d1b748348000001/c7d7c9da-6328-4f2c-b22a-06cb7732ded2.png" 
                    alt="Car carrier truck background" 
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
            </div>

            <div className="container-custom relative z-10 py-24 md:py-32 lg:py-40">
                <div className="max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--primary)]/20 text-[var(--primary)] text-sm font-bold mb-6 border border-[var(--primary)]/30">
                        <div className="icon-map text-xs"></div>
                        <span>Доставка від дверей до дверей</span>
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-white">
                        Супутній Евакуатор <br/>
                        <span className="text-[var(--primary)]">Україна та Європа</span>
                    </h1>
                    
                    <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-xl">
                        Економія до 50% на перевезенні авто завдяки попутним маршрутам. Надійно, безпечно та вчасно. Ваш автомобіль у надійних руках.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="#contact" className="btn btn-primary text-lg">
                            <div className="icon-message-square-text mr-2"></div>
                            Залишити Заявку
                        </a>
                        <a href="tel:+380501234567" className="btn btn-outline border-white text-white hover:bg-white hover:text-slate-900 text-lg">
                            <div className="icon-phone mr-2"></div>
                            Зателефонувати
                        </a>
                    </div>
                    
                    <div className="mt-12 flex flex-wrap items-center gap-6 md:gap-8 text-sm font-medium text-slate-400">
                        <div className="flex items-center gap-2">
                            <div className="icon-wallet text-[var(--primary)]"></div>
                            <span>Оптимальна ціна</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="icon-map-pin text-[var(--primary)]"></div>
                            <span>Регулярні рейси в ЄС</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="icon-coins text-[var(--primary)]"></div>
                            <span>Вигідні тарифи</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  
}
export default Hero