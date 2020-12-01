import React from 'react'

import Layout from "../components/layout"
import SEO from "../components/seo"
import CallToAction from '../components/call-to-action'
import Users from '../components/data-users'
import Hero from '../components/hero'
import Services from '../components/services'


const IndexPage = () => (
  <Layout>
    <SEO title="Huddle Landing Page with Curved " />
    <Hero />
    <Users />
    <Services />
    <CallToAction
      title="Ready To Build Your Community?"
      buttonText="Get Started For Free"
    />
  </Layout>
)

export default IndexPage
