
import { cn } from "@/lib/utils";
import { Gauge, BarChart3, TrendingUp, Clock } from "lucide-react";

type CaseStudyCardProps = {
  title: string;
  results: {
    salesGrowth?: string;
    moreClients?: string;
    reducedCosts?: string;
    moreFreeTime?: string;
  };
  className?: string;
};

export function CaseStudyCard({
  title,
  results,
  className,
}: CaseStudyCardProps) {
  return (
    <div className={cn(
      "glossy-card shine p-10 h-full flex flex-col transition-all duration-300 hover:translate-y-[-5px]",
      className
    )}>
      <h3 className="font-display text-2xl font-semibold mb-8 text-gradient">{title}</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
        {results.salesGrowth && (
          <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 rounded-xl primary-gradient flex items-center justify-center shadow-lg group-hover:shadow-blue-500/30">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Sales Growth</p>
              <p className="font-semibold text-lg">{results.salesGrowth}</p>
            </div>
          </div>
        )}
        
        {results.moreClients && (
          <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 rounded-xl primary-gradient flex items-center justify-center shadow-lg group-hover:shadow-blue-500/30">
              <BarChart3 className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">More Clients</p>
              <p className="font-semibold text-lg">{results.moreClients}</p>
            </div>
          </div>
        )}
        
        {results.reducedCosts && (
          <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 rounded-xl primary-gradient flex items-center justify-center shadow-lg group-hover:shadow-blue-500/30">
              <Gauge className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">Reduced Costs</p>
              <p className="font-semibold text-lg">{results.reducedCosts}</p>
            </div>
          </div>
        )}
        
        {results.moreFreeTime && (
          <div className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300">
            <div className="w-12 h-12 rounded-xl primary-gradient flex items-center justify-center shadow-lg group-hover:shadow-blue-500/30">
              <Clock className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground mb-1">More Free Time</p>
              <p className="font-semibold text-lg">{results.moreFreeTime}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
