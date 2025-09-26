"use client";

import { Card, CardContent } from "@/components/ui/card";
import { PlanResult } from "@/lib/types/rnor";

interface ResultsPanelProps {
  plan: PlanResult;
  audience?: 'planning' | 'returned' | 'h1b-laidoff';
}

export function RNORResultsPanel({ plan }: ResultsPanelProps) {
  const hasRNOR = plan.rnorYears.length > 0;

  return (
    <Card className="rounded-2xl shadow-lg border-border">
      <CardContent className="p-8">
        {/* Top line bar (visual timeline) */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-center">Your Residency Timeline</h3>
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2">
            {plan.timeline.map((row, index) => (
              <div key={index} className="flex flex-col items-center min-w-[80px]">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                  row.finalStatus === 'NR' ? 'bg-blue-500' :
                  row.finalStatus === 'RNOR' ? 'bg-green-500' :
                  'bg-red-500'
                }`}>
                  {row.finalStatus === 'NR' ? 'NR' :
                   row.finalStatus === 'RNOR' ? 'RN' : 'ROR'}
                </div>
                <span className="text-xs text-muted-foreground mt-1 text-center">
                  {row.fyLabel}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Three numbers (big, simple) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-1">{plan.arrivalFY}</div>
            <div className="text-sm text-muted-foreground">Arrival FY</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-1">{plan.rnorYears.length}</div>
            <div className="text-sm text-muted-foreground">RNOR years found</div>
            {plan.rnorYears.length > 0 && (
              <div className="text-xs text-muted-foreground mt-1">
                {plan.rnorYears.join(', ')}
              </div>
            )}
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-blue-600 mb-1">
              {hasRNOR ? `During FY ${plan.rnorYears[0] || plan.arrivalFY} RNOR` : 'Not Ideal'}
            </div>
            <div className="text-sm text-muted-foreground">Best months to sell foreign assets</div>
          </div>
        </div>

        {/* Action chips */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {hasRNOR && (
            <>
              <button className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium hover:bg-green-200 transition-colors">
                Move return by +45 days → unlock 1 RNOR year
              </button>
              <button className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors">
                Return after Feb 1 → preserve NRI for current FY
              </button>
              <button className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors">
                Schedule repatriation during RNOR
              </button>
            </>
          )}
          {!hasRNOR && (
            <button className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium hover:bg-orange-200 transition-colors">
              Adjust return date to qualify for RNOR
            </button>
          )}
        </div>

        {/* Status message */}
        <div className="text-center">
          {hasRNOR ? (
            <div className="flex items-center justify-center gap-2 text-green-700">
              <span className="text-2xl">✅</span>
              <span className="text-lg font-medium">
                You qualify for {plan.rnorYears.length} tax-free year{plan.rnorYears.length > 1 ? 's' : ''}!
              </span>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-2 text-orange-700">
              <span className="text-2xl">⚠️</span>
              <span className="text-lg font-medium">
                No RNOR window found with current inputs
              </span>
            </div>
          )}
        </div>

        {/* Alerts */}
        {plan.alerts.length > 0 && (
          <div className="mt-6 space-y-2">
            {plan.alerts.map((alert) => (
              <div 
                key={alert.id} 
                className={`p-3 rounded-lg text-sm ${
                  alert.level === 'danger' ? 'bg-red-50 text-red-700 border border-red-200' :
                  alert.level === 'warn' ? 'bg-orange-50 text-orange-700 border border-orange-200' :
                  'bg-blue-50 text-blue-700 border border-blue-200'
                }`}
              >
                <div className="flex items-start gap-2">
                  <span className="text-lg">
                    {alert.level === 'danger' ? '🚨' : 
                     alert.level === 'warn' ? '⚠️' : 'ℹ️'}
                  </span>
                  <div className="flex-1">
                    <p className="font-medium">{alert.text}</p>
                    <button className="text-xs underline mt-1 hover:no-underline">
                      {alert.cta}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
