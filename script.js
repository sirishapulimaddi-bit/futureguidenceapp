/**
 * CareerPath - Interactive Career Guidance Application
 * Designed for Students after Class 10 and Class 12
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. Career Database (Curated for Class 10 & 12 Pathways)
     ========================================================================== */
  const CAREERS_DATA = [
    {
      id: 'software-dev',
      title: 'Software Developer & Web Engineer',
      category: 'Technology',
      stage: 'both',
      stageLabel: 'After 10th & 12th',
      shortDesc: 'Build mobile apps, websites, games, and enterprise computer software using modern programming languages.',
      skills: ['Problem Solving', 'Python / JavaScript', 'Data Structures', 'Git & GitHub', 'Logical Reasoning'],
      courses: ['B.Tech / B.E Computer Science', 'BCA (Bachelor of Computer Applications)', 'Polytechnic Diploma in CS'],
      exams: ['JEE Main / Advanced', 'State Engineering CETs', 'CUET', 'College Entrance Tests'],
      growth: 'Very High Demand',
      roadmap: [
        {
          phase: 'Class 10 Transition',
          desc: 'Choose Science stream with PCM (Physics, Chemistry, Math) or Computer Science. Alternatively, enroll in a 3-year Polytechnic Diploma in Computer Engineering.'
        },
        {
          phase: 'Class 12 & Undergraduate',
          desc: 'Prepare for JEE / CETs to enter B.Tech Computer Science, or pursue BCA / B.Sc IT if you want a direct coding-focused degree.'
        },
        {
          phase: 'Skill Building in College',
          desc: 'Build open-source personal projects, master algorithms, build web/mobile applications, and participate in hackathons.'
        },
        {
          phase: 'Career Launch',
          desc: 'Join tech startups, IT service giants, or product companies as a Junior Software Engineer, Frontend/Backend Developer, or Mobile App Developer.'
        }
      ],
      scope: 'The software industry continues to expand globally. Every modern business requires digital applications, making software engineering one of the highest paying and globally mobile careers.'
    },
    {
      id: 'ai-data-scientist',
      title: 'Artificial Intelligence & Data Scientist',
      category: 'Technology',
      stage: '12',
      stageLabel: 'After Class 12',
      shortDesc: 'Train machine learning models, analyze massive datasets, and build intelligent algorithms that power automation and AI.',
      skills: ['Mathematics & Statistics', 'Python / R', 'Machine Learning', 'Data Visualization', 'Analytical Thinking'],
      courses: ['B.Tech AI & Data Science', 'B.Sc Data Science / Statistics', 'Integrated M.Tech in AI'],
      exams: ['JEE Main', 'BITS entrance', 'CUET (for B.Sc Data Science)'],
      growth: 'Exponential Growth',
      roadmap: [
        {
          phase: 'Class 10 Transition',
          desc: 'Select Science (PCM) with strong emphasis on Mathematics and Statistics.'
        },
        {
          phase: 'Class 12 & Undergraduate',
          desc: 'Crack engineering or university entrance tests for B.Tech in CS/AI or B.Sc in Statistics, Mathematics, or Data Science.'
        },
        {
          phase: 'Skill Building in College',
          desc: 'Learn Python libraries (Pandas, NumPy, Scikit-Learn, PyTorch), work with Kaggle datasets, and build AI projects.'
        },
        {
          phase: 'Career Launch',
          desc: 'Step into roles like Junior Data Analyst, Machine Learning Intern, or Business Intelligence Specialist, progressing to AI Researcher.'
        }
      ],
      scope: 'With generative AI and automation disrupting every sector from healthcare to finance, skilled data scientists and AI engineers are among the most valued professionals worldwide.'
    },
    {
      id: 'cybersecurity-specialist',
      title: 'Cybersecurity Analyst & Ethical Hacker',
      category: 'Technology',
      stage: 'both',
      stageLabel: 'After 10th & 12th',
      shortDesc: 'Protect networks, critical infrastructure, and cloud systems from cyber attacks, malware, and data breaches.',
      skills: ['Network Security', 'Linux', 'Ethical Hacking', 'Cryptography', 'Risk Assessment'],
      courses: ['B.Tech Cybersecurity / IT', 'BCA with Cyber Security Specialization', 'Certifications (CompTIA Security+, CEH)'],
      exams: ['JEE Main', 'State CETs', 'University Entrance Exams'],
      growth: 'Critical Shortage / High Growth',
      roadmap: [
        {
          phase: 'Class 10 Transition',
          desc: 'Choose Science (PCM) or Computer Science. You can also start learning networking fundamentals and Linux on virtual machines.'
        },
        {
          phase: 'Class 12 & Undergraduate',
          desc: 'Pursue B.Tech or BCA with focus on Information Security, Networking, or Computer Systems.'
        },
        {
          phase: 'Skill Building in College',
          desc: 'Participate in Capture The Flag (CTF) competitions, earn recognized credentials like CompTIA Security+ or Certified Ethical Hacker (CEH).'
        },
        {
          phase: 'Career Launch',
          desc: 'Work in Security Operations Centers (SOC Analyst), Penetration Tester, Incident Responder, or Information Security Consultant.'
        }
      ],
      scope: 'As banking, government, and consumer services move entirely online, global cyber defenses require thousands of trained ethical defenders.'
    },
    {
      id: 'doctor-mbbs',
      title: 'Medical Doctor (Physician / Surgeon)',
      category: 'Healthcare',
      stage: '12',
      stageLabel: 'After Class 12',
      shortDesc: 'Diagnose illnesses, prescribe treatments, conduct surgeries, and save lives in hospitals and clinics.',
      skills: ['Clinical Empathy', 'Biology & Anatomy', 'Diagnostic Reasoning', 'Emotional Resilience', 'Critical Decision Making'],
      courses: ['MBBS (Bachelor of Medicine & Bachelor of Surgery)', 'BDS (Dental)', 'MD / MS (Postgraduate Specialization)'],
      exams: ['NEET-UG (National Eligibility cum Entrance Test)'],
      growth: 'Evergreen Demand',
      roadmap: [
        {
          phase: 'Class 10 Transition',
          desc: 'Choose Science stream with PCB (Physics, Chemistry, Biology). Dedicate daily study hours to biological sciences and chemistry.'
        },
        {
          phase: 'Class 12 & NEET-UG',
          desc: 'Score competitive rank in NEET-UG to secure admission to government or top medical colleges for 5.5 years MBBS program.'
        },
        {
          phase: 'Internship & Clinical Practice',
          desc: 'Complete mandatory 1-year rotating hospital internship treating outpatient and inpatient departments.'
        },
        {
          phase: 'Specialization (MD/MS)',
          desc: 'Appear for NEET-PG to specialize in Cardiology, Neurology, Pediatrics, General Surgery, Orthopedics, or Radiology.'
        }
      ],
      scope: 'Healthcare is universal and resistant to economic downturns. Doctors enjoy immense social respect, personal fulfillment, and global career opportunities.'
    },
    {
      id: 'biotechnologist',
      title: 'Biotechnologist & Genetic Researcher',
      category: 'Healthcare',
      stage: 'both',
      stageLabel: 'After 10th & 12th',
      shortDesc: 'Harness living cells and biological systems to develop life-saving vaccines, cancer therapies, and sustainable biofuels.',
      skills: ['Molecular Biology', 'Lab Research', 'Data Analysis', 'Genomics', 'Bioinformatics'],
      courses: ['B.Tech Biotechnology', 'B.Sc Biotechnology / Microbiology', 'Integrated M.Sc in Life Sciences'],
      exams: ['JEE Main', 'NEET-UG', 'CUET', 'ICAR AIEEA'],
      growth: 'High Growth',
      roadmap: [
        {
          phase: 'Class 10 Transition',
          desc: 'Choose Science with PCB or PCMB. Both math and biology students can pursue biotechnology degrees.'
        },
        {
          phase: 'Class 12 & Undergraduate',
          desc: 'Enroll in B.Tech Biotechnology or B.Sc in Genetics / Microbiology via CUET or engineering entrance exams.'
        },
        {
          phase: 'Lab Work & Research',
          desc: 'Gain practical experience in molecular biology labs, gene editing (CRISPR), and computational bioinformatics software.'
        },
        {
          phase: 'Career Launch',
          desc: 'Work in biopharmaceutical companies, vaccine production units, forensic laboratories, or proceed to M.S/Ph.D for clinical trials research.'
        }
      ],
      scope: 'From personalized medicine to climate-resilient crops, biotechnology is shaping the 21st century bio-economy.'
    },
    {
      id: 'pharmacist',
      title: 'Pharmacist & Drug Development Specialist',
      category: 'Healthcare',
      stage: 'both',
      stageLabel: 'After 10th & 12th',
      shortDesc: 'Formulate, test, and dispense pharmaceutical medications to ensure safety, efficacy, and compliance.',
      skills: ['Pharmacology', 'Organic Chemistry', 'Quality Control', 'Patient Care', 'Regulatory Compliance'],
      courses: ['B.Pharm (Bachelor of Pharmacy)', 'D.Pharm (Diploma in Pharmacy - 2 years after 12th)', 'Pharm.D (Doctor of Pharmacy)'],
      exams: ['State Pharmacy CETs', 'NEET (in select states)', 'CUET'],
      growth: 'High Stability',
      roadmap: [
        {
          phase: 'Class 10 Transition',
          desc: 'Choose Science stream with Chemistry and either Biology or Mathematics.'
        },
        {
          phase: 'Class 12 & Degree',
          desc: 'Take admission into a 4-year B.Pharm or 6-year Pharm.D course approved by Pharmacy Council of India (PCI).'
        },
        {
          phase: 'Licensing & Industrial Training',
          desc: 'Undergo hospital and pharmaceutical manufacturing internships; obtain official registered pharmacist license.'
        },
        {
          phase: 'Career Options',
          desc: 'Work in pharmaceutical R&D, clinical trial management, hospital drug advisory, or start a retail pharmaceutical enterprise.'
        }
      ],
      scope: 'The pharmaceutical industry is one of the world\'s largest employers, providing stability across manufacturing, research, and retail.'
    },
    {
      id: 'chartered-accountant',
      title: 'Chartered Accountant (CA)',
      category: 'Business',
      stage: 'both',
      stageLabel: 'After 10th & 12th',
      shortDesc: 'Manage financial audits, taxation policies, corporate governance, and fiscal advisory for organizations and governments.',
      skills: ['Financial Auditing', 'Taxation Laws', 'Accounting Standards', 'Business Law', 'Analytical Mindset'],
      courses: ['CA Foundation (Direct entry after 12th)', 'B.Com / B.Com (Hons) alongside CA', 'CMA / ACCA Alternatives'],
      exams: ['ICAI CA Foundation Exam', 'CA Intermediate', 'CA Final'],
      growth: 'High Prestige & High Demand',
      roadmap: [
        {
          phase: 'Class 10 Transition',
          desc: 'Opt for Commerce stream (with or without Math). Science or Arts students can also choose CA later, but Commerce provides foundational accounting knowledge.'
        },
        {
          phase: 'Register for CA Foundation',
          desc: 'Register with ICAI during Class 12 and appear for CA Foundation examination shortly after Class 12 board results.'
        },
        {
          phase: 'CA Inter & Articleship',
          desc: 'Clear CA Intermediate groups and complete practical 2-year articleship training under a practicing Chartered Accountant.'
        },
        {
          phase: 'CA Final & Membership',
          desc: 'Clear CA Final exams to become a licensed ICAI Member. Work with Big 4 consulting firms, multinational corporations, or run private practice.'
        }
      ],
      scope: 'Every company by law requires audited books and financial compliance. CAs command top leadership positions including CFO and CEO.'
    },
    {
      id: 'investment-banker',
      title: 'Investment Banker & Financial Analyst',
      category: 'Business',
      stage: '12',
      stageLabel: 'After Class 12',
      shortDesc: 'Advise corporations on mergers, IPOs, acquisitions, stock portfolio investments, and capital raising.',
      skills: ['Financial Modeling', 'Valuation Techniques', 'Excel & Pitch Decks', 'Macroeconomics', 'Strategic Negotiation'],
      courses: ['BBA Finance', 'B.Com (Honours)', 'BA / B.Sc Economics', 'Chartered Financial Analyst (CFA)'],
      exams: ['IPMAT (for 5-year IIM Integrated Program)', 'CUET (top commerce colleges)', 'CAT (for MBA)'],
      growth: 'High Compensation',
      roadmap: [
        {
          phase: 'Class 10 Transition',
          desc: 'Choose Commerce with Mathematics or Science with Math. Strong arithmetic and quantitative aptitude are foundational.'
        },
        {
          phase: 'Class 12 & Undergraduate',
          desc: 'Pursue prestigious degree programs such as B.Com (Hons), BMS, BBA Finance, or Economics from top tier universities or IIM IPM programs.'
        },
        {
          phase: 'CFA & Internships',
          desc: 'Complete financial modeling bootcamps, pursue CFA Level 1, and intern at equity research firms, fintech firms, or venture funds.'
        },
        {
          phase: 'Career Launch',
          desc: 'Enter as an Investment Banking Analyst or Equity Research Associate in global financial institutions and advisory firms.'
        }
      ],
      scope: 'Finance drives worldwide commercial growth. High performers enjoy lucrative compensation packages and rapid executive advancement.'
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing & Growth Strategist',
      category: 'Business',
      stage: 'both',
      stageLabel: 'After 10th & 12th',
      shortDesc: 'Drive brand reach, social engagement, paid advertisements, and customer acquisition through online channels.',
      skills: ['Search Engine Optimization (SEO)', 'Content Strategy', 'Google Ads & Meta Ads', 'Data Analytics', 'Copywriting'],
      courses: ['BBA Marketing', 'BA Mass Communication & Media', 'Digital Marketing Certifications (Google / HubSpot)'],
      exams: ['CUET', 'College Entrance Tests', 'Direct Merit Admission'],
      growth: 'Very High Demand',
      roadmap: [
        {
          phase: 'Class 10 Transition',
          desc: 'Open to any stream (Commerce, Arts, or Science). Start experimenting with content creation, blogging, or social media pages.'
        },
        {
          phase: 'Class 12 & Undergraduate',
          desc: 'Pursue BBA, BA in Journalism/Media, or BCA. Any degree combined with proven marketing projects works excellently.'
        },
        {
          phase: 'Hands-on Portfolio',
          desc: 'Earn Google Analytics, Ads, and HubSpot certifications. Run live ad campaigns, write SEO blogs, or manage social handles for small businesses.'
        },
        {
          phase: 'Career Launch',
          desc: 'Join marketing agencies, consumer brands, or tech startups as Performance Marketer, SEO Specialist, or Social Media Strategist.'
        }
      ],
      scope: 'Traditional advertising has shifted almost entirely to digital. Every brand needs creative and analytical marketers to grow online sales.'
    },
    {
      id: 'corporate-lawyer',
      title: 'Corporate Lawyer & Legal Advisor',
      category: 'Business',
      stage: '12',
      stageLabel: 'After Class 12',
      shortDesc: 'Draft corporate contracts, guide companies on regulations, handle IP rights, and resolve commercial disputes.',
      skills: ['Legal Research', 'Contract Drafting', 'Negotiation', 'Analytical Writing', 'Public Speaking'],
      courses: ['5-Year Integrated BA LLB / BBA LLB', 'LLM (Postgraduate Specialization)'],
      exams: ['CLAT (Common Law Admission Test)', 'AILET (NLU Delhi)', 'SLAT', 'State Law CETs'],
      growth: 'High Growth & Prestige',
      roadmap: [
        {
          phase: 'Class 10 Transition',
          desc: 'Any stream is eligible (Arts, Commerce, or Science). Develop a habit of reading newspapers, editorials, and legal case summaries.'
        },
        {
          phase: 'Class 12 & CLAT Prep',
          desc: 'Prepare for CLAT / AILET focusing on English, General Knowledge, Legal Reasoning, Logical Reasoning, and Quantitative Techniques.'
        },
        {
          phase: '5-Year Law School',
          desc: 'Study at a National Law University (NLU) or top law college; participate in moot courts, legal aid clinics, and corporate internships.'
        },
        {
          phase: 'Bar Council & Practice',
          desc: 'Pass All India Bar Exam (AIBE). Join top tier corporate law firms, multinational in-house legal teams, or litigation chambers.'
        }
      ],
      scope: 'With increasing global business partnerships and intellectual property laws, corporate lawyers are essential business partners.'
    },
    {
      id: 'ui-ux-designer',
      title: 'UI/UX & Product Designer',
      category: 'Arts',
      stage: 'both',
      stageLabel: 'After 10th & 12th',
      shortDesc: 'Design intuitive, aesthetic, and user-friendly interfaces for smartphone apps, websites, and digital products.',
      skills: ['Figma & Prototyping', 'User Psychology', 'Design Systems', 'Wireframing', 'Empathy & User Testing'],
      courses: ['B.Des (Bachelor of Design)', 'B.Sc / B.Voc in Digital Media & Design', 'Self-taught UI/UX Bootcamp'],
      exams: ['UCEED (IITs)', 'NID DAT', 'NIFT', 'Private Design College Tests'],
      growth: 'Very High Demand',
      roadmap: [
        {
          phase: 'Class 10 Transition',
          desc: 'Any stream is eligible. Practice sketching, observe digital apps you love, and learn design principles like hierarchy and typography.'
        },
        {
          phase: 'Class 12 & Design Entrance',
          desc: 'Appear for design aptitude exams like UCEED, NID DAT, or NIFT. Alternatively, pursue degrees like BCA/B.Sc while learning Figma.'
        },
        {
          phase: 'Portfolio Development',
          desc: 'Conduct user research, redesign existing popular apps, and publish case studies on Behance, Dribbble, and personal portfolio site.'
        },
        {
          phase: 'Career Launch',
          desc: 'Join tech startups, design studios, or multinational tech enterprises as a Junior UI/UX Designer or Product Designer.'
        }
      ],
      scope: 'A product with a poor user experience fails in the market. Companies invest heavily in talented UI/UX designers to win customers.'
    },
    {
      id: 'animator-vfx',
      title: '3D Animator & VFX Artist',
      category: 'Arts',
      stage: 'both',
      stageLabel: 'After 10th & 12th',
      shortDesc: 'Create visual magic for Hollywood/Bollywood movies, OTT streaming shows, video games, and advertisements.',
      skills: ['3D Modeling (Blender/Maya)', 'Texturing & Lighting', 'Animation Principles', 'Adobe After Effects', 'Creativity'],
      courses: ['B.Sc in Animation & VFX', 'B.Des in Animation Film Design', 'Diploma in 3D Animation & Gaming'],
      exams: ['NID DAT', 'UCEED', 'Institute Aptitude Tests & Portfolio Evaluation'],
      growth: 'Booming Creative Industry',
      roadmap: [
        {
          phase: 'Class 10 Transition',
          desc: 'Any stream works. Enroll in foundational digital drawing classes or start learning Blender (free 3D software) at home.'
        },
        {
          phase: 'Class 12 & Creative Training',
          desc: 'Join a recognized degree or professional diploma program in Animation, VFX, and Game Art.'
        },
        {
          phase: 'Showreel Creation',
          desc: 'Build a killer 60-second video demo reel showing 3D character animations, lighting renders, or visual effects compositing.'
        },
        {
          phase: 'Studio Placement',
          desc: 'Work in animation studios, gaming companies, VFX post-production houses, or as an independent freelance artist worldwide.'
        }
      ],
      scope: 'The explosion of streaming platforms, CGI films, and the gaming industry has generated immense demand for visual storytellers and 3D artists.'
    },
    {
      id: 'psychologist',
      title: 'Clinical Psychologist & Counselor',
      category: 'Arts',
      stage: '12',
      stageLabel: 'After Class 12',
      shortDesc: 'Understand human behavior, diagnose emotional/mental conditions, and counsel individuals to lead balanced, healthy lives.',
      skills: ['Active Listening', 'Psychological Assessment', 'Empathy', 'Behavioral Therapy', 'Confidentiality'],
      courses: ['BA / B.Sc Psychology', 'MA / M.Sc Clinical Psychology', 'M.Phil / Psy.D (RCI Certification)'],
      exams: ['CUET-UG', 'University Specific Entrance Exams'],
      growth: 'Rapidly Rising Need',
      roadmap: [
        {
          phase: 'Class 10 Transition',
          desc: 'Humanities/Arts stream with Psychology is ideal, but Science and Commerce students can also transition smoothly after 12th.'
        },
        {
          phase: 'Class 12 & Undergraduate',
          desc: 'Earn a BA or B.Sc in Psychology from a reputable university through CUET or merit.'
        },
        {
          phase: 'Postgraduate Specialization',
          desc: 'Complete MA / M.Sc in Clinical, Counseling, or Organizational Psychology, followed by practical clinical internships.'
        },
        {
          phase: 'Licensing & Practice',
          desc: 'Obtain RCI (Rehabilitation Council of India) license to practice as a licensed clinical psychologist in hospitals, schools, or private clinics.'
        }
      ],
      scope: 'Mental health awareness is at an all-time high. Schools, multinational corporations, hospitals, and sports teams now hire dedicated counselors and psychologists.'
    },
    {
      id: 'journalist-media',
      title: 'Journalist & Digital Media Producer',
      category: 'Arts',
      stage: 'both',
      stageLabel: 'After 10th & 12th',
      shortDesc: 'Investigate stories, produce podcasts, write impactful news articles, and report on culture, politics, and current events.',
      skills: ['Investigative Research', 'Storytelling & Writing', 'Video Editing', 'Interviewing', 'Media Ethics'],
      courses: ['BA Journalism & Mass Communication (BJMC)', 'BA English / Political Science', 'Postgraduate Diploma in Journalism'],
      exams: ['CUET-UG', 'IIMC Entrance Exam', 'Symbiosis SET'],
      growth: 'Evergreen Evolution',
      roadmap: [
        {
          phase: 'Class 10 Transition',
          desc: 'Arts or Commerce stream. Focus on reading widely, writing essays, debate clubs, and tracking geopolitical events.'
        },
        {
          phase: 'Class 12 & Degree',
          desc: 'Pursue BJMC, BA Media Studies, or BA English from top universities via CUET or private entrance exams.'
        },
        {
          phase: 'Campus Media & Publishing',
          desc: 'Run a student blog, podcast, or YouTube news show; intern at digital publishing platforms, news agencies, or podcasts.'
        },
        {
          phase: 'Career Launch',
          desc: 'Join digital newsrooms, broadcast networks, documentary production houses, or corporate communications teams as a Reporter, Editor, or Producer.'
        }
      ],
      scope: 'Media has expanded beyond print newspapers into digital newsletters, podcasts, investigative video channels, and social journalism.'
    },
    {
      id: 'research-scientist',
      title: 'Research Scientist & Physicist',
      category: 'Science',
      stage: '12',
      stageLabel: 'After Class 12',
      shortDesc: 'Discover fundamental laws of nature, invent novel materials, and advance scientific frontiers in laboratories.',
      skills: ['Scientific Method', 'Advanced Mathematics', 'Experimental Design', 'Data Analysis', 'Academic Writing'],
      courses: ['B.S / M.S Dual Degree (IISERs / IISc)', 'B.Sc (Hons) Physics / Chemistry', 'Integrated Ph.D Programs'],
      exams: ['IAT (IISER Aptitude Test)', 'JEE Advanced (for IISc / IIT BS)', 'NEST (for NISER)'],
      growth: 'High Intellectual Value',
      roadmap: [
        {
          phase: 'Class 10 Transition',
          desc: 'Choose Science stream with PCM or PCMB. Cultivate a strong curiosity for experiments, physics concepts, and mathematics.'
        },
        {
          phase: 'Class 12 & Premier Science Institutes',
          desc: 'Clear exams like IAT, NEST, or JEE Advanced to join prestigious research institutions like IISc Bangalore, IISERs, or NISER.'
        },
        {
          phase: 'Research Fellowships',
          desc: 'Publish peer-reviewed research papers, conduct experiments in state-of-the-art laboratories, and secure fellowships (like INSPIRE).'
        },
        {
          phase: 'Scientific Career',
          desc: 'Join space organizations (ISRO/NASA), atomic research centers (BARC), CSIR labs, university faculties, or private industrial R&D teams.'
        }
      ],
      scope: 'Scientific researchers solve humanity\'s hardest problems: clean energy, quantum computers, space exploration, and pandemic prevention.'
    },
    {
      id: 'space-astrophysicist',
      title: 'Space Scientist & Astrophysicist',
      category: 'Science',
      stage: '12',
      stageLabel: 'After Class 12',
      shortDesc: 'Study stars, planets, black holes, and design satellite mission payloads for space exploration.',
      skills: ['Orbital Mechanics', 'Astrophysics', 'Computational Modeling', 'Radio Astronomy', 'Calculus'],
      courses: ['B.Tech Aerospace / Avionics (IIST)', 'B.Sc / M.Sc Physics & Astronomy', 'Ph.D in Astrophysics'],
      exams: ['JEE Advanced (for IIST admission with direct ISRO absorption)', 'IAT', 'CUET'],
      growth: 'Expanding Space Economy',
      roadmap: [
        {
          phase: 'Class 10 Transition',
          desc: 'Opt for Science (PCM). Focus deeply on Newtonian mechanics, optics, gravitation, and advanced algebra.'
        },
        {
          phase: 'Class 12 & Space Academies',
          desc: 'Aim for Indian Institute of Space Science and Technology (IIST) via JEE Advanced, or IISc / IITs in Aerospace Engineering.'
        },
        {
          phase: 'Observatory & Satellite Projects',
          desc: 'Analyze space telescope datasets (Hubble, James Webb, AstroSat) and master astronomical data processing tools.'
        },
        {
          phase: 'Career Launch',
          desc: 'Serve as a Scientist/Engineer at space agencies (ISRO), national astronomical observatories (IUCAA, IIA), or commercial space startups.'
        }
      ],
      scope: 'With private space companies and moon/Mars missions expanding rapidly, astrophysics and satellite engineering are entering a golden era.'
    },
    {
      id: 'forensic-scientist',
      title: 'Forensic Scientist & Crime Analyst',
      category: 'Science',
      stage: '12',
      stageLabel: 'After Class 12',
      shortDesc: 'Analyze physical and digital evidence from crime scenes (DNA, fingerprints, ballistics, toxicology) to deliver legal justice.',
      skills: ['Forensic Chemistry & Biology', 'Chain of Custody', 'Microscopy', 'Attention to Detail', 'Legal Testimony'],
      courses: ['B.Sc Forensic Science', 'B.Tech Cyber Forensics', 'M.Sc Forensic Science (NFSU)'],
      exams: ['NFSU Entrance Exam (National Forensic Sciences University)', 'CUET-UG'],
      growth: 'Steady High Need',
      roadmap: [
        {
          phase: 'Class 10 Transition',
          desc: 'Choose Science stream (PCB or PCM). Chemistry, biology, and laboratory skills are particularly relevant.'
        },
        {
          phase: 'Class 12 & Forensic University',
          desc: 'Join the National Forensic Sciences University (NFSU) or top universities offering B.Sc in Forensic Sciences.'
        },
        {
          phase: 'Lab Specialization',
          desc: 'Train in DNA profiling, toxicology, questioned document examination, or digital device cyber forensics.'
        },
        {
          phase: 'Career Launch',
          desc: 'Work in State and Central Forensic Science Laboratories (CFSL), Intelligence Bureau, police investigation bureaus, or private detective agencies.'
        }
      ],
      scope: 'Modern justice relies on scientific proof rather than guesswork. Forensic scientists bridge modern laboratory science and legal enforcement.'
    },
    {
      id: 'environmental-scientist',
      title: 'Environmental Scientist & Sustainability Lead',
      category: 'Science',
      stage: 'both',
      stageLabel: 'After 10th & 12th',
      shortDesc: 'Protect natural ecosystems, tackle climate change, audit carbon emissions, and advise on green energy transitions.',
      skills: ['Ecology & GIS', 'Environmental Law', 'Carbon Auditing', 'Field Sampling', 'Sustainability Reporting'],
      courses: ['B.Sc Environmental Science', 'B.Tech Environmental Engineering', 'Integrated M.Sc in Climate Studies'],
      exams: ['CUET-UG', 'JEE Main', 'State CETs'],
      growth: 'Urgent Global Demand',
      roadmap: [
        {
          phase: 'Class 10 Transition',
          desc: 'Science stream (PCB or PCM). Participate in eco-clubs, geography projects, and nature conservation initiatives.'
        },
        {
          phase: 'Class 12 & Environmental Degree',
          desc: 'Pursue B.Sc in Environmental Science or B.Tech in Environmental Engineering via CUET or engineering entrance.'
        },
        {
          phase: 'GIS & ESG Frameworks',
          desc: 'Learn Geographic Information Systems (GIS) mapping, climate modeling, and Corporate ESG (Environmental, Social, Governance) reporting standards.'
        },
        {
          phase: 'Career Launch',
          desc: 'Work with pollution control boards, environmental consultancies, renewable energy firms, NGOs, or multinational corporate sustainability teams.'
        }
      ],
      scope: 'Governments and Fortune 500 corporations have strict net-zero carbon mandates, creating massive hiring for environmental specialists.'
    },
    {
      id: 'school-educator',
      title: 'High School Educator & Subject Teacher (PGT/TGT)',
      category: 'Teaching',
      stage: '12',
      stageLabel: 'After Class 12',
      shortDesc: 'Inspire and mentor teenagers in subjects like Mathematics, Physics, English, History, or Computer Science.',
      skills: ['Pedagogy & Teaching Methods', 'Subject Mastery', 'Classroom Management', 'Patience & Empathy', 'Curriculum Design'],
      courses: ['Integrated 4-Year B.Sc B.Ed / BA B.Ed (ITEP)', 'Graduation + 2-Year B.Ed', 'Post-Graduation + B.Ed for Senior Secondary'],
      exams: ['NCET (National Common Entrance Test for 4-year ITEP)', 'CTET (Central Teacher Eligibility Test)', 'State TETs'],
      growth: 'Evergreen & Highly Respected',
      roadmap: [
        {
          phase: 'Class 10 Transition',
          desc: 'Choose the stream containing your favorite subject that you are passionate about teaching (Science, Commerce, or Arts).'
        },
        {
          phase: 'Class 12 & Teacher Education',
          desc: 'Join the new National Education Policy (NEP) 4-year Integrated B.Ed degree (ITEP) directly after Class 12 via NCET, or do graduation first.'
        },
        {
          phase: 'Eligibility Certifications',
          desc: 'Clear CTET (Central Teacher Eligibility Test) Paper 1 & 2 for CBSE, KVS, NVS, and army public schools.'
        },
        {
          phase: 'Career Launch',
          desc: 'Secure tenure as TGT (Trained Graduate Teacher) or PGT (Post Graduate Teacher) in prestigious private and government schools.'
        }
      ],
      scope: 'Great teachers mold the future generation. Teaching offers tremendous job security, balanced work-life balance, and deep societal gratitude.'
    },
    {
      id: 'professor-academician',
      title: 'University Professor & Academician',
      category: 'Teaching',
      stage: '12',
      stageLabel: 'After Class 12',
      shortDesc: 'Conduct cutting-edge research and lecture undergraduate/postgraduate university students in your specialized discipline.',
      skills: ['Deep Subject Expertise', 'Academic Research', 'Public Lecturing', 'Grant Writing', 'Mentorship'],
      courses: ['Bachelor\'s Degree in Major Subject', 'Master\'s Degree (M.Sc / MA / M.Com / M.Tech)', 'Ph.D (Doctorate of Philosophy)'],
      exams: ['UGC-NET / CSIR-NET (National Eligibility Test for Assistant Professor and JRF)', 'GATE'],
      growth: 'High Prestige & Intellectual Freedom',
      roadmap: [
        {
          phase: 'Class 10 Transition',
          desc: 'Pick your stream based on long-term academic interest (Science, Commerce, or Arts/Humanities).'
        },
        {
          phase: 'Class 12 & Higher Education',
          desc: 'Graduate with high distinction in your major, followed by a Master’s degree from a reputed central or state university.'
        },
        {
          phase: 'NET Exam & Ph.D',
          desc: 'Clear UGC-NET / CSIR-NET with Junior Research Fellowship (JRF) and complete a Ph.D with published scholarly papers.'
        },
        {
          phase: 'Faculty Appointment',
          desc: 'Join universities or IITs/IIMs/NITs as an Assistant Professor, rising to Associate Professor and Department Chair.'
        }
      ],
      scope: 'Universities and research institutions offer intellectual autonomy, sabbatical opportunities, and the power to influence national policies and knowledge.'
    },
    {
      id: 'edtech-trainer',
      title: 'EdTech Specialist & Corporate Trainer',
      category: 'Teaching',
      stage: 'both',
      stageLabel: 'After 10th & 12th',
      shortDesc: 'Design engaging digital courses, interactive animations, and train enterprise employees or online students globally.',
      skills: ['Instructional Design', 'LMS Platforms', 'Video Presentation', 'Curriculum Architecture', 'Gamification'],
      courses: ['Any Bachelor\'s Degree + Instructional Design Certifications', 'BA/B.Sc with EdTech specializations'],
      exams: ['Direct Admission / Portfolio Evaluation'],
      growth: 'High Growth',
      roadmap: [
        {
          phase: 'Class 10 Transition',
          desc: 'Any stream. Build good presentation, writing, and digital technology skills early on.'
        },
        {
          phase: 'Class 12 & Undergraduate',
          desc: 'Earn a bachelor’s degree in your chosen field (Computer Science, Business, English, or Design).'
        },
        {
          phase: 'Instructional Design Mastery',
          desc: 'Learn instructional models (ADDIE), authoring tools (Articulate 360, Canva, Camtasia), and gamified learning methods.'
        },
        {
          phase: 'Career Launch',
          desc: 'Work in online learning platforms (EdTech startups), corporate training wings of multinational companies, or publish digital learning courses.'
        }
      ],
      scope: 'With remote learning, lifelong upskilling, and enterprise training booming, EdTech specialists are transforming how millions of people learn.'
    }
  ];

  /* ==========================================================================
     2. Interactive Quiz Data & Logic
     ========================================================================== */
  const QUIZ_QUESTIONS = [
    {
      title: 'Which school subject or activity do you naturally enjoy the most?',
      options: [
        { text: 'Working with computers, programming, gaming, or phone apps', category: 'Technology', icon: 'fa-laptop-code' },
        { text: 'Biology, human anatomy, hospitals, or helping unwell people', category: 'Healthcare', icon: 'fa-heart-pulse' },
        { text: 'Doing experiments, understanding the universe, physics, and chemistry', category: 'Science', icon: 'fa-flask' },
        { text: 'Managing money, business ideas, stock market, and leadership', category: 'Business', icon: 'fa-chart-line' },
        { text: 'Drawing, design, storytelling, writing, psychology, or acting', category: 'Arts', icon: 'fa-palette' },
        { text: 'Explaining concepts to friends, mentoring, and sharing knowledge', category: 'Teaching', icon: 'fa-chalkboard-user' }
      ]
    },
    {
      title: 'How do you prefer solving problems or spending your time?',
      options: [
        { text: 'Writing code, troubleshooting technical bugs, or building logic', category: 'Technology', icon: 'fa-terminal' },
        { text: 'Diagnosing root causes and providing practical care for people', category: 'Healthcare', icon: 'fa-stethoscope' },
        { text: 'Gathering data, questioning assumptions, and testing hypotheses', category: 'Science', icon: 'fa-microscope' },
        { text: 'Negotiating deals, organizing events, and building financial plans', category: 'Business', icon: 'fa-briefcase' },
        { text: 'Creating eye-catching visuals, writing stories, or designing mockups', category: 'Arts', icon: 'fa-pen-nib' },
        { text: 'Breaking down hard topics into simple analogies anyone can understand', category: 'Teaching', icon: 'fa-graduation-cap' }
      ]
    },
    {
      title: 'What kind of work environment would make you happiest?',
      options: [
        { text: 'A dynamic tech company, software startup, or remote laptop setup', category: 'Technology', icon: 'fa-network-wired' },
        { text: 'A hospital, diagnostic clinic, rehabilitation center, or pharmacy', category: 'Healthcare', icon: 'fa-hospital' },
        { text: 'A modern research laboratory, space observatory, or field expedition', category: 'Science', icon: 'fa-atom' },
        { text: 'A corporate boardroom, stock trading desk, or running my own company', category: 'Business', icon: 'fa-building-columns' },
        { text: 'A creative design studio, media newsroom, animation lab, or counseling clinic', category: 'Arts', icon: 'fa-camera' },
        { text: 'A vibrant university campus, classroom, or digital EdTech studio', category: 'Teaching', icon: 'fa-school' }
      ]
    },
    {
      title: 'What is your current academic level?',
      options: [
        { text: 'In Class 10 or just completed 10th (deciding my 11th stream)', stageFilter: '10', icon: 'fa-book-open-reader' },
        { text: 'In Class 11 or 12 (deciding my degree and entrance exams)', stageFilter: '12', icon: 'fa-user-graduate' },
        { text: 'Parent, teacher, or exploring all pathways without restriction', stageFilter: 'all', icon: 'fa-compass' }
      ]
    }
  ];

  /* ==========================================================================
     3. Application State
     ========================================================================== */
  const state = {
    selectedCategory: 'all',
    selectedStage: 'all',
    searchQuery: '',
    bookmarkedIds: getStoredBookmarks(),
    showBookmarksOnly: false,
    currentTheme: localStorage.getItem('careerpath_theme') || 'light',
    
    // Quiz state
    quizStep: 0,
    quizCategoryScores: {
      Technology: 0,
      Science: 0,
      Business: 0,
      Arts: 0,
      Healthcare: 0,
      Teaching: 0
    },
    quizStageChoice: 'all'
  };

  /* Helper to read stored bookmarks */
  function getStoredBookmarks() {
    try {
      const data = localStorage.getItem('careerpath_bookmarks');
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  function saveBookmarksToStorage(ids) {
    try {
      localStorage.setItem('careerpath_bookmarks', JSON.stringify(ids));
    } catch (e) {
      console.error('Could not save bookmarks to localStorage', e);
    }
  }

  /* ==========================================================================
     4. DOM Elements
     ========================================================================== */
  const elements = {
    // Theme & Nav
    themeToggleBtn: document.getElementById('themeToggleBtn'),
    themeIcon: document.getElementById('themeIcon'),
    navbar: document.getElementById('navbar'),
    navLinks: document.getElementById('navLinks'),
    mobileMenuBtn: document.getElementById('mobileMenuBtn'),
    savedCountBadge: document.getElementById('savedCountBadge'),
    bookmarkFilterBtn: document.getElementById('bookmarkFilterBtn'),
    savedCountLabel: document.getElementById('savedCountLabel'),
    savedOnlyToggle: document.getElementById('savedOnlyToggle'),
    currentYear: document.getElementById('currentYear'),

    // Hero & Stream Guide
    startNowBtn: document.getElementById('startNowBtn'),
    heroQuizBtn: document.getElementById('heroQuizBtn'),
    openQuizNavBtn: document.getElementById('openQuizNavBtn'),
    stageToggleBtns: document.querySelectorAll('.stage-toggle-btn'),
    stage10Panel: document.getElementById('stage10Panel'),
    stage12Panel: document.getElementById('stage12Panel'),

    // Interest Cards
    interestCards: document.querySelectorAll('.interest-card'),
    showAllInterestsBtn: document.getElementById('showAllInterestsBtn'),

    // Careers explorer filters
    careerSearchInput: document.getElementById('careerSearchInput'),
    clearSearchBtn: document.getElementById('clearSearchBtn'),
    stagePillBtns: document.querySelectorAll('.filter-pill'),
    catPillBtns: document.querySelectorAll('.cat-pill'),
    careersGrid: document.getElementById('careersGrid'),
    emptyState: document.getElementById('emptyState'),
    emptyStateResetBtn: document.getElementById('emptyStateResetBtn'),
    resetAllFiltersBtn: document.getElementById('resetAllFiltersBtn'),
    resultsCountText: document.getElementById('resultsCountText'),

    // Career Detail Modal
    careerModalOverlay: document.getElementById('careerModalOverlay'),
    modalCloseBtn: document.getElementById('modalCloseBtn'),
    modalCloseActionBtn: document.getElementById('modalCloseActionBtn'),
    modalCategoryBadge: document.getElementById('modalCategoryBadge'),
    modalStageBadge: document.getElementById('modalStageBadge'),
    modalDemandBadge: document.getElementById('modalDemandBadge'),
    modalCareerTitle: document.getElementById('modalCareerTitle'),
    modalCareerSubtitle: document.getElementById('modalCareerSubtitle'),
    modalRoadmapTimeline: document.getElementById('modalRoadmapTimeline'),
    modalSkillsList: document.getElementById('modalSkillsList'),
    modalCoursesList: document.getElementById('modalCoursesList'),
    modalExamsList: document.getElementById('modalExamsList'),
    modalScopeText: document.getElementById('modalScopeText'),
    modalSaveCareerBtn: document.getElementById('modalSaveCareerBtn'),
    modalSaveIcon: document.getElementById('modalSaveIcon'),
    modalSaveText: document.getElementById('modalSaveText'),

    // Quiz Modal
    quizModalOverlay: document.getElementById('quizModalOverlay'),
    quizCloseBtn: document.getElementById('quizCloseBtn'),
    quizQuestionView: document.getElementById('quizQuestionView'),
    quizResultView: document.getElementById('quizResultView'),
    quizProgressFill: document.getElementById('quizProgressFill'),
    currentQuizStep: document.getElementById('currentQuizStep'),
    quizQuestionTitle: document.getElementById('quizQuestionTitle'),
    quizOptionsContainer: document.getElementById('quizOptionsContainer'),
    quizBackBtn: document.getElementById('quizBackBtn'),
    quizMatchedCategories: document.getElementById('quizMatchedCategories'),
    quizApplyFilterBtn: document.getElementById('quizApplyFilterBtn'),
    quizRestartBtn: document.getElementById('quizRestartBtn'),

    // FAQ Accordion
    faqQuestions: document.querySelectorAll('.faq-question'),

    // Contact Form
    contactForm: document.getElementById('contactForm'),

    // Toast
    toastContainer: document.getElementById('toastContainer')
  };

  /* Active modal tracking */
  let activeModalCareerId = null;

  /* ==========================================================================
     5. Initialization
     ========================================================================== */
  function init() {
    // 1. Setup Theme
    applyTheme(state.currentTheme);

    // 2. Set Current Year in Footer
    if (elements.currentYear) {
      elements.currentYear.textContent = new Date().getFullYear();
    }

    // 3. Update Bookmark Badges
    updateBookmarkBadges();

    // 4. Render Initial Career Cards
    renderCareers();

    // 5. Update Interest count badges
    updateInterestCountBadges();

    // 6. Bind Event Listeners
    setupEventListeners();
  }

  /* ==========================================================================
     6. Theme Switcher (Dark / Light)
     ========================================================================== */
  function applyTheme(theme) {
    state.currentTheme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('careerpath_theme', theme);

    if (elements.themeIcon) {
      if (theme === 'dark') {
        elements.themeIcon.className = 'fa-solid fa-sun';
        elements.themeToggleBtn.setAttribute('title', 'Switch to Light Mode');
      } else {
        elements.themeIcon.className = 'fa-solid fa-moon';
        elements.themeToggleBtn.setAttribute('title', 'Switch to Dark Mode');
      }
    }
  }

  function toggleTheme() {
    const nextTheme = state.currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
    showToast(
      'Theme Updated',
      `Switched to ${nextTheme === 'dark' ? 'Dark' : 'Light'} Mode.`,
      'info'
    );
  }

  /* ==========================================================================
     7. Rendering Career Cards
     ========================================================================== */
  function getFilteredCareers() {
    return CAREERS_DATA.filter((career) => {
      // 1. Category Filter
      if (state.selectedCategory !== 'all' && career.category.toLowerCase() !== state.selectedCategory.toLowerCase()) {
        return false;
      }

      // 2. Stage Filter
      if (state.selectedStage !== 'all') {
        if (state.selectedStage === '10') {
          // Can be started after 10th or has pathway from 10th
          if (career.stage !== '10' && career.stage !== 'both') return false;
        } else if (state.selectedStage === '12') {
          // Degree pathway after 12th
          if (career.stage !== '12' && career.stage !== 'both') return false;
        }
      }

      // 3. Bookmarks Only Filter
      if (state.showBookmarksOnly && !state.bookmarkedIds.includes(career.id)) {
        return false;
      }

      // 4. Search Query Filter
      if (state.searchQuery.trim() !== '') {
        const query = state.searchQuery.toLowerCase().trim();
        const matchesTitle = career.title.toLowerCase().includes(query);
        const matchesCategory = career.category.toLowerCase().includes(query);
        const matchesDesc = career.shortDesc.toLowerCase().includes(query);
        const matchesSkills = career.skills.some((s) => s.toLowerCase().includes(query));
        const matchesCourses = career.courses.some((c) => c.toLowerCase().includes(query));
        const matchesExams = career.exams.some((e) => e.toLowerCase().includes(query));

        if (!matchesTitle && !matchesCategory && !matchesDesc && !matchesSkills && !matchesCourses && !matchesExams) {
          return false;
        }
      }

      return true;
    });
  }

  function renderCareers() {
    const filtered = getFilteredCareers();

    // Update count text
    if (elements.resultsCountText) {
      elements.resultsCountText.textContent = `Showing ${filtered.length} career${filtered.length === 1 ? '' : 's'}`;
    }

    if (!elements.careersGrid) return;

    elements.careersGrid.innerHTML = '';

    if (filtered.length === 0) {
      if (elements.emptyState) elements.emptyState.classList.remove('hidden');
      return;
    } else {
      if (elements.emptyState) elements.emptyState.classList.add('hidden');
    }

    filtered.forEach((career) => {
      const isSaved = state.bookmarkedIds.includes(career.id);
      const catClass = getCategoryBadgeClass(career.category);

      const card = document.createElement('div');
      card.className = 'career-card';
      card.dataset.id = career.id;

      card.innerHTML = `
        <div class="card-header-top">
          <div class="card-badge-group">
            <span class="badge-category ${catClass}">${career.category}</span>
            <span class="badge-stage">${career.stageLabel}</span>
          </div>
          <button class="card-bookmark-btn ${isSaved ? 'active' : ''}" 
                  data-career-id="${career.id}" 
                  title="${isSaved ? 'Remove from bookmarks' : 'Bookmark career'}"
                  aria-label="Bookmark ${career.title}">
            <i class="${isSaved ? 'fa-solid' : 'fa-regular'} fa-bookmark"></i>
          </button>
        </div>

        <h3 class="career-card-title">${career.title}</h3>
        <p class="career-card-desc">${career.shortDesc}</p>

        <!-- Required Skills -->
        <div class="card-meta-block">
          <span class="meta-title"><i class="fa-solid fa-bolt"></i> Key Skills:</span>
          <div class="skills-pills-wrap">
            ${career.skills.slice(0, 3).map((s) => `<span class="skill-tag">${s}</span>`).join('')}
            ${career.skills.length > 3 ? `<span class="skill-tag">+${career.skills.length - 3}</span>` : ''}
          </div>
        </div>

        <!-- Recommended Courses -->
        <div class="card-meta-block">
          <span class="meta-title"><i class="fa-solid fa-graduation-cap"></i> Recommended Courses:</span>
          <ul class="courses-list-compact">
            ${career.courses.slice(0, 2).map((c) => `<li><i class="fa-solid fa-circle-check"></i> ${c}</li>`).join('')}
          </ul>
        </div>

        <div class="card-footer-action">
          <span class="demand-indicator">
            <i class="fa-solid fa-chart-line"></i> ${career.growth}
          </span>
          <button class="btn btn-outline btn-sm view-roadmap-btn" data-career-id="${career.id}">
            <span>View Roadmap</span>
            <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      `;

      elements.careersGrid.appendChild(card);
    });

    // Attach bookmark click listeners to freshly rendered cards
    const bookmarkBtns = elements.careersGrid.querySelectorAll('.card-bookmark-btn');
    bookmarkBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const cid = btn.dataset.careerId;
        toggleBookmark(cid);
      });
    });

    // Attach Roadmap view listeners
    const roadmapBtns = elements.careersGrid.querySelectorAll('.view-roadmap-btn');
    roadmapBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const cid = btn.dataset.careerId;
        openCareerModal(cid);
      });
    });
  }

  function getCategoryBadgeClass(category) {
    switch (category) {
      case 'Technology': return 'badge-tech';
      case 'Science': return 'badge-science';
      case 'Business': return 'badge-biz';
      case 'Arts': return 'badge-arts';
      case 'Healthcare': return 'badge-health';
      case 'Teaching': return 'badge-teach';
      default: return 'badge-tech';
    }
  }

  function updateInterestCountBadges() {
    const counts = {};
    CAREERS_DATA.forEach((c) => {
      counts[c.category] = (counts[c.category] || 0) + 1;
    });

    const pills = document.querySelectorAll('.career-count-pill');
    pills.forEach((p) => {
      const cat = p.dataset.countFor;
      if (counts[cat]) {
        p.textContent = `${counts[cat]} Career${counts[cat] === 1 ? '' : 's'}`;
      }
    });
  }

  /* ==========================================================================
     8. Bookmarks / Saved Careers
     ========================================================================== */
  function toggleBookmark(careerId) {
    const idx = state.bookmarkedIds.indexOf(careerId);
    let isAdded = false;

    if (idx > -1) {
      state.bookmarkedIds.splice(idx, 1);
      isAdded = false;
    } else {
      state.bookmarkedIds.push(careerId);
      isAdded = true;
    }

    saveBookmarksToStorage(state.bookmarkedIds);
    updateBookmarkBadges();
    renderCareers();

    // If modal is open for this career, update modal button too
    if (activeModalCareerId === careerId) {
      updateModalSaveButton(isAdded);
    }

    const career = CAREERS_DATA.find((c) => c.id === careerId);
    const title = career ? career.title : 'Career';

    showToast(
      isAdded ? 'Career Bookmarked' : 'Removed from Bookmarks',
      isAdded ? `Added "${title}" to your saved list.` : `Removed "${title}" from your saved list.`,
      isAdded ? 'success' : 'info'
    );
  }

  function updateBookmarkBadges() {
    const count = state.bookmarkedIds.length;
    if (elements.savedCountBadge) elements.savedCountBadge.textContent = count;
    if (elements.savedCountLabel) elements.savedCountLabel.textContent = count;

    if (elements.savedOnlyToggle) {
      if (state.showBookmarksOnly) {
        elements.savedOnlyToggle.classList.add('active');
      } else {
        elements.savedOnlyToggle.classList.remove('active');
      }
    }
  }

  /* ==========================================================================
     9. Career Details Modal
     ========================================================================== */
  function openCareerModal(careerId) {
    const career = CAREERS_DATA.find((c) => c.id === careerId);
    if (!career) return;

    activeModalCareerId = career.id;

    // Badges & Titles
    elements.modalCareerTitle.textContent = career.title;
    elements.modalCareerSubtitle.textContent = career.shortDesc;
    elements.modalCategoryBadge.textContent = career.category;
    elements.modalCategoryBadge.className = `modal-cat-badge ${getCategoryBadgeClass(career.category)}`;
    elements.modalStageBadge.textContent = career.stageLabel;
    elements.modalDemandBadge.innerHTML = `<i class="fa-solid fa-arrow-trend-up"></i> ${career.growth}`;

    // Roadmap Timeline
    elements.modalRoadmapTimeline.innerHTML = '';
    career.roadmap.forEach((step) => {
      const stepItem = document.createElement('div');
      stepItem.className = 'timeline-step';
      stepItem.innerHTML = `
        <div class="timeline-dot"></div>
        <h5>${step.phase}</h5>
        <p>${step.desc}</p>
      `;
      elements.modalRoadmapTimeline.appendChild(stepItem);
    });

    // Skills
    elements.modalSkillsList.innerHTML = career.skills
      .map((skill) => `<span class="skill-tag">${skill}</span>`)
      .join('');

    // Courses List
    elements.modalCoursesList.innerHTML = career.courses
      .map((course) => `<li><i class="fa-solid fa-circle-check"></i> <span>${course}</span></li>`)
      .join('');

    // Exams List
    elements.modalExamsList.innerHTML = career.exams
      .map((exam) => `<li><i class="fa-solid fa-certificate"></i> <span>${exam}</span></li>`)
      .join('');

    // Scope
    elements.modalScopeText.textContent = career.scope;

    // Bookmark button state
    const isSaved = state.bookmarkedIds.includes(career.id);
    updateModalSaveButton(isSaved);

    // Show modal
    elements.careerModalOverlay.classList.add('active');
    elements.careerModalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function updateModalSaveButton(isSaved) {
    if (!elements.modalSaveIcon || !elements.modalSaveText) return;
    if (isSaved) {
      elements.modalSaveIcon.className = 'fa-solid fa-bookmark';
      elements.modalSaveText.textContent = 'Saved in Bookmarks';
      elements.modalSaveCareerBtn.classList.add('btn-primary');
      elements.modalSaveCareerBtn.classList.remove('btn-secondary');
    } else {
      elements.modalSaveIcon.className = 'fa-regular fa-bookmark';
      elements.modalSaveText.textContent = 'Bookmark Career';
      elements.modalSaveCareerBtn.classList.remove('btn-primary');
      elements.modalSaveCareerBtn.classList.add('btn-secondary');
    }
  }

  function closeCareerModal() {
    elements.careerModalOverlay.classList.remove('active');
    elements.careerModalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    activeModalCareerId = null;
  }

  /* ==========================================================================
     10. 2-Minute Career Quiz Logic
     ========================================================================== */
  function openQuizModal() {
    state.quizStep = 0;
    state.quizCategoryScores = {
      Technology: 0,
      Science: 0,
      Business: 0,
      Arts: 0,
      Healthcare: 0,
      Teaching: 0
    };
    state.quizStageChoice = 'all';

    renderQuizStep();
    elements.quizQuestionView.classList.remove('hidden');
    elements.quizResultView.classList.add('hidden');
    elements.quizModalOverlay.classList.add('active');
    elements.quizModalOverlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeQuizModal() {
    elements.quizModalOverlay.classList.remove('active');
    elements.quizModalOverlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function renderQuizStep() {
    const q = QUIZ_QUESTIONS[state.quizStep];
    const total = QUIZ_QUESTIONS.length;

    elements.currentQuizStep.textContent = state.quizStep + 1;
    elements.quizQuestionTitle.textContent = q.title;

    // Progress bar
    const percent = ((state.quizStep + 1) / total) * 100;
    elements.quizProgressFill.style.width = `${percent}%`;

    // Back button
    elements.quizBackBtn.disabled = state.quizStep === 0;

    // Options
    elements.quizOptionsContainer.innerHTML = '';
    q.options.forEach((opt) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'quiz-option-btn';
      btn.innerHTML = `
        <div class="quiz-opt-icon"><i class="fa-solid ${opt.icon}"></i></div>
        <span>${opt.text}</span>
      `;

      btn.addEventListener('click', () => {
        handleQuizOptionSelect(opt);
      });

      elements.quizOptionsContainer.appendChild(btn);
    });
  }

  function handleQuizOptionSelect(option) {
    // Record score
    if (option.category) {
      state.quizCategoryScores[option.category] = (state.quizCategoryScores[option.category] || 0) + 1;
    }
    if (option.stageFilter) {
      state.quizStageChoice = option.stageFilter;
    }

    // Advance step
    if (state.quizStep < QUIZ_QUESTIONS.length - 1) {
      state.quizStep++;
      renderQuizStep();
    } else {
      finishQuiz();
    }
  }

  function finishQuiz() {
    elements.quizQuestionView.classList.add('hidden');
    elements.quizResultView.classList.remove('hidden');

    // Find top categories
    const sorted = Object.entries(state.quizCategoryScores)
      .sort((a, b) => b[1] - a[1]);

    const topMatches = sorted.slice(0, 2).map((item) => item[0]);

    // Render matches
    elements.quizMatchedCategories.innerHTML = '';
    topMatches.forEach((cat) => {
      const card = document.createElement('div');
      card.className = 'matched-card-mini';
      const icon = getCategoryIcon(cat);
      const bg = getCategoryGradientClass(cat);

      card.innerHTML = `
        <div class="matched-mini-icon ${bg}"><i class="fa-solid ${icon}"></i></div>
        <div>
          <h4>${cat}</h4>
          <p>Strong alignment with your problem-solving style.</p>
        </div>
      `;
      elements.quizMatchedCategories.appendChild(card);
    });

    // Save top category for apply button
    elements.quizApplyFilterBtn.onclick = () => {
      closeQuizModal();
      selectCategoryFilter(topMatches[0]);
      if (state.quizStageChoice && state.quizStageChoice !== 'all') {
        selectStageFilter(state.quizStageChoice);
      }
      smoothScrollTo('#careers');
      showToast(
        'Recommendations Ready!',
        `Filtered by your top quiz match: ${topMatches[0]}.`,
        'success'
      );
    };
  }

  function getCategoryIcon(cat) {
    switch (cat) {
      case 'Technology': return 'fa-code';
      case 'Science': return 'fa-flask-vial';
      case 'Business': return 'fa-chart-pie';
      case 'Arts': return 'fa-paint-brush';
      case 'Healthcare': return 'fa-user-doctor';
      case 'Teaching': return 'fa-school';
      default: return 'fa-compass';
    }
  }

  function getCategoryGradientClass(cat) {
    switch (cat) {
      case 'Technology': return 'tech-gradient';
      case 'Science': return 'science-gradient';
      case 'Business': return 'biz-gradient';
      case 'Arts': return 'arts-gradient';
      case 'Healthcare': return 'health-gradient';
      case 'Teaching': return 'teach-gradient';
      default: return 'tech-gradient';
    }
  }

  /* ==========================================================================
     11. Filter Action Handlers
     ========================================================================== */
  function selectCategoryFilter(category) {
    state.selectedCategory = category;

    // Update cat pill active states
    elements.catPillBtns.forEach((btn) => {
      if (btn.dataset.category.toLowerCase() === category.toLowerCase()) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    // Update Interest card active states in Section 2
    elements.interestCards.forEach((card) => {
      if (category !== 'all' && card.dataset.category.toLowerCase() === category.toLowerCase()) {
        card.classList.add('selected');
      } else {
        card.classList.remove('selected');
      }
    });

    renderCareers();
  }

  function selectStageFilter(stage) {
    state.selectedStage = stage;

    elements.stagePillBtns.forEach((btn) => {
      if (btn.dataset.stageFilter === stage) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    renderCareers();
  }

  function resetAllFilters() {
    state.selectedCategory = 'all';
    state.selectedStage = 'all';
    state.searchQuery = '';
    state.showBookmarksOnly = false;

    if (elements.careerSearchInput) elements.careerSearchInput.value = '';
    if (elements.clearSearchBtn) elements.clearSearchBtn.style.display = 'none';

    selectCategoryFilter('all');
    selectStageFilter('all');
    updateBookmarkBadges();
    renderCareers();

    showToast('Filters Cleared', 'Displaying all career opportunities.', 'info');
  }

  /* ==========================================================================
     12. Toast Notification System
     ========================================================================== */
  function showToast(title, message, type = 'info') {
    if (!elements.toastContainer) return;

    const toast = document.createElement('div');
    toast.className = `toast ${type}`;

    let icon = 'fa-circle-info';
    if (type === 'success') icon = 'fa-circle-check';
    if (type === 'warn') icon = 'fa-triangle-exclamation';

    toast.innerHTML = `
      <div class="toast-icon"><i class="fa-solid ${icon}"></i></div>
      <div class="toast-content">
        <div class="toast-title">${title}</div>
        <p class="toast-message">${message}</p>
      </div>
      <button class="toast-close" aria-label="Dismiss">&times;</button>
    `;

    elements.toastContainer.appendChild(toast);

    // Trigger animation
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    // Auto dismiss after 3.8s
    const timer = setTimeout(() => {
      dismissToast(toast);
    }, 3800);

    toast.querySelector('.toast-close').addEventListener('click', () => {
      clearTimeout(timer);
      dismissToast(toast);
    });
  }

  function dismissToast(toast) {
    toast.classList.remove('show');
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }

  /* ==========================================================================
     13. Smooth Scroll Utility
     ========================================================================== */
  function smoothScrollTo(selector) {
    const target = document.querySelector(selector);
    if (!target) return;
    const navOffset = elements.navbar ? elements.navbar.offsetHeight : 70;
    const targetPos = target.getBoundingClientRect().top + window.pageYOffset - navOffset;

    window.scrollTo({
      top: targetPos,
      behavior: 'smooth'
    });
  }

  /* ==========================================================================
     14. Form Validation & Submission
     ========================================================================== */
  function handleContactSubmit(e) {
    e.preventDefault();

    const nameInput = document.getElementById('contactName');
    const emailInput = document.getElementById('contactEmail');
    const gradeInput = document.getElementById('studentGrade');
    const topicInput = document.getElementById('guidanceTopic');
    const messageInput = document.getElementById('contactMessage');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const gradeError = document.getElementById('gradeError');
    const topicError = document.getElementById('topicError');
    const messageError = document.getElementById('messageError');

    // Reset errors
    nameError.textContent = '';
    emailError.textContent = '';
    gradeError.textContent = '';
    topicError.textContent = '';
    messageError.textContent = '';

    let isValid = true;

    // Name check
    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      nameError.textContent = 'Please provide your full name (at least 2 letters).';
      isValid = false;
    }

    // Email check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailInput.value.trim() || !emailPattern.test(emailInput.value.trim())) {
      emailError.textContent = 'Please enter a valid email address.';
      isValid = false;
    }

    // Grade check
    if (!gradeInput.value) {
      gradeError.textContent = 'Please select your current class / status.';
      isValid = false;
    }

    // Topic check
    if (!topicInput.value) {
      topicError.textContent = 'Please choose what you need guidance with.';
      isValid = false;
    }

    // Message check
    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      messageError.textContent = 'Please write a brief question (minimum 10 characters).';
      isValid = false;
    }

    if (!isValid) return;

    // Simulate submit success
    const studentName = nameInput.value.trim();
    elements.contactForm.reset();

    showToast(
      'Message Received! 🚀',
      `Thank you, ${studentName}! Our career guidance mentor will review your query and reply within 24 hours.`,
      'success'
    );
  }

  /* Newsletter submission handler exposed globally for inline form */
  window.CareerApp = {
    handleNewsletter: function (form) {
      const emailInput = form.querySelector('input[type="email"]');
      if (emailInput && emailInput.value) {
        showToast(
          'Subscribed Successfully! 📬',
          `We'll send scholarship alerts and entrance exam timelines to ${emailInput.value}.`,
          'success'
        );
        form.reset();
      }
    }
  };

  /* ==========================================================================
     15. Event Listeners Setup
     ========================================================================== */
  function setupEventListeners() {
    // 1. Theme Toggle
    if (elements.themeToggleBtn) {
      elements.themeToggleBtn.addEventListener('click', toggleTheme);
    }

    // 2. Mobile Menu Toggle
    if (elements.mobileMenuBtn && elements.navLinks) {
      elements.mobileMenuBtn.addEventListener('click', () => {
        const isOpen = elements.navLinks.classList.toggle('open');
        elements.mobileMenuBtn.classList.toggle('active', isOpen);
      });

      // Close mobile menu on clicking any link
      elements.navLinks.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
          elements.navLinks.classList.remove('open');
          elements.mobileMenuBtn.classList.remove('active');
        });
      });
    }

    // 3. Navbar scroll effect
    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        elements.navbar.classList.add('scrolled');
      } else {
        elements.navbar.classList.remove('scrolled');
      }
    });

    // 4. Stream Guide Toggle Tabs (Class 10 vs Class 12)
    elements.stageToggleBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        elements.stageToggleBtns.forEach((b) => {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');

        const stage = btn.dataset.stage;
        if (stage === '10') {
          elements.stage10Panel.classList.add('active');
          elements.stage12Panel.classList.remove('active');
        } else {
          elements.stage10Panel.classList.remove('active');
          elements.stage12Panel.classList.add('active');
        }
      });
    });

    // Stream guide card buttons that trigger filter
    document.querySelectorAll('.filter-by-stream').forEach((btn) => {
      btn.addEventListener('click', () => {
        const interest = btn.dataset.filterInterest;
        if (interest) {
          selectCategoryFilter(interest);
          smoothScrollTo('#careers');
          showToast('Filter Applied', `Showing careers under ${interest}.`, 'info');
        }
      });
    });

    // 5. Interest Cards Click in Section 2
    elements.interestCards.forEach((card) => {
      card.addEventListener('click', () => {
        const cat = card.dataset.category;
        if (state.selectedCategory === cat) {
          // Deselect if already active
          selectCategoryFilter('all');
        } else {
          selectCategoryFilter(cat);
          smoothScrollTo('#careers');
          showToast('Category Selected', `Browsing ${cat} careers and courses.`, 'info');
        }
      });
    });

    if (elements.showAllInterestsBtn) {
      elements.showAllInterestsBtn.addEventListener('click', () => {
        selectCategoryFilter('all');
        smoothScrollTo('#careers');
      });
    }

    // 6. Category Pill Buttons in Explorer
    elements.catPillBtns.forEach((pill) => {
      pill.addEventListener('click', () => {
        const cat = pill.dataset.category;
        selectCategoryFilter(cat);
      });
    });

    // 7. Stage Filter Pills in Explorer (All / After 10th / After 12th)
    elements.stagePillBtns.forEach((pill) => {
      pill.addEventListener('click', () => {
        const stage = pill.dataset.stageFilter;
        selectStageFilter(stage);
      });
    });

    // 8. Search Input (Live Search & Clear)
    if (elements.careerSearchInput) {
      elements.careerSearchInput.addEventListener('input', (e) => {
        state.searchQuery = e.target.value;
        if (elements.clearSearchBtn) {
          elements.clearSearchBtn.style.display = state.searchQuery ? 'block' : 'none';
        }
        renderCareers();
      });
    }

    if (elements.clearSearchBtn) {
      elements.clearSearchBtn.addEventListener('click', () => {
        state.searchQuery = '';
        elements.careerSearchInput.value = '';
        elements.clearSearchBtn.style.display = 'none';
        renderCareers();
        elements.careerSearchInput.focus();
      });
    }

    // 9. Bookmarks Filter Toggle
    if (elements.savedOnlyToggle) {
      elements.savedOnlyToggle.addEventListener('click', () => {
        state.showBookmarksOnly = !state.showBookmarksOnly;
        updateBookmarkBadges();
        renderCareers();
        showToast(
          state.showBookmarksOnly ? 'Bookmarks Only' : 'All Careers',
          state.showBookmarksOnly ? 'Showing your bookmarked career pathways.' : 'Showing full career list.',
          'info'
        );
      });
    }

    if (elements.bookmarkFilterBtn) {
      elements.bookmarkFilterBtn.addEventListener('click', () => {
        state.showBookmarksOnly = true;
        updateBookmarkBadges();
        renderCareers();
        smoothScrollTo('#careers');
        showToast('Saved Careers', 'Viewing all your saved pathways.', 'info');
      });
    }

    // 10. Reset buttons
    if (elements.resetAllFiltersBtn) elements.resetAllFiltersBtn.addEventListener('click', resetAllFilters);
    if (elements.emptyStateResetBtn) elements.emptyStateResetBtn.addEventListener('click', resetAllFilters);

    // 11. Career Details Modal Events
    if (elements.modalCloseBtn) elements.modalCloseBtn.addEventListener('click', closeCareerModal);
    if (elements.modalCloseActionBtn) elements.modalCloseActionBtn.addEventListener('click', closeCareerModal);
    if (elements.careerModalOverlay) {
      elements.careerModalOverlay.addEventListener('click', (e) => {
        if (e.target === elements.careerModalOverlay) closeCareerModal();
      });
    }

    if (elements.modalSaveCareerBtn) {
      elements.modalSaveCareerBtn.addEventListener('click', () => {
        if (activeModalCareerId) {
          toggleBookmark(activeModalCareerId);
        }
      });
    }

    // 12. Quiz Modal Events
    if (elements.openQuizNavBtn) elements.openQuizNavBtn.addEventListener('click', openQuizModal);
    if (elements.heroQuizBtn) elements.heroQuizBtn.addEventListener('click', openQuizModal);
    if (elements.quizCloseBtn) elements.quizCloseBtn.addEventListener('click', closeQuizModal);
    if (elements.quizModalOverlay) {
      elements.quizModalOverlay.addEventListener('click', (e) => {
        if (e.target === elements.quizModalOverlay) closeQuizModal();
      });
    }

    if (elements.quizBackBtn) {
      elements.quizBackBtn.addEventListener('click', () => {
        if (state.quizStep > 0) {
          state.quizStep--;
          renderQuizStep();
        }
      });
    }

    if (elements.quizRestartBtn) {
      elements.quizRestartBtn.addEventListener('click', openQuizModal);
    }

    // 13. ESC key closes active modals
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (elements.careerModalOverlay.classList.contains('active')) {
          closeCareerModal();
        }
        if (elements.quizModalOverlay.classList.contains('active')) {
          closeQuizModal();
        }
      }
    });

    // 14. FAQ Accordion Toggle
    elements.faqQuestions.forEach((questionBtn) => {
      questionBtn.addEventListener('click', () => {
        const item = questionBtn.closest('.faq-item');
        const isActive = item.classList.contains('active');

        // Close other FAQ items
        document.querySelectorAll('.faq-item').forEach((other) => {
          if (other !== item) {
            other.classList.remove('active');
            other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
          }
        });

        // Toggle current
        if (isActive) {
          item.classList.remove('active');
          questionBtn.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('active');
          questionBtn.setAttribute('aria-expanded', 'true');
        }
      });
    });

    // 15. Contact Form Submit
    if (elements.contactForm) {
      elements.contactForm.addEventListener('submit', handleContactSubmit);
    }

    // 16. Footer Stream Filter Links
    document.querySelectorAll('.filter-footer-link').forEach((link) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const cat = link.dataset.cat;
        if (cat) {
          selectCategoryFilter(cat);
          smoothScrollTo('#careers');
        }
      });
    });
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
