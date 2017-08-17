
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
		passedTime:0,

	},
	computed:{
		isBeforStart(){
			return this.state == 'beforeStart'
		},
		
		totalTime(){
			if(this.state == 'pamadoro')
				return this.pamadoroTime;
			return this.restTime;
		},
		progressClass()
		{
			if(this.state == 'pamadoro')
				return "progress is-primary";
			return "progress is-info";
		}
	},

	methods:
	{
		startSessions()
		{
			this.startPamadero();
			this.tick();
		},
		startPamadero()
		{
			var $this = this;
			$this.state='pamadoro';
			$this.passedTime = 0;

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
			$this.passedTime = 0;

			setTimeout(function () {
				$this.startPamadero();
			}, $this.restTime*60000);
		},
		end()
		{
			this.state='end'
		},
		tick(){
			var $this = this;
			setInterval(function () {
				$this.passedTime += 1/600;//add a second
			},100);
		}

	}

})