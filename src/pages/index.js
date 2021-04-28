import * as React from "react"
import Hero from "../components/hero"

import Layout from "../components/layout"
import Section from "../components/section"

const IndexPage = () => (
  <Layout>
    <Hero />
    <Section sectionColor="gray-100">BLABLABLA</Section>
    <Section sectionColor="gray-50"><p>BEBEBEE</p></Section>
    <Section sectionColor="gray-100"><p>PATOCHAN</p></Section>


  </Layout>
)

export default IndexPage
