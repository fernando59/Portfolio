import { useTranslation } from "react-i18next"

export const About = () => {
  const { t } = useTranslation('', { keyPrefix: 'about' })
  return (
    <section id="about"  className="h-screen mt-20">
        <h2 className="text-center text-6xl font-bold dark:text-white pb-10 border-b-orange-50 "><span className='border-solid 
        border-b-4 border-blue-600'>{t('title')}</span></h2>
    </section>
  )
}
