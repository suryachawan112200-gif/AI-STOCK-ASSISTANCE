export interface Stock {
    symbol: string;
    name: string;
    price: number;
    change: number;
    volume: number;
}

export interface StockAnalysisRequest {
    image: File;
}

export interface StockAnalysisResponse {
    insights: string[];
    recommendations: string[];
}

export interface PricingPlan {
    title: string;
    price: string;
    details: string;
}