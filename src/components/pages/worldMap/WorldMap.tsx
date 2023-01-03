import React, { useState, useEffect, useRef } from 'react';
import './WorldMap.scss';
import countryData from './countryData.json';
import rd3 from 'react-d3-library';
import { select, json, geoPath, geoMercator, geoEquirectangular, geoNaturalEarth1, geoOrthographic, zoom, scaleOrdinal, schemePastel2 } from 'd3';
import { feature } from 'topojson';

function WorldMap() {
  // const projection = geoMercator();
  const projection = geoEquirectangular();
  // const projection = geoNaturalEarth1();
  const pathGenerator = geoPath().projection(projection);
  const countries = feature(countryData, countryData.objects.countries);
  const palette = ['#0B1026', '#2E3038', '#464a5c', '#5c5c5c', '#434448', '#302F39', '#232039', '#1f1e24'];
  const [data, setData] = useState(countries.features);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = select(svgRef.current);
    // const g = svg.append('g');
    const colorScale = scaleOrdinal(palette);

    //Join data and draw svg path
    svg
      .selectAll('path')
      .data(data)
      .join('path')
      .attr('class', 'country')
      .attr('d', pathGenerator)
      .attr('fill', (d: any) => colorScale(d.properties.name))
      .append('title') // Add a tooltop
      .text((d: any) => d.properties.name);

    // svg
    //   .append('path')
    //   .attr('class', 'sphere')
    //   .attr('d', pathGenerator({ type: 'sphere' }))
    //   .selectAll('path')
    //   .data(data)
    //   .attr('d', pathGenerator);

    // svg.call(
    //   zoom().on('zoom', ({ transform }: any) => {
    //     svg.attr('transform', transform);
    //   })
    // );
  }, [data]);

  return (
    <>
      <svg ref={svgRef} viewBox='-45 -25 1080 480'></svg>
    </>
  );
}

export default WorldMap;
