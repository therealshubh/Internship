import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "Back to PXE website": "Back to PXE website",
      "Feedback": "Feedback",
      "Sitemap": "Sitemap",
      "Login": "Login",
      "Proof & Experimental Establishment (PXE)": "Proof & Experimental Establishment (PXE)",
      "Skip to Main Content": "Skip to Main Content",
      "Screen Reader Access": "Screen Reader Access",
      "English": "English",
      "Hindi": "हिंदी",
      "© 2025 PXE, DRDO. All rights reserved.": "© 2025 PXE, DRDO. All rights reserved.",
      "Security": "Security",
      "Technical": "Technical",
      "Training": "Training",
      "Security Protocol Update": "Security Protocol Update",
      "All staff must update their ID cards by June 25th.": "All staff must update their ID cards by June 25th.",
      "Quarterly Technical Review": "Quarterly Technical Review",
      "Technical review meeting scheduled for June 20th.": "Technical review meeting scheduled for June 20th.",
      "Advanced Systems Training": "Advanced Systems Training",
      "Mandatory training for all engineers next week.": "Mandatory training for all engineers next week.",
      "Shri Subodh Kumar Nayak": "Shri Subodh Kumar Nayak",
      "Director, DRDO PXE": "Director, DRDO PXE",
      "B.Tech (VSSUT, Burla), M.Tech (IIT Mumbai)": "B.Tech (VSSUT, Burla), M.Tech (IIT Mumbai)",
      "Warhead Systems Expert": "Warhead Systems Expert",
      "Director since Jan 19, 2024": "Director since Jan 19, 2024",
      "Joined DRDO in 1994": "Joined DRDO in 1994",
      "Expert in warhead systems": "Expert in warhead systems",
      "Contact": "Contact",
      "PXE, Chandipur, Balasore, Odisha - 756025": "PXE, Chandipur, Balasore, Odisha - 756025",
      "Phone": "Phone",
      "Email": "Email",
      "About Us": "About Us",
      "Welcome to the PXE Portal. This page provides information about the Proof & Experimental Establishment (PXE), Chandipur.": "Welcome to the PXE Portal. This page provides information about the Proof & Experimental Establishment (PXE), Chandipur."
    }
  },
  hi: {
    translation: {
      "Back to PXE website": "पीएक्सई वेबसाइट पर वापस जाएं",
      "Feedback": "प्रतिपुष्टि",
      "Sitemap": "साइटमैप",
      "Login": "लॉगिन",
      "Proof & Experimental Establishment (PXE)": "प्रूफ एवं प्रायोगिक प्रतिष्ठान (पीएक्सई)",
      "Skip to Main Content": "मुख्य सामग्री पर जाएं",
      "Screen Reader Access": "स्क्रीन रीडर एक्सेस",
      "English": "अंग्रेज़ी",
      "Hindi": "हिंदी",
      "© 2025 PXE, DRDO. All rights reserved.": "© 2025 पीएक्सई, डीआरडीओ. सर्वाधिकार सुरक्षित.",
      "Security": "सुरक्षा",
      "Technical": "तकनीकी",
      "Training": "प्रशिक्षण",
      "Security Protocol Update": "सुरक्षा प्रोटोकॉल अपडेट",
      "All staff must update their ID cards by June 25th.": "सभी कर्मचारियों को 25 जून तक अपने आईडी कार्ड अपडेट करने होंगे।",
      "Quarterly Technical Review": "त्रैमासिक तकनीकी समीक्षा",
      "Technical review meeting scheduled for June 20th.": "20 जून के लिए तकनीकी समीक्षा बैठक निर्धारित है।",
      "Advanced Systems Training": "उन्नत प्रणालियों का प्रशिक्षण",
      "Mandatory training for all engineers next week.": "सभी अभियंताओं के लिए अगले सप्ताह अनिवार्य प्रशिक्षण।",
      "Shri Subodh Kumar Nayak": "श्री सुभोध कुमार नायक",
      "Director, DRDO PXE": "निदेशक, डीआरडीओ पीएक्सई",
      "B.Tech (VSSUT, Burla), M.Tech (IIT Mumbai)": "बी.टेक (वीएसएसयूटी, बर्ला), एम.टेक (आईआईटी मुंबई)",
      "Warhead Systems Expert": "वारहेड सिस्टम विशेषज्ञ",
      "Director since Jan 19, 2024": "19 जनवरी 2024 से निदेशक",
      "Joined DRDO in 1994": "1994 में डीआरडीओ में शामिल हुए",
      "Expert in warhead systems": "वारहेड सिस्टम में विशेषज्ञ",
      "Contact": "संपर्क",
      "PXE, Chandipur, Balasore, Odisha - 756025": "पीएक्सई, चांदीपुर, बालासोर, ओडिशा - 756025",
      "Phone": "फोन",
      "Email": "ईमेल",
      "About Us": "हमारे बारे में",
      "Welcome to the PXE Portal. This page provides information about the Proof & Experimental Establishment (PXE), Chandipur.": "पीएक्सई पोर्टल में आपका स्वागत है। यह पृष्ठ प्रूफ एवं प्रायोगिक प्रतिष्ठान (पीएक्सई), चांदीपुर के बारे में जानकारी प्रदान करता है।"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;