/**
 * Common TypeScript type definitions for IoTRealm
 */

import type { CollectionEntry } from 'astro:content';

// Generic image type for Astro assets
export type ImageAsset = any; // TODO: Replace with proper Astro image type when available

// Service card variant types
export type ServiceVariant = 1 | 2 | 3;

// Common component prop types
export interface BaseComponentProps {
  className?: string;
  id?: string;
}

// Service-related types
export interface Service {
  index: ServiceVariant;
  titleTop: string;
  titleBottom: string;
  img: ImageAsset;
  alt: string;
  link: string;
}

// Team member types
export interface TeamMember {
  pic: ImageAsset;
  name: string;
  role: string;
  description: string;
  link: string;
}

// FAQ/Accordion types
export interface AccordionItem {
  index: number;
  title: string;
  description: string;
}

// Section props
export interface SectionProps extends BaseComponentProps {
  sectionTitle: string;
  description: string;
}

// Blog/Article types
export type BlogPost = CollectionEntry<'blog'>;

export interface ArticleCardProps {
  article: BlogPost;
}

// Navigation types
export interface NavItem {
  label: string;
  href: string;
  target?: '_blank' | '_self';
}

// Pricing tier types
export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  highlighted?: boolean;
  link: string;
}