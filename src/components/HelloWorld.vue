<template>
	<div class="hello">
		<h1>{{ msg }}</h1>
		<input type="number" v-model="x" />
		<p>
			square: {{ square }}
		</p>
		<p>
			square2: {{ square2 }}
		</p>
	</div>
</template>

<script lang="ts">
import Vue from 'vue';

import Worker from "worker-loader!./my.worker";

export default Vue.extend({
	name: 'HelloWorld',
	props: {
		msg: String,
	},
	data(){
		const worker = new Worker();
		return{
			worker,
			x: 0,
			square: 0,
			square2: 0,
		}
	},
	watch:{
		x: function(){
			this.worker.postMessage({ x: this.x });
		}
	},
	mounted(){
		this.worker.postMessage({ x: this.x });

		this.worker.onmessage = (event: any) => {
			console.log(event)
			this.square = event.data.bar
		};

		this.worker.addEventListener("message", (event: any) => {
			console.log(event)
			this.square2 = event.data.bar
		});
	}
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	h3 {
		margin: 40px 0 0;
	}
	ul {
		list-style-type: none;
		padding: 0;
	}
	li {
		display: inline-block;
		margin: 0 10px;
	}
	a {
		color: #42b983;
	}
</style>
