import React, { useState, useEffect } from 'react';
import Layout from "../components/layout"
import Seo from "../components/seo"
import '../main.scss'
const env = process.env.NODE_ENV || 'development';
console.log(env);
console.log(process.env.ACCSESS_TOKEN);

const IndexPage = () => {
  return (
    <Layout>
    </Layout>
  )

}

export default IndexPage
