<template>
	<div class="page-content-wrapper">
		<div style="margin: 24px" class="bg-white">
			
		    <tui-editor :ref="'tuiEditor'" mode="wysiwyg" v-model="editorText"/>
		    <button @click="getHtml()" style="width: 100%; height: 36px; font-size: 15px; color: #f9f9f9; outline: 0; border: none; background-color: #444; border-radius: 4px;">Get HTML</button>
		    <button @click="getHtml()" style="width: 100%; height: 36px; font-size: 15px; color: #f9f9f9; outline: 0; border: none; background-color: #444; border-radius: 4px;">Get Markdown</button>
		    <br><br>
		    <button @click="test()" style="width: 100%; height: 36px; font-size: 15px; color: #f9f9f9; outline: 0; border: none; background-color: #444; border-radius: 4px;">test</button>
		</div>
	</div>
</template>

<script type="text/javascript">
export default {
	data () {
		return {
			editorText: ''
		}
	},
	methods: {
		test () {
			console.log('test')
		},
		getHtml () {
			console.log('getHtml')
			console.log(this.$refs.tuiEditor.invoke('getHtml'))
			console.log(this.$refs.tuiEditor.invoke('getMarkdown'))
		}
	}
}
</script>