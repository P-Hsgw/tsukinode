import * as React from "react"
import Seo from "../components/seo"

import Hero from "../components/hero"
import Form from "../components/form"
import Layout from "../components/layout"
import { Card, Section, Box } from "../components/section"

const IndexPage = () => (
  <Layout>
    <Seo title="Agency" description="Influencer Marketing agency. We will help you get the best prices for Twitch and YouTube content creators."/>
    <Hero />
    <Section sectionColor="gray-50" sectionID="about">
      <Card
        title="About us."
        firstParagraph="We are a business focused on Influencer marketing. Whether you would like to work with famous YouTuber on promoting your product, or a streamer that will play your game – let us know! We have great contact with plenty of influencers and we know fair prices of cooperation."
        secondParagraph="Additionally we can provide you with video and photo content from Japan. "
      />
    </Section>
  
    <Section sectionColor="gray-50" sectionID="focus">
      <Box title={"Influencer Marketing"} firstParagraph={"We will prepare and execute an influencer campaign for you. With years of experience on Twitch and YouTube, we are able to provide you with detailed strategy tailored for your business. Fair pricing and big range of influencers from all over the world - that's our strength."}/>
      <Box title={"Photography"} firstParagraph={"We are located in Tokyo. If you need zen-themed photos, or you are preparing next Ghostrunner campaign - hit us up. We will define your goal, chose perfect location, make photos with our professional hardware and edit them, so they will perfectly fitt your needs"}/>
      <Box title={"Online Marketing"} firstParagraph={"We help companies creatively and strategically connect with their target customer. Our integrated services include: strategic planning, design, content creation, social media marketing, podcast creation, giveaways, competitions and much more."}/>

    </Section>
    <Section sectionColor="gray-50" sectionID="contact">
      <Form />
    </Section>
  </Layout>
)

export default IndexPage
