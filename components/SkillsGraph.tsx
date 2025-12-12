import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { SKILL_TAGS } from '../constants';
import { SkillNode } from '../types';

interface Point extends SkillNode {
  x: number;
  y: number;
  z: number;
  projectedX?: number;
  projectedY?: number;
  projectedScale?: number;
}

const SkillsGraph: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = 600;

    // Clear previous
    d3.select(svgRef.current).selectAll("*").remove();

    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .style("background", "transparent");

    // Monochrome/Earth Tone Palette
    const color = d3.scaleOrdinal<number, string>()
      .domain([1, 2, 3, 4])
      .range(["#111111", "#4A4A4A", "#888888", "#2563EB"]); 
      // 1: Black, 2: Dark Gray, 3: Light Gray, 4: Accent Blue

    // Configuration
    const sphereRadius = Math.min(width, height) / 2.8;
    const pointsCount = SKILL_TAGS.length;
    const goldenRatio = (1 + Math.sqrt(5)) / 2;

    // Generate Points on a Fibonacci Sphere
    let points: Point[] = SKILL_TAGS.map((tag, i) => {
      const theta = 2 * Math.PI * i / goldenRatio;
      const phi = Math.acos(1 - 2 * (i + 0.5) / pointsCount);
      
      return {
        ...tag,
        x: sphereRadius * Math.sin(phi) * Math.cos(theta),
        y: sphereRadius * Math.sin(phi) * Math.sin(theta),
        z: sphereRadius * Math.cos(phi)
      };
    });

    let angleX = 0;
    let angleY = 0;
    const baseRotationSpeed = 0.002;
    let mouseX = 0;
    let mouseY = 0;
    let isDragging = false;
    let lastMouseX = 0;
    let lastMouseY = 0;

    const group = svg.append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    // Mouse Interaction
    d3.select(containerRef.current)
      .on("mousedown", (event) => {
        isDragging = true;
        lastMouseX = event.clientX;
        lastMouseY = event.clientY;
      })
      .on("mousemove", (event) => {
        if (isDragging) {
          const deltaX = event.clientX - lastMouseX;
          const deltaY = event.clientY - lastMouseY;
          angleY += deltaX * 0.005;
          angleX -= deltaY * 0.005;
          lastMouseX = event.clientX;
          lastMouseY = event.clientY;
        } else {
          // Subtle parallax on hover
          const rect = containerRef.current!.getBoundingClientRect();
          mouseX = (event.clientX - rect.left - width/2) * 0.0001;
          mouseY = (event.clientY - rect.top - height/2) * 0.0001;
        }
      })
      .on("mouseup", () => { isDragging = false; })
      .on("mouseleave", () => { isDragging = false; });

    const animate = () => {
      // Rotation logic
      if (!isDragging) {
        angleY += baseRotationSpeed;
        angleX += (mouseY - angleX) * 0.05;
        angleY += (mouseX) * 0.05;
      }

      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      // Project 3D points to 2D
      points.forEach(p => {
        // Rotate Y
        let x1 = p.x * cosY - p.z * sinY;
        let z1 = p.z * cosY + p.x * sinY;
        
        // Rotate X
        let y1 = p.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.y * sinX;

        // Perspective projection
        const focalLength = 400;
        const scale = focalLength / (focalLength - z2);
        
        p.projectedX = x1 * scale;
        p.projectedY = y1 * scale;
        p.projectedScale = scale;
        p.z = z2; // Store for sorting
      });

      // Sort by Z for occlusion
      points.sort((a, b) => b.z - a.z);

      // Render items
      const updateGroups = group.selectAll(".skill-node")
        .data(points, (d: any) => d.id);

      const enterGroups = updateGroups.enter()
        .append("g")
        .attr("class", "skill-node")
        .style("cursor", "pointer");

      enterGroups.append("circle")
        .attr("fill", (d) => color(d.group))
        .attr("stroke", "transparent")
        .attr("opacity", 0.8);

      enterGroups.append("text")
        .attr("text-anchor", "middle")
        .attr("fill", "#111111")
        .style("font-family", "Inter, sans-serif")
        .style("font-weight", "500")
        .style("pointer-events", "none")
        .text((d) => d.id);

      // Update positions and visual properties
      updateGroups.merge(enterGroups as any)
        .attr("transform", (d: Point) => `translate(${d.projectedX}, ${d.projectedY})`)
        .attr("opacity", (d: Point) => {
          // Fade out items in the back
          const zNorm = (d.z + sphereRadius) / (2 * sphereRadius);
          return 0.1 + 0.9 * zNorm;
        });

      updateGroups.merge(enterGroups as any).select("circle")
        .attr("r", (d: Point) => {
            const baseR = d.radius / 2;
            return Math.max(3, baseR * (d.projectedScale || 1));
        });
      
      updateGroups.merge(enterGroups as any).select("text")
        .attr("dy", (d: Point) => ((d.radius/2) * (d.projectedScale || 1)) + 12)
        .style("font-size", (d: Point) => `${Math.max(10, (d.radius / 2.5) * (d.projectedScale || 1))}px`);

      updateGroups.exit().remove();

      requestRef.current = requestAnimationFrame(animate);
    };

    requestRef.current = requestAnimationFrame(animate);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <section id="skills" className="py-20 px-6 bg-zinc-100 border-b border-line overflow-hidden">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/3 mb-10 md:mb-0 pr-0 md:pr-10 z-10">
          <span className="text-xs font-bold uppercase tracking-widest text-graphite mb-4 block">04 — Skills</span>
          <h2 className="text-4xl font-serif font-medium text-ink mb-6">Capabilities <br /> <span className="italic text-graphite">Ecosystem</span></h2>
          <p className="text-graphite mb-8 font-light">
            My skillset bridges the gap between technical execution and strategic vision.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#111111]"></span>
              <span className="text-ink text-sm">Strategy & Execution</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#4A4A4A]"></span>
              <span className="text-ink text-sm">Technical (AI/Code)</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#888888]"></span>
              <span className="text-ink text-sm">Analytics Tools</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-[#2563EB]"></span>
              <span className="text-ink text-sm">Research & Leadership</span>
            </div>
          </div>
        </div>
        
        <div className="md:w-2/3 w-full h-[600px] relative" ref={containerRef}>
          <svg ref={svgRef} className="w-full h-full cursor-move"></svg>
        </div>
      </div>
    </section>
  );
};

export default SkillsGraph;