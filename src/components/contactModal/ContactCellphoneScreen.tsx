import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";
import axios from "axios";
import { FormEvent, ChangeEvent, useState, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import useGoogleAnalyticsEventTracker from "../trackEvents/useGoogleAnalyticsEventTracker";
import { contactUsCellphone } from "../trackEvents/useFacebookPixelEvent";
import ReactGA from "react-ga4";

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type FormState = {
  email: string;
  name: string;
  message: string;
};

type ServiceMessage = {
  class: string;
  text: string;
};

export function ContactCellphoneScreen({ isOpen, onClose }: MenuModalProps) {
  const gaEventTracker = useGoogleAnalyticsEventTracker("Contact Cellphone");
  const initialFormState = {
    email: "",
    name: "",
    message: "",
  };
  const [formState, setFormState] = useState<FormState>(initialFormState);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [message, setMessage] = useState<ServiceMessage>();
  const [recaptchaToken, setRecaptchaToken] = useState<string>();
  const formId = "MmQKgWrn";
  const formSparkUrl = `https://submit-form.com/${formId}`;
  const recaptchaKey = "6LeC50AiAAAAAEPsras_i1k16udEkY3km-_saOoM";
  const recaptchaRef = useRef<any>();
  const updateRecaptchaToken = (token: string | null) => {
    setRecaptchaToken(token as string);
  };
  const submitForm = async (event: FormEvent) => {
    event.preventDefault();
    setSubmitting(true);
    console.log(formState)
    ReactGA.event({
      category: "Contact Cellphone",
      action: "Contact Submit",
      label: "Contact Submit in Cellphone",
    }, {
      name: formState.name,
      email: formState.email,
      message: formState.message
    });
    await postSubmission();
    setSubmitting(false);
  };
  const postSubmission = async () => {
    const payload = {
      ...formState,
      "g-recaptcha-response": recaptchaToken,
    };
    try {
      const result = await axios.post(formSparkUrl, payload);
      console.log(result);
      gaEventTracker("Cellphone Contact Submit", "Cellphone Contact Submit");
      contactUsCellphone();
      setMessage({
        class: "bg-green-500",
        text: "Thanks, someone will be in touch shortly.",
      });
      setFormState(initialFormState);
      recaptchaRef.current.reset();
    } catch (error) {
      console.log(error);
      setMessage({
        class: "bg-red-500",
        text: "Sorry, there was a problem. Please try again or contact support.",
      });
    }
  };
  const updateFormControl = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = event.target;
    const formKey = id as keyof FormState;
    const updatedFormState = { ...formState };
    updatedFormState[formKey] = value;
    setFormState(updatedFormState);
  };
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="lg"
      isCentered
      motionPreset="none"
      blockScrollOnMount={false}
    >
      <ModalOverlay />
      <ModalContent className="p-8">
        <ModalCloseButton />
        <ModalBody className="flex flex-col w-11/12 m-auto gap-4">
          <h1 className="text-2xl font-bold font-poppins flex items-center gap-3">
            <FaPaperPlane className="text-red-600" />
            Contact Us
          </h1>
          {message && (
            <div
              className={`my-4 text-white text-xs w-full p-4 ${message.class}`}
            >
              {message.text}
            </div>
          )}
          <form className="flex flex-col" onSubmit={submitForm}>
            <div className="my-2 flex flex-col">
              <label htmlFor="name">Name</label>
              <input
                onChange={updateFormControl}
                type="text"
                id="name"
                className="border-2 p-2"
                value={formState.name}
              />
            </div>
            <div className="my-2 flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                onChange={updateFormControl}
                type="email"
                id="email"
                className="border-2 p-2"
                value={formState.email}
              />
            </div>
            <div className="my-2 flex flex-col">
              <label htmlFor="message">Message</label>
              <textarea
                onChange={updateFormControl}
                id="message"
                className="border-2 p-2"
                value={formState.message}
              />
            </div>
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={recaptchaKey}
              onChange={updateRecaptchaToken}
            />
            <button
              disabled={submitting}
              className="my-2 bg-red-600 text-white font-bold w-full p-2 hover:bg-red-700 transition-colors duration-200"
            >
              {submitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
