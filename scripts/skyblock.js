angular.module('skyblockStatusViewer', [])
	.config(function($interpolateProvider) {
		$interpolateProvider.startSymbol('[[').endSymbol(']]');
	})
	.controller('skyblockStatusViewerController', ['$scope', '$http', '$filter', '$interval', function($scope, $http, $filter, $interval) {
		var statusViewer = this;
		
		statusViewer.statuses = {}
		
		statusViewer.refresh = function() {
			$http({
				method: 'GET',
				url: '/check/status/skyblock/detail.json'
			}).success(function(data, status) {
				var percent = "" + data["#ConquerPctInt"] + "." + data["#ConquerPctDec"];
				
				data.percent = percent;
				data.percent_style = {'width': percent + "%"};
				
				statusViewer.statuses = data;
				
				statusViewer.recalculate();
				
				statusViewer.job_count = [[], [], [], [], [], [], []];
				angular.forEach(data.players, function(p, name){
					statusViewer.job_count[p.Job].push(name);
					p.level_percent_style = {'width': "" + ((p.NextExp - p.ExpToLevel) / p.NextExp) * 100 + "%"};
				});
			});
		}
		
		statusViewer.recalculate = function() {
			if (!statusViewer.statuses.last_modified_at) {
				return;
			}
			
			var date = new Date(statusViewer.statuses.last_modified_at * 1000);
			
			statusViewer.statuses.last_modified_at_string = $filter('date')(
				date, "yyyy/MM/dd HH:dd:ss");
			
			statusViewer.elapsed_sec = parseInt(( (new Date()).getTime() - date.getTime() ) / 1000);
		}
		
		statusViewer.refresh();
		
		$interval(statusViewer.refresh,     1000 * 3);
		$interval(statusViewer.recalculate, 1000);
	}])
	.run(['$rootScope', '$window', '$http', function($rootScope, $window, $http) {
	}]);
