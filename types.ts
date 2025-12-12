export interface Job {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  metrics?: { label: string; value: string; detail: string }[];
  tags: string[];
}

export interface SkillNode {
  id: string;
  group: number;
  radius: number;
}

export interface MetricData {
  name: string;
  before: number;
  after: number;
  label: string;
}

export interface NavigationItem {
  label: string;
  id: string;
}

export interface WorkItem {
  title: string;
  category: string;
  tags: string[];
  image?: string;
  androidLink?: string;
  iosLink?: string;
  webLink?: string;
}

export interface CaseStudy {
  title: string;
  category: string;
  summary: string;
  link: string;
}