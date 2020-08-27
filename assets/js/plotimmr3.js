
  //var doc = jsyaml.load('greeting: hello/nname: world');
  console.log('success');
  console.log(roast);




  var environmentalTemperature = {
    x: roast.timex,
    y: roast.temp1,
    mode: 'lines+markers',
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
    mode: 'lines+markers',
    name: 'Bean Temperature',
    text: ['tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object'],
    line: {
      shape: 'spline',
      color: '#0A5C90'
    },
    type: 'scatter'
  };
  var airControl = {
    x: roast.extratimex[0],
    y: roast.extratemp2[0],
    mode: 'lines+markers',
    name: 'Air',
    text: ['tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object'],
    line: {
      shape: 'spline',
      color: '#4691cf'
    },
    type: 'scatter'
  };
  var heatControl = {
    x: roast.extratimex[0],
    y: roast.extratemp1[0],
    mode: 'lines+markers',
    name: 'Heat',
    text: ['tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object'],
    line: {
      shape: 'spline',
      color: '#cc0f50'
    },
    type: 'scatter'
  };

  var data = [environmentalTemperature, beanTemperature, airControl, heatControl];

  var layout = {
    legend: {
      y: 0.5,
      traceorder: 'reversed',
      font: {
        size: 16
      },
      yref: 'paper'
    }
  };

  Plotly.newPlot('roast', data, layout);
