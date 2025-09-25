"use client";

import { useState, useMemo, useCallback } from "react";
import { Inputs, PlanResult } from "@/lib/types/rnor";
import { RNORInputsCard } from "@/components/blocks/rnor-inputs-card";
import { RNORResultsPanel } from "@/components/blocks/rnor-results-panel";
import { RNORTimeline } from "@/components/blocks/rnor-timeline";
import { computePlan } from "@/lib/rnor";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

interface RNORCalculatorProps {
  className?: string;
}

// Default to today + 1 year
const getDefaultLandingDate = () => {
  const nextYear = new Date();
  nextYear.setFullYear(nextYear.getFullYear() + 1);
  return nextYear.toISOString().slice(0, 10);
};

const defaultInputs: Inputs = {
  landingDate: getDefaultLandingDate(),
  region: 'US',
  blocks: {
    A: { choice: 'sometimes', years: 3 },
    B: { choice: 'sometimes', years: 4 },
    C: { choice: 'sometimes', years: 3 },
  },
};

export function RNORCalculator({ className }: RNORCalculatorProps) {
  const [inputs, setInputs] = useState<Inputs>(defaultInputs);

  const handleInputsChange = useCallback((newInputs: Inputs) => {
    setInputs(newInputs);
  }, []);

  const plan: PlanResult = useMemo(() => computePlan(inputs), [inputs]);

  const handleResetBlocks = useCallback(() => {
    setInputs(prev => ({
      ...prev,
      blocks: {
        A: { choice: 'sometimes', years: 3 },
        B: { choice: 'sometimes', years: 4 },
        C: { choice: 'sometimes', years: 3 },
      },
    }));
  }, []);

  const scrollToResults = () => {
    document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Container className={cn("py-16", className)}>
      <div id="calculator" className="max-w-7xl mx-auto">
        {/* Hero Copy - TurboTax Style */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            When are you moving back to India?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Find out if you qualify for a tax-free window (RNOR) — and how to extend it.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <span>✅</span>
            <span>Free calculation • No signup required • Instant results</span>
          </div>
        </div>

        {/* Two Column Layout - TurboTax Style */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Inputs (65-70%) */}
          <div className="lg:col-span-2 space-y-6">
            <RNORInputsCard
              inputs={inputs}
              onInputsChange={handleInputsChange}
              onResetBlocks={handleResetBlocks}
            />
            
            {/* Auto-update helper */}
            <p className="text-sm text-muted-foreground text-center lg:text-left">
              Calculations update automatically as you adjust your inputs.
            </p>
          </div>

          {/* Right Column - Compact Explainer (30-35%) */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="rounded-2xl shadow-sm border-border h-fit">
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Why your return date matters</h3>
                  <p className="text-sm text-muted-foreground">
                    Your RNOR years are a temporary tax-free window in India for certain foreign gains.
                  </p>
                </div>

                {/* Color Legend */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    <span>NR — Non-Resident (Tax-free)</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span>RNOR — Resident but Not Ordinarily Resident</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <span>ROR — Resident and Ordinarily Resident</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    These colors match the timeline below.
                  </p>
                </div>

                {/* Outcome Rows */}
                <div className="space-y-3 pt-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="flex items-center gap-2">
                      <span>💰</span>
                      <span>Best years to realize foreign gains</span>
                    </span>
                    <span className="font-medium text-green-600">During RNOR</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="flex items-center gap-2">
                      <span>🌍</span>
                      <span>Foreign income taxed in India</span>
                    </span>
                    <span className="font-medium text-green-600">Lower</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="flex items-center gap-2">
                      <span>📈</span>
                      <span>Capital gains on foreign assets</span>
                    </span>
                    <span className="font-medium text-green-600">Tax-free</span>
                  </div>
                </div>

                {/* Primary Action */}
                <button
                  onClick={scrollToResults}
                  className="w-full mt-4 px-4 py-2 text-sm bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg transition-colors"
                >
                  See your RNOR years →
                </button>
              </CardContent>
            </Card>

            {/* Timeline Section */}
            <Card className="rounded-2xl shadow-sm border-border">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-lg font-semibold mb-3">When is it safe to sell?</h3>
                <RNORTimeline 
                  items={plan.timeline.map(row => ({
                    label: row.fyLabel,
                    status: row.finalStatus === 'NR' || row.finalStatus === 'RNOR' ? 'NR' : 'ROR'
                  }))} 
                />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Results Section */}
        <div id="results" aria-live="polite" className="mt-16">
          <RNORResultsPanel plan={plan} />
        </div>
      </div>
    </Container>
  );
}
