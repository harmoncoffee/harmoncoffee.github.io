//var doc = jsyaml.load('greeting: hello/nname: world');
console.log('success');
console.log(roast);



var d3 = Plotly.d3;

var i;
for (i = 0; i < roast.timex.length; i++) {
  roast.timex[i] = moment().startOf('day')
    .seconds(roast.timex[i])
    .format('mm:ss:SS');
}
var j;
for (j = 0; j < roast.extratimex[0].length; j++) {
  roast.extratimex[0][j] = moment().startOf('day')
    .seconds(roast.extratimex[0][j])
    .format('mm:ss');
}



var environmentalTemperature = {
  x: roast.timex,
  y: roast.temp1,
  mode: 'lines',
  name: 'Environmental Temperature',
  text: ['tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object'],
  line: {
    shape: 'spline',
    color: '#cc0f50'
  },
  type: 'scatter'
};
var beanTemperature = {
  x: roast.timex,
  y: roast.temp2,
  mode: 'lines',
  name: 'Bean Temperature',
  text: ['tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object'],
  line: {
    shape: 'spline',
    color: '#0A5C90'
  },
  type: 'scatter'
};
var airControl = {
  x: roast.timex,
  y: roast.extratemp2[0],
  mode: 'lines',
  name: 'Air',
  text: [],
  line: {
    shape: 'line',
    color: '#4691cf'
  },
  type: 'scatter'
};
var heatControl = {
  x: roast.timex,
  y: roast.extratemp1[0],
  mode: 'lines',
  name: 'Heat',
  text: [],
  line: {
    shape: 'line',
    color: '#7c0010'
  },
  type: 'scatter'
};

// var turningPointTime = [1];
//  turningPointTime[0] = moment().startOf('day')
//    .seconds(roast.computed.TP_time)
//    .format('mm:ss:SS');
//
// var turningPointBeanTemp = [1];
//  turningPointBeanTemp[0] = roast.computed.TP_BT;
//
// var turningPoint = {
//   x: turningPointTime,
//   y: turningPointBeanTemp,
//   mode: 'scatter',
//   name: 'TurningPoint',
//   text: ['Turning Point'],
//   line: {
//     shape: 'line',
//     color: '#FFFFF'
//   },
//   type: 'scatter'
// };
//
// var dryEndTime = [2];
//  dryEndTime[0] = "00:55:00"
//   dryEndTime[1] = "01:55:00"
//
// var dryEndBeanTemp = [2];
//  dryEndBeanTemp[0] = 297;//roast.computed.DRY_BT
//   dryEndBeanTemp[0] = 200;//roast.computed.DRY_BT
//
// var dryEnd = {
//   x: dryEndTime,
//   y: dryEndBeanTemp,
//   mode: 'scatter',
//   name: 'dryEnd',
//   text: ['Dry End'],
//   line: {
//     shape: 'line',
//     color: '#FFFFF'
//   },
//   type: 'scatter'
// };
//






var data = [environmentalTemperature, beanTemperature,airControl, heatControl];

var layout = {

  xaxis: {
    autorange: true,
    type: 'time',
    tickformat: '%M:%S:%S'
  },
  shapes: [{
      type: 'rect',
      xref: 'x',
      yref: 'y',
      x0: 0,
      y0: 150,
      x1: d3.max(roast.timex),
      y1: 295,
      opacity: 0.2,
      fillcolor: 'green',
      line: {
        color: 'green'
      }
    },
    {
      type: 'rect',
      xref: 'x',
      yref: 'y',
      x0: 0,
      y0: 295,
      x1: d3.max(roast.timex),
      y1: 374,
      opacity: 0.2,
      fillcolor: 'yellow',
      line: {
        color: 'yellow'
      }
    },
    {
      type: 'rect',
      xref: 'x',
      yref: 'y',
      x0: 0,
      y0: 374,
      x1: d3.max(roast.timex),
      y1: 450,
      opacity: 0.2,
      fillcolor: 'brown',
      line: {
        color: 'brown'
      }
    }

  ]
};

Plotly.newPlot('roast', data, layout);
