import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
// import readMarkdown from '@/utils/readMarkdown'

export async function getStaticProps(props) {
  // const content = {
  //   en: readMarkdown('en', 'content.md'),
  //   br: readMarkdown('br', 'content.md'),
  // }

  const translations = await serverSideTranslations(props.locale, ['common'])

  return {
    props: {
      ...props,
      ...translations,
      // markdowns: { content },
    },
  }
}

function Index() {
  return null
}

export default Index
