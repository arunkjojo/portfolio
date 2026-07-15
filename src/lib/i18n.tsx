import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'

export type Language = 'en' | 'hi' | 'de' | 'es' | 'ar'

export interface TranslationSchema {
  nav: {
    home: string
    experience: string
    projects: string
    skills: string
    certifications: string
    contact: string
  }
  hero: {
    title: string
    subtitle: string
    bio: string
    downloadCv: string
    contactInfo: string
  }
  stats: {
    experience: { value: string; label: string; desc: string }
    throughput: { value: string; label: string; desc: string }
    bottlenecks: { value: string; label: string; desc: string }
    delivery: { value: string; label: string; desc: string }
  }
  experience: {
    title: string
    at: string
    roles: {
      gesher: { role: string; location: string; highlights: string[] }
      upskillingGap: { role: string; location: string; highlights: string[] }
      bct: { role: string; location: string; highlights: string[] }
      inluxFull: { role: string; location: string; highlights: string[] }
      hats: { role: string; location: string; highlights: string[] }
      inluxReact: { role: string; location: string; highlights: string[] }
    }
  }
  projects: {
    title: string
    marketplace: string
    voiceTranslation: string
    ecommerce: string
    saas: string
    shopStore: string
    iiot: string
  }
  skills: {
    title: string
    categories: {
      frontend: string
      backend: string
      devops: string
      databases: string
      testing: string
      ai: string
      soft: string
    }
  }
  certifications: {
    title: string
    headers: {
      name: string
      issuer: string
      date: string
    }
  }
  education: {
    title: string
    degree: string
    school: string
    period: string
    bullets: string[]
  }
  contact: {
    title: string
    email: string
    phone: string
    location: string
    locationVal: string
  }
}

const translations: Record<Language, TranslationSchema> = {
  en: {
    nav: { home: 'Home', experience: 'Experience', projects: 'Projects', skills: 'Skills', certifications: 'Certifications', contact: 'Contact' },
    hero: {
      title: 'Arun Jojo',
      subtitle: 'DevOps Engineer with AI Automation',
      bio: 'DevOps Engineer with AI Automation with 5+ years of experience building scalable web applications and automating delivery pipelines. I help teams ship faster by architecting CI/CD pipelines, integrating AIOps, and optimizing real-time systems that handle 10,000+ events/second.',
      downloadCv: 'Download CV',
      contactInfo: 'Contact Info'
    },
    stats: {
      experience: { value: '5+ Years', label: 'Full-Stack Experience', desc: 'Building scalable web applications' },
      throughput: { value: '10,000+', label: 'Events / Second', desc: 'Optimizing real-time high-throughput systems' },
      bottlenecks: { value: '30%', label: 'Less Bottlenecks', desc: 'Reduced rendering delay via SSR/ISR' },
      delivery: { value: '40%', label: 'Faster Delivery', desc: 'Accelerated cycles via AI-augmented dev' }
    },
    experience: {
      title: 'Work Experience',
      at: 'at',
      roles: {
        gesher: {
          role: 'Software Engineer',
          location: 'Ernakulam, Kerala',
          highlights: [
            'Architecting full-stack solutions using Next.js and Supabase PostgreSQL, focusing on high concurrency and modular backend design for scalability. Optimized backend infrastructure via AI driven development.',
            'Implementing modern DevOps strategies, including automated CI/CD pipelines via GitHub Actions and containerization with Docker for seamless cloud scaling. Architected a deployment pipeline using GitHub Actions, ensuring zero-downtime frontend releases, increasing release frequency by 20%, and reducing manual intervention by 15% for a production-scale project.',
            'Consulting on frontend performance, implementing advanced caching strategies, and SSR optimization to improve SEO and user retention. Implemented complex state management architectures using React, TypeScript, and Redux-Saga, ensuring type safety and reducing client-side rendering bottlenecks by 30%.'
          ]
        },
        upskillingGap: {
          role: 'AI-Automated DevOps Upskilling & Planned Break',
          location: 'Self-Employed / Personal Learning',
          highlights: [
            'Planned career break for personal milestones (wedding and family functions).',
            'Intensively upskilled in modern DevOps practices, AIOps, and AI automation tooling.',
            'Developed personal projects and automated workflows using loop-engineering activities and agentic orchestrations to prepare for the next career step.'
          ]
        },
        bct: {
          role: 'Senior Developer',
          location: 'Thiruvandapuram, Kerala',
          highlights: [
            'Implemented state management using React/Redux-Saga, specifically focusing on optimizing data handling that influenced application performance and stability in production environments.',
            'Collaborated with the File Management Team to streamline document workflow processes, applying principles of efficiency and system integration. Resulting in a 25% measurable increase in team development efficiency through AI-augmented development practices and GitHub Copilot.',
            'Contributed to the deployment of the Ksmart and Ksuite web applications, ensuring functional accessibility and system stability across diverse user groups.'
          ]
        },
        inluxFull: {
          role: 'Full-Stack Developer',
          location: 'Kasaragod, Kerala',
          highlights: [
            'Optimized backend systems (PHP/Node.js-Express.js) for improved server response times and system reliability, focusing on system performance tuning.',
            'Used Git & GitHub for rigorous version control, collaborative code reviews, and managing multiple application branches to ensure continuous code quality for deployment.',
            'Developed scalable applications and designed relational/NoSQL database schemas leveraging PostgreSQL, MSSQL, and MongoDB, improving complex query execution speeds by 40%.'
          ]
        },
        hats: {
          role: 'Jr. React Developer',
          location: 'Ernakulam, Kerala',
          highlights: [
            'Built and deployed a Progressive Web App (PWA) and Trusted Web Activity (TWA) using React.js and React Native, achieving a 40% increase in mobile user retention, involving knowledge of application delivery and publishing processes.',
            'Managed real-time applications (Voice Translation App) and E-commerce platforms, requiring a focus on high availability and performance monitoring.'
          ]
        },
        inluxReact: {
          role: 'React-PHP Developer',
          location: 'Kasaragod, Kerala',
          highlights: [
            'Engineered and deployed high-performance web applications using React.js, PHP APIs, and MySQL, successfully publishing PWA/TWA projects to the Google Play Store.',
            'Managed the complete lifecycle from front-end UI design to Firebase deployment, leveraging freelance experience to deliver scalable, user-centric solutions.'
          ]
        }
      }
    },
    projects: {
      title: 'Personal & Representative Projects',
      marketplace: 'Highly scalable multi-vendor marketplace platform featuring real-time catalogs, search, and secure multi-tenant data architecture.',
      voiceTranslation: 'Real-time translation Android/iOS application utilizing WebRTC and multiple audio format conversions.',
      ecommerce: 'Premium web and mobile commerce solutions with integrated payment gateways and secure checkout.',
      saas: 'Cloud-native software-as-a-service application featuring subscription billing, secure multi-tenancy, and automated deployment.',
      shopStore: 'Progressive web and native mobile application published to Google Play Store featuring local caching and Firebase sync.',
      iiot: 'Real-time Industrial Internet of Things live monitoring dashboard handling high events concurrency and live data visualization.'
    },
    skills: {
      title: 'Skills Portfolio',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend & APIs',
        devops: 'DevOps',
        databases: 'Databases',
        testing: 'Testing',
        ai: 'AI & Tooling',
        soft: 'Soft Skills'
      }
    },
    certifications: {
      title: 'Certifications',
      headers: { name: 'Credential Name', issuer: 'Issuer', date: 'Date' }
    },
    education: {
      title: 'Education',
      degree: 'Bachelor of Science in Computer Science',
      school: 'College of Applied Science IHRD Manjeshwar',
      period: 'Jul 2018 – Mar 2021',
      bullets: [
        'Bachelor of Science in Computer Science (3yr) from IHRD Manjeshwar',
        'Achievements: Won the Best Coder of the ZEITGEIST'
      ]
    },
    contact: {
      title: 'Contact Information',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      locationVal: 'Ernakulam, Kerala, India'
    }
  },
  hi: {
    nav: { home: 'होम', experience: 'अनुभव', projects: 'परियोजनाएं', skills: 'कौशल', certifications: 'प्रमाणपत्र', contact: 'संपर्क' },
    hero: {
      title: 'अरुण जोजो',
      subtitle: 'एआई ऑटोमेशन के साथ डेवऑप्स इंजीनियर',
      bio: 'एआई ऑटोमेशन के साथ डेवऑप्स इंजीनियर, जिन्हें स्केलेबल वेब एप्लिकेशन बनाने और डिलीवरी पाइपलाइनों को स्वचालित करने का 5+ वर्षों का अनुभव है। मैं सीआई/सीडी पाइपलाइनों को डिजाइन करके, एआईऑप्स को एकीकृत करके और 10,000+ इवेंट/सेकंड को संभालने वाले रीयल-टाइम सिस्टम को अनुकूलित करके टीमों को तेजी से डिलीवर करने में मदद करता हूं।',
      downloadCv: 'सीवी डाउनलोड करें',
      contactInfo: 'संपर्क जानकारी'
    },
    stats: {
      experience: { value: '5+ वर्ष', label: 'फुल-स्टैक अनुभव', desc: 'स्केलेबल वेब एप्लिकेशन बनाना' },
      throughput: { value: '10,000+', label: 'इवेंट / सेकंड', desc: 'रीयल-टाइम हाई-थ्रूपुट सिस्टम को अनुकूलित करना' },
      bottlenecks: { value: '30%', label: 'कम बाधाएं', desc: 'एसएसआर/आईएसआर के माध्यम से रेंडरिंग में देरी को कम किया' },
      delivery: { value: '40%', label: 'तेज़ डिलीवरी', desc: 'एआई-संवर्धित विकास के माध्यम से चक्रों को तेज किया' }
    },
    experience: {
      title: 'कार्य अनुभव',
      at: 'पर',
      roles: {
        gesher: {
          role: 'सॉफ्टवेयर इंजीनियर',
          location: 'एर्नाकुलम, केरल',
          highlights: [
            'नेक्स्ट.जेएस और Supabase पोस्टग्रेएसक्यूएल का उपयोग करके फुल-स्टैक समाधान तैयार करना, स्केलेबिलिटी के लिए उच्च समवर्ती और मॉड्यूलर बैकएंड डिजाइन पर ध्यान केंद्रित करना। एआई-संचालित विकास के माध्यम से बैकएंड इंफ्रास्ट्रक्चर को अनुकूलित किया।',
            'गीथूब एक्शन्स के माध्यम से स्वचालित सीआई/सीडी पाइपलाइनों और निर्बाध क्लाउड स्केलिंग के लिए डॉकर के साथ कंटेनराइजेशन सहित आधुनिक डेवऑप्स रणनीतियों को लागू करना।',
            'SEO और उपयोगकर्ता प्रतिधारण को बेहतर बनाने के लिए उन्नत कैशिंग रणनीतियों और SSR अनुकूलन को लागू करना।'
          ]
        },
        upskillingGap: {
          role: 'एआई-स्वचालित डेवऑप्स अपस्किलिंग और नियोजित ब्रेक',
          location: 'स्व-नियोजित / व्यक्तिगत सीखना',
          highlights: [
            'व्यक्तिगत मील के पत्थर (शादी और अन्य पारिवारिक समारोहों) के लिए नियोजित करियर ब्रेक।',
            'आधुनिक डेवऑप्स प्रथाओं, एआईऑप्स और एआई ऑटोमेशन टूल्स में गहन रूप से कौशल बढ़ाया।',
            'अगले करियर कदम की तैयारी के लिए लूप-इंजीनियरिंग गतिविधियों और एजेंटिक ऑर्केस्ट्रेशन का उपयोग करके व्यक्तिगत परियोजनाएं और स्वचालित वर्कफ़्लो विकसित किए।'
          ]
        },
        bct: {
          role: 'वरिष्ठ डेवलपर',
          location: 'तिरुवनंतपुरम, केरल',
          highlights: [
            'रिएक्ट/रिएडक्स-सागा का उपयोग करके राज्य प्रबंधन को लागू किया, विशेष रूप से उत्पादन वातावरण में अनुप्रयोग प्रदर्शन को प्रभावित करने वाले डेटा हैंडलिंग को अनुकूलित करने पर ध्यान केंद्रित किया।',
            'एआई-संवर्धित विकास प्रथाओं और गिटहब कोपायलट के माध्यम से टीम विकास दक्षता में 25% की औसत वृद्धि।',
            'Ksmart और Ksuite वेब अनुप्रयोगों की तैनाती में योगदान दिया, जिससे उपयोगकर्ता समूहों में सिस्टम स्थिरता सुनिश्चित हुई।'
          ]
        },
        inluxFull: {
          role: 'फुल-स्टैक डेवलपर',
          location: 'कासरगोड, केरल',
          highlights: [
            'बेहतर सर्वर प्रतिक्रिया समय और सिस्टम विश्वसनीयता के लिए बैकएंड सिस्टम (PHP/Node.js-Express.js) को अनुकूलित किया।',
            'संस्करण नियंत्रण, सहयोगी कोड समीक्षा और शाखाओं के प्रबंधन के लिए गिट और गिटहब का उपयोग किया।',
            'स्केलेबल एप्लिकेशन विकसित किए और पोस्टग्रेएसक्यूएल, एमएसएसक्यूएल और मोंगोडीबी का लाभ उठाते हुए रिलेशनल/NoSQL डेटाबेस स्कीमा तैयार किए।'
          ]
        },
        hats: {
          role: 'जूनियर रिएक्ट डेवलपर',
          location: 'एर्नाकुलम, केरल',
          highlights: [
            'रिएक्ट.जेएस और रिएक्ट नेटिव का उपयोग करके प्रोग्रेसिव वेब ऐप (PWA) और ट्रस्टेड वेब एक्टिविटी (TWA) का निर्माण और परिनियोजन किया, जिससे मोबाइल उपयोगकर्ता प्रतिधारण में 40% की वृद्धि हुई।',
            'आवाज अनुवाद ऐप (Voice Translation App) और ई-कॉमर्स प्लेटफॉर्म जैसे रीयल-टाइम अनुप्रयोगों का प्रबंधन किया।'
          ]
        },
        inluxReact: {
          role: 'रिएक्ट-पीएचपी डेवलपर',
          location: 'कासरगोड, केरल',
          highlights: [
            'रिएक्ट.जेएस, पीएचपी एपीआई और माईएसक्यूएल का उपयोग करके उच्च प्रदर्शन वाले वेब अनुप्रयोगों का निर्माण और परिनियोजन किया।',
            'फ्रंट-एंड यूआई डिजाइन से लेकर फायरबेस परिनियोजन तक संपूर्ण जीवनचक्र का प्रबंधन किया।'
          ]
        }
      }
    },
    projects: {
      title: 'व्यक्तिगत और प्रतिनिधि परियोजनाएं',
      marketplace: 'अत्यधिक स्केलेबल मल्टी-वेंडर मार्केटप्लेस प्लेटफॉर्म जिसमें रीयल-टाइम कैटलॉग, खोज और सुरक्षित मल्टी-टेनेंट डेटा आर्किटेक्चर शामिल हैं।',
      voiceTranslation: 'वेबआरटीसी और कई ऑडियो प्रारूपों के रूपांतरण का उपयोग करके रीयल-टाइम अनुवाद एंड्रॉइड/आईओएस एप्लिकेशन।',
      ecommerce: 'एकीकृत भुगतान गेटवे और सुरक्षित चेकआउट के साथ प्रीमियम वेब और मोबाइल वाणिज्य समाधान।',
      saas: 'क्लाउड-नेटिव सॉफ्टवेयर-एज-ए-सर्विस एप्लिकेशन जिसमें सब्सक्रिप्शन बिलिंग, सुरक्षित मल्टी-टेनेंसी और स्वचालित परिनियोजन शामिल हैं।',
      shopStore: 'गूगल प्ले स्टोर पर प्रकाशित प्रोग्रेसिव वेब और नेटिव मोबाइल एप्लिकेशन जिसमें स्थानीय कैशिंग और फायरबेस सिंक शामिल हैं।',
      iiot: 'रीयल-टाइम औद्योगिक इंटरनेट ऑफ थिंग्स लाइव मॉनिटरिंग डैशबोर्ड जो उच्च ईवेंट समवर्ती और लाइव डेटा विज़ुअलाइज़ेशन को संभालता है।'
    },
    skills: {
      title: 'कौशल पोर्टफोलियो',
      categories: {
        frontend: 'फ्रंटएंड',
        backend: 'बैकएंड और एपीआई',
        devops: 'डेवऑप्स',
        databases: 'डेटाबेस',
        testing: 'परीक्षण',
        ai: 'एआई और टूल्स',
        soft: 'व्यक्तिगत कौशल'
      }
    },
    certifications: {
      title: 'प्रमाणपत्र',
      headers: { name: 'प्रमाणपत्र नाम', issuer: 'जारीकर्ता', date: 'दिनांक' }
    },
    education: {
      title: 'शिक्षा',
      degree: 'कंप्यूटर विज्ञान में विज्ञान स्नातक (B.Sc)',
      school: 'एप्लाइड साइंस कॉलेज IHRD मंजेश्वर',
      period: 'जुलाई 2018 - मार्च 2021',
      bullets: [
        'IHRD मंजेश्वर से कंप्यूटर विज्ञान में 3 वर्षीय विज्ञान स्नातक डिग्री',
        'उपलब्धियां: ZEITGEIST के सर्वश्रेष्ठ कोडर का पुरस्कार जीता'
      ]
    },
    contact: {
      title: 'संपर्क सूत्र',
      email: 'ईमेल',
      phone: 'फ़ोन',
      location: 'स्थान',
      locationVal: 'एर्नाकुलम, केरल, भारत'
    }
  },
  de: {
    nav: { home: 'Startseite', experience: 'Erfahrung', projects: 'Projekte', skills: 'Fähigkeiten', certifications: 'Zertifikate', contact: 'Kontakt' },
    hero: {
      title: 'Arun Jojo',
      subtitle: 'DevOps-Engineer mit KI-Automatisierung',
      bio: 'DevOps-Engineer mit KI-Automatisierung und mehr als 5 Jahren Erfahrung im Aufbau skalierbarer Webanwendungen und der Automatisierung von Bereitstellungspipelines. Ich helfe Teams, schneller zu liefern, indem ich CI/CD-Pipelines architiere, AIOps integriere und Echtzeitsysteme optimiere, die 10.000+ Ereignisse/Sekunde verarbeiten.',
      downloadCv: 'Lebenslauf herunterladen',
      contactInfo: 'Kontaktinfo'
    },
    stats: {
      experience: { value: '5+ Jahre', label: 'Full-Stack Erfahrung', desc: 'Entwicklung skalierbarer Webanwendungen' },
      throughput: { value: '10.000+', label: 'Ereignisse / Sekunde', desc: 'Optimierung von Echtzeit-Systemen' },
      bottlenecks: { value: '30%', label: 'Weniger Engpässe', desc: 'Reduzierte Rendering-Verzögerung durch SSR/ISR' },
      delivery: { value: '40%', label: 'Schnellere Lieferung', desc: 'Beschleunigte Zyklen durch KI-gestützte Entwicklung' }
    },
    experience: {
      title: 'Berufserfahrung',
      at: 'bei',
      roles: {
        gesher: {
          role: 'Softwareentwickler',
          location: 'Ernakulam, Indien',
          highlights: [
            'Architektur von Full-Stack-Lösungen mit Next.js und Supabase PostgreSQL. Optimierung der Backend-Infrastruktur durch KI-gestützte Entwicklung.',
            'Implementierung moderner DevOps-Strategien einschließlich automatisierter CI/CD-Pipelines über GitHub Actions und Containerisierung mit Docker.',
            'Beratung zur Frontend-Performance, Implementierung fortgeschrittener Caching-Strategien und SSR-Optimierung zur Verbesserung von SEO.'
          ]
        },
        upskillingGap: {
          role: 'KI-Automatisierte DevOps-Fortbildung & geplante Pause',
          location: 'Selbstständig / Persönliches Lernen',
          highlights: [
            'Geplante Karrierepause für persönliche Meilensteine (Hochzeit und Familienfeiern).',
            'Intensive Fortbildung in modernen DevOps-Praktiken, AIOps und KI-Automatisierungswerkzeugen.',
            'Entwicklung persönlicher Projekte und automatisierter Workflows mithilfe von Loop-Engineering-Aktivitäten und Agenten-Orchestrierungen.'
          ]
        },
        bct: {
          role: 'Senior Entwickler',
          location: 'Thiruvandapuram, Indien',
          highlights: [
            'Implementierung des Statusmanagements mit React/Redux-Saga zur Optimierung der Datenverarbeitung in Produktionsumgebungen.',
            'Effizienzsteigerung im Team um 25% durch KI-gestützte Entwicklungsmethoden und GitHub Copilot.',
            'Mitarbeit bei der Bereitstellung der Ksmart- und Ksuite-Webanwendungen.'
          ]
        },
        inluxFull: {
          role: 'Full-Stack-Entwickler',
          location: 'Kasaragod, Indien',
          highlights: [
            'Optimierung von Backend-Systemen (PHP/Node.js-Express.js) zur Verbesserung der Serverantwortzeiten.',
            'Verwendung von Git und GitHub für Versionskontrolle und kollaborative Code-Reviews.',
            'Entwicklung skalierbarer Anwendungen und Entwurf relationaler/NoSQL-Datenbankschemata (PostgreSQL, MongoDB).'
          ]
        },
        hats: {
          role: 'Junior React-Entwickler',
          location: 'Ernakulam, Indien',
          highlights: [
            'Bau und Bereitstellung einer PWA und TWA unter Verwendung von React.js and React Native mit einer Steigerung der Nutzerbindung um 40%.',
            'Verwaltung von Echtzeitanwendungen (Sprachübersetzungs-App) und E-Commerce-Plattformen.'
          ]
        },
        inluxReact: {
          role: 'React-PHP-Entwickler',
          location: 'Kasaragod, Indien',
          highlights: [
            'Entwicklung von Webanwendungen mit React.js, PHP-APIs und MySQL.',
            'Verwaltung des gesamten Lebenszyklus vom UI-Design bis zur Firebase-Bereitstellung.'
          ]
        }
      }
    },
    projects: {
      title: 'Persönliche und repräsentative Projekte',
      marketplace: 'Hochgradig skalierbare Multi-Vendor-Marktplatzplattform mit Echtzeit-Katalogen, Suche und sicherer Multi-Tenancy-Datenarchitektur.',
      voiceTranslation: 'Echtzeit-Übersetzungsanwendung für Android/iOS unter Verwendung von WebRTC und mehreren Audioformatkonvertierungen.',
      ecommerce: 'Premium-Web- und Mobile-Commerce-Lösungen mit integrierten Zahlungsgateways und sicherem Checkout.',
      saas: 'Cloud-native Software-as-a-Service-Anwendung mit Abonnementabrechnung, sicherer Multi-Tenancy und automatisierter Bereitstellung.',
      shopStore: 'Progressive Web- und native Mobilanwendung, veröffentlicht im Google Play Store mit lokalem Caching und Firebase-Synchronisierung.',
      iiot: 'Echtzeit-Dashboard zur Live-Überwachung des industriellen Internets der Dinge, das eine hohe Ereigniskonkurrenz und Live-Datenvisualisierung verarbeitet.'
    },
    skills: {
      title: 'Fähigkeiten-Portfolio',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend & APIs',
        devops: 'DevOps',
        databases: 'Datenbanken',
        testing: 'Testen',
        ai: 'KI & Werkzeuge',
        soft: 'Soft Skills'
      }
    },
    certifications: {
      title: 'Zertifizierungen',
      headers: { name: 'Name der Zertifizierung', issuer: 'Aussteller', date: 'Datum' }
    },
    education: {
      title: 'Ausbildung',
      degree: 'Bachelor of Science in Informatik',
      school: 'College of Applied Science IHRD Manjeshwar',
      period: 'Jul 2018 – Mär 2021',
      bullets: [
        '3-jähriger Bachelor of Science in Informatik an der IHRD Manjeshwar',
        'Auszeichnungen: Gewinner als "Bester Coder" der ZEITGEIST'
      ]
    },
    contact: {
      title: 'Kontaktinformationen',
      email: 'E-Mail',
      phone: 'Telefon',
      location: 'Standort',
      locationVal: 'Ernakulam, Kerala, Indien'
    }
  },
  es: {
    nav: { home: 'Inicio', experience: 'Experiencia', projects: 'Proyectos', skills: 'Habilidades', certifications: 'Certificaciones', contact: 'Contacto' },
    hero: {
      title: 'Arun Jojo',
      subtitle: 'Ingeniero DevOps con Automatización de IA',
      bio: 'Ingeniero DevOps con Automatización de IA con más de 5 años de experiencia en la construcción de aplicaciones web escalables y automatización de pipelines de entrega. Ayudo a los equipos a entregar más rápido diseñando pipelines de CI/CD, integrando AIOps y optimizando sistemas en tiempo real que manejan más de 10,000 eventos por segundo.',
      downloadCv: 'Descargar CV',
      contactInfo: 'Información de Contacto'
    },
    stats: {
      experience: { value: '5+ Años', label: 'Experiencia Full-Stack', desc: 'Construcción de aplicaciones web escalables' },
      throughput: { value: '10,000+', label: 'Eventos / Segundo', desc: 'Optimización de sistemas en tiempo real de alto rendimiento' },
      bottlenecks: { value: '30%', label: 'Menos Cuellos de Botella', desc: 'Reducción de latencia de renderizado mediante SSR/ISR' },
      delivery: { value: '40%', label: 'Entrega más Rápida', desc: 'Ciclos acelerados mediante desarrollo aumentado por IA' }
    },
    experience: {
      title: 'Experiencia Laboral',
      at: 'en',
      roles: {
        gesher: {
          role: 'Ingeniero de Software',
          location: 'Ernakulam, India',
          highlights: [
            'Arquitectura de soluciones full-stack usando Next.js y Supabase PostgreSQL. Optimización de la infraestructura backend mediante desarrollo guiado por IA.',
            'Implementación de estrategias modernas de DevOps, incluidos pipelines de CI/CD automatizados mediante GitHub Actions y contenedorización con Docker.',
            'Consultoría sobre rendimiento frontend, implementación de estrategias avanzadas de almacenamiento en caché y optimización SSR.'
          ]
        },
        upskillingGap: {
          role: 'Capacitación DevOps Automatizada por IA y Pausa Planificada',
          location: 'Trabajo por cuenta propia / Aprendizaje personal',
          highlights: [
            'Pausa profesional planificada para hitos personales (boda y funciones familiares).',
            'Capacitación intensiva en prácticas modernas de DevOps, AIOps y herramientas de automatización de IA.',
            'Desarrollo de proyectos personales y flujos de trabajo automatizados utilizando actividades de ingeniería en bucle y orquestaciones de agentes.'
          ]
        },
        bct: {
          role: 'Desarrollador Senior',
          location: 'Thiruvandapuram, India',
          highlights: [
            'Implementación de la gestión de estados con React/Redux-Saga para optimizar el manejo de datos en entornos de producción.',
            'Aumento del 25% en la eficiencia del desarrollo del equipo a través de prácticas aumentadas con IA y GitHub Copilot.',
            'Contribución al despliegue de las aplicaciones web Ksmart y Ksuite.'
          ]
        },
        inluxFull: {
          role: 'Desarrollador Full-Stack',
          location: 'Kasaragod, India',
          highlights: [
            'Optimización de sistemas backend (PHP/Node.js-Express.js) para mejorar los tiempos de respuesta del servidor.',
            'Uso de Git y GitHub para control de versiones y revisiones de código colaborativas.',
            'Desarrollo de aplicaciones escalables y diseño de esquemas de bases de datos relacionales/NoSQL (PostgreSQL, MongoDB).'
          ]
        },
        hats: {
          role: 'Desarrollador React Junior',
          location: 'Ernakulam, India',
          highlights: [
            'Construcción y despliegue de PWA y TWA usando React.js y React Native, logrando un aumento del 40% en la retención de usuarios móviles.',
            'Gestión de aplicaciones en tiempo real (aplicación de traducción de voz) y plataformas de comercio electrónico.'
          ]
        },
        inluxReact: {
          role: 'Desarrollador React-PHP',
          location: 'Kasaragod, India',
          highlights: [
            'Desarrollo de aplicaciones web de alto rendimiento usando React.js, PHP APIs y MySQL.',
            'Gestión del ciclo de vida completo desde el diseño de la interfaz hasta el despliegue en Firebase.'
          ]
        }
      }
    },
    projects: {
      title: 'Proyectos Personales y Representativos',
      marketplace: 'Plataforma de mercado multi-proveedor altamente escalable con catálogos en tiempo real, búsqueda y arquitectura de datos multi-tenant segura.',
      voiceTranslation: 'Aplicación para Android/iOS de traducción en tiempo real mediante WebRTC y múltiples conversiones de audio.',
      ecommerce: 'Soluciones de comercio web y móvil premium con pasarelas de pago integradas y pago seguro.',
      saas: 'Aplicación de software como servicio nativa de la nube con facturación de suscripción, multi-tenancy segura y despliegue automatizado.',
      shopStore: 'Aplicación web progresiva y móvil nativa publicada en Google Play Store con caché local y sincronización de Firebase.',
      iiot: 'Panel de monitoreo en vivo de Internet de las cosas industrial en tiempo real que maneja alta concurrencia de eventos y visualización de datos en vivo.'
    },
    skills: {
      title: 'Portafolio de Habilidades',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend y APIs',
        devops: 'DevOps',
        databases: 'Bases de Datos',
        testing: 'Pruebas',
        ai: 'IA y Herramientas',
        soft: 'Habilidades Blandas'
      }
    },
    certifications: {
      title: 'Certificaciones',
      headers: { name: 'Nombre de la Certificación', issuer: 'Emisor', date: 'Fecha' }
    },
    education: {
      title: 'Educación',
      degree: 'Licenciatura en Ciencias de la Computación',
      school: 'Colegio de Ciencias Aplicadas IHRD Manjeshwar',
      period: 'Jul 2018 – Mar 2021',
      bullets: [
        'Licenciatura en Ciencias de la Computación (3 años) en la IHRD Manjeshwar',
        'Logros: Ganador del premio al "Mejor Codificador" en ZEITGEIST'
      ]
    },
    contact: {
      title: 'Información de Contacto',
      email: 'Correo Electrónico',
      phone: 'Teléfono',
      location: 'Ubicación',
      locationVal: 'Ernakulam, Kerala, India'
    }
  },
  ar: {
    nav: { home: 'الرئيسية', experience: 'الخبرة', projects: 'المشاريع', skills: 'المهارات', certifications: 'الشهادات', contact: 'الاتصال' },
    hero: {
      title: 'أرون جوجو',
      subtitle: 'مهندس ديف أوبس مع أتمتة الذكاء الاصطناعي',
      bio: 'مهندس ديف أوبس مع أتمتة الذكاء الاصطناعي وخبرة تزيد عن 5 سنوات في بناء تطبيقات الويب القابلة للتوسع وأتمتة خطوط أنابيب التسليم. أساعد الفرق على التسليم بشكل أسرع من خلال تصميم أنابيب CI/CD ودمج AIOps وتحسين الأنظمة في الوقت الفعلي التي تتعامل مع أكثر من 10,000 حدث/ثانية.',
      downloadCv: 'تحميل السيرة الذاتية',
      contactInfo: 'معلومات الاتصال'
    },
    stats: {
      experience: { value: '+٥ سنوات', label: 'خبرة الفول ستاك', desc: 'بناء تطبيقات ويب قابلة للتوسع' },
      throughput: { value: '١٠,٠٠٠+', label: 'حدث / ثانية', desc: 'تحسين الأنظمة في الوقت الفعلي ذات الإنتاجية العالية' },
      bottlenecks: { value: '٣٠٪', label: 'أداء أفضل', desc: 'تقليل تأخير العرض من خلال استراتيجيات SSR/ISR' },
      delivery: { value: '٤٠٪', label: 'تسليم أسرع', desc: 'تسريع دورات التطوير من خلال البرمجة المدعومة بالذكاء الاصطناعي' }
    },
    experience: {
      title: 'الخبرة المهنية',
      at: 'في',
      roles: {
        gesher: {
          role: 'مهندس برمجيات',
          location: 'إرناكولام، الهند',
          highlights: [
            'هندسة حلول الويب المتكاملة باستخدام Next.js و Supabase PostgreSQL مع التركيز على التصميم القابل للتوسع. تحسين البنية التحتية من خلال البرمجة المعتمدة على الذكاء الاصطناعي.',
            'تنفيذ استراتيجيات DevOps الحديثة بما في ذلك أنابيب CI/CD المؤتمتة عبر GitHub Actions والحاويات باستخدام Docker لتسهيل التوسع السحابي.',
            'استشارات أداء واجهة المستخدم، وتطبيق استراتيجيات التخزين المؤقت المتقدمة، وتحسين SSR لتعزيز محركات البحث.'
          ]
        },
        upskillingGap: {
          role: 'تطوير مهارات ديف أوبس المؤتمتة بالذكاء الاصطناعي وفترة استراحة مخططة',
          location: 'عمل حر / تعليم شخصي',
          highlights: [
            'استراحة مهنية مخططة لأحداث شخصية (الزفاف ومناسبات عائلية أخرى).',
            'تطوير مكثف للمهارات في ممارسات ديف أوبس الحديثة وAIOps وأدوات أتمتة الذكاء الاصطناعي.',
            'تطوير مشاريع شخصية وسير عمل مؤتمت باستخدام أنشطة هندسة التكرار والتنسيق البرمجي للاستعداد للخطوة المهنية التالية.'
          ]
        },
        bct: {
          role: 'مطور برمجيات أول',
          location: 'تيروفاناندابورام، الهند',
          highlights: [
            'تطبيق إدارة الحالة باستخدام React/Redux-Saga، مع التركيز بشكل خاص على تحسين معالجة البيانات التي تؤثر على استقرار التطبيق في البيئات الحية.',
            'زيادة بنسبة ٢٥٪ في كفاءة تطوير الفريق من خلال استخدام ممارسات التطوير المعززة بالذكاء الاصطناعي ومساعد GitHub Copilot.',
            'المساهمة في نشر تطبيقات الويب Ksmart و Ksuite، مما يضمن الاستقرار وسهولة الاستخدام.'
          ]
        },
        inluxFull: {
          role: 'مطور فول ستاك',
          location: 'كاساراجود، الهند',
          highlights: [
            'تحسين الأنظمة الخلفية (PHP/Node.js-Express.js) لتعزيز سرعة استجابة الخوادم واستقرار النظام.',
            'استخدم Git و GitHub للتحكم الدقيق في الإصدارات، والمراجعات التعاونية للأكواد وإدارة الفروع.',
            'تطوير تطبيقات قابلة للتطوير وتصميم هياكل قواعد البيانات العلائقية وغير العلائقية (PostgreSQL، MongoDB).'
          ]
        },
        hats: {
          role: 'مطور React مبتدئ',
          location: 'إرناكولام، الهند',
          highlights: [
            'بناء ونشر تطبيقات الويب التقدمية (PWA) وتطبيقات الأنشطة الموثوقة (TWA) باستخدام React.js و React Native، وتحقيق زيادة بنسبة ٤٠٪ في استبقاء المستخدمين.',
            'إدارة تطبيقات الوقت الفعلي (تطبيق ترجمة الصوت) ومنصات التجارة الإلكترونية.'
          ]
        },
        inluxReact: {
          role: 'مطور React-PHP',
          location: 'كاساراجود، الهند',
          highlights: [
            'هندسة ونشر تطبيقات ويب عالية الأداء باستخدام React.js و PHP APIs و MySQL.',
            'إدارة دورة حياة التطبيق بالكامل من تصميم واجهة المستخدم إلى النشر على منصة Firebase.'
          ]
        }
      }
    },
    projects: {
      title: 'المشاريع الشخصية والتمثيلية',
      marketplace: 'منصة سوق متكاملة للبائعين متعددة وقابلة للتطوير بشكل كبير تتميز بكتالوجات الوقت الفعلي والبحث وبنية البيانات الآمنة.',
      voiceTranslation: 'تطبيق أندرويد و iOS للترجمة الفورية في الوقت الفعلي باستخدام تقنيات WebRTC وتحويلات الصوت المتعددة.',
      ecommerce: 'حلول تجارة إلكترونية مميزة للويب والهواتف مع بوابات دفع متكاملة وعمليات دفع آمنة.',
      saas: 'تطبيق برمجيات كخدمة سحابي أصيل يتميز بفواتير الاشتراكات وبيئات تشغيل آمنة متعددة المستأجرين ونشر تلقائي.',
      shopStore: 'تطبيق ويب تقدمي وتطبيق جوال أصيل تم نشره على متجر Google Play مع تخزين مؤقت محلي ومزامنة Firebase.',
      iiot: 'لوحة مراقبة حية لإنترنت الأشياء الصناعي في الوقت الفعلي تتعامل مع أحداث عالية الكثافة وتمثيل بيانات حي.'
    },
    skills: {
      title: 'ملف المهارات',
      categories: {
        frontend: 'واجهة المستخدم',
        backend: 'الأنظمة الخلفية والربط',
        devops: 'عمليات التطوير (DevOps)',
        databases: 'قواعد البيانات',
        testing: 'الاختبار والجودة',
        ai: 'الذكاء الاصطناعي والأدوات',
        soft: 'المهارات الشخصية'
      }
    },
    certifications: {
      title: 'الشهادات المعتمدة',
      headers: { name: 'اسم الشهادة', issuer: 'الجهة المانحة', date: 'التاريخ' }
    },
    education: {
      title: 'التعليم الأكاديمي',
      degree: 'بكالوريوس العلوم في علوم الحاسب الآلي',
      school: 'كلية العلوم التطبيقية (IHRD Manjeshwar)',
      period: 'يوليو ٢٠١٨ – مارس ٢٠٢١',
      bullets: [
        'بكالوريوس العلوم في علوم الحاسب الآلي (٣ سنوات) من كلية IHRD मंजेश्वर',
        'الإنجازات: الفوز بجائزة أفضل مبرمج في حدث ZEITGEIST'
      ]
    },
    contact: {
      title: 'معلومات الاتصال المباشر',
      email: 'البريد الإلكتروني',
      phone: 'الهاتف',
      location: 'الموقع الجغرافي',
      locationVal: 'إرناكولام، كيرالا، الهند'
    }
  }
}

interface LanguageContextProps {
  language: Language
  setLanguage: (lang: Language) => void
  t: TranslationSchema
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = window.localStorage.getItem('language') as Language
      if (stored && ['en', 'hi', 'de', 'es', 'ar'].includes(stored)) {
        setLanguageState(stored)
      }
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('language', lang)
    }
    // Update DOM html tags
    const root = document.documentElement
    root.setAttribute('lang', lang)
    if (lang === 'ar') {
      root.setAttribute('dir', 'rtl')
    } else {
      root.setAttribute('dir', 'ltr')
    }
  }

  // Pre-load DOM lang/dir on startup if stored is Arabic
  useEffect(() => {
    const root = document.documentElement
    root.setAttribute('lang', language)
    if (language === 'ar') {
      root.setAttribute('dir', 'rtl')
    } else {
      root.setAttribute('dir', 'ltr')
    }
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider')
  }
  return context
}
