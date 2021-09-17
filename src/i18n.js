import { createI18n } from 'vue-i18n'
import en from '@/locales/en.json'
import ru from '@/locales/ru.json'

const i18n = createI18n({
  // legacy: false,
  // compositionOnly: false,
  // runtimeOnly: false,
  locale: 'ru',
  fallbackLocale: 'en',
  globalInjection: true,
  messages: { en, ru }
})

export default i18n
