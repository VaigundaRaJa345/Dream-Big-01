import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  path: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  details: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  result: string;
  description: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix: string;
}
