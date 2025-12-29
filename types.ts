
export interface MarketingStrategy {
  headline: string;
  slogan: string;
  keyPoints: string[];
  targetAudience: string;
  channelSuggestions: string[];
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}
