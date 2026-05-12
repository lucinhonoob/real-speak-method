declare global {
  interface Window {
    utmify?: { track: (event: string) => void };
    fbq?: (...args: unknown[]) => void;
  }
}

export const useTracking = () => {
  const track = (eventName: string) => {
    try {
      window.utmify?.track(eventName);
    } catch {
      // silent
    }
    try {
      window.fbq?.("track", eventName);
    } catch {
      // silent
    }
  };

  return { track };
};

export default useTracking;
