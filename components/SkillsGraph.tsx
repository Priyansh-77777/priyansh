import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { SKILL_TAGS } from '../constants';
import { SkillNode } from '../types';

interface SimulationNode extends SkillNode {
  index?: number;
  x?: number;
  y?: number;
  vx?: number;
  vy?: number;
  fx?: number | null;
  fy?: number | null;
}

const SkillsGraph: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = 500;
    
    // Clear previous
    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height]);

    // Color scale based on groups
    const color = d3.scaleOrdinal<number, string>()
      .domain([1, 2, 3, 4])
      .range(["#3b82f6", "#8b5cf6", "#10b981", "#f59e0b"]);

    // Create simulation nodes
    const nodes: SimulationNode[] = SKILL_TAGS.map(d => ({ ...d }));

    const simulation = d3.forceSimulation<SimulationNode>(nodes)
      .force("charge", d3.forceManyBody().strength(5))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collide", d3.forceCollide().radius(d => d.radius + 5).iterations(2))
      .on("tick", ticked);

    const nodeGroup = svg.append("g")
      .selectAll("g")
      .data(nodes)
      .join("g")
      .attr("cursor", "grab")
      .call(drag(simulation) as any);

    // Circles
    nodeGroup.append("circle")
      .attr("r", d => d.radius)
      .attr("fill", d => color(d.group))
      .attr("opacity", 0.8)
      .attr("stroke", "#1e293b")
      .attr("stroke-width", 2);

    // Text Labels
    nodeGroup.append("text")
      .text(d => d.id)
      .attr("text-anchor", "middle")
      .attr("dy", ".35em")
      .attr("fill", "#fff")
      .attr("font-size", d => Math.max(10, d.radius / 2.5))
      .attr("font-weight", "500")
      .attr("pointer-events", "none");

    function ticked() {
      nodeGroup.attr("transform", d => `translate(${d.x || 0},${d.y || 0})`);
    }

    // Drag behavior
    function drag(sim: d3.Simulation<SimulationNode, undefined>) {
      function dragstarted(event: any, d: SimulationNode) {
        if (!event.active) sim.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
        d3.select(event.sourceEvent.target).attr("cursor", "grabbing");
      }

      function dragged(event: any, d: SimulationNode) {
        d.fx = event.x;
        d.fy = event.y;
      }

      function dragended(event: any, d: SimulationNode) {
        if (!event.active) sim.alphaTarget(0);
        d.fx = null;
        d.fy = null;
        d3.select(event.sourceEvent.target).attr("cursor", "grab");
      }

      return d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
    }

    return () => {
      simulation.stop();
    };
  }, []);

  return (
    <section id="skills" className="py-20 px-6 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 mb-10 md:mb-0 pr-0 md:pr-10">
          <h2 className="text-3xl font-bold text-white mb-6">Skills Ecosystem</h2>
          <p className="text-slate-400 mb-6">
            A blend of product strategy, technical fluency, and data-driven execution. 
            I bridge the gap between engineering, design, and business goals.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-blue-500"></span>
              <span className="text-slate-300">Strategy & Execution</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-purple-500"></span>
              <span className="text-slate-300">Technical (AI/Code)</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
              <span className="text-slate-300">Analytics Tools</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-amber-500"></span>
              <span className="text-slate-300">Research & Leadership</span>
            </div>
          </div>
        </div>
        
        <div className="md:w-2/3 w-full bg-slate-800/30 rounded-2xl border border-slate-700 relative" ref={containerRef}>
          <div className="absolute top-4 right-4 text-xs text-slate-500">Interactive Visual</div>
          <svg ref={svgRef} className="w-full h-full min-h-[500px]"></svg>
        </div>
      </div>
    </section>
  );
};

export default SkillsGraph;