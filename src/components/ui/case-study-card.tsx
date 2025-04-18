
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
      "backdrop-blur-xl bg-[#ffffff0d] border border-[#ffffff1a] shadow-[0_4px_12px_-2px_rgba(0,0,0,0.3)] rounded-xl p-8 h-full flex flex-col transition-all duration-300",
      className
    )}>
      <h3 className="font-display text-xl font-semibold mb-6 bg-gradient-to-br from-[#ffffff] via-[#ffffffe6] to-[#ffffffb3] bg-clip-text text-transparent">{title}</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
        {results.salesGrowth && (
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#2B8AE2] via-[#2B8AE2cc] to-[#2B8AE299] flex items-center justify-center shadow-lg">
              <TrendingUp className="w-5 h-5 text-[#ffffff]" />
            </div>
            <div>
              <p className="text-xs text-[#a1a1aa]">Sales Growth</p>
              <p className="font-semibold text-[#ffffff]">{results.salesGrowth}</p>
            </div>
          </div>
        )}
        
        {results.moreClients && (
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#2B8AE2] via-[#2B8AE2cc] to-[#2B8AE299] flex items-center justify-center shadow-lg">
              <BarChart3 className="w-5 h-5 text-[#ffffff]" />
            </div>
            <div>
              <p className="text-xs text-[#a1a1aa]">More Clients</p>
              <p className="font-semibold text-[#ffffff]">{results.moreClients}</p>
            </div>
          </div>
        )}
        
        {results.reducedCosts && (
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#2B8AE2] via-[#2B8AE2cc] to-[#2B8AE299] flex items-center justify-center shadow-lg">
              <Gauge className="w-5 h-5 text-[#ffffff]" />
            </div>
            <div>
              <p className="text-xs text-[#a1a1aa]">Reduced Costs</p>
              <p className="font-semibold text-[#ffffff]">{results.reducedCosts}</p>
            </div>
          </div>
        )}
        
        {results.moreFreeTime && (
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#2B8AE2] via-[#2B8AE2cc] to-[#2B8AE299] flex items-center justify-center shadow-lg">
              <Clock className="w-5 h-5 text-[#ffffff]" />
            </div>
            <div>
              <p className="text-xs text-[#a1a1aa]">More Free Time</p>
              <p className="font-semibold text-[#ffffff]">{results.moreFreeTime}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
