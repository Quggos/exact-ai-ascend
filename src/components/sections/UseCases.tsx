interface UseCasesProps {
  scrollToSection: (id: string) => void;
}

export const UseCases = ({ scrollToSection }: UseCasesProps) => {
  return (
    <section id="use-cases" className="section-padding bg-[#fafafa] text-black">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-black text-3xl tracking-[-0.02em] font-semibold mb-3">Investments & Publishing</p>
          <h2 className="text-7xl font-semibold tracking-[-0.02em] mb-8">We enable <br/>entrepreneurship</h2>
          <p className="text-black font-medium leading-12 tracking-[-0.02em] text-2xl">
          In addition to supporting our in-house studios, we are always looking to extend our resources to promising new projects in our ecosystem. Our focus is on mobile apps and games, but we are also evaluating opportunities in other exciting fields.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Customer Support Card */}
          <div className="bg-white p-8 rounded-2xl text-center">
            <div className="w-52 h-52 mx-auto mb-6">
              <img src="/card-icon.png" alt="Customer Support" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-4xl font-medium tracking-[-0.02em] mb-8">Customer Support</h3>
            <ul className="text-center space-y-1 mb-12">
              <li className="flex items-center justify-center gap-2">
                <span className="text-blue-500">✓</span>
                <span className="text-black/70 tracking-[-0.02em]">Focus on growth and improvement</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-blue-500">✓</span>
                <span className="text-black/70 tracking-[-0.02em]">Embrace challenges as learning</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-blue-500">✓</span>
                <span className="text-black/70 tracking-[-0.02em]">Cultivate a positive mindset</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-blue-500">✓</span>
                <span className="text-black/70 tracking-[-0.02em]">Build relationships with people</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-blue-500">✓</span>
                <span className="text-black/70 tracking-[-0.02em]">Set clear goals and create plans</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-blue-500">✓</span>
                <span className="text-black/70 tracking-[-0.02em]">Practice mindfulness and self-care</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-blue-500">✓</span>
                <span className="text-black/70 tracking-[-0.02em]">Celebrate small victories</span>
              </li>
            </ul>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-blue-500 text-xl font-medium tracking-[-0.02em] hover:underline"
            >
              Call To Action
            </button>
          </div>

          {/* Sales Card */}
          <div className="bg-white p-8 rounded-2xl text-center">
            <div className="w-52 h-52 mx-auto mb-6">
              <img src="/card-icon.png" alt="Sales" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-4xl font-medium tracking-[-0.02em] mb-8">Sales</h3>
            <ul className="text-center space-y-1 mb-12">
              <li className="flex items-center justify-center gap-2">
                <span className="text-blue-500">✓</span>
                <span className="text-black/70 tracking-[-0.02em]">Focus on growth and improvement</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-blue-500">✓</span>
                <span className="text-black/70 tracking-[-0.02em]">Embrace challenges as learning</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-blue-500">✓</span>
                <span className="text-black/70 tracking-[-0.02em]">Cultivate a positive mindset</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-blue-500">✓</span>
                <span className="text-black/70 tracking-[-0.02em]">Build relationships with people</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-blue-500">✓</span>
                <span className="text-black/70 tracking-[-0.02em]">Set clear goals and create plans</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-blue-500">✓</span>
                <span className="text-black/70 tracking-[-0.02em]">Practice mindfulness and self-care</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-blue-500">✓</span>
                <span className="text-black/70 tracking-[-0.02em]">Celebrate small victories</span>
              </li>
            </ul>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-blue-500 text-xl font-medium tracking-[-0.02em] hover:underline"
            >
              Call To Action
            </button>
          </div>

          {/* Customized Solution Card */}
          <div className="bg-white p-8 rounded-2xl text-center">
            <div className="w-52 h-52 mx-auto mb-6">
              <img src="/card-icon.png" alt="Customized Solution" className="w-full h-full object-contain" />
            </div>
            <h3 className="text-4xl font-medium tracking-[-0.02em] mb-8">Customized solution</h3>
            <ul className="text-center space-y-1 mb-12">
              <li className="flex items-center justify-center gap-2">
                <span className="text-blue-500">✓</span>
                <span className="text-black/70 tracking-[-0.02em]">Focus on growth and improvement</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-blue-500">✓</span>
                <span className="text-black/70 tracking-[-0.02em]">Embrace challenges as learning</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-blue-500">✓</span>
                <span className="text-black/70 tracking-[-0.02em]">Cultivate a positive mindset</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-blue-500">✓</span>
                <span className="text-black/70 tracking-[-0.02em]">Build relationships with people</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-blue-500">✓</span>
                <span className="text-black/70 tracking-[-0.02em]">Set clear goals and create plans</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-blue-500">✓</span>
                <span className="text-black/70 tracking-[-0.02em]">Practice mindfulness and self-care</span>
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="text-blue-500">✓</span>
                <span className="text-black/70 tracking-[-0.02em]">Celebrate small victories</span>
              </li>
            </ul>
            <button 
              onClick={() => scrollToSection("contact")}
              className="text-blue-500 text-xl font-medium tracking-[-0.02em] hover:underline"
            >
              Call To Action
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}; 