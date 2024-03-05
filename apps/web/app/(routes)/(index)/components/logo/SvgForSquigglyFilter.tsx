export default function SvgForSquigglyFilter() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none", height: 0, width: 0 }}>
      <filter id="squiggly-0">
        <feTurbulence
          id="turbulence"
          baseFrequency="0.005"
          numOctaves="2"
          result="noise"
          seed="0"
        />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
      </filter>
      <filter id="squiggly-1">
        <feTurbulence
          id="turbulence"
          baseFrequency="0.005"
          numOctaves="2"
          result="noise"
          seed="1"
        />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
      </filter>
      <filter id="squiggly-2">
        <feTurbulence
          id="turbulence"
          baseFrequency="0.005"
          numOctaves="2"
          result="noise"
          seed="2"
        />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
      </filter>
      <filter id="squiggly-3">
        <feTurbulence
          id="turbulence"
          baseFrequency="0.005"
          numOctaves="2"
          result="noise"
          seed="3"
        />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
      </filter>
      <filter id="squiggly-4">
        <feTurbulence
          id="turbulence"
          baseFrequency="0.005"
          numOctaves="2"
          result="noise"
          seed="4"
        />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
      </filter>
    </svg>
  );
}
