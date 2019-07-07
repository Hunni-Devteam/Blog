// main.js
import Vue from 'vue'
import VueMoment from 'vue-moment'
import moment from 'moment'

require('moment/locale/ko')
moment.locale('ko')

Vue.use(VueMoment, { moment })