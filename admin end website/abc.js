document.addEventListener('DOMContentLoaded', function () {
    // Sample data for the pie chart
    var pieChartData = {
        labels: ['Watch Time', 'Active Watch Time'],
        datasets: [{
            data: [120, 90],
            backgroundColor: ['#3498db', '#2ecc71']
        }]
    };

    // Get the pie chart canvas element
    var pieChartCanvas = document.getElementById('pieChart');

    // Create the pie chart
    var pieChart = new Chart(pieChartCanvas, {
        type: 'pie',
        data: pieChartData
    });
});
