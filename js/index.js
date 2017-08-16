

var app = new Vue({
	el:"#app",
	components:{
		'number-field':numberField
	},
	data:
	{
		pamadoroTime:20,
		restTime:10,
		numberOfSessions:5,
		sessionsStarted:false
	}
})