import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

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
    available: string
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
      bct: { role: string; location: string; highlights: string[] }
      inluxFull: { role: string; location: string; highlights: string[] }
      hats: { role: string; location: string; highlights: string[] }
      inluxReact: { role: string; location: string; highlights: string[] }
    }
  }
  projects: {
    title: string
    furniture: string
    googleRedesign: string
    ecommerceApp: string
    pizzaOrder: string
    voiceTranslation: string
  }
  skills: {
    title: string
    categories: {
      frontend: string
      backend: string
      databases: string
      devops: string
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
      available: 'Available for Opportunities',
      title: 'Arun Jojo',
      subtitle: 'AI Certified | Full-Stack | Software Engineer',
      bio: 'AI Certified Full-Stack Software Engineer with 5+ years of experience building scalable web applications using Next.js, React, Node.js, and TypeScript. I help teams ship faster by architecting CI/CD pipelines and optimizing real-time systems that handle 10,000+ events/second.',
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
      title: 'Projects',
      furniture: 'A furniture e-commerce app project using React Native. Our app consists of a NodeJS Backend, a separate stripe Node server, and a React Native - Expo front end.',
      googleRedesign: 'Google Redesign by Storybook and Vite, and using Lerna-monorepo',
      ecommerceApp: 'Redux-toolkit, Redux Thunk, Styled Components, APIs, Bootstrap',
      pizzaOrder: 'Web application with integrated PayPal payment integration. Deployed on Vercel.',
      voiceTranslation: 'Used WebRTC, and multiple audio format conversion. Redux ToolKit-based state management. React Native android application'
    },
    skills: {
      title: 'Skills Portfolio',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend & APIs',
        databases: 'Databases',
        devops: 'DevOps & CI/CD',
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
      locationVal: 'Ernakulam / Kasaragod, Kerala, India'
    }
  },
  hi: {
    nav: { home: 'होम', experience: 'अनुभव', projects: 'परियोजनाएं', skills: 'कौशल', certifications: 'प्रमाणपत्र', contact: 'संपर्क' },
    hero: {
      available: 'अवसरों के लिए उपलब्ध',
      title: 'अरुण जोजो',
      subtitle: 'एआई प्रमाणित | फुल-स्टैक | सॉफ्टवेयर इंजीनियर',
      bio: 'नेक्स्ट.जेएस, रिएक्ट, नोड.जेएस और टाइपस्क्रिप्ट का उपयोग करके स्केलेबल वेब एप्लिकेशन बनाने के 5+ वर्षों के अनुभव के साथ एआई प्रमाणित फुल-स्टैक सॉफ्टवेयर इंजीनियर। मैं सीआई/सीडी पाइपलाइनों को डिजाइन करके और 10,000+ इवेंट/सेकंड को संभालने वाले रीयल-टाइम सिस्टम को अनुकूलित करके टीमों को तेजी से डिलीवर करने में मदद करता हूं।',
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
      title: 'परियोजनाएं',
      furniture: 'रिएक्ट नेटिव का उपयोग करके फर्नीचर ई-कॉमर्स ऐप। इसमें नोड.जेएस बैकएंड, अलग स्ट्राइप सर्वर और रिएक्ट नेटिव एक्सपो फ्रंटएंड शामिल हैं।',
      googleRedesign: 'स्टोरीबुक, वीट और लर्ना-मोनोरेपो का उपयोग करके गूगल सेवाओं का पुनर्रचना।',
      ecommerceApp: 'रिडक्स-टूलकिट, रिडक्स थंक, स्टाइल्ड कंपोनेंट्स, एपीआई, बूटस्ट्रैप।',
      pizzaOrder: 'एकीकृत पेपाल भुगतान के साथ वेब अनुप्रयोग। वर्सेल पर तैनात।',
      voiceTranslation: 'वेबआरटीसी और कई ऑडियो प्रारूपों के रूपांतरण का उपयोग किया। रिएक्ट नेटिव एंड्रॉइड एप्लिकेशन।'
    },
    skills: {
      title: 'कौशल पोर्टफोलियो',
      categories: {
        frontend: 'फ्रंटएंड',
        backend: 'बैकएंड और एपीआई',
        databases: 'डेटाबेस',
        devops: 'डेवऑप्स और सीआई/सीडी',
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
      locationVal: 'एर्नाकुलम / कासरगोड, केरल, भारत'
    }
  },
  de: {
    nav: { home: 'Startseite', experience: 'Erfahrung', projects: 'Projekte', skills: 'Fähigkeiten', certifications: 'Zertifikate', contact: 'Kontakt' },
    hero: {
      available: 'Verfügbar für neue Aufgaben',
      title: 'Arun Jojo',
      subtitle: 'KI-Zertifiziert | Full-Stack | Softwareentwickler',
      bio: 'KI-Zertifizierter Full-Stack-Softwareentwickler mit mehr als 5 Jahren Erfahrung im Erstellen skalierbarer Webanwendungen mit Next.js, React, Node.js und TypeScript. Ich helfe Teams, schneller zu liefern, indem ich CI/CD-Pipelines architiere und Echtzeitsysteme optimiere, die 10.000+ Ereignisse/Sekunde verarbeiten.',
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
            'Bau und Bereitstellung einer PWA und TWA unter Verwendung von React.js und React Native mit einer Steigerung der Nutzerbindung um 40%.',
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
      title: 'Projekte',
      furniture: 'Möbel-E-Commerce-App mit React Native. Node.js-Backend, Stripe-Server und React Native Expo-Frontend.',
      googleRedesign: 'Neugestaltung von Google-Diensten mit Storybook und Vite, strukturiert in Lerna-Monorepo.',
      ecommerceApp: 'Redux-Toolkit, Redux Thunk, Styled Components, APIs, Bootstrap.',
      pizzaOrder: 'Webanwendung mit integrierter PayPal-Zahlung. Bereitgestellt auf Vercel.',
      voiceTranslation: 'Echtzeit-Übersetzungs-App mit WebRTC und Audiokonvertierung.'
    },
    skills: {
      title: 'Fähigkeiten-Portfolio',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend & APIs',
        databases: 'Datenbanken',
        devops: 'DevOps & CI/CD',
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
      locationVal: 'Ernakulam / Kasaragod, Kerala, Indien'
    }
  },
  es: {
    nav: { home: 'Inicio', experience: 'Experiencia', projects: 'Proyectos', skills: 'Habilidades', certifications: 'Certificaciones', contact: 'Contacto' },
    hero: {
      available: 'Disponible para Oportunidades',
      title: 'Arun Jojo',
      subtitle: 'Certificado en IA | Full-Stack | Ingeniero de Software',
      bio: 'Ingeniero de Software Full-Stack certificado en IA con más de 5 años de experiencia en la creación de aplicaciones web escalables con Next.js, React, Node.js y TypeScript. Ayudo a los equipos a entregar más rápido diseñando pipelines de CI/CD y optimizando sistemas en tiempo real que manejan más de 10,000 eventos por segundo.',
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
      title: 'Proyectos',
      furniture: 'Aplicación de comercio electrónico de muebles con React Native. Backend en Node.js, servidor Stripe y frontend React Native Expo.',
      googleRedesign: 'Rediseño de Google con Storybook, Vite y Lerna-monorepo.',
      ecommerceApp: 'Redux-toolkit, Redux Thunk, Styled Components, APIs, Bootstrap.',
      pizzaOrder: 'Aplicación web con integración de pago PayPal. Desplegado en Vercel.',
      voiceTranslation: 'Aplicación de traducción de voz utilizando WebRTC y múltiples conversiones de audio.'
    },
    skills: {
      title: 'Portafolio de Habilidades',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend y APIs',
        databases: 'Bases de Datos',
        devops: 'DevOps y CI/CD',
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
      locationVal: 'Ernakulam / Kasaragod, Kerala, India'
    }
  },
  ar: {
    nav: { home: 'الرئيسية', experience: 'الخبرة', projects: 'المشاريع', skills: 'المهارات', certifications: 'الشهادات', contact: 'الاتصال' },
    hero: {
      available: 'متاح للفرص والمشاريع',
      title: 'أرون جوجو',
      subtitle: 'مهندس برمجيات | فول ستاك | معتمد في الذكاء الاصطناعي',
      bio: 'مهندس برمجيات متكامل (Full-Stack) معتمد في الذكاء الاصطناعي مع خبرة تزيد عن 5 سنوات في بناء تطبيقات الويب القابلة للتوسع باستخدام Next.js و React و Node.js و TypeScript. أساعد الفرق على التسليم بشكل أسرع من خلال تصميم أنابيب CI/CD وتحسين الأنظمة في الوقت الفعلي التي تتعامل مع أكثر من 10,000 حدث/ثانية.',
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
            'استخدام Git و GitHub للتحكم الدقيق في الإصدارات، والمراجعات التعاونية للأكواد وإدارة الفروع.',
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
      title: 'المشاريع',
      furniture: 'تطبيق تجارة إلكترونية للأثاث باستخدام React Native. يحتوي على خادم Node.js وخادم Stripe وواجهة React Native Expo.',
      googleRedesign: 'إعادة تصميم خدمات جوجل باستخدام Storybook و Vite وتجميعها في Lerna-monorepo.',
      ecommerceApp: 'تطبيق تجارة إلكترونية مبني باستخدام Redux-toolkit و Redux Thunk و Styled Components و Bootstrap.',
      pizzaOrder: 'تطبيق ويب متكامل مع الدفع عبر PayPal. تم النشر على منصة Vercel.',
      voiceTranslation: 'تطبيق ترجمة صوتية في الوقت الفعلي يستخدم WebRTC وتحويلات متعددة لتنسيق الصوت.'
    },
    skills: {
      title: 'ملف المهارات',
      categories: {
        frontend: 'واجهة المستخدم',
        backend: 'الأنظمة الخلفية والربط',
        databases: 'قواعد البيانات',
        devops: 'عمليات التطوير والنشر',
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
      locationVal: 'إرناكولام / كاساراجود، كيرالا، الهند'
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
