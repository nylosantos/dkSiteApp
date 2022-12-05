import ReactGA from "react-ga4";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import { ContactFormData } from "../../@types/form";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import { contactUsDesktop } from "../trackEvents/useFacebookPixelEvent";
import useGoogleAnalyticsEventTracker from "../trackEvents/useGoogleAnalyticsEventTracker";

interface ContactFormProps {
  gaEventTrackerCategory: string;
  gaEventTrackerAction: string;
  gaEventTrackerLabel: string;
  onClose: () => void;
}

export function ContactForm({
  onClose,
  gaEventTrackerCategory,
  gaEventTrackerAction,
  gaEventTrackerLabel,
}: ContactFormProps) {
  // Reack Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      howDidYouHearAboutUs: "How did your hear about us?",
      websiteAndMobileApp: false,
      immersiveShows: false,
      uxUi: false,
      brandingExperiences: false,
      vrAr: false,
      games: false,
      socialMedia: false,
      other: false,
      wantHelp: false,
      details: "",
      newsletter: true,
    },
  });

  // State to Change Submit Button to Close Button
  const [closeContact, setCloseContact] = useState(false);

  // Set Token to reCaptcha
  const [recaptchaToken, setRecaptchaToken] = useState<string>();

  // Update reCaptcha token when submit
  const updateRecaptchaToken = (token: string | null) => {
    setRecaptchaToken(token as string);
  };

  // Google Analytics Event Tracker Name
  const gaEventTracker = useGoogleAnalyticsEventTracker(gaEventTrackerCategory);

  // reCaptcha Key
  const recaptchaKey = "6LeC50AiAAAAAEPsras_i1k16udEkY3km-_saOoM";
  const recaptchaRef = useRef<any>();

  // Submit Function
  async function onSubmit(formData: ContactFormData) {
    try {
      await emailjs.send(
        "service_p4wl9k1",
        "template_ife62n9",
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          howDidYouHearAboutUs: formData.howDidYouHearAboutUs,
          websiteAndMobileApp: formData.website ? "Sim" : "Não",
          immersiveShows: formData.mobileApp ? "Sim" : "Não",
          uxUi: formData.marketingAutomation ? "Sim" : "Não",
          brandingExperiences: formData.augmentedReality ? "Sim" : "Não",
          vrAr: formData.emailMarketing ? "Sim" : "Não",
          games: formData.branding ? "Sim" : "Não",
          socialMedia: formData.socialMedia ? "Sim" : "Não",
          other: formData.maketingOther ? "Sim" : "Não",
          wantHelp: formData.wantHelp ? "Sim" : "Não",
          details: formData.details,
          newsletter: formData.newsletter ? "Sim" : "Não",
          "g-recaptcha-response": recaptchaToken,
        },
        "BHvWwObup8GzEUeQ4"
      );
      // Google Analytics Tracker
      gaEventTracker(gaEventTrackerAction, gaEventTrackerLabel);
      ReactGA.event({
        category: gaEventTrackerCategory,
        action: gaEventTrackerAction,
        label: gaEventTrackerLabel,
      });
      // Facebook Pixel
      contactUsDesktop();
      toast.success(`✅ Thanks, someone will be in touch shortly.`, {
        position: "top-right",
        autoClose: 7000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      recaptchaRef.current.reset();
      reset();
      setCloseContact(true);
      setTimeout(onClose, 8000);
    } catch (error: any) {
      console.log("Error =>", error);
      if (error.status === 400) {
        toast.error(`🚫 Please fill the Captcha.`, {
          position: "top-right",
          autoClose: 7000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.error(
          `🚫 Sorry, there was a problem. Please try again or contact support.`,
          {
            position: "top-right",
            autoClose: 7000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          }
        );
        reset();
      }
    }
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        limit={5}
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <main className="flex flex-col gap-4">
          <div className="flex gap-4">
            {errors.firstName ? (
              <input
                {...register("firstName", { required: true })}
                type="text"
                name="firstName"
                placeholder="First Name is required *"
                className="border border-red-600 py-2 px-4 outline-none w-full placeholder:text-red-600 text-gray-600 bg-transparent"
              />
            ) : (
              <input
                {...register("firstName", { required: true })}
                type="text"
                name="firstName"
                placeholder="First Name *"
                className="border border-gray-900 py-2 px-4 outline-none w-full placeholder:text-gray-600 text-gray-600 bg-transparent"
              />
            )}
            {errors.lastName ? (
              <input
                {...register("lastName", { required: true })}
                type="text"
                name="lastName"
                placeholder="Last Name is required *"
                className="border border-red-600 py-2 px-4 outline-none w-full placeholder:text-red-600 text-gray-600 bg-transparent"
              />
            ) : (
              <input
                {...register("lastName", { required: true })}
                type="text"
                name="lastName"
                placeholder="Last Name *"
                className="border border-gray-900 py-2 px-4 outline-none w-full placeholder:text-gray-600 text-gray-600 bg-transparent"
              />
            )}
          </div>
          <div className="flex gap-4">
            {errors.email ? (
              <input
                {...register("email", { required: true })}
                type="email"
                name="email"
                placeholder="E-mail is required *"
                className="border border-red-600 py-2 px-4 outline-none w-full placeholder:text-red-600 text-gray-600 bg-transparent"
              />
            ) : (
              <input
                {...register("email", { required: true })}
                type="email"
                name="email"
                placeholder="E-mail *"
                className="border border-gray-900 py-2 px-4 outline-none w-full placeholder:text-gray-600 text-gray-600 bg-transparent"
              />
            )}
            {errors.phone ? (
              <input
                {...register("phone", { required: true })}
                placeholder="Phone is required *"
                type="text"
                name="phone"
                className="border border-red-600 py-2 px-4 outline-none w-full placeholder:text-red-600 text-gray-600 bg-transparent"
              />
            ) : (
              <input
                {...register("phone", { required: true })}
                type="text"
                name="phone"
                placeholder="Phone *"
                className="border border-gray-900 py-2 px-4 outline-none w-full placeholder:text-gray-600 text-gray-600 bg-transparent"
              />
            )}
          </div>
          <div className="flex gap-4 mb-8">
            {errors.company ? (
              <input
                {...register("company", { required: true })}
                type="text"
                name="company"
                placeholder="Company is required *"
                className="border border-red-600 py-2 px-4 outline-none w-full placeholder:text-red-600 text-gray-600 bg-transparent"
              />
            ) : (
              <input
                {...register("company", { required: true })}
                type="text"
                name="company"
                placeholder="Company *"
                className="border border-gray-900 py-2 px-4 outline-none w-full placeholder:text-gray-600 text-gray-600 bg-transparent"
              />
            )}
            <select
              {...register("howDidYouHearAboutUs", { required: true })}
              name="howDidYouHearAboutUs"
              className="border border-gray-900 py-2 px-4 outline-none w-full text-gray-600 bg-transparent"
              defaultValue="How did your hear about us?"
            >
              <option disabled value="How did your hear about us?">
                How did your hear about us? *
              </option>
              <option value="Google">Google</option>
              <option value="Web Design Rankings">Web Design Rankings</option>
              <option value="Up City">Up City</option>
              <option value="Design Rush">Design Rush</option>
              <option value="10 Best">10 Best</option>
              <option value="Clutch">Clutch</option>
              <option value="Top Design Firms">Top Design Firms</option>
              <option value="Good Firms">Good Firms</option>
              <option value="Agency Spotter">Agency Spotter</option>
              <option value="Bing">Bing</option>
              <option value="Top Interactive Agencies">
                Top Interactive Agencies
              </option>
              <option value="Social Media">Social Media</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="text-xl font-semibold">Type of Project</div>
          <div className="w-full flex gap-4">
            <div className="w-full flex gap-2 items-center font-semibold">
              <input
                {...register("websiteAndMobileApp")}
                type="checkbox"
                name="websiteAndMobileApp"
                className="w-4 h-4 bg-transparent"
              />
              <label htmlFor="websiteAndMobileApp">Website and Mobile App</label>
            </div>
            <div className="w-full flex gap-2 items-center font-semibold">
              <input
                {...register("immersiveShows")}
                type="checkbox"
                name="immersiveShows"
                className="w-4 h-4 bg-transparent"
              />
              <label htmlFor="immersiveShows">Immersive Shows</label>
            </div>
          </div>
          <div className="w-full flex gap-4">
            <div className="w-full flex gap-2 items-center font-semibold">
              <input
                {...register("uxUi")}
                type="checkbox"
                name="uxUi"
                className="w-4 h-4 bg-transparent"
              />
              <label htmlFor="uxUi">UX & UI</label>
            </div>
            <div className="w-full flex gap-2 items-center font-semibold">
              <input
                {...register("brandingExperiences")}
                type="checkbox"
                name="brandingExperiences"
                className="w-4 h-4 bg-transparent"
              />
              <label htmlFor="brandingExperiences">Branding Experiences</label>
            </div>
          </div>
          <div className="w-full flex gap-4">
            <div className="w-full flex gap-2 items-center font-semibold">
              <input
                {...register("vrAr")}
                type="checkbox"
                name="vrAr"
                className="w-4 h-4 bg-transparent"
              />
              <label htmlFor="vrAr">VR & AR (Virtual & Augmented Reality)</label>
            </div>
            <div className="w-full flex gap-2 items-center font-semibold">
              <input
                {...register("games")}
                type="checkbox"
                name="games"
                className="w-4 h-4 bg-transparent"
              />
              <label htmlFor="games">Games</label>
            </div>
          </div>
          <div className="w-full flex gap-4 mb-8">
            <div className="w-full flex gap-2 items-center font-semibold">
              <input
                {...register("socialMedia")}
                type="checkbox"
                name="socialMedia"
                className="w-4 h-4 bg-transparent"
              />
              <label htmlFor="socialMedia">Social Media Experiences</label>
            </div>
            <div className="w-full flex gap-2 items-center font-semibold">
              <input
                {...register("other")}
                type="checkbox"
                name="other"
                className="w-4 h-4 bg-transparent"
              />
              <label htmlFor="other">Other</label>
            </div>
          </div>
          <div className="w-full flex gap-2 items-center font-semibold">
            <input
              {...register("wantHelp")}
              type="checkbox"
              name="wantHelp"
              className="w-4 h-4 bg-transparent"
            />
            <label htmlFor="wantHelp">
              YES - I want to learn how DK can fund my eCom brand to help scale
              sales
            </label>
          </div>
          {errors.details ? (
            <textarea
              {...register("details", { required: true })}
              name="details"
              cols={30}
              rows={5}
              placeholder="Please specify project details *"
              className="border border-red-600 py-2 px-4 outline-none w-full placeholder:text-red-600 text-gray-600 bg-transparent resize-none"
            />
          ) : (
            <textarea
              {...register("details", { required: true })}
              name="details"
              cols={30}
              rows={5}
              placeholder="Project Details *"
              className="border border-gray-900 py-2 px-4 outline-none w-full placeholder:text-gray-600 text-gray-600 bg-transparent resize-none"
            />
          )}
          <div className="w-full flex gap-2 items-center font-semibold">
            <input
              {...register("newsletter")}
              type="checkbox"
              name="newsletter"
              className="w-4 h-4 bg-transparent"
            />
            <label htmlFor="newsletter" className="text-xs">
              Sign me up for DK newsletter. Get monthly marketing, web, mobile
              tips and insight.
            </label>
          </div>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={recaptchaKey}
            onChange={updateRecaptchaToken}
          />
          {closeContact ? (
            <button
              className="uppercase w-full bg-red-600 hover:bg-red-700 text-white transition-all duration-300 p-2 mb-8"
              onClick={onClose}
            >
              Click to Close
            </button>
          ) : (
            <button
              type="submit"
              className="uppercase w-full bg-red-600 hover:bg-red-700 text-white transition-all duration-300 p-2 mb-8"
            >
              Submit
            </button>
          )}
        </main>
      </form>
    </>
  );
}
