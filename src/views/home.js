import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Banner1 from '../components/banner1'
import Features24 from '../components/features24'
import Features25 from '../components/features25'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import CTA26 from '../components/cta26'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Bronze Joyous Crocodile</title>
        <meta property="og:title" content="Bronze Joyous Crocodile" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text10">HOME</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text11">ABOUT</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text12">BLOGS</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text13">COMMUNITY</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text14">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text15">About</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text16">Emotions</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text17">Join Us</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text18">Sign Up</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text19">Get Started</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text20">
              Welcome to Emostagram, your safe space for emotional connections.
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text21">
              Learn more about our mission and values.
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text22">
              Explore and express your emotions in a supportive environment.
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text23">
              Join our community and start your EQ journey.
            </span>
          </Fragment>
        }
        link41={
          <Fragment>
            <span className="home-text24">TEST</span>
          </Fragment>
        }
        logoSrc="bec960d2-07a2-4e00-8198-793dd6c8daf1"
        link411={
          <Fragment>
            <span className="home-text25">CHAT</span>
          </Fragment>
        }
      ></Navbar8>
      <Banner1
        content1={
          <Fragment>
            <span className="home-text26">
              Join a community of emotional connections and authentic
              interactions.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text27">Welcome to Emostagram !</span>
          </Fragment>
        }
        rootClassName="banner1root-class-name"
      ></Banner1>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text28">Emotion Sharing</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text29">EQ Learning</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text30">Authentic Connections</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text31">
              Share your emotions openly and authentically with a supportive
              community.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text32">
              Access resources and tools to enhance your emotional intelligence
              and personal growth.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text33">
              Connect with like-minded individuals who value genuine
              interactions and meaningful relationships.
            </span>
          </Fragment>
        }
        feature1ImgSrc="https://images.unsplash.com/photo-1736367427577-cd0c7e4a3e01?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE0fHxzaGFyaW5nJTIwaWxsdXN0fGVufDB8fHx8MTc1NTU3NzQ1Nnww&amp;ixlib=rb-4.1.0&amp;w=1500"
      ></Features24>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text34">Emotion Sharing</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text35">EQ Learning</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text36">Authentic Connections</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text37">
              Share your authentic emotions with a supportive community without
              judgment.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text38">
              Access resources and tools to enhance your emotional intelligence
              and personal growth.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text39">
              Connect with like-minded individuals who value genuine
              interactions and meaningful relationships.
            </span>
          </Fragment>
        }
        feature1ImgSrc="https://images.unsplash.com/photo-1733259295653-bd1ab4888185?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxzaGFyaW5nJTIwaWxsdXN0fGVufDB8fHx8MTc1NTU3NzQ1Nnww&amp;ixlib=rb-4.1.0&amp;w=1500"
      ></Features25>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text40">Create Your Profile</span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text41">Connect with Others</span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text42">Share Your Emotions</span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text43">Learn and Grow</span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text44">
              Set up your Emostagram profile by sharing your interests, goals,
              and what you hope to gain.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text45">
              Find and connect with like-minded individuals who are also focused
              on emotional intelligence &amp; connections.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text46">
              Express your feelings, thoughts, and experiences in a safe and
              supportive environment.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text47">
              Engage in discussions, participate in EQ-focused activities, and
              access resources to enhance your emotional intelligence journey.
            </span>
          </Fragment>
        }
        rootClassName="steps2root-class-name"
      ></Steps2>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text48">
              I&apos;ve learned so much about myself and others through
              Emostagram. The community here is incredibly supportive, and I
              feel like I can truly be myself without judgment.
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text49">
              As someone who struggles with expressing emotions, Emostagram has
              been a game-changer for me. I&apos;ve found a safe space to share
              my feelings and connect with others on a deeper level.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text50">
              I recommend Emostagram to all my clients who are looking to
              improve their emotional intelligence. It&apos;s a fantastic
              platform for personal growth and building meaningful
              relationships.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text51">
              The impact of Emostagram on my mental well-being has been
              profound. I no longer feel the pressure to conform to unrealistic
              standards, and instead, I focus on genuine connections and
              self-improvement.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text52">
              Emostagram has revolutionized the way we connect online. It&apos;s
              refreshing to see a platform that values emotional intelligence
              and authentic interactions over superficial measures of
              popularity.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text53">Testimonials</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text54">Sarah Johnson</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text55">Michael Chen</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text56">Emily Rodriguez</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text57">David Thompson</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text58">Therapist</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text59">Educator</span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text60">Student</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text61">Life Coach</span>
          </Fragment>
        }
      ></Testimonial17>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text62">Sign up now</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text63">
              Start your journey towards emotional intelligence and authentic
              connections.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text64">Join Emostagram today!</span>
          </Fragment>
        }
        rootClassName="cta26root-class-name"
      ></CTA26>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text65">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text66">Contact Us</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text67">Emostagram Headquarters</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text68">Support Center</span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text69">
              123 Emotions Street, EQ City, 45678
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text70">
              For any inquiries or assistance, please contact our support team
              at support@emostagram.com
            </span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text71">About Us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text72">Contact Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text73">FAQ</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text74">Terms of Service</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text75">Privacy Policy</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text76">Terms of Service</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text77">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text78">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
