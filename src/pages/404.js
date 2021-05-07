import * as React from "react"



import Layout from "../components/layout"
import Seo from "../components/seo"
import { Card, Section, Box } from "../components/section"


const NotFoundPage = () => (
  <Layout>
    <Seo title="404: Not found" />
    <h1 className="text-red-500"></h1>
    <p></p>
    <Section sectionColor="gray-50" sectionID="error">
    <Box title="Error 404" firstParagraph="You just hit a route that doesn&#39;t exist... the sadness."/>
    </Section>
  </Layout>
)

export default NotFoundPage
