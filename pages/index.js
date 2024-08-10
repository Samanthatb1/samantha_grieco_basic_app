import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Samantha Grieco!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <h1> Privacy Policy </h1>

       <p> Last updated: Aug 9 2024 </p <br>
       <p> Samantha Grieco ("us", "we", or "our") operates https://main--samantha-n-grieco-app.netlify.app/ (the "Site"). This page informs you of our policies regarding the collection, use and disclosure of Personal Information we receive from users of the Site. </p <br>
       <p> We use your Personal Information only for providing and improving the Site. By using the Site, you agree to the collection and use of information in accordance with this policy. </p <br>

        <h3> Information Collection And Use </h3>
        <p> While using our Site, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information may include, but is not limited to your name ("Personal Information"). </p <br>

    <h3> Log Data </h3>
    <p> Like many site operators, we collect information that your browser sends whenever you visit our Site ("Log Data"). This Log Data may include information such as your computer's Internet Protocol ("IP") address, browser type, browser version, the pages of our Site that you visit, the time and date of your visit, the time spent on those pages and other statistics. </p <br>

    <h3> Cookies </h3>
    <p> Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer's hard drive. Like many sites, we use "cookies" to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Site. </p <br>

  <h3> Security </h3>
    <p> The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security. </p <br>

    <h3> Changes To This Privacy Policy </h3>
    <p> This Privacy Policy is effective as of Aug 9 2024 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page. </p <br>
     <p> We reserve the right to update or change our Privacy Policy at any time and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy. </p <br>
    <p> If we make any material changes to this Privacy Policy, we will notify you either through the email address you have provided us, or by placing a prominent notice on our website. </p <br>
    
      </main>

      <Footer />
    </div>
  )
}
