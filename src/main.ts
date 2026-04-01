import { createApp } from 'vue'
import { createHead } from '@unhead/vue/client'
import App from './App.vue'
import router from './router'
import {
  vMotion,
  vMotionFade,
  vMotionFadeLeft,
  vMotionFadeRight,
  vMotionScale,
} from './directives/motion'
import './styles/main.css'

const app = createApp(App)
const head = createHead()

app.use(head)
app.use(router)

app.directive('motion', vMotion)
app.directive('motion-fade', vMotionFade)
app.directive('motion-fade-left', vMotionFadeLeft)
app.directive('motion-fade-right', vMotionFadeRight)
app.directive('motion-scale', vMotionScale)

app.mount('#app')
