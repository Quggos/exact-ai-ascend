
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
      "glass-morphism rounded-xl p-8 h-full flex flex-col transition-all duration-300",
      className
    )}>
      <h3 className="font-display text-xl font-semibold mb-6 text-gradient">{title}</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
        {results.salesGrowth && (
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg primary-gradient flex items-center justify-center shadow-lg">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Sales Growth</p>
              <p className="font-semibold">{results.salesGrowth}</p>
            </div>
          </div>
        )}
        
        {results.moreClients && (
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg primary-gradient flex items-center justify-center shadow-lg">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">More Clients</p>
              <p className="font-semibold">{results.moreClients}</p>
            </div>
          </div>
        )}
        
        {results.reducedCosts && (
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg primary-gradient flex items-center justify-center shadow-lg">
              <Gauge className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Reduced Costs</p>
              <p className="font-semibold">{results.reducedCosts}</p>
            </div>
          </div>
        )}
        
        {results.moreFreeTime && (
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg primary-gradient flex items-center justify-center shadow-lg">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">More Free Time</p>
              <p className="font-semibold">{results.moreFreeTime}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
