export const HowWeWork = () => {
  return (
    <section className="section-padding bg-black">
      <div className="container mx-auto">
        <div className="text-center mb-24">
          <p className="text-white mb-4">How We Work</p>
          <h2 className="text-7xl md:text-6xl font-medium tracking-[-0.02em] text-white mb-2">
            To build products <span className="text-[#C1844D]">people love</span>, we
          </h2>
          <h2 className="text-7xl md:text-6xl font-medium tracking-[-0.02em] text-white">
            created an environment where
          </h2>
          <h2 className="text-7xl md:text-6xl font-medium tracking-[-0.02em] text-white">
            <span className="text-[#EB6F6F]">passionate</span> people thrive
          </h2>
        </div>

        <div className="space-y-32">
          {/* The Right People */}
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 flex justify-center items-center">
              <img src="/temp-image.png" alt="Team member" className="w-96" />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-6xl font-medium tracking-[-0.02em] text-gradient mb-6 pb-1">
                The Right People
              </h3>
              <p className="text-white/70 text-2xl leading-relaxed tracking-[-0.02em]">
                We want to work with self-starters who can take the initiative and solve problems independently 
                with minimal direction. By giving our people the space they need and providing them with the 
                most innovative tools, we trust them to do their part.
              </p>
            </div>
          </div>

          {/* State-of-the-art Tech */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-16">
            <div className="md:w-1/2 flex justify-center items-center">
              <img src="/temp-image.png" alt="Laptop" className="w-96" />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-6xl font-medium tracking-[-0.02em] text-gradient mb-6 pb-1">
                State-of-the-art Tech
              </h3>
              <p className="text-white/70 text-2xl leading-relaxed tracking-[-0.02em]">
                In our field, having a data-driven culture is essential for success. Data empowers us to be 
                more efficient and more precise, that's why we live and breathe data. To support our brilliant 
                minds, we continuously build tech and data tools helping them make well-informed decisions.
              </p>
            </div>
          </div>

          {/* Shared Values */}
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 flex justify-center items-center">
              <img src="/temp-image.png" alt="Team" className="w-96" />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-6xl font-medium tracking-[-0.02em] text-gradient mb-6 pb-1">
                Shared Values
              </h3>
              <p className="text-white/70 text-2xl leading-relaxed tracking-[-0.02em] mb-4">
                At HubX, we believe in cultivating a culture with strong shared values that serve a specific vision 
                and strategy — that is our magic formula.
              </p>
              <p className="text-white/70 text-2xl leading-relaxed tracking-[-0.02em]">
                We seek out partners who share our passion, not employees. And we work tirelessly to provide 
                turbo-charged careers for outstanding people who truly care about their work and making a 
                positive impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 