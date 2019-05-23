import Vue from 'vue'
import 'tui-editor/dist/tui-editor.css';
import 'tui-editor/dist/tui-editor-contents.css';
import 'highlight.js/styles/github.css';
import { Editor, Viewer } from '@toast-ui/vue-editor'

Vue.component('tui-editor', Editor)
Vue.component('tui-viewer', Viewer)

