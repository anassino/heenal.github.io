nv.addGraph(function() {

  
  var chart = nv.models.discreteBarChart()
    .x(function(d) { return d.outTimestamp*1000 })
    .y(function(d) { return d.compressionRatioInPercent })
    .staggerLabels(true)
    .tooltips(true)
    .color(['#aec7e8', '#7b94b5', '#486192']);

  d3.select('#chart svg')
    .datum(data)
    .transition().duration(500)
    .call(chart)
    ;
  
  chart.xAxis
    .tickFormat(function(d) {
      return d3.time.format('%Y-%m-%d %H:%M:%S')(new Date(d))
    });
  
  chart.yAxis.tickFormat(d3.format(',%'));

  nv.utils.windowResize(chart.update);

  return chart;
});
