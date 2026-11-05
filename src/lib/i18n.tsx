import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'

export type Language = 'en' | 'hi' | 'de' | 'es' | 'ar'

export interface TranslationSchema {
  nav: {
    home: string
    about: string
    experience: string
    projects: string
    skills: string
    certifications: string
    contact: string
    education: string
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
    professional: string
    personal: string
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
  redirect: {
    redirecting: string
    fallback: string
    linksTitle: string
    linksDesc: string
    resume: string
    whatsapp: string
    backHome: string
  }
  whatsapp: {
    countdown: string
    cancel: string
    message: string
  }
  about: {
    kicker: string
    title: string
    summary: string
    backHome: string
    contactMe: string
    capabilitiesTitle: string
    capabilities: string[]
    snapshotTitle: string
    snapshot: string[]
    portraitAlt: string
  }
  kcsa: {
    kicker: string
    title: string
    desc: string
    link: string
  }
  contact: {
    title: string
    website: string
    email: string
    phone: string
    location: string
    locationVal: string
  }
}

const translations: Record<Language, TranslationSchema> = {
  en: {
    nav: { home: 'Home', about: 'About', experience: 'Experience', projects: 'Projects', skills: 'Skills', certifications: 'Certifications', contact: 'Contact', education: 'Education' },
    hero: {
      title: 'Arun Jojo',
      subtitle: 'AI DevOps Engineer & Senior Software Engineer',
      bio: 'AI DevOps Engineer with 5+ years of software engineering and systems experience. I build resilient cloud infrastructure, automated GitOps pipelines, and AI-accelerated delivery systems: zero-downtime CI/CD workflows, container orchestration with Kubernetes, Helm, and Terraform, and agentic AI integrated into DevOps environments to maximize engineering velocity. Open to remote AI DevOps, Platform, and SRE roles.',
      downloadCv: 'Download CV',
      contactInfo: 'Contact Info'
    },
    stats: {
      experience: { value: '5+ Years', label: 'Overall Experience', desc: 'DevOps (1 yr), Software & Frontend (5+ yrs)' },
      throughput: { value: '80%', label: 'Faster Project Setup', desc: 'Terraform Infrastructure-as-Code provisioning' },
      bottlenecks: { value: '30%', label: 'Faster Deployments', desc: 'Automated GitHub Actions pipelines & container orchestration' },
      delivery: { value: '40%', label: 'Less Manual Overhead', desc: 'Dockerized microservices & automated provisioning' }
    },
    experience: {
      title: 'Work Experience',
      at: 'at',
      roles: {
        gesher: {
          role: 'DevOps Engineer',
          location: 'Ernakulam, Kerala',
          highlights: [
            'Led end-to-end development, deployment, and infrastructure automation for multiple client projects on a hybrid stack (Next.js, ASP.NET Core, MySQL), applying CI/CD and GitOps practices for high reliability and rapid delivery.',
            'Integrated and managed regional and international payment gateways (Stripe, PhonePe, Cashfree) in Next.js and PHP applications, achieving 99.9% uptime for checkout services.',
            'Developed Terraform scripts for infrastructure and environment provisioning (Infrastructure-as-Code), reducing manual setup time for new projects by 80%.'
          ]
        },
        upskillingGap: {
          role: 'AI-Automated DevOps Upskilling & Planned Break',
          location: 'Self-Employed / Personal Learning',
          highlights: [
            'Planned career break for personal milestones (wedding).',
            'Intensively upskilled in modern DevOps practices, AIOps, and AI automation tooling.',
            'Developed personal projects and automated workflows using loop-engineering activities and agentic orchestrations to prepare for the next career step.'
          ]
        },
        bct: {
          role: 'Senior Developer',
          location: 'Thiruvananthapuram, Kerala',
          highlights: [
            'Implemented state management using React/Redux-Saga, specifically focusing on optimizing data handling that influenced application performance and stability in production environments.',
            'Collaborated with the File Management Team to streamline document workflow processes, applying principles of efficiency and system integration. Resulting in a 25% measurable increase in team development efficiency through AI-augmented development practices and GitHub Copilot.',
            'Streamlined digital file management for 100+ local body offices through optimized Ksmart and Ksuite features for client Information Kerala Mission (IKM).',
            'Implemented digital signature integration in Ksuite, reducing document approval turnaround time by 40% for local body officials.'
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
          location: 'Infopark, Kochi, Kerala',
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
      professional: 'Professional Project',
      personal: 'Personal Project',
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
    redirect: {
      redirecting: 'Redirecting to',
      fallback: 'Not redirected automatically? Continue',
      linksTitle: 'Find me here',
      linksDesc: 'Pick where you\'d like to connect.',
      resume: 'Resume',
      whatsapp: 'Connect on WhatsApp',
      backHome: 'Back to home'
    },
    whatsapp: {
      countdown: 'Opening WhatsApp in {s}s…',
      cancel: 'Cancel',
      message: 'Hi Arun, I visited your portfolio and would like to connect.'
    },
    about: {
      kicker: 'Professional Summary',
      title: 'About Arun Jojo',
      summary: 'AI DevOps Engineer with 5+ years of software engineering and systems experience. I build resilient cloud infrastructure, automated GitOps pipelines, and AI-accelerated delivery systems, bridging application architecture and cloud operations. I advocate developer-led reliability ("you build it, you run it"): optimizing cloud resource use, enforcing security early in the pipeline, and delivering observable, self-healing platforms.',
      backHome: 'Back to Home',
      contactMe: 'Contact Me',
      capabilitiesTitle: 'Core Capabilities',
      capabilities: [
        'Provisioning infrastructure as code with Terraform and Ansible across AWS, Azure, and GCP',
        'Orchestrating containers with Docker, Kubernetes, and Helm using GitOps workflows',
        'Deploying automated zero-downtime CI/CD pipelines via GitHub Actions',
        'Optimizing backend architectures in PHP, Node.js, and ASP.NET Core',
        'Building observable, self-healing platforms with Prometheus and Grafana',
        'AI-augmented software development using modern AI tools and agents'
      ],
      snapshotTitle: 'Profile Snapshot',
      snapshot: [
        '5+ years building scalable web applications and digital products.',
        'Specializes in Kubernetes, Terraform, Docker, Helm, GitOps, and CI/CD, on a Next.js, React, ASP.NET Core, and Node.js foundation.',
        'Open to remote AI DevOps, Platform Engineering, and SRE roles.'
      ],
      portraitAlt: 'Arun Jojo portrait'
    },
    kcsa: {
      kicker: 'Currently pursuing',
      title: 'Kubernetes and Cloud Native Security Associate (KCSA)',
      desc: 'Building expertise in Kubernetes cluster hardening, cloud native threat modeling, and supply-chain security.',
      link: 'About the certification'
    },
    contact: {
      title: 'Contact Information',
      website: 'LinkedIn Website',
      email: 'Email',
      phone: 'WhatsApp',
      location: 'Location',
      locationVal: 'Ernakulam, Kerala, India'
    }
  },
  hi: {
    nav: { home: 'होम', about: 'बारे में', experience: 'अनुभव', projects: 'परियोजनाएं', skills: 'कौशल', certifications: 'प्रमाणपत्र', contact: 'संपर्क', education: 'शिक्षा' },
    hero: {
      title: 'अरुण जोजो',
      subtitle: 'एआई डेवऑप्स इंजीनियर और सीनियर सॉफ्टवेयर इंजीनियर',
      bio: 'सॉफ्टवेयर इंजीनियरिंग और सिस्टम में 5+ वर्षों के अनुभव वाला एआई डेवऑप्स इंजीनियर। मैं मज़बूत क्लाउड इन्फ्रास्ट्रक्चर, स्वचालित GitOps पाइपलाइन और एआई-त्वरित डिलीवरी सिस्टम बनाता हूं: ज़ीरो-डाउनटाइम सीआई/सीडी वर्कफ़्लो, Kubernetes, Helm और Terraform के साथ कंटेनर ऑर्केस्ट्रेशन, और इंजीनियरिंग गति बढ़ाने के लिए डेवऑप्स वातावरण में एजेंटिक एआई का একीकरণ। রিমোট এআই ডেভঅপ্স, প্ল্যাটফর্ম ও SRE ভূমিকা পরীক্ষা করা হয়েছে।',
      downloadCv: 'সিভি ডাউনলোড করুন',
      contactInfo: 'संपर्क जानकारी'
    },
    stats: {
      experience: { value: '5+ वर्ष', label: 'कुल अनुभव', desc: 'डेवऑप्स (1 वर्ष), सॉफ्टवेयर और फ्रंटएंड (5+ वर्ष)' },
      throughput: { value: '80%', label: 'तेज़ प्रोजेक्ट सेटअप', desc: 'Terraform इन्फ्रास्ट्रक्चर-एज़-कोड प्रोविज़निंग' },
      bottlenecks: { value: '30%', label: 'तेज़ डिप्लॉयमेंट', desc: 'स्वचालित GitHub Actions पाइपलाइन और कंटेनर ऑर्केस्ट्रेशन' },
      delivery: { value: '40%', label: 'कम मैनुअल ओवरहेड', desc: 'Docker माइक्रोसर्विसेज़ और स्वचालित प्रोविज़निंग' }
    },
    experience: {
      title: 'कार्य अनुभव',
      at: 'पर',
      roles: {
        gesher: {
          role: 'डेवऑप्स इंजीनियर',
          location: 'एर्नाकुलम, केरल',
          highlights: [
            'हाइब्रिड टेक स्टैक (Next.js, ASP.NET Core, MySQL) पर कई क्लाइंट प्रोजेक्ट्स के लिए एंड-टू-एंड डेवलपमेंट, डिप्लॉयमेंट और इन्फ्रास्ट्रक्चर ऑटोमेशन का नेतृत्व किया, उच्च विश्वसनीयता और तेज़ डिलीवरी के लिए सीआई/सीडी और GitOps प्रथाओं को लागू किया।',
            'Next.js और PHP एप्लिकेशन में क्षेत्रीय और अंतरराष्ट्रीय पेमेंट गेटवे (Stripe, PhonePe, Cashfree) को एकीकृत और प्रबंधित किया, जिससे चेकआउट सेवाओं का 99.9% अपटाइम हासिल हुआ।',
            'इन्फ्रास्ट्रक्चर और एनवायरनमेंट प्रोविज़निंग (Infrastructure-as-Code) के लिए Terraform स्क्रिप्ट विकसित कीं, जिससे नए प्रोजेक्ट्स का मैनुअल सेटअप समय 80% कम हुआ।'
          ]
        },
        upskillingGap: {
          role: 'एआई-स्वचालित डेवऑप्स अपस्किलिंग और नियोजित ब्रेक',
          location: 'स्व-नियोजित / व्यक्तिगत सीखना',
          highlights: [
            'व्यक्तिगत मील के पत्थर (शादी) के लिए नियोजित करियर ब्रेक।',
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
            'क्लाइंट इन्फॉर्मेशन केरल मिशन (IKM) के लिए Ksmart और Ksuite की अनुकूलित सुविधाओं के माध्यम से 100+ स्थानीय निकाय कार्यालयों के डिजिटल फ़ाइल प्रबंधन को सुव्यवस्थित किया।',
            'Ksuite में डिजिटल हस्ताक्षर एकीकरण लागू किया, जिससे स्थानीय निकाय अधिकारियों के लिए दस्तावेज़ अनुमोदन समय 40% कम हुआ।'
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
          location: 'इन्फोपार्क, कोच्चि, केरल',
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
      professional: 'व्यावसायिक परियोजना',
      personal: 'व्यक्तिगत परियोजना',
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
    redirect: {
      redirecting: 'रीडायरेक्ट हो रहा है',
      fallback: 'अपने आप रीडायरेक्ट नहीं हुआ? आगे बढ़ें',
      linksTitle: 'मुझसे यहाँ जुड़ें',
      linksDesc: 'चुनें कि आप कहाँ जुड़ना चाहते हैं।',
      resume: 'रिज़्यूमे',
      whatsapp: 'WhatsApp पर जुड़ें',
      backHome: 'होम पर वापस जाएं'
    },
    whatsapp: {
      countdown: '{s} सेकंड में WhatsApp खुल रहा है…',
      cancel: 'रद्द करें',
      message: 'नमस्ते अरुण, मैंने आपका पोर्टफोलियो देखा और आपसे जुड़ना चाहता/चाहती हूं।'
    },
    about: {
      kicker: 'पेशेवर सारांश',
      title: 'अरुण जोजो के बारे में',
      summary: 'सॉफ्टवेयर इंजीनियरिंग और सिस्टम में 5+ वर्षों के अनुभव वाला एआई डेवऑप्स इंजीनियर। मैं मज़बूत क्लाउड इन्फ्रास्ट्रक्चर, स्वचालित GitOps पाइपलाइन और एआई-त्वरित डिलीवरी सिस्टम बनाता हूं, जो एप्लिकेशन आर्किटेक्चर और क्लाउड ऑपरेशंस को जोड़ते हैं। मैं डेवलपर-नेतृत्व वाली विश्वसनीयता ("you build it, you run it") का समर्थक हूं: क्लाउड संसाधनों का बेहतर उपयोग, पाइपलाइन में शुरुआत से सुरक्षा, और ऑब्ज़र्वेबल, सेल्फ-हीलिंग प्लेटफ़ॉर्म।',
      backHome: 'होम पर वापस जाएं',
      contactMe: 'संपर्क करें',
      capabilitiesTitle: 'मुख्य क्षमताएं',
      capabilities: [
        'AWS, Azure और GCP पर Terraform और Ansible के साथ इन्फ्रास्ट्रक्चर-एज़-कोड प्रोविज़निंग',
        'GitOps वर्कफ़्लो के साथ Docker, Kubernetes और Helm द्वारा कंटेनर ऑर्केस्ट्रेशन',
        'GitHub Actions के माध्यम से स्वचालित ज़ीरो-डाउनटाइम सीआई/सीडी पाइपलाइन',
        'PHP, Node.js और ASP.NET Core में बैकएंड आर्किटेक्चर का अनुकूलन',
        'Prometheus और Grafana के साथ ऑब्ज़र्वेबल, सेल्फ-हीलिंग प्लेटफ़ॉर्म बनाना',
        'आधुनिक एआई टूल्स और एजेंट्स के साथ एआई-संवर्धित सॉफ्टवेयर डेवलपमेंट'
      ],
      snapshotTitle: 'प्रोफ़ाइल झलक',
      snapshot: [
        'स्केलेबल वेब एप्लिकेशन और डिजिटल उत्पाद बनाने का 5+ वर्षों का अनुभव।',
        'Next.js, React, ASP.NET Core और Node.js की नींव पर Kubernetes, Terraform, Docker, Helm, GitOps और सीआई/सीडी में विशेषज्ञता।',
        'रिमोट एआई डेवऑप्स, प्लेटफ़ॉर्म इंजीनियरिंग और SRE भूमिकाओं के लिए उपलब्ध।'
      ],
      portraitAlt: 'अरुण जोजो का चित्र'
    },
    kcsa: {
      kicker: 'वर्तमान में कर रहे हैं',
      title: 'Kubernetes and Cloud Native Security Associate (KCSA)',
      desc: 'Kubernetes क्लस्टर हार्डनिंग, क्लाउड नेटिव थ्रेट मॉडलिंग और सप्लाई-चेन सुरक्षा में विशेषज्ञता बना रहा हूं।',
      link: 'सर्टिफिकेशन के बारे में'
    },
    contact: {
      title: 'संपर्क सूत्र',
      website: 'लिंक्डइन वेबसाइट',
      email: 'ईमेल',
      phone: 'वॉट्सऐप',
      location: 'स्थान',
      locationVal: 'एर्नाकुलम, केरल, भारत'
    }
  },
  de: {
    nav: { home: 'Startseite', about: 'Über mich', experience: 'Erfahrung', projects: 'Projekte', skills: 'Fähigkeiten', certifications: 'Zertifikate', contact: 'Kontakt', education: 'Ausbildung' },
    hero: {
      title: 'Arun Jojo',
      subtitle: 'AI-DevOps-Engineer & Senior Software Engineer',
      bio: 'AI-DevOps-Engineer mit 5+ Jahren Erfahrung in Softwareentwicklung und Systemen. Ich baue belastbare Cloud-Infrastruktur, automatisierte GitOps-Pipelines und KI-beschleunigte Delivery-Systeme: CI/CD-Workflows ohne Ausfallzeit, Container-Orchestrierung mit Kubernetes, Helm und Terraform sowie agentische KI in DevOps-Umgebungen für maximale Entwicklungsgeschwindigkeit. Offen für Remote-Rollen in AI DevOps, Platform Engineering und SRE.',
      downloadCv: 'Lebenslauf herunterladen',
      contactInfo: 'Kontaktinfo'
    },
    stats: {
      experience: { value: '5+ Jahre', label: 'Gesamterfahrung', desc: 'DevOps (1 J.), Software & Frontend (5+ J.)' },
      throughput: { value: '80%', label: 'Schnelleres Projekt-Setup', desc: 'Terraform Infrastructure-as-Code-Bereitstellung' },
      bottlenecks: { value: '30%', label: 'Schnellere Deployments', desc: 'Automatisierte GitHub-Actions-Pipelines & Container-Orchestrierung' },
      delivery: { value: '40%', label: 'Weniger manueller Aufwand', desc: 'Docker-Microservices & automatisierte Bereitstellung' }
    },
    experience: {
      title: 'Berufserfahrung',
      at: 'bei',
      roles: {
        gesher: {
          role: 'DevOps-Engineer',
          location: 'Ernakulam, Indien',
          highlights: [
            'Leitung der End-to-End-Entwicklung, Bereitstellung und Infrastrukturautomatisierung für mehrere Kundenprojekte auf einem hybriden Stack (Next.js, ASP.NET Core, MySQL) mit CI/CD- und GitOps-Praktiken für hohe Zuverlässigkeit und schnelle Lieferung.',
            'Integration und Betrieb regionaler und internationaler Zahlungs-Gateways (Stripe, PhonePe, Cashfree) in Next.js- und PHP-Anwendungen mit 99,9% Verfügbarkeit der Checkout-Dienste.',
            'Entwicklung von Terraform-Skripten zur Infrastruktur- und Umgebungsbereitstellung (Infrastructure-as-Code), wodurch die manuelle Einrichtungszeit neuer Projekte um 80% sank.'
          ]
        },
        upskillingGap: {
          role: 'KI-Automatisierte DevOps-Fortbildung & geplante Pause',
          location: 'Selbstständig / Persönliches Lernen',
          highlights: [
            'Geplante Karrierepause für persönliche Meilensteine (Hochzeit).',
            'Intensive Fortbildung in modernen DevOps-Praktiken, AIOps und KI-Automatisierungswerkzeugen.',
            'Entwicklung persönlicher Projekte und automatisierter Workflows mithilfe von Loop-Engineering-Aktivitäten und Agenten-Orchestrierungen.'
          ]
        },
        bct: {
          role: 'Senior Entwickler',
          location: 'Thiruvananthapuram, Indien',
          highlights: [
            'Implementierung des Statusmanagements mit React/Redux-Saga zur Optimierung der Datenverarbeitung in Produktionsumgebungen.',
            'Effizienzsteigerung im Team um 25% durch KI-gestützte Entwicklungsmethoden und GitHub Copilot.',
            'Optimierung der digitalen Aktenverwaltung für über 100 Kommunalbehörden durch verbesserte Ksmart- und Ksuite-Funktionen für den Kunden Information Kerala Mission (IKM).',
            'Integration digitaler Signaturen in Ksuite, wodurch die Genehmigungsdauer von Dokumenten für kommunale Beamte um 40% sank.'
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
          location: 'Infopark, Kochi, Indien',
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
      title: 'Projekte',
      professional: 'Professionelles Projekt',
      personal: 'Persönliches Projekt',
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
    redirect: {
      redirecting: 'Weiterleitung zu',
      fallback: 'Keine automatische Weiterleitung? Weiter',
      linksTitle: 'Hier finden Sie mich',
      linksDesc: 'Wählen Sie, wo Sie sich vernetzen möchten.',
      resume: 'Lebenslauf',
      whatsapp: 'Auf WhatsApp verbinden',
      backHome: 'Zurück zur Startseite'
    },
    whatsapp: {
      countdown: 'WhatsApp öffnet sich in {s} s…',
      cancel: 'Abbrechen',
      message: 'Hallo Arun, ich habe dein Portfolio gesehen und würde mich gern vernetzen.'
    },
    about: {
      kicker: 'Berufliche Zusammenfassung',
      title: 'Über Arun Jojo',
      summary: 'AI-DevOps-Engineer mit 5+ Jahren Erfahrung in Softwareentwicklung und Systemen. Ich baue belastbare Cloud-Infrastruktur, automatisierte GitOps-Pipelines und KI-beschleunigte Delivery-Systeme und verbinde Anwendungsarchitektur mit Cloud-Betrieb. Ich stehe für entwicklergetriebene Zuverlässigkeit („you build it, you run it“): effiziente Nutzung von Cloud-Ressourcen, Sicherheit früh in der Pipeline und beobachtbare, selbstheilende Plattformen.',
      backHome: 'Zurück zur Startseite',
      contactMe: 'Kontakt',
      capabilitiesTitle: 'Kernkompetenzen',
      capabilities: [
        'Infrastructure as Code mit Terraform und Ansible auf AWS, Azure und GCP',
        'Container-Orchestrierung mit Docker, Kubernetes und Helm über GitOps-Workflows',
        'Automatisierte CI/CD-Pipelines ohne Ausfallzeit mit GitHub Actions',
        'Optimierung von Backend-Architekturen in PHP, Node.js und ASP.NET Core',
        'Beobachtbare, selbstheilende Plattformen mit Prometheus und Grafana',
        'KI-gestützte Softwareentwicklung mit modernen KI-Tools und Agenten'
      ],
      snapshotTitle: 'Profil auf einen Blick',
      snapshot: [
        '5+ Jahre Entwicklung skalierbarer Webanwendungen und digitaler Produkte.',
        'Spezialisiert auf Kubernetes, Terraform, Docker, Helm, GitOps und CI/CD auf Basis von Next.js, React, ASP.NET Core und Node.js.',
        'Offen für Remote-Rollen in AI DevOps, Platform Engineering und SRE.'
      ],
      portraitAlt: 'Porträt von Arun Jojo'
    },
    kcsa: {
      kicker: 'Aktuell in Vorbereitung',
      title: 'Kubernetes and Cloud Native Security Associate (KCSA)',
      desc: 'Vertiefung in Kubernetes-Cluster-Härtung, Cloud-Native-Bedrohungsmodellierung und Supply-Chain-Sicherheit.',
      link: 'Zur Zertifizierung'
    },
    contact: {
      title: 'Kontaktinformationen',
      website: 'LinkedIn-Website',
      email: 'E-Mail',
      phone: 'WhatsApp',
      location: 'Standort',
      locationVal: 'Ernakulam, Kerala, Indien'
    }
  },
  es: {
    nav: { home: 'Inicio', about: 'Acerca de', experience: 'Experiencia', projects: 'Proyectos', skills: 'Habilidades', certifications: 'Certificaciones', contact: 'Contacto', education: 'Educación' },
    hero: {
      title: 'Arun Jojo',
      subtitle: 'Ingeniero AI DevOps e Ingeniero de Software Senior',
      bio: 'Ingeniero AI DevOps con más de 5 años de experiencia en ingeniería de software y sistemas. Construyo infraestructura cloud resiliente, pipelines GitOps automatizados y sistemas de entrega acelerados por IA: flujos CI/CD sin tiempo de inactividad, orquestación de contenedores con Kubernetes, Helm y Terraform, e IA agéntica integrada en entornos DevOps para maximizar la velocidad de ingeniería. Disponible para roles remotos de AI DevOps, Platform y SRE.',
      downloadCv: 'Descargar CV',
      contactInfo: 'Información de Contacto'
    },
    stats: {
      experience: { value: '5+ Años', label: 'Experiencia General', desc: 'DevOps (1 año), Software y Frontend (5+ años)' },
      throughput: { value: '80%', label: 'Configuración más Rápida', desc: 'Aprovisionamiento Infrastructure-as-Code con Terraform' },
      bottlenecks: { value: '30%', label: 'Despliegues más Rápidos', desc: 'Pipelines automatizados con GitHub Actions y orquestación de contenedores' },
      delivery: { value: '40%', label: 'Menos Trabajo Manual', desc: 'Microservicios con Docker y aprovisionamiento automatizado' }
    },
    experience: {
      title: 'Experiencia Laboral',
      at: 'en',
      roles: {
        gesher: {
          role: 'Ingeniero DevOps',
          location: 'Ernakulam, India',
          highlights: [
            'Lideré el desarrollo, despliegue y automatización de infraestructura de extremo a extremo para múltiples proyectos de clientes sobre un stack híbrido (Next.js, ASP.NET Core, MySQL), aplicando prácticas CI/CD y GitOps para alta fiabilidad y entrega rápida.',
            'Integré y gestioné pasarelas de pago regionales e internacionales (Stripe, PhonePe, Cashfree) en aplicaciones Next.js y PHP, logrando un 99.9% de disponibilidad en los servicios de checkout.',
            'Desarrollé scripts de Terraform para el aprovisionamiento de infraestructura y entornos (Infrastructure-as-Code), reduciendo un 80% el tiempo de configuración manual de nuevos proyectos.'
          ]
        },
        upskillingGap: {
          role: 'Capacitación DevOps Automatizada por IA y Pausa Planificada',
          location: 'Trabajo por cuenta propia / Aprendizaje personal',
          highlights: [
            'Pausa profesional planificada para hitos personales (boda).',
            'Capacitación intensiva en prácticas modernas de DevOps, AIOps y herramientas de automatización de IA.',
            'Desarrollo de proyectos personales y flujos de trabajo automatizados utilizando actividades de ingeniería en bucle y orquestaciones de agentes.'
          ]
        },
        bct: {
          role: 'Desarrollador Senior',
          location: 'Thiruvananthapuram, India',
          highlights: [
            'Implementación de la gestión de estados con React/Redux-Saga para optimizar el manejo de datos en entornos de producción.',
            'Aumento del 25% en la eficiencia del desarrollo del equipo a través de prácticas aumentadas con IA y GitHub Copilot.',
            'Optimicé la gestión digital de archivos para más de 100 oficinas de organismos locales mediante funciones mejoradas de Ksmart y Ksuite para el cliente Information Kerala Mission (IKM).',
            'Implementé la integración de firma digital en Ksuite, reduciendo un 40% el tiempo de aprobación de documentos para los funcionarios locales.'
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
          location: 'Infopark, Kochi, India',
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
      professional: 'Proyecto Profesional',
      personal: 'Proyecto Personal',
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
    redirect: {
      redirecting: 'Redirigiendo a',
      fallback: '¿No se redirigió automáticamente? Continuar',
      linksTitle: 'Encuéntrame aquí',
      linksDesc: 'Elige dónde te gustaría conectar.',
      resume: 'Currículum',
      whatsapp: 'Conectar por WhatsApp',
      backHome: 'Volver al inicio'
    },
    whatsapp: {
      countdown: 'Abriendo WhatsApp en {s} s…',
      cancel: 'Cancelar',
      message: 'Hola Arun, visité tu portafolio y me gustaría conectar contigo.'
    },
    about: {
      kicker: 'Resumen Profesional',
      title: 'Sobre Arun Jojo',
      summary: 'Ingeniero AI DevOps con más de 5 años de experiencia en ingeniería de software y sistemas. Construyo infraestructura cloud resiliente, pipelines GitOps automatizados y sistemas de entrega acelerados por IA, uniendo la arquitectura de aplicaciones con las operaciones cloud. Promuevo la fiabilidad liderada por desarrolladores ("you build it, you run it"): uso eficiente de recursos cloud, seguridad desde el inicio del pipeline y plataformas observables y autorreparables.',
      backHome: 'Volver al Inicio',
      contactMe: 'Contáctame',
      capabilitiesTitle: 'Capacidades Clave',
      capabilities: [
        'Infraestructura como código con Terraform y Ansible en AWS, Azure y GCP',
        'Orquestación de contenedores con Docker, Kubernetes y Helm mediante flujos GitOps',
        'Pipelines CI/CD automatizados sin tiempo de inactividad con GitHub Actions',
        'Optimización de arquitecturas backend en PHP, Node.js y ASP.NET Core',
        'Plataformas observables y autorreparables con Prometheus y Grafana',
        'Desarrollo de software potenciado por IA con herramientas y agentes modernos'
      ],
      snapshotTitle: 'Perfil en Resumen',
      snapshot: [
        'Más de 5 años creando aplicaciones web escalables y productos digitales.',
        'Especializado en Kubernetes, Terraform, Docker, Helm, GitOps y CI/CD, sobre una base de Next.js, React, ASP.NET Core y Node.js.',
        'Disponible para roles remotos de AI DevOps, Platform Engineering y SRE.'
      ],
      portraitAlt: 'Retrato de Arun Jojo'
    },
    kcsa: {
      kicker: 'Actualmente cursando',
      title: 'Kubernetes and Cloud Native Security Associate (KCSA)',
      desc: 'Desarrollando experiencia en hardening de clústeres Kubernetes, modelado de amenazas cloud native y seguridad de la cadena de suministro.',
      link: 'Sobre la certificación'
    },
    contact: {
      title: 'Información de Contacto',
      website: 'Sitio Web de LinkedIn',
      email: 'Correo Electrónico',
      phone: 'WhatsApp',
      location: 'Ubicación',
      locationVal: 'Ernakulam, Kerala, India'
    }
  },
  ar: {
    nav: { home: 'الرئيسية', about: 'عنّي', experience: 'الخبرة', projects: 'المشاريع', skills: 'المهارات', certifications: 'الشهادات', contact: 'الاتصال', education: 'التعليم' },
    hero: {
      title: 'أرون جوجو',
      subtitle: 'مهندس AI DevOps ومهندس برمجيات أول',
      bio: 'مهندس AI DevOps بخبرة تزيد عن ٥ سنوات في هندسة البرمجيات والأنظمة. أبني بنية سحابية مرنة وخطوط GitOps مؤتمتة وأنظمة تسليم مُسرَّعة بالذكاء الاصطناعي: سير عمل CI/CD دون توقف، وتنسيق الحاويات باستخدام Kubernetes وHelm وTerraform، ودمج الذكاء الاصطناعي الوكيلي في بيئات ديف أوبس لرفع سرعة الهندسة. متاح لأدوار AI DevOps وهندسة المنصات وSRE عن بُعد.',
      downloadCv: 'تحميل السيرة الذاتية',
      contactInfo: 'معلومات الاتصال'
    },
    stats: {
      experience: { value: '٥+ سنوات', label: 'الخبرة الإجمالية', desc: 'ديف أوبس (سنة واحدة)، هندسة البرمجيات والواجهات (٥+ سنوات)' },
      throughput: { value: '٨٠٪', label: 'إعداد أسرع للمشاريع', desc: 'تجهيز البنية التحتية كرمز باستخدام Terraform' },
      bottlenecks: { value: '٣٠٪', label: 'نشر أسرع', desc: 'خطوط GitHub Actions مؤتمتة وتنسيق الحاويات' },
      delivery: { value: '٤٠٪', label: 'جهد يدوي أقل', desc: 'خدمات مصغرة بـ Docker وتجهيز مؤتمت' }
    },
    experience: {
      title: 'الخبرة المهنية',
      at: 'في',
      roles: {
        gesher: {
          role: 'مهندس ديف أوبس',
          location: 'إرناكولام، الهند',
          highlights: [
            'قيادة التطوير والنشر وأتمتة البنية التحتية من البداية إلى النهاية لعدة مشاريع عملاء على تقنيات هجينة (Next.js وASP.NET Core وMySQL) مع تطبيق ممارسات CI/CD وGitOps لتحقيق موثوقية عالية وتسليم سريع.',
            'دمج وإدارة بوابات دفع إقليمية ودولية (Stripe وPhonePe وCashfree) في تطبيقات Next.js وPHP، مع تحقيق جاهزية بنسبة 99.9% لخدمات الدفع.',
            'تطوير نصوص Terraform لتجهيز البنية التحتية والبيئات (البنية التحتية كرمز)، مما قلل وقت الإعداد اليدوي للمشاريع الجديدة بنسبة 80%.'
          ]
        },
        upskillingGap: {
          role: 'تطوير مهارات ديف أوبس المؤتمتة بالذكاء الاصطناعي وفترة استراحة مخططة',
          location: 'عمل حر / تعليم شخصي',
          highlights: [
            'استراحة مهنية مخططة لأحداث شخصية (الزفاف).',
            'تطوير مكثف للمهارات في ممارسات ديف أوبس الحديثة وAIOps وأدوات أتمتة الذكاء الاصطناعي.',
            'تطوير مشاريع شخصية وسير عمل مؤتمت باستخدام أنشطة هندسة التكرار والتنسيق البرمجي للاستعداد للخطوة المهنية التالية.'
          ]
        },
        bct: {
          role: 'مطور برمجيات أول',
          location: 'ثيروفانانثابورام، الهند',
          highlights: [
            'تطبيق إدارة الحالة باستخدام React/Redux-Saga، مع التركيز بشكل خاص على تحسين معالجة البيانات التي تؤثر على استقرار التطبيق في البيئات الحية.',
            'زيادة بنسبة ٢٥٪ في كفاءة تطوير الفريق من خلال استخدام ممارسات التطوير المعززة بالذكاء الاصطناعي ومساعد GitHub Copilot.',
            'تبسيط إدارة الملفات الرقمية لأكثر من 100 مكتب للهيئات المحلية من خلال ميزات محسّنة في Ksmart وKsuite للعميل Information Kerala Mission (IKM).',
            'تنفيذ تكامل التوقيع الرقمي في Ksuite، مما قلل وقت اعتماد المستندات بنسبة 40% لمسؤولي الهيئات المحلية.'
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
          location: 'إنفوبارك، كوتشي، الهند',
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
      professional: 'مشروع مهني',
      personal: 'مشروع شخصي',
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
    redirect: {
      redirecting: 'جارٍ التحويل إلى',
      fallback: 'لم يتم التحويل تلقائيًا؟ تابع',
      linksTitle: 'تجدني هنا',
      linksDesc: 'اختر المكان الذي تود التواصل فيه.',
      resume: 'السيرة الذاتية',
      whatsapp: 'تواصل عبر واتساب',
      backHome: 'العودة إلى الرئيسية'
    },
    whatsapp: {
      countdown: 'سيتم فتح واتساب خلال {s} ث…',
      cancel: 'إلغاء',
      message: 'مرحبًا أرون، زرت معرض أعمالك وأود التواصل معك.'
    },
    about: {
      kicker: 'ملخص مهني',
      title: 'نبذة عن أرون جوجو',
      summary: 'مهندس AI DevOps بخبرة تزيد عن ٥ سنوات في هندسة البرمجيات والأنظمة. أبني بنية سحابية مرنة وخطوط GitOps مؤتمتة وأنظمة تسليم مُسرَّعة بالذكاء الاصطناعي تربط بين بنية التطبيقات والعمليات السحابية. أؤمن بالموثوقية التي يقودها المطورون ("you build it, you run it"): تحسين استخدام الموارد السحابية، وفرض الأمان مبكرًا في خط الإنتاج، وتقديم منصات قابلة للمراقبة وذاتية الإصلاح.',
      backHome: 'العودة إلى الرئيسية',
      contactMe: 'تواصل معي',
      capabilitiesTitle: 'القدرات الأساسية',
      capabilities: [
        'تجهيز البنية التحتية كرمز باستخدام Terraform وAnsible على AWS وAzure وGCP',
        'تنسيق الحاويات باستخدام Docker وKubernetes وHelm عبر سير عمل GitOps',
        'خطوط CI/CD مؤتمتة دون توقف عبر GitHub Actions',
        'تحسين بنى الخوادم الخلفية في PHP وNode.js وASP.NET Core',
        'بناء منصات قابلة للمراقبة وذاتية الإصلاح باستخدام Prometheus وGrafana',
        'تطوير برمجيات مدعوم بالذكاء الاصطناعي باستخدام أدوات ووكلاء حديثة'
      ],
      snapshotTitle: 'لمحة عن الملف الشخصي',
      snapshot: [
        'أكثر من ٥ سنوات في بناء تطبيقات ويب قابلة للتوسع ومنتجات رقمية.',
        'متخصص في Kubernetes وTerraform وDocker وHelm وGitOps وCI/CD على أساس Next.js وReact وASP.NET Core وNode.js.',
        'متاح لأدوار AI DevOps وهندسة المنصات وSRE عن بُعد.'
      ],
      portraitAlt: 'صورة أرون جوجو'
    },
    kcsa: {
      kicker: 'أعمل حاليًا على',
      title: 'Kubernetes and Cloud Native Security Associate (KCSA)',
      desc: 'بناء خبرة في تقوية عناقيد Kubernetes ونمذجة التهديدات السحابية الأصلية وأمن سلسلة التوريد.',
      link: 'عن الشهادة'
    },
    contact: {
      title: 'معلومات الاتصال المباشر',
      website: 'موقع لينكد إن',
      email: 'البريد الإلكتروني',
      phone: 'واتساب',
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
