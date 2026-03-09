const block1Data = {
  id: 1,
  name: "Блок 1",
  svg: `<svg width="505" height="964" viewBox="0 0 505 964" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.0093 899.734H5.00928H4.00928L2.00928 800.234L6.00928 792.234V372.234L54.5093 313.734V282.234L58.5093 275.234L72.5093 261.734L94.5093 266.234L266.009 52.2344L291.509 57.2344L337.009 2.23438L391.509 15.2344L481.009 102.734L499.009 107.734L490.009 119.734V179.234H494.509V516.734L502.509 520.234V620.234L271.509 919.734H259.009L220.509 960.734L194.509 951.734L145.509 937.734H129.509L117.509 934.234H108.009L103.009 930.234L99.5093 919.734L63.5093 911.734H49.0093L40.5093 905.734L17.0093 899.734Z" fill="#FF6A00" fill-opacity="0.1" stroke="#FF6A00" stroke-width="4"/>
        </svg>`,
  class: "blocks_svg block1_svg",
  startFloor: 3,
  floors: [
    {
      floor: 3,
      svg: `<svg width="1328" height="75" viewBox="0 0 1328 75" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1133.07 72.1063H2V46.5825H14.4953V9.60632L1133.07 12.1063L1326 2.10632V60.6063L1133.07 72.1063Z" fill="#FF6A00" fill-opacity="0.1" stroke="#FF6A00" stroke-width="4"/>
</svg>

`,
      entrances: {
        r1: [
          {
            apartment: 1,
            svg: `<svg width="249" height="230" viewBox="0 0 249 230" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M248.15 43.02V229.01H5.97998V8.08H0V5H6.40002V0H14.4V8L17.3099 19.16H78.47L79.98 16.14H83.98L85.5699 19.16H145.45L146.49 17.09H151.04V19.16H243.58V30.82H243.7L243.74 30.94L248.15 43.02Z" fill="#FF6A00" fill-opacity="0.5"/>
</svg>
`,
            top: "210px",
            left: "790px",
            width: "180px",
          },
          {
            apartment: 2,
            svg: `<svg width="171" height="211" viewBox="0 0 171 211" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M170 0H0V183.64H10.01V200.6L5.07996 209.03H166.64L167.25 210.03H170.01L170 0.0100098V0ZM75.89 181.81L75.84 181.72L76.22 181.81H75.89Z" fill="#FF6A00" fill-opacity="0.5"/>
</svg>
`,
          },
          {
            apartment: 3,
            svg: `<svg width="168" height="213" viewBox="0 0 168 213" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M167.49 184.17V201.01L167.42 201.12L160.94 212.19H156.4L153.84 209.38H84.21L82.72 212.19H78.52L78.47 212.16L74.2299 209.38H15.27L14.22 212.19H12.69L10.06 202.38H0V0H157.3V184L167.49 184.17Z" fill="#FF6A00" fill-opacity="0.5"/>
</svg>
`,
          },
          {
            apartment: 4,
            svg: `<svg width="167" height="213" viewBox="0 0 167 213" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M166.69 0V202.38H157.22L154.59 212.19H153.06L152.34 210.56H91.28L90.97 210.76L88.8 212.19H84.59L83.61 210.56H10.84L8.96997 212.19H4.59998L0 204.52V182.17H3.98999V0H166.69Z" fill="#FF6A00" fill-opacity="0.5"/>
</svg>
`,
          },
          {
            apartment: 5,
            svg: `<svg width="137" height="251" viewBox="0 0 137 251" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M137 40.73V222.9H133.01V224.72V244.92L136.13 250.11H0.5V231.02H0V0H109.22V40.73H137Z" fill="#FF6A00" fill-opacity="0.5"/>
</svg>
`,
          },
          {
            apartment: 6,
            svg: `<svg width="222" height="229" viewBox="0 0 222 229" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M222 5V8H220.16V229L0 228.27V47.48L5.45996 45V28.04L1.13 19.15H67.49L69.01 16.11H73.01L74.53 19.15H136.48L138 16.11H142L143.52 19.15H204.33L207.6 8V0H215.6V5H222Z" fill="#FF6A00" fill-opacity="0.5"/>
</svg>
`,
          },
        ],
        r2: [
          {
            apartment: 1,
            svg: `<svg width="170" height="473" viewBox="0 0 170 473" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M169.46 22.05V39.01L164 41.49V453.12H163.5V472.39H5.89996L11 463.96V445.1V446.83H4.5V247.71H0V42.97H8V0H10.92L13.93 13.16H157.99L159.5 10.12H163.5V10.13L169.46 22.05Z" fill="#FF6A00" fill-opacity="0.5"/>
</svg>
`,
          },
          {
            apartment: 2,
            svg: `<svg width="167" height="228" viewBox="0 0 167 228" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M166.17 199.12V216.31L166.15 216.35L166 216.6L159.4 227.49H155.03L154.98 227.45L152.1 224.68H81.09L79.4 227.49H75.19L75.15 227.46L71.69 224.68H14.16L12.92 227.49H11.39L8.75998 217.68H0V170.3H2V15.3H42V6.30002H90V15.3H155V0H159.5V199.12H166.17Z" fill="#FF6A00" fill-opacity="0.5"/>
</svg>
`,
          },
          {
            apartment: 3,
            svg: `<svg width="297" height="264" viewBox="0 0 297 264" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M296.4 5.22V206.19H294.4V253.57H285.63L283 263.38H281.47L280.23 260.57H226.02L223.21 263.38H218.98L217.27 260.54L158.45 260.57L155.37 263.38H151L146.23 255.43V235.01H146.4V227.24H6.66L0 223.14V5.20999L56.83 5.22V5.00998H55.83V2.72998L65.12 0H67.4V5.22H296.4Z" fill="#FF6A00" fill-opacity="0.5"/>
</svg>
`,
          },
          {
            apartment: 4,
            svg: `<svg width="267" height="233" viewBox="0 0 267 233" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M266.4 177V232.03H37.4V226.98H35.12L26 229.67V231H0V18.03H11.4V0H66.4V15H259.82V177H266.4Z" fill="#FF6A00" fill-opacity="0.5"/>
</svg>
`,
          },
        ],
      },
    },
    {
      floor: 4,
      svg: `<svg width="1300" height="72" viewBox="0 0 1300 72" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 6.04535V66.0453V67.5453L1119.5 69.5453L1298 60.5453V2.04535L1119.5 6.04535H2Z" fill="#FF6A00" fill-opacity="0.1" stroke="#FF6A00" stroke-width="4"/>
</svg>
`,
      entrances: {
        r1: [
          { apartment: 7, svg: "/svg/blocks/block-1/floors/4/r1/7.svg" },
          { apartment: 8, svg: "/svg/blocks/block-1/floors/4/r1/8.svg" },
          { apartment: 9, svg: "/svg/blocks/block-1/floors/4/r1/9.svg" },
          { apartment: 10, svg: "/svg/blocks/block-1/floors/4/r1/10.svg" },
          { apartment: 11, svg: "/svg/blocks/block-1/floors/4/r1/11.svg" },
          { apartment: 12, svg: "/svg/blocks/block-1/floors/4/r1/12.svg" },
        ],
        r2: [
          { apartment: 5, svg: "/svg/blocks/block-1/floors/4/r2/5.svg" },
          { apartment: 6, svg: "/svg/blocks/block-1/floors/4/r2/6.svg" },
          { apartment: 7, svg: "/svg/blocks/block-1/floors/4/r2/7.svg" },
          { apartment: 8, svg: "/svg/blocks/block-1/floors/4/r2/8.svg" },
        ],
      },
    },
    {
      floor: 5,
      svg: `<svg width="1300" height="72" viewBox="0 0 1300 72" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 6.04535V66.0453V67.5453L1119.5 69.5453L1298 60.5453V2.04535L1119.5 6.04535H2Z" fill="#FF6A00" fill-opacity="0.1" stroke="#FF6A00" stroke-width="4"/>
</svg>
`,
      entrances: {
        r1: [
          { apartment: 13, svg: "/svg/blocks/block-1/floors/5/r1/13.svg" },
          { apartment: 14, svg: "/svg/blocks/block-1/floors/5/r1/14.svg" },
          { apartment: 15, svg: "/svg/blocks/block-1/floors/5/r1/15.svg" },
          { apartment: 16, svg: "/svg/blocks/block-1/floors/5/r1/16.svg" },
          { apartment: 17, svg: "/svg/blocks/block-1/floors/5/r1/17.svg" },
          { apartment: 18, svg: "/svg/blocks/block-1/floors/5/r1/18.svg" },
        ],
        r2: [
          { apartment: 9, svg: "/svg/blocks/block-1/floors/5/r2/9.svg" },
          { apartment: 10, svg: "/svg/blocks/block-1/floors/5/r2/10.svg" },
          { apartment: 11, svg: "/svg/blocks/block-1/floors/5/r2/11.svg" },
          { apartment: 12, svg: "/svg/blocks/block-1/floors/5/r2/12.svg" },
        ],
      },
    },
    {
      floor: 6,
      svg: `<svg width="1300" height="77" viewBox="0 0 1300 77" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 2.02869V69.5287V73.0287L1122.5 74.5287L1298 71.5287V2.02869L1122.5 4.52869L2 2.02869Z" fill="#FF6A00" fill-opacity="0.1" stroke="#FF6A00" stroke-width="4"/>
</svg>

`,
      entrances: {
        r1: [
          { apartment: 19, svg: "/svg/blocks/block-1/floors/6/r1/19.svg" },
          { apartment: 20, svg: "/svg/blocks/block-1/floors/6/r1/20.svg" },
          { apartment: 21, svg: "/svg/blocks/block-1/floors/6/r1/21.svg" },
          { apartment: 22, svg: "/svg/blocks/block-1/floors/6/r1/22.svg" },
          { apartment: 23, svg: "/svg/blocks/block-1/floors/6/r1/23.svg" },
          { apartment: 24, svg: "/svg/blocks/block-1/floors/6/r1/24.svg" },
        ],
        r2: [
          { apartment: 13, svg: "/svg/blocks/block-1/floors/6/r2/13.svg" },
          { apartment: 14, svg: "/svg/blocks/block-1/floors/6/r2/14.svg" },
          { apartment: 15, svg: "/svg/blocks/block-1/floors/6/r2/15.svg" },
          { apartment: 16, svg: "/svg/blocks/block-1/floors/6/r2/16.svg" },
        ],
      },
    },
    {
      floor: 7,
      svg: `<svg width="1300" height="67" viewBox="0 0 1300 67" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 2.00391V60.6591V63.7005L1122.5 65.0039L1298 62.397V6.50391L1122.5 4.17632L2 2.00391Z" fill="#FF6A00" fill-opacity="0.1" stroke="#FF6A00" stroke-width="4"/>
</svg>

`,
      entrances: {
        r1: [
          { apartment: 25, svg: "/svg/blocks/block-1/floors/7/r1/25.svg" },
          { apartment: 26, svg: "/svg/blocks/block-1/floors/7/r1/26.svg" },
          { apartment: 27, svg: "/svg/blocks/block-1/floors/7/r1/27.svg" },
          { apartment: 28, svg: "/svg/blocks/block-1/floors/7/r1/28.svg" },
          { apartment: 29, svg: "/svg/blocks/block-1/floors/7/r1/29.svg" },
          { apartment: 30, svg: "/svg/blocks/block-1/floors/7/r1/30.svg" },
        ],
        r2: [
          { apartment: 17, svg: "/svg/blocks/block-1/floors/7/r2/17.svg" },
          { apartment: 18, svg: "/svg/blocks/block-1/floors/7/r2/18.svg" },
          { apartment: 19, svg: "/svg/blocks/block-1/floors/7/r2/19.svg" },
          { apartment: 20, svg: "/svg/blocks/block-1/floors/7/r2/20.svg" },
        ],
      },
    },
    {
      floor: 8,
      svg: `<svg width="1300" height="70" viewBox="0 0 1300 70" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 2.00391V60.6591V63.7005L1122.5 65.0039L1298 67.0039V11.5039L1122.5 4.17632L2 2.00391Z" fill="#FF6A00" fill-opacity="0.1" stroke="#FF6A00" stroke-width="4"/>
</svg>
`,
      entrances: {
        r1: [
          { apartment: 31, svg: "/svg/blocks/block-1/floors/8/r1/31.svg" },
          { apartment: 32, svg: "/svg/blocks/block-1/floors/8/r1/32.svg" },
          { apartment: 33, svg: "/svg/blocks/block-1/floors/8/r1/33.svg" },
          { apartment: 34, svg: "/svg/blocks/block-1/floors/8/r1/34.svg" },
          { apartment: 35, svg: "/svg/blocks/block-1/floors/8/r1/35.svg" },
          { apartment: 36, svg: "/svg/blocks/block-1/floors/8/r1/36.svg" },
        ],
        r2: [
          { apartment: 21, svg: "/svg/blocks/block-1/floors/8/r2/21.svg" },
          { apartment: 22, svg: "/svg/blocks/block-1/floors/8/r2/22.svg" },
          { apartment: 23, svg: "/svg/blocks/block-1/floors/8/r2/23.svg" },
          { apartment: 24, svg: "/svg/blocks/block-1/floors/8/r2/24.svg" },
        ],
      },
    },
    {
      floor: 9,
      svg: `<svg width="1300" height="83" viewBox="0 0 1300 83" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 2.00439V67.8787V71.2944L1122.5 72.7582L1298 80.5044V15.0044L1122.5 4.44418L2 2.00439Z" fill="#FF6A00" fill-opacity="0.1" stroke="#FF6A00" stroke-width="4"/>
</svg>
`,
      entrances: {
        r1: [
          { apartment: 37, svg: "/svg/blocks/block-1/floors/9/r1/37.svg" },
          { apartment: 38, svg: "/svg/blocks/block-1/floors/9/r1/38.svg" },
          { apartment: 39, svg: "/svg/blocks/block-1/floors/9/r1/39.svg" },
          { apartment: 40, svg: "/svg/blocks/block-1/floors/9/r1/40.svg" },
          { apartment: 41, svg: "/svg/blocks/block-1/floors/9/r1/41.svg" },
          { apartment: 42, svg: "/svg/blocks/block-1/floors/9/r1/42.svg" },
        ],
        r2: [
          { apartment: 25, svg: "/svg/blocks/block-1/floors/9/r2/25.svg" },
          { apartment: 26, svg: "/svg/blocks/block-1/floors/9/r2/26.svg" },
          { apartment: 27, svg: "/svg/blocks/block-1/floors/9/r2/27.svg" },
          { apartment: 28, svg: "/svg/blocks/block-1/floors/9/r2/28.svg" },
        ],
      },
    },
    {
      floor: 10,
      svg: `<svg width="1300" height="77" viewBox="0 0 1300 77" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 2.00378V59.0668V62.0257L1122.5 63.2937L1298 74.0038V18.5038L1122.5 4.11723L2 2.00378Z" fill="#FF6A00" fill-opacity="0.1" stroke="#FF6A00" stroke-width="4"/>
</svg>
`,
      entrances: {
        r1: [
          { apartment: 43, svg: "/svg/blocks/block-1/floors/10/r1/43.svg" },
          { apartment: 44, svg: "/svg/blocks/block-1/floors/10/r1/44.svg" },
          { apartment: 45, svg: "/svg/blocks/block-1/floors/10/r1/45.svg" },
          { apartment: 46, svg: "/svg/blocks/block-1/floors/10/r1/46.svg" },
          { apartment: 47, svg: "/svg/blocks/block-1/floors/10/r1/47.svg" },
          { apartment: 48, svg: "/svg/blocks/block-1/floors/10/r1/48.svg" },
        ],
        r2: [
          { apartment: 29, svg: "/svg/blocks/block-1/floors/10/r2/29.svg" },
          { apartment: 30, svg: "/svg/blocks/block-1/floors/10/r2/30.svg" },
          { apartment: 31, svg: "/svg/blocks/block-1/floors/10/r2/31.svg" },
          { apartment: 32, svg: "/svg/blocks/block-1/floors/10/r2/32.svg" },
        ],
      },
    },
    {
      floor: 11,
      svg: `<svg width="1300" height="95" viewBox="0 0 1300 95" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 2.00476V73.3336V77.0321L1122.5 78.6172L1298 92.0048V22.6298L1122.5 4.64657L2 2.00476Z" fill="#FF6A00" fill-opacity="0.1" stroke="#FF6A00" stroke-width="4"/>
</svg>

`,
      entrances: {
        r1: [
          { apartment: 49, svg: "/svg/blocks/block-1/floors/11/r1/49.svg" },
          { apartment: 50, svg: "/svg/blocks/block-1/floors/11/r1/50.svg" },
          { apartment: 51, svg: "/svg/blocks/block-1/floors/11/r1/51.svg" },
          { apartment: 52, svg: "/svg/blocks/block-1/floors/11/r1/52.svg" },
          { apartment: 53, svg: "/svg/blocks/block-1/floors/11/r1/53.svg" },
          { apartment: 54, svg: "/svg/blocks/block-1/floors/11/r1/54.svg" },
        ],
        r2: [
          { apartment: 33, svg: "/svg/blocks/block-1/floors/11/r2/33.svg" },
          { apartment: 34, svg: "/svg/blocks/block-1/floors/11/r2/34.svg" },
          { apartment: 35, svg: "/svg/blocks/block-1/floors/11/r2/35.svg" },
          { apartment: 36, svg: "/svg/blocks/block-1/floors/11/r2/36.svg" },
        ],
      },
    },
    {
      floor: 12,
      svg: `<svg width="1300" height="260" viewBox="0 0 1300 260" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 10.0015V232.706V236.001L1122 238.501L1298 257.001V37.5015L1122.5 2.00146L2 10.0015Z" fill="#FF6A00" fill-opacity="0.1" stroke="#FF6A00" stroke-width="4"/>
</svg>
`,
      entrances: {
        r1: [
          { apartment: 55, svg: "/svg/blocks/block-1/floors/12/r1/55.svg" },
          { apartment: 56, svg: "/svg/blocks/block-1/floors/12/r1/56.svg" },
        ],
        r2: [
          { apartment: 37, svg: "/svg/blocks/block-1/floors/12/r2/37.svg" },
          { apartment: 38, svg: "/svg/blocks/block-1/floors/12/r2/38.svg" },
        ],
      },
    },
  ],
};

const block2Data = {
  id: 2,
  name: "Блок 2",
  svg: `<svg width="499" height="826" viewBox="0 0 499 826" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.3413 131.755L24.8413 728.255L83.8413 746.255L86.3413 761.255H102.341L149.841 773.755L156.841 778.755L168.341 782.255L176.841 772.755L224.841 785.755L227.341 797.255L237.341 798.255H251.841L309.841 811.755L322.841 818.255L328.841 809.755H340.841L408.841 823.755L423.841 804.255L421.841 704.255L425.841 695.755V276.255L474.341 217.755V186.255L477.841 179.255V120.755L495.341 96.2552L459.841 87.2552L461.341 82.7552L389.841 64.7552L393.341 58.2552L374.841 54.7552L376.841 40.7552L284.841 19.7552L268.341 37.7552L211.841 24.2552L207.341 29.2552L105.341 2.25525L2.84131 122.255L14.3413 131.755Z" fill="#FF6A00" fill-opacity="0.1" stroke="#FF6A00" stroke-width="4"/>
</svg>

`,
  class: "blocks_svg block2_svg",
  startFloor: 3,
  floors: [
    {
      floor: 3,
      svg: `<svg width="679" height="63" viewBox="0 0 679 63" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M677 61H2V2H677V61Z" fill="#FF6A00" fill-opacity="0.1" stroke="#FF6A00" stroke-width="4"/>
</svg>
`,
      entrances: {
        r3: [
          { apartment: 1, svg: "/svg/blocks/block-2/floors/3/r3/1.svg" },
          { apartment: 2, svg: "/svg/blocks/block-2/floors/3/r3/2.svg" },
          { apartment: 3, svg: "/svg/blocks/block-2/floors/3/r3/3.svg" },
          { apartment: 4, svg: "/svg/blocks/block-2/floors/3/r3/4.svg" },
          { apartment: 5, svg: "/svg/blocks/block-2/floors/3/r3/5.svg" },
          { apartment: 6, svg: "/svg/blocks/block-2/floors/3/r3/6.svg" },
          { apartment: 7, svg: "/svg/blocks/block-2/floors/3/r3/7.svg" },
        ],
      },
    },
    {
      floor: 4,
      svg: `<svg width="679" height="71" viewBox="0 0 679 71" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M677 69H2V2H677V69Z" fill="#FF6A00" fill-opacity="0.1" stroke="#FF6A00" stroke-width="4"/>
</svg>
`,
      entrances: {
        r3: [
          { apartment: 8, svg: "/svg/blocks/block-2/floors/4/r3/8.svg" },
          { apartment: 9, svg: "/svg/blocks/block-2/floors/4/r3/9.svg" },
          { apartment: 10, svg: "/svg/blocks/block-2/floors/4/r3/10.svg" },
          { apartment: 11, svg: "/svg/blocks/block-2/floors/4/r3/11.svg" },
          { apartment: 12, svg: "/svg/blocks/block-2/floors/4/r3/12.svg" },
          { apartment: 13, svg: "/svg/blocks/block-2/floors/4/r3/13.svg" },
          { apartment: 14, svg: "/svg/blocks/block-2/floors/4/r3/14.svg" },
        ],
      },
    },
    {
      floor: 5,
      svg: `<svg width="679" height="63" viewBox="0 0 679 63" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M677 61H2V2H677V61Z" fill="#FF6A00" fill-opacity="0.1" stroke="#FF6A00" stroke-width="4"/>
</svg>
`,
      entrances: {
        r3: [
          { apartment: 15, svg: "/svg/blocks/block-2/floors/5/r3/15.svg" },
          { apartment: 16, svg: "/svg/blocks/block-2/floors/5/r3/16.svg" },
          { apartment: 17, svg: "/svg/blocks/block-2/floors/5/r3/17.svg" },
          { apartment: 18, svg: "/svg/blocks/block-2/floors/5/r3/18.svg" },
          { apartment: 19, svg: "/svg/blocks/block-2/floors/5/r3/19.svg" },
          { apartment: 20, svg: "/svg/blocks/block-2/floors/5/r3/20.svg" },
          { apartment: 21, svg: "/svg/blocks/block-2/floors/5/r3/21.svg" },
        ],
      },
    },
    {
      floor: 6,
      svg: `<svg width="679" height="72" viewBox="0 0 679 72" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M677 70H2V2H677V70Z" fill="#FF6A00" fill-opacity="0.1" stroke="#FF6A00" stroke-width="4"/>
</svg>
`,
      entrances: {
        r3: [
          { apartment: 22, svg: "/svg/blocks/block-2/floors/6/r3/22.svg" },
          { apartment: 23, svg: "/svg/blocks/block-2/floors/6/r3/23.svg" },
          { apartment: 24, svg: "/svg/blocks/block-2/floors/6/r3/24.svg" },
          { apartment: 25, svg: "/svg/blocks/block-2/floors/6/r3/25.svg" },
          { apartment: 26, svg: "/svg/blocks/block-2/floors/6/r3/26.svg" },
          { apartment: 27, svg: "/svg/blocks/block-2/floors/6/r3/27.svg" },
          { apartment: 28, svg: "/svg/blocks/block-2/floors/6/r3/28.svg" },
        ],
      },
    },
    {
      floor: 7,
      svg: `<svg width="679" height="63" viewBox="0 0 679 63" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M677 61H2V2H677V61Z" fill="#FF6A00" fill-opacity="0.1" stroke="#FF6A00" stroke-width="4"/>
</svg>
`,
      entrances: {
        r3: [
          { apartment: 29, svg: "/svg/blocks/block-2/floors/7/r3/29.svg" },
          { apartment: 30, svg: "/svg/blocks/block-2/floors/7/r3/30.svg" },
          { apartment: 31, svg: "/svg/blocks/block-2/floors/7/r3/31.svg" },
          { apartment: 32, svg: "/svg/blocks/block-2/floors/7/r3/32.svg" },
          { apartment: 33, svg: "/svg/blocks/block-2/floors/7/r3/33.svg" },
          { apartment: 34, svg: "/svg/blocks/block-2/floors/7/r3/34.svg" },
          { apartment: 35, svg: "/svg/blocks/block-2/floors/7/r3/35.svg" },
        ],
      },
    },
    {
      floor: 8,
      svg: `<svg width="679" height="69" viewBox="0 0 679 69" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M677 67H2V2H677V67Z" fill="#FF6A00" fill-opacity="0.1" stroke="#FF6A00" stroke-width="4"/>
</svg>
`,
      entrances: {
        r3: [
          { apartment: 36, svg: "/svg/blocks/block-2/floors/8/r3/36.svg" },
          { apartment: 37, svg: "/svg/blocks/block-2/floors/8/r3/37.svg" },
          { apartment: 38, svg: "/svg/blocks/block-2/floors/8/r3/38.svg" },
          { apartment: 39, svg: "/svg/blocks/block-2/floors/8/r3/39.svg" },
          { apartment: 40, svg: "/svg/blocks/block-2/floors/8/r3/40.svg" },
          { apartment: 41, svg: "/svg/blocks/block-2/floors/8/r3/41.svg" },
          { apartment: 42, svg: "/svg/blocks/block-2/floors/8/r3/42.svg" },
        ],
      },
    },
    {
      floor: 9,
      svg: `<svg width="679" height="64" viewBox="0 0 679 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M677 62H2V2H677V62Z" fill="#FF6A00" fill-opacity="0.1" stroke="#FF6A00" stroke-width="4"/>
</svg>
`,
      entrances: {
        r3: [
          { apartment: 43, svg: "/svg/blocks/block-2/floors/9/r3/43.svg" },
          { apartment: 44, svg: "/svg/blocks/block-2/floors/9/r3/44.svg" },
          { apartment: 45, svg: "/svg/blocks/block-2/floors/9/r3/45.svg" },
          { apartment: 46, svg: "/svg/blocks/block-2/floors/9/r3/46.svg" },
          { apartment: 47, svg: "/svg/blocks/block-2/floors/9/r3/47.svg" },
          { apartment: 48, svg: "/svg/blocks/block-2/floors/9/r3/48.svg" },
          { apartment: 49, svg: "/svg/blocks/block-2/floors/9/r3/49.svg" },
        ],
      },
    },
    {
      floor: 10,
      svg: `<svg width="679" height="67" viewBox="0 0 679 67" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M677 65H2V2H677V65Z" fill="#FF6A00" fill-opacity="0.1" stroke="#FF6A00" stroke-width="4"/>
</svg>
`,
      entrances: {
        r3: [
          { apartment: 50, svg: "/svg/blocks/block-2/floors/10/r3/50.svg" },
          { apartment: 51, svg: "/svg/blocks/block-2/floors/10/r3/51.svg" },
          { apartment: 52, svg: "/svg/blocks/block-2/floors/10/r3/52.svg" },
          { apartment: 53, svg: "/svg/blocks/block-2/floors/10/r3/53.svg" },
          { apartment: 54, svg: "/svg/blocks/block-2/floors/10/r3/54.svg" },
          { apartment: 55, svg: "/svg/blocks/block-2/floors/10/r3/55.svg" },
          { apartment: 56, svg: "/svg/blocks/block-2/floors/10/r3/56.svg" },
        ],
      },
    },
    {
      floor: 11,
      svg: `<svg width="679" height="69" viewBox="0 0 679 69" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M677 67H2V2H677V67Z" fill="#FF6A00" fill-opacity="0.1" stroke="#FF6A00" stroke-width="4"/>
</svg>
`,
      entrances: {
        r3: [
          { apartment: 57, svg: "/svg/blocks/block-2/floors/11/r3/57.svg" },
          { apartment: 58, svg: "/svg/blocks/block-2/floors/11/r3/58.svg" },
          { apartment: 59, svg: "/svg/blocks/block-2/floors/11/r3/59.svg" },
          { apartment: 60, svg: "/svg/blocks/block-2/floors/11/r3/60.svg" },
          { apartment: 61, svg: "/svg/blocks/block-2/floors/11/r3/61.svg" },
          { apartment: 62, svg: "/svg/blocks/block-2/floors/11/r3/62.svg" },
          { apartment: 63, svg: "/svg/blocks/block-2/floors/11/r3/63.svg" },
        ],
      },
    },
    {
      floor: 12,
      svg: `<svg width="679" height="63" viewBox="0 0 679 63" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M677 61H2V2H677V61Z" fill="#FF6A00" fill-opacity="0.1" stroke="#FF6A00" stroke-width="4"/>
</svg>
`,
      entrances: {
        r3: [
          { apartment: 64, svg: "/svg/blocks/block-2/floors/12/r3/64.svg" },
          { apartment: 65, svg: "/svg/blocks/block-2/floors/12/r3/65.svg" },
          { apartment: 66, svg: "/svg/blocks/block-2/floors/12/r3/66.svg" },
          { apartment: 67, svg: "/svg/blocks/block-2/floors/12/r3/67.svg" },
          { apartment: 68, svg: "/svg/blocks/block-2/floors/12/r3/68.svg" },
          { apartment: 69, svg: "/svg/blocks/block-2/floors/12/r3/69.svg" },
          { apartment: 70, svg: "/svg/blocks/block-2/floors/12/r3/70.svg" },
        ],
      },
    },
    {
      floor: 13,
      svg: `<svg width="679" height="74" viewBox="0 0 679 74" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M677 72H2V2H677V72Z" fill="#FF6A00" fill-opacity="0.1" stroke="#FF6A00" stroke-width="4"/>
</svg>

`,
      entrances: {
        r3: [
          { apartment: 71, svg: "/svg/blocks/block-2/floors/13/r3/71.svg" },
          { apartment: 72, svg: "/svg/blocks/block-2/floors/13/r3/72.svg" },
          { apartment: 73, svg: "/svg/blocks/block-2/floors/13/r3/73.svg" },
          { apartment: 74, svg: "/svg/blocks/block-2/floors/13/r3/74.svg" },
          { apartment: 75, svg: null, unavailable: true },
          { apartment: 76, svg: "/svg/blocks/block-2/floors/13/r3/76.svg" },
          { apartment: 77, svg: "/svg/blocks/block-2/floors/13/r3/77.svg" },
        ],
      },
    },
    {
      floor: 14,
      svg: `<svg width="679" height="63" viewBox="0 0 679 63" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M677 61H2V2H677V61Z" fill="#FF6A00" fill-opacity="0.1" stroke="#FF6A00" stroke-width="4"/>
</svg>
`,
      entrances: {
        r3: [
          { apartment: 78, svg: "/svg/blocks/block-2/floors/14/r3/78.svg" },
          { apartment: 79, svg: "/svg/blocks/block-2/floors/14/r3/79.svg" },
          { apartment: 80, svg: "/svg/blocks/block-2/floors/14/r3/80.svg" },
          { apartment: 81, svg: "/svg/blocks/block-2/floors/14/r3/81.svg" },
          { apartment: 82, svg: "/svg/blocks/block-2/floors/14/r3/82.svg" },
          { apartment: 83, svg: "/svg/blocks/block-2/floors/14/r3/83.svg" },
          { apartment: 84, svg: "/svg/blocks/block-2/floors/14/r3/84.svg" },
        ],
      },
    },
    {
      floor: 15,
      svg: `<svg width="679" height="232" viewBox="0 0 679 232" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M677 230H2V2H677V230Z" fill="#FF6A00" fill-opacity="0.1" stroke="#FF6A00" stroke-width="4"/>
</svg>

`,
      entrances: {
        r3: [
          { apartment: 85, svg: "/svg/blocks/block-2/floors/15/r3/85.svg" },
          { apartment: 86, svg: "/svg/blocks/block-2/floors/15/r3/86.svg" },
        ],
      },
    },
  ],
};

const block3Data = {
  id: 3,
  name: "Блок 3",
  svg: `<svg width="385" height="855" viewBox="0 0 385 855" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M304.81 159.509L231.31 244.509L201.31 280.509L212.81 290.509L222.31 852.009L204.81 850.009L192.81 852.009L187.31 850.009L180.81 844.509L147.31 837.509L126.81 846.009L121.81 843.009L116.81 837.509L106.31 835.509L103.81 837.509H93.3101L86.8101 835.509L83.8101 829.509L38.3101 818.509L27.3101 821.509L10.8101 818.509L8.31006 721.009H3.81006V718.509L29.8101 687.009V680.009L21.3101 675.009L22.3101 660.509L27.8101 650.509L19.8101 645.509L21.3101 626.509L27.8101 619.009V615.009L18.8101 610.509V595.509L25.8101 585.009L17.8101 579.509L20.3101 562.509L25.8101 549.509L16.8101 543.009L18.8101 529.509L25.8101 519.509L15.8101 515.009L17.8101 495.009L25.8101 483.009L15.8101 478.509L16.8101 462.009L23.3101 453.509L15.8101 448.509V428.009L23.3101 422.509V416.509L13.8101 412.009L15.8101 396.509L20.8101 386.509L12.3101 383.509V372.009L20.8101 357.009V350.509L12.3101 345.509V331.009L18.8101 320.009L12.3101 316.509V297.509L18.8101 289.509V280.509L5.31006 277.009V268.509L12.3101 258.509V206.009L2.81006 198.009L15.3101 183.009V168.509L9.81006 165.509L124.81 35.0093H142.81L171.81 2.50928L178.31 6.00928L378.81 52.5093L380.31 122.009H382.31V130.509L378.81 134.509V180.509L311.81 162.009L304.81 159.509Z" fill="#FF6A00" fill-opacity="0.1" stroke="#FF6A00" stroke-width="4"/>
</svg>
`,
  class: "blocks_svg block3_svg",
  startFloor: 3,
  floors: [
    {
      floor: 3,
      svg: `<svg width="596" height="58" viewBox="0 0 596 58" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M594 56H2V2H557.5V33.4563H594V56Z" fill="#FF6A00" fill-opacity="0.1" stroke="#FF6A00" stroke-width="4"/>
</svg>
`,
      entrances: {
        r4: [
          { apartment: 1, svg: "/svg/blocks/block-3/floors/3/r4/1.svg" },
          { apartment: 2, svg: "/svg/blocks/block-3/floors/3/r4/2.svg" },
          { apartment: 3, svg: "/svg/blocks/block-3/floors/3/r4/3.svg" },
          { apartment: 4, svg: "/svg/blocks/block-3/floors/3/r4/4.svg" },
          { apartment: 5, svg: "/svg/blocks/block-3/floors/3/r4/5.svg" },
          { apartment: 6, svg: "/svg/blocks/block-3/floors/3/r4/6.svg" },
        ],
      },
    },
    {
      floor: 4,
      svg: `<svg width="560" height="55" viewBox="0 0 560 55" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M557.035 52.3529H2V2H557.035V52.3529Z" fill="#FF6A00" fill-opacity="0.1" stroke="#FF6A00" stroke-width="4"/>
</svg>
`,
      entrances: {
        r4: [
          { apartment: 7, svg: "/svg/blocks/block-3/floors/4/r4/7.svg" },
          { apartment: 8, svg: "/svg/blocks/block-3/floors/4/r4/8.svg" },
          { apartment: 9, svg: "/svg/blocks/block-3/floors/4/r4/9.svg" },
          { apartment: 10, svg: "/svg/blocks/block-3/floors/4/r4/10.svg" },
          { apartment: 11, svg: "/svg/blocks/block-3/floors/4/r4/11.svg" },
          { apartment: 12, svg: "/svg/blocks/block-3/floors/4/r4/12.svg" },
        ],
      },
    },
    {
      floor: 5,
      svg: `<svg width="559" height="60" viewBox="0 0 559 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M557 58H2V2H557V58Z" fill="#FF6A00" fill-opacity="0.1" stroke="#FF6A00" stroke-width="4"/>
</svg>
`,
      entrances: {
        r4: [
          { apartment: 13, svg: "/svg/blocks/block-3/floors/5/r4/13.svg" },
          { apartment: 14, svg: "/svg/blocks/block-3/floors/5/r4/14.svg" },
          { apartment: 15, svg: "/svg/blocks/block-3/floors/5/r4/15.svg" },
          { apartment: 16, svg: "/svg/blocks/block-3/floors/5/r4/16.svg" },
          { apartment: 17, svg: "/svg/blocks/block-3/floors/5/r4/17.svg" },
          { apartment: 18, svg: "/svg/blocks/block-3/floors/5/r4/18.svg" },
        ],
      },
    },
    {
      floor: 6,
      svg: `<svg width="560" height="55" viewBox="0 0 560 55" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M557.035 52.3529H2V2H557.035V52.3529Z" fill="#FF6A00" fill-opacity="0.1" stroke="#FF6A00" stroke-width="4"/>
</svg>
`,
      entrances: {
        r4: [
          { apartment: 19, svg: "/svg/blocks/block-3/floors/6/r4/19.svg" },
          { apartment: 20, svg: "/svg/blocks/block-3/floors/6/r4/20.svg" },
          { apartment: 21, svg: "/svg/blocks/block-3/floors/6/r4/21.svg" },
          { apartment: 22, svg: "/svg/blocks/block-3/floors/6/r4/22.svg" },
          { apartment: 23, svg: "/svg/blocks/block-3/floors/6/r4/23.svg" },
          { apartment: 24, svg: "/svg/blocks/block-3/floors/6/r4/24.svg" },
        ],
      },
    },
    {
      floor: 7,
      svg: `<svg width="559" height="60" viewBox="0 0 559 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M557 58H2V2H557V58Z" fill="#FF6A00" fill-opacity="0.1" stroke="#FF6A00" stroke-width="4"/>
</svg>
`,
      entrances: {
        r4: [
          { apartment: 25, svg: "/svg/blocks/block-3/floors/7/r4/25.svg" },
          { apartment: 26, svg: "/svg/blocks/block-3/floors/7/r4/26.svg" },
          { apartment: 27, svg: "/svg/blocks/block-3/floors/7/r4/27.svg" },
          { apartment: 28, svg: "/svg/blocks/block-3/floors/7/r4/28.svg" },
          { apartment: 29, svg: "/svg/blocks/block-3/floors/7/r4/29.svg" },
          { apartment: 30, svg: "/svg/blocks/block-3/floors/7/r4/30.svg" },
        ],
      },
    },
    {
      floor: 8,
      svg: `<svg width="559" height="57" viewBox="0 0 559 57" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M557 55H2V2H557V55Z" fill="#FF6A00" fill-opacity="0.1" stroke="#FF6A00" stroke-width="4"/>
</svg>

`,
      entrances: {
        r4: [
          { apartment: 31, svg: "/svg/blocks/block-3/floors/8/r4/31.svg" },
          { apartment: 32, svg: "/svg/blocks/block-3/floors/8/r4/32.svg" },
          { apartment: 33, svg: "/svg/blocks/block-3/floors/8/r4/33.svg" },
          { apartment: 34, svg: "/svg/blocks/block-3/floors/8/r4/34.svg" },
          { apartment: 35, svg: "/svg/blocks/block-3/floors/8/r4/35.svg" },
          { apartment: 36, svg: "/svg/blocks/block-3/floors/8/r4/36.svg" },
        ],
      },
    },
    {
      floor: 9,
      svg: `<svg width="559" height="58" viewBox="0 0 559 58" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M557 56H2V2H557V56Z" fill="#FF6A00" fill-opacity="0.1" stroke="#FF6A00" stroke-width="4"/>
</svg>
`,
      entrances: {
        r4: [
          { apartment: 37, svg: "/svg/blocks/block-3/floors/9/r4/37.svg" },
          { apartment: 38, svg: "/svg/blocks/block-3/floors/9/r4/38.svg" },
          { apartment: 39, svg: "/svg/blocks/block-3/floors/9/r4/39.svg" },
          { apartment: 40, svg: "/svg/blocks/block-3/floors/9/r4/40.svg" },
          { apartment: 41, svg: "/svg/blocks/block-3/floors/9/r4/41.svg" },
          { apartment: 42, svg: "/svg/blocks/block-3/floors/9/r4/42.svg" },
        ],
      },
    },
    {
      floor: 10,
      svg: `<svg width="559" height="58" viewBox="0 0 559 58" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M557 56H2V2H557V56Z" fill="#FF6A00" fill-opacity="0.1" stroke="#FF6A00" stroke-width="4"/>
</svg>
`,
      entrances: {
        r4: [
          { apartment: 43, svg: "/svg/blocks/block-3/floors/10/r4/43.svg" },
          { apartment: 44, svg: "/svg/blocks/block-3/floors/10/r4/44.svg" },
          { apartment: 45, svg: "/svg/blocks/block-3/floors/10/r4/45.svg" },
          { apartment: 46, svg: "/svg/blocks/block-3/floors/10/r4/46.svg" },
          { apartment: 47, svg: "/svg/blocks/block-3/floors/10/r4/47.svg" },
          { apartment: 48, svg: "/svg/blocks/block-3/floors/10/r4/48.svg" },
        ],
      },
    },
    {
      floor: 11,
      svg: `<svg width="559" height="58" viewBox="0 0 559 58" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M557 56H2V2H557V56Z" fill="#FF6A00" fill-opacity="0.1" stroke="#FF6A00" stroke-width="4"/>
</svg>
`,
      entrances: {
        r4: [
          { apartment: 49, svg: "/svg/blocks/block-3/floors/11/r4/49.svg" },
          { apartment: 50, svg: "/svg/blocks/block-3/floors/11/r4/50.svg" },
          { apartment: 51, svg: "/svg/blocks/block-3/floors/11/r4/51.svg" },
          { apartment: 52, svg: "/svg/blocks/block-3/floors/11/r4/52.svg" },
          { apartment: 53, svg: "/svg/blocks/block-3/floors/11/r4/53.svg" },
          { apartment: 54, svg: "/svg/blocks/block-3/floors/11/r4/54.svg" },
        ],
      },
    },
    {
      floor: 12,
      svg: `<svg width="559" height="58" viewBox="0 0 559 58" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M557 56H2V2H557V56Z" fill="#FF6A00" fill-opacity="0.1" stroke="#FF6A00" stroke-width="4"/>
</svg>
`,
      entrances: {
        r4: [
          { apartment: 55, svg: "/svg/blocks/block-3/floors/12/r4/55.svg" },
          { apartment: 56, svg: "/svg/blocks/block-3/floors/12/r4/56.svg" },
          { apartment: 57, svg: "/svg/blocks/block-3/floors/12/r4/57.svg" },
          { apartment: 58, svg: "/svg/blocks/block-3/floors/12/r4/58.svg" },
          { apartment: 59, svg: "/svg/blocks/block-3/floors/12/r4/59.svg" },
          { apartment: 60, svg: "/svg/blocks/block-3/floors/12/r4/60.svg" },
        ],
      },
    },
    {
      floor: 13,
      svg: `<svg width="559" height="58" viewBox="0 0 559 58" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M557 56H2V2H557V56Z" fill="#FF6A00" fill-opacity="0.1" stroke="#FF6A00" stroke-width="4"/>
</svg>
`,
      entrances: {
        r4: [
          { apartment: 61, svg: "/svg/blocks/block-3/floors/13/r4/61.svg" },
          { apartment: 62, svg: "/svg/blocks/block-3/floors/13/r4/62.svg" },
          { apartment: 63, svg: null, unavailable: true },
          { apartment: 64, svg: "/svg/blocks/block-3/floors/13/r4/64.svg" },
          { apartment: 65, svg: "/svg/blocks/block-3/floors/13/r4/65.svg" },
          { apartment: 66, svg: "/svg/blocks/block-3/floors/13/r4/66.svg" },
        ],
      },
    },
    {
      floor: 14,
      svg: `<svg width="559" height="58" viewBox="0 0 559 58" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M557 56H2V2H557V56Z" fill="#FF6A00" fill-opacity="0.1" stroke="#FF6A00" stroke-width="4"/>
</svg>
`,
      entrances: {
        r4: [
          { apartment: 67, svg: "/svg/blocks/block-3/floors/14/r4/67.svg" },
          { apartment: 68, svg: "/svg/blocks/block-3/floors/14/r4/68.svg" },
          { apartment: 69, svg: "/svg/blocks/block-3/floors/14/r4/69.svg" },
          { apartment: 70, svg: "/svg/blocks/block-3/floors/14/r4/70.svg" },
          { apartment: 71, svg: "/svg/blocks/block-3/floors/14/r4/71.svg" },
          { apartment: 72, svg: "/svg/blocks/block-3/floors/14/r4/72.svg" },
        ],
      },
    },
    {
      floor: 15,
      svg: `<svg width="559" height="201" viewBox="0 0 559 201" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M557 199H2V2H557V199Z" fill="#FF6A00" fill-opacity="0.1" stroke="#FF6A00" stroke-width="4"/>
</svg>
`,
      entrances: {
        r4: [
          { apartment: 73, svg: "/svg/blocks/block-3/floors/15/r4/73.svg" },
          { apartment: 74, svg: "/svg/blocks/block-3/floors/15/r4/74.svg" },
        ],
      },
    },
  ],
};

const block4Data = {
  id: 4,
  name: "Блок 4",
  svg: `<svg width="572" height="696" viewBox="0 0 572 696" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.5 346.517L9 437.517L16 441.017L216.5 487.517L217.5 559.017L216.5 616.517L242.5 623.517L247 618.517L303.5 631.517L320.5 613.517L412.5 635.017L411 649.017L428.5 653.017L425 659.517L497 677.017L495.5 681.517L531 690.517L528 694.017L564 680.517V657.017L568.5 651.517L566.5 157.517L569 155.017L568.5 144.517L562 139.517V129.517L551.5 117.517V89.5171L561 87.0171L568.5 77.5171V74.0171L517.5 27.5171L321.5 3.01709L307 2.01709L301 3.51709L251 59.5171L245 58.0171L235.5 58.5171L168.5 135.017V153.517L117.5 211.517L113.5 210.017H101.5L28 293.517V313.017L2 342.017V344.517L6.5 346.517Z" fill="#FF6A00" fill-opacity="0.1" stroke="#FF6A00" stroke-width="4"/>
</svg>

`,
  class: "blocks_svg block4_svg",
  startFloor: 3,
  floors: [
    {
      floor: 3,
      svg: `<svg width="1037" height="58" viewBox="0 0 1037 58" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1035 56H2V2H1035V56Z" fill="#FF6A00" fill-opacity="0.1" stroke="#FF6A00" stroke-width="4"/>
</svg>
`,
      entrances: {
        r5: [
          { apartment: 1, svg: "/svg/blocks/block-4/floors/3/r5/1.svg" },
          { apartment: 2, svg: "/svg/blocks/block-4/floors/3/r5/2.svg" },
          { apartment: 3, svg: "/svg/blocks/block-4/floors/3/r5/3.svg" },
          { apartment: 4, svg: "/svg/blocks/block-4/floors/3/r5/4.svg" },
          { apartment: 5, svg: "/svg/blocks/block-4/floors/3/r5/5.svg" },
          { apartment: 6, svg: "/svg/blocks/block-4/floors/3/r5/6.svg" },
        ],
        r6: [
          { apartment: 1, svg: "/svg/blocks/block-4/floors/3/r6/1.svg" },
          { apartment: 2, svg: "/svg/blocks/block-4/floors/3/r6/2.svg" },
          { apartment: 3, svg: "/svg/blocks/block-4/floors/3/r6/3.svg" },
          { apartment: 4, svg: "/svg/blocks/block-4/floors/3/r6/4.svg" },
          { apartment: 5, svg: "/svg/blocks/block-4/floors/3/r6/5.svg" },
          { apartment: 6, svg: "/svg/blocks/block-4/floors/3/r6/6.svg" },
        ],
      },
    },
    {
      floor: 4,
      svg: `<svg width="1037" height="58" viewBox="0 0 1037 58" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1035 56H2V2H1035V56Z" fill="#FF6A00" fill-opacity="0.1" stroke="#FF6A00" stroke-width="4"/>
</svg>

`,
      entrances: {
        r5: [
          { apartment: 7, svg: "/svg/blocks/block-4/floors/4/r5/7.svg" },
          { apartment: 8, svg: "/svg/blocks/block-4/floors/4/r5/8.svg" },
          { apartment: 9, svg: "/svg/blocks/block-4/floors/4/r5/9.svg" },
          { apartment: 10, svg: "/svg/blocks/block-4/floors/4/r5/10.svg" },
          { apartment: 11, svg: "/svg/blocks/block-4/floors/4/r5/11.svg" },
          { apartment: 12, svg: "/svg/blocks/block-4/floors/4/r5/12.svg" },
        ],
        r6: [
          { apartment: 7, svg: "/svg/blocks/block-4/floors/4/r6/7.svg" },
          { apartment: 8, svg: "/svg/blocks/block-4/floors/4/r6/8.svg" },
          { apartment: 9, svg: "/svg/blocks/block-4/floors/4/r6/9.svg" },
          { apartment: 10, svg: "/svg/blocks/block-4/floors/4/r6/10.svg" },
          { apartment: 11, svg: "/svg/blocks/block-4/floors/4/r6/11.svg" },
          { apartment: 12, svg: "/svg/blocks/block-4/floors/4/r6/12.svg" },
        ],
      },
    },
    {
      floor: 5,
      svg: `<svg width="1037" height="63" viewBox="0 0 1037 63" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1035 61H2V2H1035V61Z" fill="#FF6A00" fill-opacity="0.1" stroke="#FF6A00" stroke-width="4"/>
</svg>
`,
      entrances: {
        r5: [
          { apartment: 13, svg: "/svg/blocks/block-4/floors/5/r5/13.svg" },
          { apartment: 14, svg: "/svg/blocks/block-4/floors/5/r5/14.svg" },
          { apartment: 15, svg: "/svg/blocks/block-4/floors/5/r5/15.svg" },
          { apartment: 16, svg: "/svg/blocks/block-4/floors/5/r5/16.svg" },
          { apartment: 17, svg: "/svg/blocks/block-4/floors/5/r5/17.svg" },
          { apartment: 18, svg: "/svg/blocks/block-4/floors/5/r5/18.svg" },
        ],
        r6: [
          { apartment: 13, svg: "/svg/blocks/block-4/floors/5/r6/13.svg" },
          { apartment: 14, svg: "/svg/blocks/block-4/floors/5/r6/14.svg" },
          { apartment: 15, svg: "/svg/blocks/block-4/floors/5/r6/15.svg" },
          { apartment: 16, svg: "/svg/blocks/block-4/floors/5/r6/16.svg" },
          { apartment: 17, svg: "/svg/blocks/block-4/floors/5/r6/17.svg" },
          { apartment: 18, svg: "/svg/blocks/block-4/floors/5/r6/18.svg" },
        ],
      },
    },
    {
      floor: 6,
      svg: `<svg width="1037" height="58" viewBox="0 0 1037 58" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1035 56H2V2H1035V56Z" fill="#FF6A00" fill-opacity="0.1" stroke="#FF6A00" stroke-width="4"/>
</svg>
`,
      entrances: {
        r5: [
          { apartment: 19, svg: "/svg/blocks/block-4/floors/6/r5/19.svg" },
          { apartment: 20, svg: "/svg/blocks/block-4/floors/6/r5/20.svg" },
          { apartment: 21, svg: "/svg/blocks/block-4/floors/6/r5/21.svg" },
          { apartment: 22, svg: "/svg/blocks/block-4/floors/6/r5/22.svg" },
          { apartment: 23, svg: "/svg/blocks/block-4/floors/6/r5/23.svg" },
          { apartment: 24, svg: "/svg/blocks/block-4/floors/6/r5/24.svg" },
        ],
        r6: [
          { apartment: 19, svg: "/svg/blocks/block-4/floors/6/r6/19.svg" },
          { apartment: 20, svg: "/svg/blocks/block-4/floors/6/r6/20.svg" },
          { apartment: 21, svg: "/svg/blocks/block-4/floors/6/r6/21.svg" },
          { apartment: 22, svg: "/svg/blocks/block-4/floors/6/r6/22.svg" },
          { apartment: 23, svg: "/svg/blocks/block-4/floors/6/r6/23.svg" },
          { apartment: 24, svg: "/svg/blocks/block-4/floors/6/r6/24.svg" },
        ],
      },
    },
    {
      floor: 7,
      svg: `<svg width="1037" height="60" viewBox="0 0 1037 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1035 58H2V2H1035V58Z" fill="#FF6A00" fill-opacity="0.1" stroke="#FF6A00" stroke-width="4"/>
</svg>

`,
      entrances: {
        r5: [
          { apartment: 25, svg: "/svg/blocks/block-4/floors/7/r5/25.svg" },
          { apartment: 26, svg: "/svg/blocks/block-4/floors/7/r5/26.svg" },
          { apartment: 27, svg: "/svg/blocks/block-4/floors/7/r5/27.svg" },
          { apartment: 28, svg: "/svg/blocks/block-4/floors/7/r5/28.svg" },
          { apartment: 29, svg: "/svg/blocks/block-4/floors/7/r5/29.svg" },
          { apartment: 30, svg: "/svg/blocks/block-4/floors/7/r5/30.svg" },
        ],
        r6: [
          { apartment: 25, svg: "/svg/blocks/block-4/floors/7/r6/25.svg" },
          { apartment: 26, svg: "/svg/blocks/block-4/floors/7/r6/26.svg" },
          { apartment: 27, svg: "/svg/blocks/block-4/floors/7/r6/27.svg" },
          { apartment: 28, svg: "/svg/blocks/block-4/floors/7/r6/28.svg" },
          { apartment: 29, svg: "/svg/blocks/block-4/floors/7/r6/29.svg" },
          { apartment: 30, svg: "/svg/blocks/block-4/floors/7/r6/30.svg" },
        ],
      },
    },
    {
      floor: 8,
      svg: `<svg width="1037" height="60" viewBox="0 0 1037 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1035 58H2V2H1035V58Z" fill="#FF6A00" fill-opacity="0.1" stroke="#FF6A00" stroke-width="4"/>
</svg>
`,
      entrances: {
        r5: [
          { apartment: 31, svg: "/svg/blocks/block-4/floors/8/r5/31.svg" },
          { apartment: 32, svg: "/svg/blocks/block-4/floors/8/r5/32.svg" },
          { apartment: 33, svg: "/svg/blocks/block-4/floors/8/r5/33.svg" },
          { apartment: 34, svg: "/svg/blocks/block-4/floors/8/r5/34.svg" },
          { apartment: 35, svg: "/svg/blocks/block-4/floors/8/r5/35.svg" },
          { apartment: 36, svg: "/svg/blocks/block-4/floors/8/r5/36.svg" },
        ],
        r6: [
          { apartment: 31, svg: "/svg/blocks/block-4/floors/8/r6/31.svg" },
          { apartment: 32, svg: "/svg/blocks/block-4/floors/8/r6/32.svg" },
          { apartment: 33, svg: "/svg/blocks/block-4/floors/8/r6/33.svg" },
          { apartment: 34, svg: "/svg/blocks/block-4/floors/8/r6/34.svg" },
          { apartment: 35, svg: "/svg/blocks/block-4/floors/8/r6/35.svg" },
          { apartment: 36, svg: "/svg/blocks/block-4/floors/8/r6/36.svg" },
        ],
      },
    },
    {
      floor: 9,
      svg: `<svg width="1037" height="60" viewBox="0 0 1037 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1035 58H2V2H1035V58Z" fill="#FF6A00" fill-opacity="0.1" stroke="#FF6A00" stroke-width="4"/>
</svg>
`,
      entrances: {
        r5: [
          { apartment: 37, svg: "/svg/blocks/block-4/floors/9/r5/37.svg" },
          { apartment: 38, svg: "/svg/blocks/block-4/floors/9/r5/38.svg" },
          { apartment: 39, svg: "/svg/blocks/block-4/floors/9/r5/39.svg" },
          { apartment: 40, svg: "/svg/blocks/block-4/floors/9/r5/40.svg" },
          { apartment: 41, svg: "/svg/blocks/block-4/floors/9/r5/41.svg" },
          { apartment: 42, svg: "/svg/blocks/block-4/floors/9/r5/42.svg" },
        ],
        r6: [
          { apartment: 37, svg: "/svg/blocks/block-4/floors/9/r6/37.svg" },
          { apartment: 38, svg: "/svg/blocks/block-4/floors/9/r6/38.svg" },
          { apartment: 39, svg: "/svg/blocks/block-4/floors/9/r6/39.svg" },
          { apartment: 40, svg: "/svg/blocks/block-4/floors/9/r6/40.svg" },
          { apartment: 41, svg: "/svg/blocks/block-4/floors/9/r6/41.svg" },
          { apartment: 42, svg: "/svg/blocks/block-4/floors/9/r6/42.svg" },
        ],
      },
    },
    {
      floor: 10,
      svg: `<svg width="1037" height="60" viewBox="0 0 1037 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1035 58H2V2H1035V58Z" fill="#FF6A00" fill-opacity="0.1" stroke="#FF6A00" stroke-width="4"/>
</svg>
`,
      entrances: {
        r5: [
          { apartment: 43, svg: "/svg/blocks/block-4/floors/10/r5/43.svg" },
          { apartment: 44, svg: "/svg/blocks/block-4/floors/10/r5/44.svg" },
          { apartment: 45, svg: "/svg/blocks/block-4/floors/10/r5/45.svg" },
          { apartment: 46, svg: "/svg/blocks/block-4/floors/10/r5/46.svg" },
          { apartment: 47, svg: "/svg/blocks/block-4/floors/10/r5/47.svg" },
          { apartment: 48, svg: "/svg/blocks/block-4/floors/10/r5/48.svg" },
        ],
        r6: [
          { apartment: 43, svg: "/svg/blocks/block-4/floors/10/r6/43.svg" },
          { apartment: 44, svg: "/svg/blocks/block-4/floors/10/r6/44.svg" },
          { apartment: 45, svg: "/svg/blocks/block-4/floors/10/r6/45.svg" },
          { apartment: 46, svg: "/svg/blocks/block-4/floors/10/r6/46.svg" },
          { apartment: 47, svg: "/svg/blocks/block-4/floors/10/r6/47.svg" },
          { apartment: 48, svg: "/svg/blocks/block-4/floors/10/r6/48.svg" },
        ],
      },
    },
    {
      floor: 11,
      svg: `<svg width="1037" height="60" viewBox="0 0 1037 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1035 58H2V2H1035V58Z" fill="#FF6A00" fill-opacity="0.1" stroke="#FF6A00" stroke-width="4"/>
</svg>
`,
      entrances: {
        r5: [
          { apartment: 49, svg: "/svg/blocks/block-4/floors/11/r5/49.svg" },
          { apartment: 50, svg: "/svg/blocks/block-4/floors/11/r5/50.svg" },
          { apartment: 51, svg: "/svg/blocks/block-4/floors/11/r5/51.svg" },
          { apartment: 52, svg: "/svg/blocks/block-4/floors/11/r5/52.svg" },
          { apartment: 53, svg: "/svg/blocks/block-4/floors/11/r5/53.svg" },
          { apartment: 54, svg: "/svg/blocks/block-4/floors/11/r5/54.svg" },
        ],
        r6: [
          { apartment: 49, svg: "/svg/blocks/block-4/floors/11/r6/49.svg" },
          { apartment: 50, svg: "/svg/blocks/block-4/floors/11/r6/50.svg" },
          { apartment: 51, svg: "/svg/blocks/block-4/floors/11/r6/51.svg" },
          { apartment: 52, svg: "/svg/blocks/block-4/floors/11/r6/52.svg" },
          { apartment: 53, svg: "/svg/blocks/block-4/floors/11/r6/53.svg" },
          { apartment: 54, svg: "/svg/blocks/block-4/floors/11/r6/54.svg" },
        ],
      },
    },
    {
      floor: 12,
      svg: `<svg width="1037" height="60" viewBox="0 0 1037 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1035 58H2V2H1035V58Z" fill="#FF6A00" fill-opacity="0.1" stroke="#FF6A00" stroke-width="4"/>
</svg>
`,
      entrances: {
        r5: [
          { apartment: 55, svg: "/svg/blocks/block-4/floors/12/r5/55.svg" },
          { apartment: 56, svg: "/svg/blocks/block-4/floors/12/r5/56.svg" },
          { apartment: 57, svg: "/svg/blocks/block-4/floors/12/r5/57.svg" },
          { apartment: 58, svg: "/svg/blocks/block-4/floors/12/r5/58.svg" },
          { apartment: 59, svg: "/svg/blocks/block-4/floors/12/r5/59.svg" },
          { apartment: 60, svg: "/svg/blocks/block-4/floors/12/r5/60.svg" },
        ],
        r6: [
          { apartment: 55, svg: "/svg/blocks/block-4/floors/12/r6/55.svg" },
          { apartment: 56, svg: "/svg/blocks/block-4/floors/12/r6/56.svg" },
          { apartment: 57, svg: "/svg/blocks/block-4/floors/12/r6/57.svg" },
          { apartment: 58, svg: "/svg/blocks/block-4/floors/12/r6/58.svg" },
          { apartment: 59, svg: "/svg/blocks/block-4/floors/12/r6/59.svg" },
          { apartment: 60, svg: "/svg/blocks/block-4/floors/12/r6/60.svg" },
        ],
      },
    },
    {
      floor: 13,
      svg: `<svg width="1037" height="60" viewBox="0 0 1037 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1035 58H2V2H1035V58Z" fill="#FF6A00" fill-opacity="0.1" stroke="#FF6A00" stroke-width="4"/>
</svg>
`,
      entrances: {
        r5: [
          { apartment: 61, svg: "/svg/blocks/block-4/floors/13/r5/61.svg" },
          { apartment: 62, svg: "/svg/blocks/block-4/floors/13/r5/62.svg" },
          { apartment: 63, svg: "/svg/blocks/block-4/floors/13/r5/63.svg" },
          { apartment: 64, svg: null, unavailable: true },
          { apartment: 65, svg: "/svg/blocks/block-4/floors/13/r5/65.svg" },
          { apartment: 66, svg: "/svg/blocks/block-4/floors/13/r5/66.svg" },
        ],
        r6: [
          { apartment: 61, svg: "/svg/blocks/block-4/floors/13/r6/61.svg" },
          { apartment: 62, svg: "/svg/blocks/block-4/floors/13/r6/62.svg" },
          { apartment: 63, svg: "/svg/blocks/block-4/floors/13/r6/63.svg" },
          { apartment: 64, svg: null, unavailable: true },
          { apartment: 65, svg: "/svg/blocks/block-4/floors/13/r6/65.svg" },
          { apartment: 66, svg: "/svg/blocks/block-4/floors/13/r6/66.svg" },
        ],
      },
    },
    {
      floor: 14,
      svg: `<svg width="1037" height="60" viewBox="0 0 1037 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1035 58H2V2H1035V58Z" fill="#FF6A00" fill-opacity="0.1" stroke="#FF6A00" stroke-width="4"/>
</svg>
`,
      entrances: {
        r5: [
          { apartment: 67, svg: "/svg/blocks/block-4/floors/14/r5/67.svg" },
          { apartment: 68, svg: "/svg/blocks/block-4/floors/14/r5/68.svg" },
          { apartment: 69, svg: "/svg/blocks/block-4/floors/14/r5/69.svg" },
          { apartment: 70, svg: "/svg/blocks/block-4/floors/14/r5/70.svg" },
          { apartment: 71, svg: "/svg/blocks/block-4/floors/14/r5/71.svg" },
          { apartment: 72, svg: "/svg/blocks/block-4/floors/14/r5/72.svg" },
        ],
        r6: [
          { apartment: 67, svg: "/svg/blocks/block-4/floors/14/r6/67.svg" },
          { apartment: 68, svg: "/svg/blocks/block-4/floors/14/r6/68.svg" },
          { apartment: 69, svg: "/svg/blocks/block-4/floors/14/r6/69.svg" },
          { apartment: 70, svg: "/svg/blocks/block-4/floors/14/r6/70.svg" },
          { apartment: 71, svg: "/svg/blocks/block-4/floors/14/r6/71.svg" },
          { apartment: 72, svg: "/svg/blocks/block-4/floors/14/r6/72.svg" },
        ],
      },
    },
    {
      floor: 15,
      svg: `<svg width="1037" height="63" viewBox="0 0 1037 63" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1035 61H2V2H1035V61Z" fill="#FF6A00" fill-opacity="0.1" stroke="#FF6A00" stroke-width="4"/>
</svg>
`,
      entrances: {
        r5: [
          { apartment: 73, svg: "/svg/blocks/block-4/floors/15/r5/73.svg" },
          { apartment: 74, svg: "/svg/blocks/block-4/floors/15/r5/74.svg" },
          { apartment: 75, svg: "/svg/blocks/block-4/floors/15/r5/75.svg" },
          { apartment: 76, svg: "/svg/blocks/block-4/floors/15/r5/76.svg" },
          { apartment: 77, svg: "/svg/blocks/block-4/floors/15/r5/77.svg" },
          { apartment: 78, svg: "/svg/blocks/block-4/floors/15/r5/78.svg" },
        ],
        r6: [
          { apartment: 73, svg: "/svg/blocks/block-4/floors/15/r6/73.svg" },
          { apartment: 74, svg: "/svg/blocks/block-4/floors/15/r6/74.svg" },
          { apartment: 75, svg: "/svg/blocks/block-4/floors/15/r6/75.svg" },
          { apartment: 76, svg: "/svg/blocks/block-4/floors/15/r6/76.svg" },
          { apartment: 77, svg: "/svg/blocks/block-4/floors/15/r6/77.svg" },
          { apartment: 78, svg: "/svg/blocks/block-4/floors/15/r6/78.svg" },
        ],
      },
    },
    {
      floor: 16,
      svg: `<svg width="1037" height="60" viewBox="0 0 1037 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1035 58H2V2H1035V58Z" fill="#FF6A00" fill-opacity="0.1" stroke="#FF6A00" stroke-width="4"/>
</svg>
`,
      entrances: {
        r5: [
          { apartment: 79, svg: "/svg/blocks/block-4/floors/16/r5/79.svg" },
          { apartment: 80, svg: "/svg/blocks/block-4/floors/16/r5/80.svg" },
          { apartment: 81, svg: "/svg/blocks/block-4/floors/16/r5/81.svg" },
          { apartment: 82, svg: "/svg/blocks/block-4/floors/16/r5/82.svg" },
          { apartment: 83, svg: "/svg/blocks/block-4/floors/16/r5/83.svg" },
          { apartment: 84, svg: "/svg/blocks/block-4/floors/16/r5/84.svg" },
        ],
        r6: [
          { apartment: 79, svg: "/svg/blocks/block-4/floors/16/r6/79.svg" },
          { apartment: 80, svg: "/svg/blocks/block-4/floors/16/r6/80.svg" },
          { apartment: 81, svg: "/svg/blocks/block-4/floors/16/r6/81.svg" },
          { apartment: 82, svg: "/svg/blocks/block-4/floors/16/r6/82.svg" },
          { apartment: 83, svg: "/svg/blocks/block-4/floors/16/r6/83.svg" },
          { apartment: 84, svg: "/svg/blocks/block-4/floors/16/r6/84.svg" },
        ],
      },
    },
    {
      floor: 17,
      svg: `<svg width="1037" height="60" viewBox="0 0 1037 60" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1035 58H2V2H1035V58Z" fill="#FF6A00" fill-opacity="0.1" stroke="#FF6A00" stroke-width="4"/>
</svg>
`,
      entrances: {
        r5: [
          { apartment: 85, svg: "/svg/blocks/block-4/floors/17/r5/85.svg" },
          { apartment: 86, svg: "/svg/blocks/block-4/floors/17/r5/86.svg" },
          { apartment: 87, svg: "/svg/blocks/block-4/floors/17/r5/87.svg" },
          { apartment: 88, svg: "/svg/blocks/block-4/floors/17/r5/88.svg" },
          { apartment: 89, svg: "/svg/blocks/block-4/floors/17/r5/89.svg" },
          { apartment: 90, svg: "/svg/blocks/block-4/floors/17/r5/90.svg" },
        ],
        r6: [
          { apartment: 85, svg: "/svg/blocks/block-4/floors/17/r6/85.svg" },
          { apartment: 86, svg: "/svg/blocks/block-4/floors/17/r6/86.svg" },
          { apartment: 87, svg: "/svg/blocks/block-4/floors/17/r6/87.svg" },
          { apartment: 88, svg: "/svg/blocks/block-4/floors/17/r6/88.svg" },
          { apartment: 89, svg: "/svg/blocks/block-4/floors/17/r6/89.svg" },
          { apartment: 90, svg: "/svg/blocks/block-4/floors/17/r6/90.svg" },
        ],
      },
    },
    {
      floor: 18,
      svg: `<svg width="1037" height="205" viewBox="0 0 1037 205" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1035 203H2V2H1035V203Z" fill="#FF6A00" fill-opacity="0.1" stroke="#FF6A00" stroke-width="4"/>
</svg>
`,
      entrances: {
        r5: [
          { apartment: 91, svg: "/svg/blocks/block-4/floors/18/r5/91.svg" },
          { apartment: 92, svg: "/svg/blocks/block-4/floors/18/r5/92.svg" },
        ],
        r6: [
          { apartment: 91, svg: "/svg/blocks/block-4/floors/18/r6/91.svg" },
          { apartment: 92, svg: "/svg/blocks/block-4/floors/18/r6/92.svg" },
        ],
      },
    },
  ],
};

export const blocksData = [block1Data, block2Data, block3Data, block4Data];
