var numberField = {
	template:`
		<div class="field">
			<label class="label">{{lable}}</label>
			<div class="control">
				<input class="input" type="number" 
				:placeholder="placeholder" :value="value"
				 @input="inputChanged($event.target.value)">
	  		</div>
		</div>
	`,
	props: ['lable','placeholder','value'],
	methods:{
		inputChanged(val)
		{
			this.$emit('input',val);
		}
	}
	

}