// Define URL for data
const crimedata = '/crimedata'

// Fetch the JSON data and console log it
d3.json(crimedata).then((data) => {
    console.log(data)

    // Load the "neighborhood" data for the dropdown menu
    for (var i = 0; i < 20315; i++) {
        var name = data[i].neighborhood;
        d3.select('#selDataset').selectAll('option').data(name).enter().append('option').text((data) => {
            return data;
        });
    }    
    console.log(name);
});

// // Create a function to create the plots and populate the Demographics table when the user selects a name
function optionChanged(value) {
    d3.json(crimedata).then((data) => {
        var neighborhoods = data[i].neighborhood;
        var crimeType = [];
        var weekday = [];
        var weekdayArray = [];
        var weekdayCount = {}

        // Loop through the samples array and pull the data for the selected "name"
        neighborhoods.forEach(neighbor => {
            if(neighbor.neighborhood == value) {
                crimeType = neighbor.crime_type;
                weekday = neighbor.occur_day;
                weekday.map(weekdaySelection => {
                    weekdayArray.push(`Weekday: ${weekdaySelection}`);
                });
                // for (const element of weekdayArray){
                //     if (weekdayCount[element]){
                //         weekdayCount[element] += 1;
                //     } else {
                //         weekdayCount[element] = 1;
                //     }       
                // };
            }
        });
        

        // // Is there a way to add the total crimes based on the selection and the most popular day of the week?
        
        // // Bar Chart
        // // Setup Block
        // const barData =  {
        //     labels: weekdayArray,
        //     datasets: [{
        //         label: 'Crime by Day of the Week',
        //         data: weekdayCount,
        //         backgroundColor: [
        //             'rgba(255,26,104, 1)',
        //             'rgba(54,162,235, 1)',
        //             'rgba(255,206,86, 1)',
        //             'rgba(0,0,0, 1)',
        //             'rgba(153, 102, 255, 1)',
        //             'rgba(255, 159, 64, 1)',
        //             'rgbda(0,0,255, 1)'
        //         ],
        //         borderColor: [
        //             'rgba(0,0,0, 1)',
        //             'rgba(0,0,0, 1)',
        //             'rgba(0,0,0 1)',
        //             'rgba(0,0,0, 1)',
        //             'rgba(0,0,0, 1)',
        //             'rgba(0, 0, 0, 1)'
        //         ],
        //         borderWidth: 1
        //     }]
        // };
        // // Config Block
        // const config = {
        //     type: 'bar',
        //     barData, 
        //     options: {} 
        // };
        // // Render Block
        // const myChart = new Chart(
        //     document.getElementById('myChart'),
        //     config);
        
        // // Pie Chart
        // // Setup Block
        // const pieData =  {
        //     labels: ['Larceny-From Vehicle', 'Larceny-Non Vehicle', 'Burgalry', 'AGG Assault', 'Robbery', 'Auto Theft', 'Homicide'],
        //     datasets: [{
        //         label: 'Popular Crime Types',
        //         data: [12, 19, 3, 5, 2, 3, 7],
        //         backgroundColor: [
        //             'rgba(255,0,0, 1)',
        //             'rgba(0,230,64, 1)',
        //             'rgba(249, 105, 14, 1)',
        //             'rgba(255,255,0, 1)',
        //             'rgba(15,10,222, 1)',
        //             'rgba(153, 102, 255, 1)',
        //             'rgba(0, 0, 0, 1)'
        //         ],
        //         borderColor: [
        //             'rgba(255,0,0, 1)',
        //             'rgba(0,230,64, 1)',
        //             'rgba(249, 105, 14, 1)',
        //             'rgba(255,255,0, 1)',
        //             'rgba(15,10,222, 1)',
        //             'rgba(153, 102, 255, 1)',
        //             'rgba(0, 0, 0, 1)'
        //         ],
        //         borderWidth: 1
        //     }]
        // }
        // // Config Block
        // const config1 = {
        //     type: 'pie',
        //     pieData, 
        //     options: {
        //         plugins: {
        //             title: {
        //                 display: true,
        //                 text: 'Crime Type Distribution'
        //             }
        //         }
        //     } 
        // };
        // // Render Block
        // const myChart1 = new Chart(
        //     document.getElementById('pieChart'),
        //     config1
        // );
    
    });
}