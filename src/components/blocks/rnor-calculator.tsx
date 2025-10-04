"use client";

import { useState, useMemo, useCallback } from "react";
import { Inputs, PlanResult } from "@/lib/types/rnor";

// Extended inputs type for individual year choices
interface InputsWithIndividualChoices extends Inputs {
  useIndividualChoices: boolean;
  individualYearChoices: { [yearSpan: string]: 'rarely' | 'sometimes' | 'frequently' | 'mostly' };
}
import { computePlan, computePlanWithIndividualChoices } from "@/lib/rnor";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn, generateBlockYearRanges } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { FAQAccordion } from "@/components/blocks/faq-accordion";

interface RNORCalculatorProps {
  className?: string;
}

type AssetType = 'stock-brokerage' | 'retirement-accounts' | 'foreign-house' | 'vesting-shares';

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
    A: { choice: 'rarely', years: 3 },
    B: { choice: 'rarely', years: 4 },
    C: { choice: 'rarely', years: 3 },
  },
};

const SLIDER_OPTIONS = [
  { value: 'rarely', label: 'Rarely', days: 59, tooltip: '0–59 days/year' },
  { value: 'sometimes', label: 'Sometimes', days: 120, tooltip: '60–120 days/year' },
  { value: 'frequently', label: 'Often', days: 183, tooltip: '121–183 days/year' },
  { value: 'mostly', label: 'Mostly', days: 240, tooltip: '184–240 days/year' },
];

const ASSET_OPTIONS = [
  { value: 'stock-brokerage', label: 'Stock brokerage account' },
  { value: 'retirement-accounts', label: 'Foreign Retirement Accounts' },
  { value: 'foreign-house', label: 'Foreign house on sale' },
  { value: 'vesting-shares', label: 'Vesting shares/stock options' },
];

const REGION_OPTIONS = [
  { value: 'US', label: 'United States' },
  { value: 'UK', label: 'United Kingdom' },
  { value: 'Australia', label: 'Australia' },
  { value: 'Singapore', label: 'Singapore' },
  { value: 'UAE', label: 'UAE' },
  { value: 'Canada', label: 'Canada' },
  { value: 'Germany', label: 'Germany' },
  { value: 'Netherlands', label: 'Netherlands' },
  { value: 'Japan', label: 'Japan' },
  { value: 'Malaysia', label: 'Malaysia' },
];

const rnorFAQ = [
  {
    question: "What is RNOR status?",
    answer: "RNOR (Resident but Not Ordinarily Resident) is a special tax status in India for individuals who are Indian citizens or persons of Indian origin returning to India after being non-resident for a certain period. This status provides significant tax benefits for a limited time."
  },
  {
    question: "How long does RNOR status last?",
    answer: "RNOR status typically lasts for 2 years from the date of return to India, provided you meet the conditions. After this period, you become a Resident and Ordinarily Resident (ROR) and are subject to full Indian tax obligations."
  },
  {
    question: "What are the tax benefits of RNOR status?",
    answer: "RNOR status offers several tax benefits including exemption from tax on foreign income (except income from a business controlled in India or a profession set up in India), and favorable treatment of capital gains from foreign assets."
  },
  {
    question: "What documents do I need for RNOR planning?",
    answer: "You'll need your foreign tax returns, Indian tax returns (if any), bank statements, investment statements, employment records, and documentation of your stay in India and abroad. Our calculator will help identify specific documents needed for your situation."
  },
  {
    question: "When should I start planning my return to India?",
    answer: "It's recommended to start planning at least 6-12 months before your intended return date. This allows time for tax optimization strategies, investment restructuring, and proper documentation to maximize your RNOR benefits."
  },
  {
    question: "Why pay if this planner is free?",
    answer: "Planner shows if you qualify. Report shows how to use it with exact dates, asset strategies, and compliance workflows."
  },
  {
    question: "Can I plan later?",
    answer: "Once RNOR lapses, you lose it. The window is time-sensitive and requires advance planning to maximize benefits."
  },
  {
    question: "Will you upsell me?",
    answer: "$549 is flat, no hidden fees or upsells. We focus on delivering value upfront."
  },
  {
    question: "Global applicability?",
    answer: "Covers US, UK, Canada, UAE, Singapore, Australia, Germany, Netherlands, Japan, Malaysia, and more. Our Chartered Accountants specialize in cross-border tax planning."
  }
];

export function RNORCalculator({ className }: RNORCalculatorProps) {
  const [inputs, setInputs] = useState<Inputs>(defaultInputs);
  const [selectedAssets, setSelectedAssets] = useState<AssetType[]>(['stock-brokerage']);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [activeTab, setActiveTab] = useState<'timeline' | 'savings'>('timeline');
  
  // Individual year choices for advanced mode
  const [individualYearChoices, setIndividualYearChoices] = useState<{ [yearSpan: string]: 'rarely' | 'sometimes' | 'frequently' | 'mostly' }>({});

  // Create custom inputs that use individual year choices when available
  const customInputs = useMemo(() => {
    if (Object.keys(individualYearChoices).length === 0) {
      // No individual choices set, use basic inputs
      return inputs;
    }
    
    // Create custom inputs with individual year choices
    const { blockA, blockB, blockC } = generateBlockYearRanges(inputs.landingDate);
    const allYears = [...blockA, ...blockB, ...blockC];
    
    // Check if we have individual choices for all years
    const hasAllIndividualChoices = allYears.every(year => individualYearChoices[year]);
    
    if (!hasAllIndividualChoices) {
      // Not all years have individual choices, use basic inputs
      return inputs;
    }
    
    // Create a custom inputs object that will be processed differently
    return {
      ...inputs,
      // Add a flag to indicate we're using individual choices
      useIndividualChoices: true,
      individualYearChoices
    };
  }, [inputs, individualYearChoices]);

  const plan: PlanResult = useMemo(() => {
    if ('useIndividualChoices' in customInputs && customInputs.useIndividualChoices) {
      // Use individual year choices for calculation
      return computePlanWithIndividualChoices(customInputs as InputsWithIndividualChoices);
    } else {
      // Use standard calculation
      return computePlan(inputs);
    }
  }, [customInputs, inputs]);

  const handleInputChange = useCallback((field: keyof Inputs, value: string | { A: { choice: string; years: number }; B: { choice: string; years: number }; C: { choice: string; years: number } }) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  }, []);

  // Handle basic slider as "set all" control
  const handleBasicSliderChange = useCallback((choice: 'rarely' | 'sometimes' | 'frequently' | 'mostly') => {
    // Update basic inputs
    handleInputChange('blocks', {
      ...inputs.blocks,
      A: { ...inputs.blocks.A, choice },
      B: { ...inputs.blocks.B, choice },
      C: { ...inputs.blocks.C, choice },
    });
    
    // Set all individual years to the same choice
    const { blockA, blockB, blockC } = generateBlockYearRanges(inputs.landingDate);
    const allYears = [...blockA, ...blockB, ...blockC];
    const newIndividualChoices: { [yearSpan: string]: 'rarely' | 'sometimes' | 'frequently' | 'mostly' } = {};
    allYears.forEach(yearSpan => {
      newIndividualChoices[yearSpan] = choice;
    });
    setIndividualYearChoices(newIndividualChoices);
  }, [inputs.blocks, inputs.landingDate, handleInputChange]);

  // Handle individual year changes in advanced mode
  const handleIndividualYearChange = useCallback((yearSpan: string, choice: 'rarely' | 'sometimes' | 'frequently' | 'mostly') => {
    // Update individual year choices
    setIndividualYearChoices(prev => ({
      ...prev,
      [yearSpan]: choice
    }));
  }, []);

  const handleAssetToggle = useCallback((asset: AssetType) => {
    setSelectedAssets(prev => 
      prev.includes(asset) 
        ? prev.filter(a => a !== asset)
        : [...prev, asset]
    );
  }, []);

  // Calculate savings based on selected assets
  const calculateSavings = useCallback(() => {
    const assetMultiplier = selectedAssets.length;
    
    if (assetMultiplier === 0) return { min: 0, max: 0 };
    if (assetMultiplier === 1) return { min: 5000, max: 15000 };
    if (assetMultiplier === 2) return { min: 15000, max: 25000 };
    if (assetMultiplier === 3) return { min: 25000, max: 35000 };
    return { min: 35000, max: 50000 };
  }, [selectedAssets]);

  const savings = calculateSavings();

  return (
    <Container className={cn("py-16", className)}>
      <div id="calculator" className="max-w-7xl mx-auto">

        {/* Main Calculator Grid - NerdWallet Style */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Inputs */}
          <Card className="rounded-2xl shadow-sm border-border">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-6">Calculator Details</h3>
              
              {/* Return Date */}
              <div className="mb-6">
                <Label htmlFor="return-date" className="text-sm font-medium mb-2 block">
                  Return date
                </Label>
                <Input
                  id="return-date"
                  type="date"
                  value={inputs.landingDate}
                  onChange={(e) => handleInputChange('landingDate', e.target.value)}
                  className="w-full"
                />
              </div>

              {/* Country */}
              <div className="mb-6">
                <Label htmlFor="country" className="text-sm font-medium mb-2 block">
                  Which country are you moving from?
                </Label>
                <Select value={inputs.region} onValueChange={(value) => handleInputChange('region', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent className="bg-muted/50">
                    {REGION_OPTIONS.map((option) => (
                      <SelectItem key={option.value} value={option.value} className="bg-muted/50 hover:bg-muted/70">
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Assets */}
              <div className="mb-6">
                <Label className="text-sm font-medium mb-3 block">
                  Assets select dropdown
                </Label>
                <div className="space-y-2">
                  {ASSET_OPTIONS.map((asset) => (
                    <label key={asset.value} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedAssets.includes(asset.value as AssetType)}
                        onChange={() => handleAssetToggle(asset.value as AssetType)}
                        className="rounded border-gray-300"
                      />
                      <span className="text-sm">{asset.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Basic Time Spent */}
              <div className="mb-6">
                <Label className="text-sm font-medium mb-3 block">
                  Time spent in last 10 years (basic)
                </Label>
                <div className="space-y-3">
                  {SLIDER_OPTIONS.map((option) => (
                    <div key={option.value} className="relative group">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="basic-time"
                          value={option.value}
                          checked={inputs.blocks.A.choice === option.value}
                                  onChange={() => handleBasicSliderChange(option.value as 'rarely' | 'sometimes' | 'frequently' | 'mostly')}
                          className="border-gray-300"
                        />
                        <span className="text-sm">{option.label}</span>
                        {/* Always visible info icon with tooltip */}
                        <div className="relative group/info">
                          <div className="w-4 h-4 bg-gray-300 text-white text-xs rounded-full flex items-center justify-center cursor-help ml-1">
                            i
                          </div>
                          <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg opacity-0 group-hover/info:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                            {option.tooltip}
                            <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-gray-800"></div>
                          </div>
                        </div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Advanced Toggle */}
              <div className="border-t pt-4">
                <button
                  onClick={() => setShowAdvanced(!showAdvanced)}
                  className="text-sm text-primary hover:text-primary/80 flex items-center gap-1"
                >
                  {showAdvanced ? 'HIDE ADVANCED INFO' : 'SHOW ADVANCED INFO'}
                  <span className="text-xs">{showAdvanced ? '↑' : '↓'}</span>
                </button>
                
                {showAdvanced && (
                  <div className="mt-4 space-y-4">
                    <p className="text-xs text-muted-foreground mb-4">
                      Adjust individual years (most recent first):
                    </p>
                    
                    {/* Generate 10 year ranges in 2x2 grid */}
                    {(() => {
                      const { blockA, blockB, blockC } = generateBlockYearRanges(inputs.landingDate);
                      const allYears = [...blockA, ...blockB, ...blockC];
                      
                      return (
                        <div className="grid grid-cols-2 gap-4">
                          {allYears.map((yearSpan, index) => (
                            <div key={yearSpan} className="space-y-2">
                              <div className="flex items-center justify-between">
                                <Label className="text-sm font-medium">{yearSpan}</Label>
                                <span className="text-xs text-muted-foreground">
                                  {SLIDER_OPTIONS.find(opt => opt.value === (individualYearChoices[yearSpan] || inputs.blocks.A.choice))?.tooltip || '0-59 days/year'}
                                </span>
                              </div>
                              <div className="space-y-1">
                                {SLIDER_OPTIONS.map((option) => (
                                  <div key={option.value} className="relative group/info">
                                    <label className="flex items-center space-x-2 cursor-pointer">
                                      <input
                                        type="radio"
                                        name={`year-${index}`}
                                        value={option.value}
                                        checked={(individualYearChoices[yearSpan] || inputs.blocks.A.choice) === option.value}
                                        onChange={() => handleIndividualYearChange(yearSpan, option.value as 'rarely' | 'sometimes' | 'frequently' | 'mostly')}
                                        className="border-gray-300"
                                      />
                                      <span className="text-sm">{option.label}</span>
                                      <div className="relative group/info">
                                        <div className="w-4 h-4 bg-gray-300 text-white text-xs rounded-full flex items-center justify-center cursor-help ml-1">
                                          i
                                        </div>
                                        <div className="absolute left-full ml-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg opacity-0 group-hover/info:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                                          {option.tooltip}
                                          <div className="absolute right-full top-1/2 transform -translate-y-1/2 border-4 border-transparent border-r-gray-800"></div>
                                        </div>
                                      </div>
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      );
                    })()}
                    
                    <Button size="sm" variant="outline" className="w-full">
                      RECALCULATE
                    </Button>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Right Column - Results */}
          <div className="space-y-6">
            {/* Tabs */}
            <div className="flex bg-blue-50 rounded-t-lg p-1">
              <button
                onClick={() => setActiveTab('timeline')}
                className={cn(
                  "flex-1 px-4 py-3 text-sm font-medium rounded-md transition-all duration-200",
                  activeTab === 'timeline'
                    ? "bg-blue-600 text-white shadow-md font-semibold"
                    : "bg-blue-100 text-blue-700 hover:bg-blue-200 hover:text-blue-800"
                )}
              >
                Tax-Free Golden Window Estimate*
              </button>
              <button
                onClick={() => setActiveTab('savings')}
                className={cn(
                  "flex-1 px-4 py-3 text-sm font-medium rounded-md transition-all duration-200",
                  activeTab === 'savings'
                    ? "bg-blue-600 text-white shadow-md font-semibold"
                    : "bg-blue-100 text-blue-700 hover:bg-blue-200 hover:text-blue-800"
                )}
              >
                What&apos;s This Worth to You?
              </button>
            </div>

            {/* Tab Content */}
            <Card className="rounded-2xl shadow-sm border-border">
              <CardContent className="p-6">
                {activeTab === 'timeline' ? (
                  <div className="space-y-6">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Arrival FY</p>
                      <p className="text-lg font-semibold">{plan.arrivalFY}</p>
                    </div>
                    
                    {/* Timeline Visualization */}
                    <div className="space-y-3">
                      {plan.timeline.map((row, index) => (
                        <div key={row.fyLabel} className="flex items-center justify-between text-sm">
                          <span>{row.fyLabel}</span>
                          <div className={`w-24 h-4 rounded ${
                            row.finalStatus === 'RNOR' ? 'bg-green-500' :
                            row.finalStatus === 'ROR' ? 'bg-red-500' :
                            row.finalStatus === 'Arrival' ? 'bg-gray-300' :
                            'bg-gray-300'
                          }`}></div>
                          <span className={`text-xs ${
                            row.finalStatus === 'RNOR' ? 'text-green-600' :
                            row.finalStatus === 'ROR' ? 'text-red-600' :
                            row.finalStatus === 'Arrival' ? 'text-muted-foreground' :
                            'text-muted-foreground'
                          }`}>
                            {row.finalStatus === 'ROR' && index === plan.timeline.length - 1 ? 'ROR +' : 
                             row.finalStatus === 'Arrival' ? 'Arrival' : row.finalStatus}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-600">{plan.rnorYears.length}</p>
                      <p className="text-sm text-muted-foreground">Tax-free years found</p>
                      <p className="text-xs text-muted-foreground mt-2">*Estimate only. Professional cross-border CA will verify with passport stamps.</p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-green-600">
                        ${savings.min.toLocaleString()}–${savings.max.toLocaleString()}
                      </p>
                      <p className="text-sm text-muted-foreground">Your potential savings</p>
                      <p className="text-xs text-muted-foreground mt-2">*Illustrative estimate. Actual savings depend on asset values and professional cross-border CA analysis.</p>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-sm font-medium">Based on your selected assets:</p>
                      {selectedAssets.length === 0 ? (
                        <p className="text-sm text-muted-foreground">No assets selected</p>
                      ) : (
                        <div className="space-y-1">
                          {selectedAssets.map((asset) => (
                            <div key={asset} className="flex items-center gap-2">
                              <span className="text-green-600">✓</span>
                              <span className="text-sm">
                                {ASSET_OPTIONS.find(a => a.value === asset)?.label}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                  </div>
                )}
              </CardContent>
            </Card>

            {/* CTA Section */}
            <Card className="rounded-2xl shadow-lg border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-4">
                  Get Your Personalized Return-to-India Plan
                </h3>
                
                <div className="mb-6">
                  <div className="text-3xl font-bold text-primary mb-2">Starting at $2/minute</div>
                  <div className="text-sm text-muted-foreground">30-minute minimum • 1-hour recommended</div>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <span className="text-primary">✓</span>
                    <span>RNOR date strategy & tax optimization</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <span className="text-primary">✓</span>
                    <span>Asset-by-asset planning & transfer strategy</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <span className="text-primary">✓</span>
                    <span>Live consultation with cross-border experts</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Button 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    asChild
                  >
                    <Link href="/services/return-to-india-financial-planning/">Book Your Risk-Free Consultation</Link>
                  </Button>
                  <div className="text-sm text-muted-foreground">
                    <span className="text-green-600 font-medium">100% refund if we can't help</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Featured In */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-4">
            <span className="text-sm text-muted-foreground">Featured in:</span>
            <div className="relative w-96 h-24">
              <Image
                src="/images/business-today-logo.webp"
                alt="Business Today"
                fill
                className="object-contain opacity-60"
              />
            </div>
          </div>
        </div>

        {/* How to Use Section */}
        <Card className="rounded-2xl shadow-sm border-border mb-8">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6">How to Use This Calculator</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-3">1. Enter Your Return Date</h4>
                <p className="text-muted-foreground">
                  Select when you plan to return to India. This determines your fiscal year of arrival and subsequent RNOR eligibility.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-3">2. Select Your Current Country</h4>
                <p className="text-muted-foreground">
                  Choose the country you&apos;re currently residing in. Different countries have different tax treaties with India.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-3">3. Choose Your Assets</h4>
                <p className="text-muted-foreground">
                  Select the foreign assets you plan to bring back or liquidate. More assets typically mean higher potential savings.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-3">4. Estimate Time Spent in India</h4>
                <p className="text-muted-foreground">
                  Use the basic slider to estimate how many days you spent in India each year over the last 10 years. Be conservative to avoid overstating your tax-free window. <strong>Note:</strong> This is an estimate only. A professional cross-border CA will calculate accurate dates based on your passport stamps.
                </p>
              </div>
              
              <div className="bg-muted/30 p-4 rounded-lg">
                <h4 className="text-lg font-semibold mb-3">Technical Terms Explained</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <strong>RNOR (Resident but Not Ordinarily Resident):</strong> A special tax status in India that provides tax benefits for returning NRIs for a limited period.
                  </div>
                  <div>
                    <strong>ROR (Resident and Ordinarily Resident):</strong> Full tax resident status where all worldwide income is taxable in India.
                  </div>
                  <div>
                    <strong>Fiscal Year:</strong> India&apos;s financial year runs from April 1 to March 31.
                  </div>
                  <div>
                    <strong>Residency Tests:</strong> Based on Income Tax Act Section 6 - 182 days rule or 60+365 days rule for determining tax residency.
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Client Testimonials */}
        <Card className="rounded-2xl shadow-sm border-border mb-8">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">What Our Clients Say</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-muted/30 rounded-lg p-4">
                <p className="text-sm italic mb-2">&quot;Saved $23,400 by shifting return by 27 days.&quot;</p>
                <p className="text-xs text-muted-foreground">— R.K., Seattle</p>
              </div>
              <div className="bg-muted/30 rounded-lg p-4">
                <p className="text-sm italic mb-2">&quot;The RNOR strategy was spot-on. Worth every penny.&quot;</p>
                <p className="text-xs text-muted-foreground">— S.M., London</p>
              </div>
              <div className="bg-muted/30 rounded-lg p-4">
                <p className="text-sm italic mb-2">&quot;Finally understood the tax implications clearly.&quot;</p>
                <p className="text-xs text-muted-foreground">— A.P., Singapore</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* FAQ Section */}
        <FAQAccordion 
          title="RNOR Planning FAQ"
          faqs={rnorFAQ}
          className="py-16"
        />
      </div>
    </Container>
  );
}
