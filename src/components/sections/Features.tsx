import { BrainCircuit, Globe, Zap, MessageSquareDot, Database, BarChart3 } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: BrainCircuit,
      title: "Contextual Understanding",
      description: "Our AI remembers past conversations, understands complex queries, and maintains context throughout interactions.",
      gradient: "from-[#FFA4A4] to-[#EB2525]"
    },
    {
      icon: Globe,
      title: "Multilingual Support",
      description: "Communicate with customers in over 30 languages with natural fluency and cultural awareness.",
      gradient: "from-[#FFA4A4] to-[#EB2525]"
    },
    {
      icon: Zap,
      title: "Automated Workflows",
      description: "Integrate with your business systems to automate tasks like appointment booking, order processing, and data entry.",
      gradient: "from-[#FFA4A4] to-[#EB2525]"
    },
    {
      icon: MessageSquareDot,
      title: "Sentiment Analysis",
      description: "Detect customer emotions and adapt responses to provide empathetic and appropriate assistance.",
      gradient: "from-[#FFA4A4] to-[#EB2525]"
    },
    {
      icon: Database,
      title: "Custom Knowledge Base",
      description: "Train your assistant with your product information, policies, and industry expertise for accurate responses.",
      gradient: "from-[#FFA4A4] to-[#EB2525]"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Gain insights from conversations to improve products, services, and customer experience.",
      gradient: "from-[#FFA4A4] to-[#EB2525]"
    }
  ];

  return (
    <section className="section-padding bg-[#fafafa] relative overflow-hidden">
      {/* Background gradient effect */}
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <p className="text-black text-3xl tracking-[-0.02em] font-medium mb-3">Features</p>
          <h2 className="text-7xl font-semibold text-black tracking-[-0.02em] mb-8">
            Intelligence that <br/>adapts to your needs
          </h2>
          <p className="text-black font-regular leading-12 tracking-[-0.02em] text-3xl">
            Our AI assistant combines cutting-edge technology with intuitive design to deliver a seamless experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group relative bg-white backdrop-blur-xl rounded-3xl p-8"
            >
              
              <div className="relative">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-2xl font-medium tracking-[-0.02em] text-black mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-black/60 text-lg leading-relaxed tracking-[-0.02em]">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 