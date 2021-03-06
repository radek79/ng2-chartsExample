import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

/* an example of how to import a third party libary into ionic 2*/
/*import Chart from 'chart.js/src/chart.js'*/

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
  
})
export class AboutPage {

	public datasets = [{
		label: "# of Votes",
		data: [12, 19, 3, 5, 2, 3]
	}];
	public labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];
	public options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };

	constructor(public navCtrl: NavController) {
	}

	ngOnInit() { 
		var ctx = document.getElementById("myChart");
		/*var myChart = new Chart(ctx, {
		    type: 'bar',
		    data: {
		        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
		        datasets: [{
		            label: '# of Votes',
		            data: [12, 19, 3, 5, 2, 3],
		            backgroundColor: [
		                'rgba(255, 99, 132, 0.2)',
		                'rgba(54, 162, 235, 0.2)',
		                'rgba(255, 206, 86, 0.2)',
		                'rgba(75, 192, 192, 0.2)',
		                'rgba(153, 102, 255, 0.2)',
		                'rgba(255, 159, 64, 0.2)'
		            ],
		            borderColor: [
		                'rgba(255,99,132,1)',
		                'rgba(54, 162, 235, 1)',
		                'rgba(255, 206, 86, 1)',
		                'rgba(75, 192, 192, 1)',
		                'rgba(153, 102, 255, 1)',
		                'rgba(255, 159, 64, 1)'
		            ],
		            borderWidth: 1
		        }]
		    },
		    options: {
		        scales: {
		            yAxes: [{
		                ticks: {
		                    beginAtZero:true
		                }
		            }]
		        }
		    }
		});*/
	}
}
