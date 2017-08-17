
var app = new Vue({
	el:"#app",
	components:{
		'number-field':numberField
	},
	data:
	{
		pamadoroTime:20,//in min
		restTime:10,
		numberOfSessions:5,
		numberOfPassedSessions:0,
		state:'beforeStart',

	},
	computed:{
		isBeforStart(){
			return this.state == 'beforeStart'
		},
		passedTime(){
			return 0;
		},
		totalTime(){
			if(this.state == 'pamadoro')
				return this.passedTime;
			return this.restTime;
		}
	},

	methods:
	{
		startSessions()
		{
			this.startPamadero();
		},
		startPamadero()
		{
			var $this = this;
			$this.state='pamadoro';

			setTimeout(function () {
				$this.numberOfPassedSessions++;

				if($this.numberOfPassedSessions < $this.numberOfSessions)
					$this.startRest();
				else
					$this.end()

			}, $this.pamadoroTime*60000);
		},
		startRest()
		{
			var $this = this;
			$this.state='rest';
			setTimeout(function () {
				$this.startPamadero();
			}, $this.restTime*60000);
		},
		end()
		{
			this.state='end'
		},
		

	}

})