import * as React from "react"
import Hero from "../components/hero"
import Seo from "../components/seo"


import Layout from "../components/layout"
import Section from "../components/section"

const IndexPage = () => (
  <Layout>
    <Seo title="Agency"/>
    <Hero />
    <Section sectionColor="gray-50" sectionID="about">
      <div className="container xl:w-2/6 xl:min-h-2/4 shadow-md overflow-hidden flex-shrink">
      <p className="text-5xl m-16">About Us.</p>
      <p className="m-16">We are a business focused on Influencer marketing. Whether you would like to work with famous YouTuber on promoting your product, or a streamer that will play your game – let us know! We have great contact with plenty of influencers and we know fair prices of cooperation.</p>
      <p className="m-16">Additionally we can provide you with video and photo content from Japan. </p>
      </div>
      </Section>
    {/* <Section sectionColor="gray-50"><p>BEBEBEE</p></Section>
    <Section sectionColor="gray-100"><p>PATOCHAN</p></Section> */}


  </Layout>
)

export default IndexPage
