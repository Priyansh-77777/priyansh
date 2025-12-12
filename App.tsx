import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import ImpactMetrics from './components/ImpactMetrics';
import FeaturedWorks from './components/FeaturedWorks';
import Experience from './components/Experience';
import SkillsGraph from './components/SkillsGraph';
import Contact from './components/Contact';

function App() {
  return (
    <Layout>
      <Hero />
      <ImpactMetrics />
      <FeaturedWorks />
      <Experience />
      <SkillsGraph />
      <Contact />
    </Layout>
  );
}

export default App;