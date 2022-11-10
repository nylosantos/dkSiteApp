import { FooterCellphoneScreen } from "../footer/FooterCellphoneScreen";
import { Header } from "../header/Header";
import { Link } from "react-router-dom";

export function CellphonePrivacy() {
  return (
    <div className="bg-gray-100 w-screen flex flex-col items-center">
      <Header bgColor="bg-blackOpacity" shadow="shadow" colorScheme="blackAlpha" />
      <div className="w-5/6 h-full my-20 flex flex-col text-left gap-4">
        <h1 className="text-2xl font-bold text-poppins text-red-600">
          PRIVACY POLICY
        </h1>
        <p className="text-poppins text-base font-normal text-gray-800">
          This page describes how the site is managed regarding the processing
          of the personal data of users who consult it.
        </p>
        <p className="text-poppins text-base font-normal text-gray-800">
          This information is provided in accordance with GDPR EU 679/2016 only
          for the above-mentioned company’s website and not for any other
          websites that may be consulted by the user via links.
        </p>
        <p className="text-poppins text-base font-normal text-gray-800">
          The information is addressed to those who interact with the web
          services of the company Costa de Souza Daniel. accessible by
          electronic means from the address https://danielkosttas.com/.
        </p>
        <p className="text-poppins text-base font-normal text-gray-800">
          The online collection of personal data, the timing, and nature of the
          information are described below.
        </p>
        <br /> 
        <h3 className="font-bold font-poppins text-red-600 text-left">
          The data controller and processor. 
        </h3>
        <p className="text-poppins text-base font-normal text-gray-800">
          The data controller and processor is Costa de Souza Daniel, registered
          in Via Casette di Sopra n. 29 – 37060 Sona (VR).
        </p>
        <br />
        <h3 className="font-bold font-poppins text-red-600 text-left">
          Place of data processing. 
        </h3>
        <p className="text-poppins text-base font-normal text-gray-800">
          Processing related to the web services of this site takes place at the
          premises of the data controller and processor for relevant areas.
        </p>
        <p className="text-poppins text-base font-normal text-gray-800">
          No data from the web service is disclosed by the company to third
          parties unless strictly relevant to the purpose of the processing or
          required by law or regulation.
        </p>
        <br /> 
        <h3 className="font-bold font-poppins text-red-600 text-left">
          Purpose of processing. 
        </h3>
        <p className="text-poppins text-base font-normal text-gray-800">
          The personal data provided voluntarily and optionally by users who
          submit requests to receive information, or simply submit job
          applications by sending curricula in electronic format or by filling
          in online forms, are used solely for the purpose of performing the
          service or provision requested and are not disclosed to third parties
          unless disclosure is required by law or is strictly relevant and
          necessary for the fulfillment of the requests.
        </p>
        <p className="text-poppins text-base font-normal text-gray-800">
          In particular, personal data provided voluntarily by data subjects
          will be collected and processed, also with the aid of electronic
          means, directly and/or through delegated third parties (e-mail service
          companies, website hosting companies) for the following purposes:
        </p>
        <ul className="text-poppins marker:text-red-600 text-base font-normal text-gray-800 list-disc pl-5">
          <li>
            receive general, commercial, and/or administrative information
            pertaining to the company’s activities;
          </li>
          <li>
            assessing personal data and any CVs received in line with any
            internal requirements;
          </li>
          <li>
            for the Holder’s defense in court or in the preparatory stages of
            any legal proceedings against abuses arising from a
          </li>
          <li>unlawful use of the website or related services by the user;</li>
          <li>
            statistical purposes in an anonymous form (to assess the number of
            accesses, etc.).
          </li>
        </ul>
        <br /> 
        <h3 className="font-bold font-poppins text-red-600 text-left">
          Data security. 
        </h3>
        <p className="text-poppins text-base font-normal text-gray-800">
          Personal data are protected by technical, IT, organizational,
          logistical and procedural security measures against the risks of
          destruction or loss, even accidental, and against unauthorized access
          or unauthorized processing.
        </p>
        <p className="text-poppins text-base font-normal text-gray-800">
          These measures are updated periodically on the basis of technical
          progress, the nature of the data, and the specific features of the
          processing, and are constantly monitored and verified over time. Third
          parties that perform support activities of any kind for the provision
          of services by the site owner, in relation to which they perform
          personal data processing operations, are designated by the latter as
          data processors and are contractually bound to comply with the
          measures for the security and confidentiality of processing. In some
          cases, employees of third-party companies collaborating with the site
          owner may be designated as data processors, if the processing
          operations take place under the direct authority of the site owner.
        </p>
        <br /> 
        <h3 className="font-bold font-poppins text-red-600 text-left">
          Curriculum management. 
        </h3>
        <p className="text-poppins text-base font-normal text-gray-800">
          This information notice, drawn up in compliance with art. 13 of the
          European Regulation 679/2016, may also be used by Costa de Souza
          Daniel for any advertisements published for the search of personnel on
          sites or portals not directly managed by the company.
        </p>
        <p className="text-poppins text-base font-normal text-gray-800">
          The company will process CVs received by email or through third-party
          recruiting companies (publications on portals, etc.) to assess
          potential applications within the company or that may arise soon.
        </p>
        <p className="text-poppins text-base font-normal text-gray-800">
          Processing is carried out electronically, except for CVs received by
          ordinary mail.
        </p>
        <p className="text-poppins text-base font-normal text-gray-800">
          Curriculum online with recruitment purposes will be stored at the
          company’s premises for a period not exceeding one year and will be
          processed in full compliance with data protection regulations.
        </p>
        <p className="text-poppins text-base font-normal text-gray-800">
          CVs deemed irrelevant as well as those whose retention time has
          exceeded 12 months will be deleted.
        </p>
        <p className="text-poppins text-base font-normal text-gray-800">
          CVs will in any case be stored at the company’s premises and will not
          be disclosed to unauthorized third parties.
        </p>
        <p className="text-poppins text-base font-normal text-gray-800">
          Applicants are invited to submit CVs in pdf format.
        </p>
        <p className="text-poppins text-base font-normal text-gray-800">
          The information in accordance with Article 13 European Regulation
          679/2016 is available on the website at{" "}
          <Link to={"/cookie-policy"}>
            https://danielkosttas.com/cookie-policy/
          </Link>{" "}
          and will be handed out at the interview or meeting with the candidate.
        </p>
        <p className="text-poppins text-base font-normal text-gray-800">
          The purpose of processing related to the management of curriculum will
          involve activities strictly related to the evaluation, recruitment, or
          selection of personnel, with the aim of collaboration, recruitment on
          a fixed-term or open-ended basis, and internships.
        </p>
        <br /> 
        <h3 className="font-bold font-poppins text-red-600 text-left">
          Communication and dissemination of data. 
        </h3>
        <p className="text-poppins text-base font-normal text-gray-800">
          Personal data acquired from the website in question may only be
          processed by officially appointed personnel trained in confidentiality
          and security of personal data
        </p>
        <p className="text-poppins text-base font-normal text-gray-800">
          The areas of communication of personal data of data subjects may refer
          to:
        </p>
        <ul className="text-poppins marker:text-red-600 text-base font-normal text-gray-800 list-disc pl-5">
          <li>group companies for administrative-accounting purposes;</li>
          <li>
            to public bodies or offices in accordance with legal and/or
            contractual obligations;
          </li>
          <li>
            external data processors in the capacity of companies or consultants
            carrying out activities on behalf of the data controller that are
            instrumental to the proper functioning of the site and management of
            the information acquired through it;
          </li>
          <li>
            to the Postal Police for the determination of any harmful activities
            on the company’s site;
          </li>
          <li>
            to collaborators or service providers when the communication is
            necessary for the use of the company’s services by the person
            concerned.
          </li>
        </ul>
        <p className="text-poppins text-base font-normal text-gray-800">
          Personal data will not be disseminated.
        </p>
        <br /> 
        <h3 className="font-bold font-poppins text-red-600 text-left">
          Navigation data. 
        </h3>
        <p className="text-poppins text-base font-normal text-gray-800">
          The computer systems and software procedures used to operate this
          website acquire, during their normal operation, certain personal data
          whose transmission is implicit in the use of Internet communication
          protocols.
        </p>
        <p className="text-poppins text-base font-normal text-gray-800">
          This is information that by its very nature is not collected in order
          to be associated with identified interested parties, but which by its
          very nature could, through processing and association with data held
          by third parties, make it possible to identify users (e.g. IP
          addresses, the domain names of the computers used by users connecting
          to the site, the URI – Uniform Resource Identifier – addresses of the
          resources requested).
        </p>
        <p className="text-poppins text-base font-normal text-gray-800">
          This data is used for the sole purpose of obtaining anonymous
          statistical information on the use of the site and to check its
          correct functioning and is deleted immediately after processing.
        </p>
        <p className="text-poppins text-base font-normal text-gray-800">
          This site may disclose personal data that, if required by law, may be
          disclosed to the judicial authorities for purposes of defense of the
          State or the prevention, detection, or prosecution of offenses, to act
          to ensure the protection of the personal data of the persons concerned
          who use the online services of the site, for any defensive
          investigations referred to in Law No. 397 of 7 December 2000, or, in
          any case, to assert or defend a legitimate right and interest of the
          Data Controller in court, in compliance, however, with the principles
          of relevance and non-excess in relation to the purpose of processing.
        </p>
        <br /> 
        <h3 className="font-bold font-poppins text-red-600 text-left">
          Optional provision of data. 
        </h3>
        <p className="text-poppins text-base font-normal text-gray-800">
          Apart from what is specified for navigation data, the user is free to
          provide personal data to obtain the requested service
        </p>
        <p className="text-poppins text-base font-normal text-gray-800">
          The possible acquisition of other personal data through dedicated
          forms (e.g. job recruiting), will require an explicit acknowledgment
          of the information notice by the data subject as authorization to
          process his/her personal data.
        </p>
        <p className="text-poppins text-base font-normal text-gray-800">
          Failure to provide personal data as required by the website may result
          in the impossibility of obtaining what has been requested.
        </p>
        <p className="text-poppins text-base font-normal text-gray-800">
          The optional, explicit, and voluntary sending of electronic mail to
          the addresses indicated on this site entails the subsequent
          acquisition of the sender’s address, which is necessary to reply to
          requests, as well as any other personal data included in the message.
        </p>
        <br /> 
        <h3 className="font-bold font-poppins text-red-600 text-left">
          Method of treatment. 
        </h3>
        <p className="text-poppins text-base font-normal text-gray-800">
          Personal data are processed on paper and/or by automated means for the
          time strictly necessary to achieve the purposes for which they were
          collected. Specific security measures are observed to prevent the loss
          of data, unlawful or incorrect use and unauthorized access.
        </p>
        <br /> 
        <h3 className="font-bold font-poppins text-red-600 text-left">
          Data provided voluntarily by the user. 
        </h3>
        <p className="text-poppins text-base font-normal text-gray-800">
          The optional, explicit, and voluntary sending of electronic mail to
          the addresses indicated on this site entails the subsequent
          acquisition of the sender’s address, which is necessary to reply to
          requests, as well as any other personal data included in the message.
        </p>
      </div>
      <FooterCellphoneScreen />
    </div>
  );
}
