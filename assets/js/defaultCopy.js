

// Get document, or throw exception on error
try {

  var roast = {{ site.data.indiamonsoonedmalabar_r3 | jsonify }};

  //var doc = jsyaml.load('greeting: hello/nname: world');
  console.log('success');
  console.log(roast);




  var trace2 = {
    x: [],
    y: [],
    mode: 'lines+markers',
    name: 'Environmental Temperature',
    text: ['tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object', 'tweak line smoothness<br>with "smoothing" in line object'],
    line: {
      shape: 'spline'
    },
    type: 'scatter'
  };

  var data = [trace2, trace3, trace4, trace5];
  var data2 = [];
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

  Plotly.newPlot('myDiv2', data2, layout);


} catch (e) {
console.log('failed');
  console.log(e);
}
