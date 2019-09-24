$(document).ready(function(){

  /* $(".btn-circle").click(function(){
    $(".btn-circle").removeClass("active");
    $(this).addClass("active");
  }); */

  $('[data-toggle="popover"]').popover();

  $('.line-chart').on('click', function(e) {
    $("#chart-0").remove();
    $(".modal-body").find(".graficas").html('<canvas id="chart-0"></canvas>');
    setTimeout(() => { lineChart(); }, 800);
  });

  $('.donut-chart').on('click', function(){
    $("#chart-0").remove();
    $(".modal-body").find(".graficas").html('<canvas id="chart-0"></canvas>');
    var ctx = document.getElementById('chart-0').getContext('2d');
		setTimeout(() => { window.myDoughnut = new Chart(ctx, config); }, 800);
  });

  $('.bar-chart').on('click', function(){
    $("#chart-0").remove();
    $(".modal-body").find(".graficas").html('<canvas id="chart-0"></canvas>');
    setTimeout(() => { barChart(); }, 800);
  });

});

lineChart = () => {
  var chart = new Chart('chart-0', {
    type: 'line',
    data: data,
    options: options
  });
}

barChart = () => {
  var chart = new Chart('chart-0', {
    type: 'bar',
    data: barChartData
  });
}

var presets = window.chartColors;
var utils = Samples.utils;
var inputs = {
  min: 20,
  max: 80,
  count: 8,
  decimals: 2,
  continuity: 1
};

function generateData() {
  return utils.numbers(inputs);
}

function generateLabels() {
  return utils.months({count: inputs.count});
}

utils.srand(42);

var data = {
  labels: generateLabels(),
  datasets: [{
    backgroundColor: utils.transparentize(presets.red),
    borderColor: presets.red,
    data: generateData(),
    label: 'D1',
    fill: '1'
  }, {
    backgroundColor: utils.transparentize(presets.yellow),
    borderColor: presets.yellow,
    data: generateData(),
    label: 'D2',
    fill: '1'
  }, {
    backgroundColor: utils.transparentize(presets.green),
    borderColor: presets.green,
    data: generateData(),
    label: 'D3',
    fill: '1'
  }, {
    backgroundColor: utils.transparentize(presets.orange),
    borderColor: presets.orange,
    data: generateData(),
    label: 'D4',
    fill: '1'
  }, {
    backgroundColor: utils.transparentize(presets.grey),
    borderColor: presets.grey,
    data: generateData(),
    label: 'D5',
    fill: '1'
  }]
};

var options = {
  maintainAspectRatio: false,
  spanGaps: false,
  elements: {
    line: {
      tension: 0.000001
    }
  },
  scales: {
    yAxes: [{
      stacked: true
    }]
  },
  plugins: {
    filler: {
      propagate: false
    },
    'samples-filler-analyser': {
      target: 'chart-analyser'
    }
  }
};

var config = {
  type: 'doughnut',
  data: {
    datasets: [{
      data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
      ],
      backgroundColor: [
        window.chartColors.red,
        window.chartColors.orange,
        window.chartColors.yellow,
        window.chartColors.green,
        window.chartColors.grey,
      ],
      label: 'Dataset 1'
    }],
    labels: [
      'Red',
      'Orange',
      'Yellow',
      'Green',
      'Blue'
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      position: 'left',
    },
    title: {
      display: true,
      text: 'Porcentaje de tiempo dedicado a cada juego'
    },
    animation: {
      animateScale: true,
      animateRotate: true
    }
  }
};

var barChartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'Dataset 1',
    backgroundColor: window.chartColors.red,
    data: [
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor()
    ]
  }, {
    label: 'Dataset 2',
    backgroundColor: window.chartColors.blue,
    data: [
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor()
    ]
  }, {
    label: 'Dataset 3',
    backgroundColor: window.chartColors.green,
    data: [
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor(),
      randomScalingFactor()
    ]
  }]

};