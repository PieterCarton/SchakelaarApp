import './node_modules/chart.js/dist/chart.umd.js'

const data = [
    {time: 0, price: 200},
    {time: 1, price: 210},
    {time: 2, price: 270},
    {time: 3, price: 100}
];

const config = {
    type: 'line',
    data: {
        labels: data.map(row => row.time.toString()),
        datasets: [
            { 
                label: 'Frank Energie Prijs (EUR/KWh)',
                data: data.map(row => row.price)
            }
        ]
    }
};

new Chart(
    document.getElementById('price-graph'),
    config
);