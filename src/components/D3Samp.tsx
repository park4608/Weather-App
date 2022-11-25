import React, { useRef, useEffect, useState } from 'react';
import { select, json, geoPath, geoMercator, zoom } from 'd3';
import { feature } from 'topojson';

function D3Samp() {
  const [data, setData] = useState([25, 30, 45, 60, 20]);
  const svgRef = useRef<SVGSVGElement>(null);
  console.log(svgRef);

  useEffect(() => {
    // console.log(svgRef);
    const svg = select(svgRef.current);
    console.log(
      svg
        .selectAll('circle')
        .data(data)
        .join('circle')
        .attr('r', (value: number) => value)
        .attr('cx', (value: number) => value * 2)
        .attr('cy', (value: number) => value * 2)
        .attr('stroke', 'blue')
        .attr('width', 800)
        .attr('height', 200)
    );
  }, [data]);

  return (
    <>
      <svg ref={svgRef}></svg>
      <br />
      <button
        onClick={() => {
          setData(data.map((value) => value + 5));
        }}>
        update
      </button>
      <button
        onClick={() => {
          setData(data.filter((value) => value <= 35));
        }}>
        filter
      </button>
    </>
  );
}

export default D3Samp;
