export const faqCategories = [
  "product",
  "usage",
  "pricing",
  "security",
  "support",
] as const;

export type FaqCategory = (typeof faqCategories)[number];

export type FaqItem = {
  q: string;
  a: string;
};

export type FaqSection = {
  title: string;
  items: FaqItem[];
};

export type Faqs = Record<FaqCategory, FaqSection>;
