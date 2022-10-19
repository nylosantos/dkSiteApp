import React from 'react';
import ReactGA from "react-ga";

const useGoogleAnalyticsEventTracker = (category:string) => {
  const eventTracker = (action:string, label:string) => {
    ReactGA.event({category, action, label});
    console.log(ReactGA)
  }
  return eventTracker;
}

export default useGoogleAnalyticsEventTracker;