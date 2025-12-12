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
  description?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  summary: string;
}

export interface ContentSection {
  type: 'text' | 'list' | 'highlight' | 'metric-grid';
  heading?: string;
  content?: string;
  items?: string[];
}

export interface CaseStudyDetail extends CaseStudy {
  role: string;
  focus: string;
  scope: string;
  sections: ContentSection[];
}