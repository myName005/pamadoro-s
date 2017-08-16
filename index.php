<!DOCTYPE html>
<html>
<head>
	<title>Pamadoro</title>
	<link rel="stylesheet" type="text/css" href="css/bulma.css">
	<script type="text/javascript" src="js/vue@2.4.2.js"></script>

	<script type="text/javascript" src="js/index.js"></script>
</head>
<body>
<section class="section" id="app">

    <div class="container box">
		<h1 class="title">
			Pamadoro
		</h1>
		<p class="subtitle">
			Pamadoro sessions
		</p>
		<div class="columns">
			<div class="column"> 
				<number-field v-model:value="pamadoroTime" 
					lable="Pamadoro time" placeholder='Pamadoro time'></number-field>
			</div>
			<div class="column"> 
				<number-field v-model:value="restTime" 
					lable="Rest time" placeholder='Rest time'></number-field>
			</div>
			<div class="column"> 
				<number-field v-model:value="numberOfSessions" 
					lable="Number of sessions" placeholder='Number of sessions'></number-field>
			</div>
		</div>
		
		<button class="button is-primary">Start</button>
    </div>

</section>

<script type="text/javascript" src="js/numberField.js"></script>
<script type="text/javascript" src="js/index.js"></script>
</body>
</html>
