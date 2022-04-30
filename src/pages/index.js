import React, { useState, useEffect } from 'react';
import Layout from "../components/layout"
import Seo from "../components/seo"
import '../main.scss'

const IndexPage = () => {
  return (
    <Layout>
        <Seo title="アトリエ出本" description='広島県東広島市志和町の山里で、柿渋染や鯉のぼり、大漁旗、藍古布を用いて洋服を製作しています。' lang='ja'/>
    </Layout>
  )

}

export default IndexPage
