import { ExactLogo } from "@/components/ExactLogo";

export const Footer = () => {
  return (
    <footer className="glass-morphism border-t border-white/5 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <ExactLogo className="mb-4" />
            <p className="text-sm text-muted-foreground">
              Transforming business communication with advanced AI text chat assistants.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2">
              <li><a href="#use-cases" className="text-sm text-muted-foreground hover:text-[#FC576E] transition-colors">Customer Support AI</a></li>
              <li><a href="#use-cases" className="text-sm text-muted-foreground hover:text-[#FC576E] transition-colors">Sales AI Assistant</a></li>
              <li><a href="#use-cases" className="text-sm text-muted-foreground hover:text-[#FC576E] transition-colors">Custom AI Solutions</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Partners</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li><a href="#next-steps" className="text-sm text-muted-foreground hover:text-primary transition-colors">Schedule a Call</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Support</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">hello@exactai.com</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground">
            © 2025 EXACT AI. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}; 