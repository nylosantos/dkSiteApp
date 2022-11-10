import { FooterMidScreen } from "../footer/FooterMidScreen";
import { Header } from "../header/Header";
import { Link } from "react-router-dom";

export function MidCookie() {
  return (
    <div className="bg-gray-100 w-screen flex flex-col items-center">
      <Header bgColor="bg-blackOpacity" shadow="shadow" colorScheme="blackAlpha"/>
      <div className="w-5/6 h-full my-20 flex flex-col text-left gap-4">
        <h1 className="text-2xl font-bold text-poppins text-red-600 ">
          COOKIE POLICY
        </h1>
        <h3 className="font-bold font-poppins text-red-600 text-left">
          How this website uses cookies
        </h3>
        <p className="text-poppins text-base font-normal text-gray-800">
          Cookies are small text files stored on the user’s computer by
          websites. Cookies allow information about site navigation such as
          visit statistics. Cookies are used to facilitate navigation on the
          site and to improve its usefulness for the user.
        </p>
        <p className="text-poppins text-base font-normal text-gray-800">
          Below, in accordance with the provisions of the GDPR EU 679/2016 and
          applicable legislation, we provide information on the use of cookies,
          their types, and the request for consent.
        </p>
        <p className="text-poppins text-base font-normal text-gray-800">
          When you first visit this website, you will see a banner at the top of
          your screen informing you that this website uses the cookies described
          in this Policy. The banner asks the user if he/she would like more
          information and contains a link to open the corresponding page; the
          banner will remain active until the user has given or withheld
          consent.
        </p>
        <br /> 
        <h3 className="font-bold font-poppins text-red-600 text-left">
          Type of cookie 
        </h3>
        <p className="text-poppins text-base font-normal text-gray-800">
          There are different types of cookies:
        </p>
        <ul className="marker:text-red-600 text-poppins text-base font-normal text-gray-800 list-disc pl-5">
          <li className="my-3">
            <span className="text-red-600 font-bold">proprietary cookies</span>: used solely
            to anonymously identify the user’s browsing session and to make the
            website easy to navigate; a particular type of cookie, known as
            analytics, is then used by website operators to collect information,
            in aggregate form, on the number of users and how they visit the
            site and thus process general statistics on the service and its use
          </li>
          <li className="my-3">
            <span className="text-red-600 font-bold">third-party cookies</span>used to
            monitor and profile users during browsing, study their movements and
            web browsing or consumption habits (what they buy, what they read,
            etc.), also for the purpose of sending targeted and customized
            service advertisements
          </li>
        </ul>
        <p className="text-poppins text-base font-normal text-gray-800">
          Both proprietary and third-party cookies can be:
        </p>
        <ul className="marker:text-red-600 text-poppins text-base font-normal text-gray-800 list-disc pl-5">
          <li className="my-3">
            <span className="text-red-600 font-bold">technical</span>: subject to and
            readable only by the domain that created them;
          </li>
          <li className="my-3">
            <span className="text-red-600 font-bold">profiling</span>: subject to and created
            by domains outside the one the user is visiting.
          </li>
        </ul>
        <p className="text-poppins text-base font-normal text-gray-800">
          In addition, cookies can be:
        </p>
        <ul className="marker:text-red-600 text-poppins text-base font-normal text-gray-800 list-disc pl-5">
          <li className="my-3">
            <span className="text-red-600 font-bold">temporary</span>: a temporary or
            ‘session’ cookie is stored on your computer during your visit to a
            website and is deleted when you leave your Internet browser and/or
            switch off your computer, i.e.
          </li>
          <li className="my-3">
            <span className="text-red-600 font-bold">persistent</span>: a permanent or
            ‘persistent’ cookie is a cookie that remains stored in your terminal
            equipment until you delete it.
          </li>
        </ul>
        <p className="text-poppins text-base font-normal text-gray-800">
          For more information on cookies, please visit{" "}
          <a href="http://www.cookiecentral.com">
            http://www.cookiecentral.com
          </a>
        </p>
        <br />
        <h3 className="font-bold font-poppins text-red-600 text-left">
          Which cookies this website uses. 
        </h3>
        <p className="text-poppins text-base font-normal text-gray-800">
          The website of the company Costa de Souza Daniel corresponding to the
          address <Link to={"/"}>https://danielkosttas.com/</Link> uses the
          following cookies, the purpose, duration, and domain of which are
          given below:
        </p>
        <ul className="marker:text-red-600 text-poppins text-base font-normal text-gray-800 list-disc pl-5">
          <li className="my-3">
            <span className="text-red-600 font-bold">Technical name</span>: __utmz
          </li>
          <li className="my-3">
            <span className="text-red-600 font-bold">Type</span>: Google Analytics
          </li>
          <li className="my-3">
            <span className="text-red-600 font-bold">Function</span>: They collect
            information in anonymous form on the number of visitors, where the
            come from and the pages they visit
          </li>
          <li className="my-3">
            <span className="text-red-600 font-bold">Duration</span>: 6 months
          </li>
          <li className="my-3">
            <span className="text-red-600 font-bold">Domain</span>: danielkosttas.com
          </li>
        </ul>
        <span className="text-red-600 font-bold">proprietary cookies.</span>
        <ul className="marker:text-red-600 text-poppins text-base font-normal text-gray-800 list-disc pl-5">
          <li className="my-3">
            <span className="text-red-600 font-bold">Technical cookies:</span>
            <br />
            This site uses technical cookies exclusively to anonymously identify
            the user’s browsing session. The use of so-called session cookies
            (which are not permanently stored on the user’s computer and
            disappear when the browser is closed) is strictly limited to the
            transmission of session identifiers (consisting of random numbers
            generated by the server) necessary to enable the safe and efficient
            exploration of the site.
          </li>
          <li className="my-3">
            <span className="text-red-600 font-bold">Profiling cookies:</span>
            <br />
            This website does not use proprietary profiling cookies, i.e.
            cookies aimed at sending advertising messages based on the user’s
            browsing and preferences.
          </li>
        </ul>
        <span className="text-red-600 font-bold">third-party cookies.</span>
        <p className="text-poppins text-base font-normal text-gray-800">
          Analytics tools and plug-ins to interface with social networks
          installed on the site may store cookies. The{" "}
          <Link to={"/"}>https://danielkosttas.com/</Link> website has no
          control over the cookies that are used by third parties, so to learn
          more about this, please consult the privacy policies of these third
          parties as well as the options to disable the collection of this
          information, provided below.
        </p>
        <ul className="marker:text-red-600 text-poppins text-base font-normal text-gray-800 list-disc pl-5">
          <li className="my-3">
            <span className="text-red-600 font-bold">Analytics cookies:</span>
            <br />
            Analytics cookies, a service of Google Analytics, collect
            information on how the user uses the website. This site uses
            statistical cookies to obtain statistics on how its website is used
            and to help improve the site by measuring any errors that occur.
            Sometimes, some of these cookies are managed on behalf of this site
            by third parties, but this site does not allow these third parties
            to use cookies for purposes other than those listed above. To
            disable analytical cookies and prevent Google Analytics from
            collecting data on your browsing, you can download the browser
            add-on for disabling Google Analytics:{" "}
            <a href="https://tools.google.com/dlpage/gaoptout">
              https://tools.google.com/dlpage/gaoptout
            </a>
            .
          </li>
          <li className="my-3">
            <span className="text-red-600 font-bold">Social buttons and widgets:</span>
            <br />
            When visiting the website, it is also possible to find social
            buttons/widgets, i.e. those special ‘buttons’ depicting the icons of
            social networks (e.g. Facebook and Twitter). Social buttons/widgets
            allow users who are browsing to interact with a ‘click’ directly
            with social platforms. Thanks to your click on social
            buttons/widgets, the social network acquires data relating to your
            visit. Outside of these cases, in which you spontaneously choose
            with your click to share your browsing data with your chosen social
            networks, Costa de Souza Daniel does not share any browsing
            information or user data acquired through its sites with social
            networks
          </li>
        </ul>
        <ul className="marker:text-red-600 text-poppins text-base font-normal text-gray-800 list-disc pl-10">
          <li className="my-3">
            <span className="text-red-600 font-bold">Facebook(information):</span>
            <br />
            <a href="https://www.facebook.com/help/cookies/ ">
              https://www.facebook.com/help/cookies/
            </a>
          </li>
          <li className="my-3">
            <span className="text-red-600 font-bold">Facebook (configuration):</span>
            <br />
            log in to your account. Privacy section;
          </li>
          <li className="my-3">
            <span className="text-red-600 font-bold">Twitter (privacy policy):</span>
            <br />
            <a href="https://twitter.com/privacy?lang=it">
              https://twitter.com/privacy?lang=it
            </a>
          </li>
          <li className="my-3">
            <span className="text-red-600 font-bold">
              Twitter (cookie policy and configuration):
            </span>
            <br />
            <a href="https://help.twitter.com/pt/rules-and-policies/twitter-cookies#">
              https://help.twitter.com/pt/rules-and-policies/twitter-cookies#
            </a>
          </li>
          <li className="my-3">
            <span className="text-red-600 font-bold">Linkedin (privacy policy):</span>
            <br />
            <a href="https://www.linkedin.com/legal/privacy-policy">
              https://www.linkedin.com/legal/privacy-policy
            </a>
          </li>
          <li className="my-3">
            <span className="text-red-600 font-bold">
              Linkedin (cookie policy and configuration):
            </span>
            <br />
            <a href="https://www.linkedin.com/legal/cookie-policy?trk=hb_ft_cookie">
              https://www.linkedin.com/legal/cookie-policy?trk=hb_ft_cookie
            </a>
          </li>
          <li className="my-3">
            <span className="text-red-600 font-bold">Instagram (privacy policy):</span>
            <br />
            <a href="https://instagram.com/about/legal/privacy">
              https://instagram.com/about/legal/privacy
            </a>
          </li>
          <li className="my-3">
            <span className="text-red-600 font-bold">Google+ information:</span>
            <br />
            <a href="https://policies.google.com/technologies/cookies?hl=it&gl=it">
              https://policies.google.com/technologies/cookies?hl=it&gl=it
            </a>
          </li>
          <li className="my-3">
            <span className="text-red-600 font-bold">Google+(configuration):</span>
            <br />
            <a href="https://policies.google.com/technologies/cookies?hl=it&gl=it#managing-cookies">
              https://policies.google.com/technologies/cookies?hl=it&gl=it#managing-cookies
            </a>
          </li>
        </ul>
        <br /> 
        <h3 className="font-bold font-poppins text-red-600 text-left">
          Blocking or Deleting Cookies
        </h3>
        <p className="text-poppins text-base font-normal text-gray-800">
          If you wish, you can delete the cookies stored in your browser or even
          block them from being sent automatically.
        </p>
        <p className="text-poppins text-base font-normal text-gray-800">
          Blocking certain cookies may affect certain functionalities of the
          site and consequently its use. Below we list the main browsers used
          and links to the relevant pages with the necessary information on
          cookie management:
        </p>
        <ul className="marker:text-red-600 text-poppins text-base font-normal text-gray-800 list-disc pl-5">
          <li className="my-3">Internet Explorer</li>
          <li className="my-3">Firefox</li>
          <li className="my-3">Chrome</li>
          <li className="my-3">Opera</li>
          <li className="my-3">Safari</li>
        </ul>
      </div>
      <FooterMidScreen />
    </div>
  );
}
