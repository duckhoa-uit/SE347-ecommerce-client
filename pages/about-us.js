import CommentSection from '@components/about-us/comment-section';
import HeaderSection from '@components/about-us/header-section';
import Logo from '@components/about-us/logo';
import Team from '@components/about-us/team';
import { MainLayout } from '@layouts/main'
import React from 'react'

const AboutUs=()=> {
  return (
    <div>
      <HeaderSection />
      <CommentSection />
      <Logo />
      <Team />
    </div>
  )
}

AboutUs.Layout=MainLayout;
export default AboutUs;
