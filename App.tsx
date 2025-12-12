import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import ImpactMetrics from './components/ImpactMetrics';
import FeaturedWorks from './components/FeaturedWorks';
import CaseStudies from './components/CaseStudies';
import Experience from './components/Experience';
import SkillsGraph from './components/SkillsGraph';
import Contact from './components/Contact';
import CaseStudyDetailView from './components/CaseStudyDetail';
import { CASE_STUDIES } from './constants';

function App() {
  const [view, setView] = useState<'home' | 'case-study'>('home');
  const [activeCaseStudyId, setActiveCaseStudyId] = useState<string | null>(null);

  // Handle scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view, activeCaseStudyId]);

  const handleCaseStudySelect = (id: string) => {
    setActiveCaseStudyId(id);
    setView('case-study');
  };

  const handleBackToHome = () => {
    setView('home');
    setActiveCaseStudyId(null);
  };

  if (view === 'case-study' && activeCaseStudyId) {
    const studyData = CASE_STUDIES.find(cs => cs.id === activeCaseStudyId);
    if (studyData) {
      return (
        <CaseStudyDetailView 
          data={studyData} 
          onBack={handleBackToHome} 
        />
      );
    }
  }

  return (
    <Layout>
      <Hero />
      <ImpactMetrics />
      <FeaturedWorks />
      <CaseStudies onSelect={handleCaseStudySelect} />
      <Experience />
      <SkillsGraph />
      <Contact />
    </Layout>
  );
}

export default App;