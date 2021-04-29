import * as React from "react"
import Hero from "../components/hero"
import Seo from "../components/seo"
import Form from "../components/form"


import Layout from "../components/layout"
import { Card, Section} from "../components/section"

const IndexPage = () => (
  <Layout>
    <Seo title="Agency"/>
    <Hero />
    <Section sectionColor="gray-50" sectionID="about">
      <Card title="About us." firstParagraph="We are a business focused on Influencer marketing. Whether you would like to work with famous YouTuber on promoting your product, or a streamer that will play your game – let us know! We have great contact with plenty of influencers and we know fair prices of cooperation." secondParagraph="Additionally we can provide you with video and photo content from Japan. " />
    </Section>
    <Section sectionColor="gray-50" sectionID="contact">
      <Form />
    </Section>
    {/* <Section sectionColor="gray-50"><p>BEBEBEE</p></Section>
    <Section sectionColor="gray-100"><p>PATOCHAN</p></Section> */}


  </Layout>
)

export default IndexPage
