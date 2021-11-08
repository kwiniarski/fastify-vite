const path = require('path')
const fs = require('fs').promises
const existsSync = require('fs').existsSync
const klaw = require('klaw')
const { createConverter } = require('convert-svg-to-png')

const svg = (title) => (
`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   inkscape:export-ydpi="96"
   inkscape:export-xdpi="96"
   inkscape:export-filename="/Users/jonas/Downloads/cover.png"
   sodipodi:docname="article.svg"
   inkscape:version="1.0.2 (e86c8708, 2021-01-15)"
   id="svg117"
   version="1.1"
   viewBox="0 0 317.49998 169.8625"
   height="642"
   width="1200">
  <defs
     id="defs111" />
  <sodipodi:namedview
     inkscape:window-maximized="1"
     inkscape:window-y="25"
     inkscape:window-x="0"
     inkscape:window-height="847"
     inkscape:window-width="1440"
     showgrid="false"
     inkscape:document-rotation="0"
     inkscape:current-layer="text142"
     inkscape:document-units="px"
     inkscape:cy="308.43284"
     inkscape:cx="587.90086"
     inkscape:zoom="0.66967556"
     inkscape:pageshadow="2"
     inkscape:pageopacity="0.0"
     borderopacity="1.0"
     bordercolor="#666666"
     pagecolor="#ffffff"
     id="base"
     units="px" />
  <metadata
     id="metadata114">
    <rdf:RDF>
      <cc:Work
         rdf:about="">
        <dc:format>image/svg+xml</dc:format>
        <dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
        <dc:title />
      </cc:Work>
    </rdf:RDF>
  </metadata>
  <g
     id="layer1"
     inkscape:groupmode="layer"
     inkscape:label="Layer 1">
    <g
       aria-label="terix"
       id="text142"
       style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:25.4px;line-height:1.25;font-family:Papyrus;-inkscape-font-specification:Papyrus;fill:#ff6600;fill-opacity:1;stroke:none;stroke-width:0.264583">
      <rect
         y="3.4285156e-06"
         x="-5.0000003e-06"
         height="169.86249"
         width="317.5"
         id="rect65"
         style="fill:#000000;fill-rule:evenodd;stroke-width:0.112437" />
      <text
         xml:space="preserve"
         style="font-size:50.8px;line-height:1.25;font-family:sans-serif;-inkscape-font-specification:'sans-serif, Normal';stroke-width:0.0700042"
         x="15.468546"
         y="90.720932"
         id="text28"><tspan
           sodipodi:role="line"
           id="tspan26"
           x="15.468546"
           y="90.720932"
           style="stroke-width:0.0700042" /></text>
      <text
         xml:space="preserve"
         style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:50.8px;line-height:1.25;font-family:'System Font';-inkscape-font-specification:'System Font';stroke-width:0.0700042"
         x="14.21434"
         y="107.86176"
         id="text32"><tspan
           sodipodi:role="line"
           id="tspan30"
           x="14.21434"
           y="107.86176"
           style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-family:'System Font';-inkscape-font-specification:'System Font';stroke-width:0.0700042" /></text>
      <text
         xml:space="preserve"
         style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:28.2222px;line-height:1.25;font-family:'Helvetica Neue';-inkscape-font-specification:'Helvetica Neue Bold';fill:#ff6600;fill-opacity:1;stroke:none;stroke-width:0.055124"
         x="17.991667"
         y="146.88046"
         id="text877-9"><tspan
           sodipodi:role="line"
           id="tspan875-3"
           x="17.991667"
           y="146.88046"
           style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:28.2222px;font-family:sans-serif,'Helvetica Neue';-inkscape-font-specification:'Helvetica Neue Bold';fill:#ffa366;fill-opacity:1;stroke-width:0.055124">${title}</tspan></text>
      <path
         class="st0"
         d="m 48.398293,20.068157 1.04521,-2.705997 -0.04504,-0.167464 -10.337761,2.72332 c 1.101802,-1.594956 0.722985,-2.873461 0.722985,-2.873461 0,0 -3.300784,2.108899 -5.797738,2.052307 -2.496955,-0.05544 -3.300785,-0.72183 -7.129371,0.498929 -3.828586,1.220759 -4.909599,4.96619 -6.019485,5.771175 -1.109885,0.804985 -4.591993,3.426672 -4.591993,3.426672 l 0.0081,0.04735 3.139095,-0.999013 c 0,0 -0.860422,0.811914 -2.689828,3.276531 0,0 -0.03234,-0.02887 -0.08546,-0.07969 l 0.0023,0.01732 c 0,0 1.470224,2.247489 2.912729,1.83056 0.144366,-0.04158 0.308366,-0.110873 0.487379,-0.202112 0.580929,0.32338 1.338562,0.64214 2.175885,0.72876 0,0 -0.56707,-0.658309 -1.039435,-1.407858 0.128197,-0.082 0.258703,-0.167464 0.39152,-0.254084 l -0.06121,0.04389 1.19535,0.438873 -0.131661,-1.123745 c 0.0035,-0.0023 0.0081,-0.0046 0.01155,-0.0069 l 1.174562,0.430788 -0.146676,-1.022112 c 0.148986,-0.07738 0.297971,-0.151295 0.445802,-0.220591 l 1.224224,-4.632416 5.063204,-3.45439 -0.401915,1.012872 c -1.024421,2.523518 -2.953151,3.120616 -2.953151,3.120616 l -0.804985,0.304901 c -0.598252,0.706816 -0.850027,0.88121 -1.055604,3.255742 0.48276,-0.121268 0.943576,-0.150141 1.360505,-0.03811 2.164336,0.582084 2.912729,3.189911 2.330645,3.911741 -0.145521,0.180169 -0.493154,0.48969 -0.932027,0.851182 h -0.877745 l -0.01155,0.711436 c -0.03003,0.0231 -0.06006,0.04735 -0.09009,0.07045 h -0.892759 l -0.01155,0.694112 c -0.07969,0.06006 -0.157071,0.118958 -0.234451,0.176704 -0.839632,0.01732 -1.902166,-0.7149 -1.902166,-0.7149 0,0.665238 0.554365,1.691969 0.554365,1.691969 0,0 0.0358,-0.01732 0.09817,-0.04735 -0.05428,0.03927 -0.08431,0.06121 -0.08431,0.06121 0,0 2.24749,1.497942 3.662277,0.943576 1.257717,-0.493154 4.514614,-3.061714 7.325708,-4.276698 l 8.5072,-2.241715 1.121435,-2.905799 -6.482611,1.708139 v -2.610138 l 7.606356,-2.0038 1.121435,-2.905799 -8.726636,2.299462 v -2.610137 z m -15.440232,5.53326 2.018814,-0.532422 0.02656,0.100479 -0.629435,1.631913 -2.09273,0.5509 z m 0.697576,3.491347 -2.092729,0.550901 0.676788,-1.752026 2.018814,-0.532422 0.02656,0.100479 z m 2.72563,-0.585549 -2.092729,0.550901 0.676788,-1.752026 2.018814,-0.532421 0.02656,0.100478 z"
         id="path862"
         style="stroke-width:0.00305574" />
      <g
         id="g885"
         transform="matrix(0.49792152,0,0,0.49792152,8.9170531,62.146899)">
        <text
           xml:space="preserve"
           style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:33.2798px;line-height:1.25;font-family:'Helvetica Neue';-inkscape-font-specification:'Helvetica Neue Bold';stroke-width:0.110065"
           x="92.445801"
           y="116.61423"
           id="text877"><tspan
             sodipodi:role="line"
             id="tspan875"
             x="92.445801"
             y="116.61423"
             style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:normal;font-size:33.2798px;font-family:'Helvetica Neue';-inkscape-font-specification:'Helvetica Neue Bold';fill:#f9f9f9;stroke-width:0.110065">-vite</tspan></text>
        <g
           id="g878"
           transform="matrix(0.0259943,0,0,0.0259943,17.2014,37.894086)">
          <path
             class="st0"
             d="m 146,2372.6 5.3,-26.5 c 14.6,-76.8 43.7,-143.1 98.1,-193.4 39.7,-37.1 98,-59.6 164.3,-59.6 42.4,0 74.2,6.6 94.1,13.2 l -37.1,127.2 c -15.9,-5.3 -30.5,-7.9 -51.7,-7.9 -59.6,0 -94.1,62.3 -104.7,119.2 l -5.3,27.8 h 125.9 l -22.5,116.6 H 289.1 l -102,531.3 H 21.5 l 102,-531.3"
             id="path864" />
          <path
             class="st0"
             d="m 687.9,3020.5 c 1.3,-34.4 4,-70.2 5.3,-108.6 h -4 c -51.7,86.1 -113.9,119.3 -165.6,119.3 -94.1,0 -140.4,-80.8 -140.4,-194.8 0,-196.1 98,-474.3 376.3,-474.3 64.9,0 129.8,10.6 169.6,26.5 L 857.6,2749 c -15.9,75.5 -27.8,201.4 -26.5,271.6 H 687.9 Z m 59.6,-531.3 c -13.2,-2.7 -25.2,-4 -34.4,-4 -108.6,0 -166.9,216 -168.3,311.3 0,57 8,98 49,98 45,0 87.4,-74.2 111.3,-192.1 z"
             id="path866" />
          <path
             class="st0"
             d="m 948.9,2878.7 c 26.5,14.6 58.3,27.8 104.7,26.5 47.7,-1.3 74.2,-31.8 74.2,-72.9 0,-35.8 -17.2,-60.9 -62.3,-96.7 -55.6,-45 -82.1,-102 -82.1,-157.7 0,-119.3 92.7,-215.9 239.8,-215.9 57,0 98,10.6 121.9,23.8 l -35.8,120.6 c -18.5,-10.6 -49,-19.9 -76.8,-19.9 -53,0 -86.1,27.8 -86.1,71.5 0,33.1 18.5,53 49,78.2 72.9,55.7 96.7,119.2 96.7,169.6 0,143.1 -99.4,222.6 -247.8,222.6 -59.6,0 -112.6,-17.2 -135.1,-33.1 z"
             id="path868" />
          <path
             class="st0"
             d="m 1680.2,2197.7 -33.1,174.9 h 254.4 l -21.2,116.6 h -255.7 l -57,300.7 c -4,22.5 -5.3,42.4 -5.3,54.3 0,39.7 19.9,54.3 50.4,54.3 11.9,0 29.2,0 45,-2.7 l -19.9,124.5 c -30.5,8 -67.6,10.6 -99.4,10.6 -99.3,0 -148.4,-55.7 -148.4,-143.1 0,-29.1 5.3,-64.9 11.9,-96.7 l 57,-302.1 h -75.5 l 22.5,-116.6 h 75.5 l 26.5,-133.8 z"
             id="path870" />
          <path
             class="st0"
             d="m 1720,3020.5 124.5,-647.9 h 165.6 l -124.5,647.9 z M 1875,2207 c 0,-47.7 34.4,-102 92.7,-102 54.3,0 79.5,41.1 78.2,86.1 -1.3,66.2 -46.4,103.3 -95.4,103.3 -53,0 -76.9,-38.4 -75.5,-87.4 z"
             id="path872" />
          <path
             class="st0"
             d="m 2113,2372.6 5.3,-26.5 c 14.6,-76.8 43.7,-143.1 98.1,-193.4 39.7,-37.1 98,-59.6 164.3,-59.6 42.4,0 74.2,6.6 94.1,13.2 l -37.1,127.2 c -15.9,-5.3 -30.5,-7.9 -51.7,-7.9 -59.6,0 -94.1,62.3 -104.7,119.2 l -5.3,27.8 h 192.1 l -22.5,116.6 h -189.5 l -102,531.3 h -165.6 l 102,-531.3"
             id="path874" />
          <path
             class="st0"
             d="m 2571.4,2372.6 4,311.3 c 1.3,60.9 2.7,106 1.3,153.7 h 2.7 c 13.2,-53 26.5,-96.7 49,-165.6 l 98.1,-299.4 h 166.9 l -212,510.1 c -63.6,148.4 -136.5,272.9 -216,345.8 -38.4,35.8 -83.5,63.6 -111.3,75.5 l -66.2,-135.1 c 29.1,-14.6 59.6,-31.8 86.1,-53 37.1,-30.5 72.9,-67.6 88.8,-103.4 2.6,-9.3 5.3,-15.9 4,-29.1 l -68.9,-610.8 z"
             id="path876" />
        </g>
      </g>
    </g>
  </g>
  <style
     type="text/css"
     id="style860">
   .st0{fill:#FFFFFF;}
</style>
</svg>
`)

const titleRe = /<title>(.*?) \| fastify-vite<\/title>/

async function main() {
   const converter = createConverter()
   const htmls = await walkRead(path.resolve(__dirname,'.vitepress', 'dist'), [/\.html$/])
   if (!existsSync(path.resolve(__dirname, 'covers'))) {
      await fs.mkdir(path.resolve(__dirname, 'covers'))
   }
   for (const html of htmls) {
      if (html.name === 'index.html') {
         continue
      }
      const title = html.contents.match(titleRe)[1]
      const pngName = `${path.parse(html.name).name}.png`
      const pngPath = path.join(
         path.resolve(__dirname, 'covers'),
         pngName
      )
      if (!existsSync(pngPath)) {
         const png = await converter.convert(svg(title))
         await fs.writeFile(pngPath, png)
      }
      for (const re of [
         /<meta property="og:image" content="([^"]+)">/g,
         /<meta name="twitter:image" content="([^"]+)">/g
      ]) {
         html.contents = html.contents.replace(re, (...m) => {
            return m[0].replace(m[1], `https://fastify-vite.dev/${pngName}`)
         })
      }
      await fs.writeFile(path.join(__dirname, '.vitepress', 'dist', html.name), html.contents)
   }
}

async function walkRead (dir, patterns) {
  const promises = []
  const sliceAt = dir.length + (dir.endsWith('/') ? 0 : 1)

  for await (const match of klaw(dir)) {
    const pathEntry = sliceAt ? match.path.slice(sliceAt) : match.path
    if (patterns.some(pattern => pattern.test(pathEntry))) {
      promises.push(
        fs.readFile(path.resolve(dir, pathEntry), 'utf8')
          .then(contents => ({ name: pathEntry, contents })),
      )
    }
  }
  return Promise.all(promises)
}

if (require.main === module) {
   main().then(() => process.exit())
}
