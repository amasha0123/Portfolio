export const projectDetailsData = {
  "sarasavi-library": {
    title: "Sarasavi Library Management System",
    subtitle: "Desktop Application | C# .NET | Windows Forms | SQL Server",
    github: "https://github.com/amasha0123/SarasaviLibrary",
    live: "#",
    overview: "Sarasavi Library Management System is a desktop-based application developed to automate and manage daily library operations. The system helps librarians efficiently manage books, book copies, registered members, loans, returns, reservations, and book availability inquiries. The application was developed as a Software Development Project using C# programming language, .NET Windows Forms, and SQL Server database following Object-Oriented Programming (OOP) principles.",
    objectives: [
      "Automate manual library management processes.",
      "Manage registered members and visitors.",
      "Maintain book and book copy records.",
      "Simplify book issuing and returning processes.",
      "Handle reservations efficiently.",
      "Provide quick book availability searches."
    ],
    features: [
      {
        title: "🔐 User Authentication",
        details: [
          "Secure librarian login system.",
          "Role-based access control."
        ]
      },
      {
        title: "👥 User Registration Management",
        details: [
          "Register new library members and visitors.",
          "Store user details such as User number, Name, Gender, NIC number, Address."
        ]
      },
      {
        title: "📚 Book Management",
        details: [
          "Add and manage book details.",
          "Maintain multiple copies of the same book.",
          "Identify borrowable and reference-only copies.",
          "Track book availability status."
        ]
      },
      {
        title: "📖 Loan Management",
        details: [
          "Issue books to registered members.",
          "Validate borrowing eligibility before issuing.",
          "Apply borrowing rules: Maximum 5 borrowed books per member, Reference books cannot be borrowed, Loan period of 14 days."
        ]
      },
      {
        title: "🔄 Return Management",
        details: [
          "Process returned books.",
          "Update book availability status.",
          "Check existing reservations."
        ]
      },
      {
        title: "📌 Reservation Management",
        details: [
          "Allow members to reserve unavailable books.",
          "Manage reservation records based on request date."
        ]
      },
      {
        title: "🔍 Book Inquiry/Search",
        details: [
          "Search books using Book number, Title, Author.",
          "Display availability status."
        ]
      }
    ],
    technologies: [
      "C#",
      ".NET Windows Forms",
      "Visual Studio",
      "SQL Server",
      "ADO.NET",
      "Object-Oriented Programming (OOP)"
    ],
    systemDesign: {
      concepts: [
        "Classes and Objects",
        "Encapsulation",
        "Inheritance",
        "Abstraction",
        "Separation of responsibilities"
      ],
      classes: [
        "User",
        "Member",
        "Visitor",
        "Book",
        "BookCopy",
        "Loan",
        "Reservation"
      ]
    },
    databaseDesign: {
      description: "The system uses a relational database containing tables with relationships designed using primary keys and foreign keys to maintain data consistency.",
      tables: [
        "Users table",
        "Books table",
        "BookCopy table",
        "Loan table",
        "Reservation table",
        "Login table"
      ]
    },
    challenges: [
      "Implementing loan eligibility validation.",
      "Managing multiple copies of the same book.",
      "Designing relationships between users, books, and loans.",
      "Applying real-world library rules into software logic."
    ],
    futureImprovements: [
      "Add online member portal.",
      "Add barcode scanning for books.",
      "Generate PDF reports.",
      "Add email notifications for due dates.",
      "Deploy as a web-based library system."
    ],
    conclusion: "The Sarasavi Library Management System provides an efficient solution for managing library operations by replacing manual processes with an automated software system. The project demonstrates practical skills in C# development, database management, software design, and object-oriented programming."
  },
  "learnme": {
    title: "LearnMe – Enterprise Learning Management System (LMS)",
    subtitle: "Full-Stack Web & Mobile Application | Flutter | Firebase | Google Gemini AI",
    github: "https://github.com/amasha0123/online_learning_app",
    live: "https://amasha0123.github.io/online_learning_app/",
    overview: "LearnMe is a full-stack, AI-powered Learning Management System designed for universities and enterprise training environments. The platform provides separate experiences for Students, Instructors, and Administrators with course management, assignments, assessments, attendance tracking, analytics, and AI-powered learning assistance. The application was developed using Flutter for cross-platform development and Firebase services for scalable cloud-based backend infrastructure.",
    features: [
      {
        title: "👨🎓 Student Portal",
        details: [
          "Browse and enroll in courses",
          "View learning materials",
          "Submit assignments",
          "Track academic progress",
          "Attend QR-based attendance sessions",
          "Use AI Tutor assistance"
        ]
      },
      {
        title: "👨🏫 Instructor Portal",
        details: [
          "Create and manage courses",
          "Upload learning resources",
          "Create assignments",
          "Grade submissions",
          "Monitor student performance"
        ]
      },
      {
        title: "👨💼 Admin Portal",
        details: [
          "Manage users and roles",
          "Monitor system activities",
          "View analytics dashboards"
        ]
      },
      {
        title: "🤖 AI Integration",
        details: [
          "AI Tutor",
          "AI Study Planner",
          "AI Quiz Generator",
          "Context-aware educational assistance using Google Gemini API"
        ]
      },
      {
        title: "📱 QR Attendance System",
        details: [
          "Generate unique QR codes for sessions",
          "Allow students to scan using camera",
          "Store attendance records in real-time"
        ]
      }
    ],
    technologies: [
      "Flutter", "Dart", "Firebase", "Cloud Firestore", "Firebase Authentication", "Firebase Cloud Storage", "Google Gemini API", "Provider", "fl_chart", "pdf package", "Firestore Security Rules"
    ],
    challenges: [
      "Multi-role authentication architecture",
      "Role-Based Access Control (RBAC)",
      "Real-time database updates",
      "Repository pattern architecture",
      "Responsive cross-platform UI",
      "AI-powered learning features"
    ],
    futureImprovements: [
      "Live video classroom integration",
      "Advanced recommendation system",
      "AI-based performance prediction"
    ]
  },
  "elysian-stay": {
    title: "Elysian Stay – Guest House Booking System",
    subtitle: "Web Application | React | Node.js | Express | Firebase | Stripe",
    github: "https://github.com/amasha0123/Elysian-Stay",
    live: "https://amasha0123.github.io/Elysian-Stay/",
    overview: "Elysian Stay is a modern full-stack guest house booking platform that allows users to search accommodations, make reservations, manage bookings, and process online payments. The system provides a smooth booking experience with a React frontend, Express backend, Firebase services, and Stripe payment integration.",
    features: [
      {
        title: "Booking & Management",
        details: [
          "User registration and authentication",
          "Guest house browsing",
          "Room availability management",
          "Booking management",
          "Online payment processing",
          "Responsive user interface"
        ]
      }
    ],
    technologies: [
      "React 19", "Vite", "Node.js", "Express.js", "Firebase Firestore", "Firebase Authentication", "Stripe", "REST API", "GitHub Pages"
    ],
    challenges: [
      "Component-based React architecture",
      "REST API integration",
      "Secure payment workflow",
      "Firebase cloud services",
      "Responsive design"
    ]
  },
  "portfolio": {
    title: "Personal Portfolio Website",
    subtitle: "React | Vite | Framer Motion | GitHub Pages",
    github: "https://github.com/amasha0123/Portfolio",
    live: "https://amasha0123.github.io/Portfolio/",
    overview: "A modern interactive developer portfolio website designed to showcase my software engineering projects, technical skills, and professional experience. The website focuses on smooth animations, responsive design, and an engaging user experience.",
    features: [
      {
        title: "Website Features",
        details: [
          "Animated hero section",
          "Project showcase",
          "Skills section",
          "Contact section",
          "Interactive project cards",
          "Responsive design"
        ]
      }
    ],
    technologies: [
      "React 19", "Vite", "Framer Motion", "Vanilla CSS", "React Icons", "GitHub Pages"
    ],
    challenges: [
      "Component-based architecture",
      "Custom animation system",
      "Glassmorphism UI design",
      "Automated deployment pipeline",
      "Custom domain integration"
    ]
  },
  "wedding-invite": {
    title: "Digital Wedding Invitation Website",
    subtitle: "HTML | CSS | JavaScript",
    github: "https://github.com/amasha0123/wedding-invite",
    live: "https://amasha0123.github.io/wedding-invitation./",
    overview: "A personalized digital wedding invitation website developed using pure frontend technologies. The website provides guests with an interactive invitation experience including animations, event details, gallery, countdown timer, and RSVP features.",
    features: [
      {
        title: "Invitation Features",
        details: [
          "Personalized guest URLs",
          "Countdown timer",
          "Image slideshow",
          "Photo gallery",
          "Event timeline",
          "WhatsApp sharing",
          "Background music control"
        ]
      }
    ],
    technologies: [
      "HTML5", "CSS3", "JavaScript", "Web Share API", "CSS Keyframes"
    ],
    challenges: [
      "DOM manipulation",
      "URL parameter handling",
      "Responsive layouts",
      "Browser API integration"
    ]
  },
  "auction-site": {
    title: "Auction Site Frontend",
    subtitle: "Next.js | React | TypeScript | Tailwind CSS",
    github: "https://github.com/amasha0123/auction_website",
    live: "#",
    overview: "A modern auction platform frontend that enables users to browse auctions, place bids, manage watchlists, sell items, and track transactions. The application supports different user roles including buyers and sellers with secure authentication workflows.",
    features: [
      {
        title: "Platform Features",
        details: [
          "Auction browsing",
          "Search and filtering",
          "Item selling",
          "Bidding system",
          "Watchlist management",
          "Payment interface",
          "User notifications"
        ]
      }
    ],
    technologies: [
      "Next.js 15", "React 19", "Tailwind CSS", "React Context API", "TanStack React Query", "React Hook Form + Zod", "Radix UI", "Motion", "TypeScript"
    ],
    challenges: [
      "Service layer architecture",
      "API proxy implementation",
      "JWT authentication handling",
      "Data transformation layer",
      "Client-side search algorithms"
    ]
  },
  "internly": {
    title: "Internly – AI Career Companion App",
    subtitle: "Flutter | Firebase | Supabase | AI Integration",
    github: "https://github.com/tharinduxn/internly",
    live: "#",
    overview: "Internly is a cross-platform AI career assistant designed for students and graduates. It helps users discover internships, practice technical interviews, manage applications, and build professional CVs.",
    features: [
      {
        title: "Internship Discovery",
        details: [
          "Live internship search",
          "Job filtering",
          "Bookmark opportunities"
        ]
      },
      {
        title: "AI Assistant",
        details: [
          "Career guidance",
          "Interview preparation",
          "AI chat support"
        ]
      },
      {
        title: "Practice Module",
        details: [
          "Technical quizzes",
          "DSA questions",
          "SQL practice"
        ]
      },
      {
        title: "Application Tracker & CV Builder",
        details: [
          "Pipeline: Applied -> Screening -> Interview -> Offer",
          "Create CV profiles",
          "Export PDF resumes"
        ]
      }
    ],
    technologies: [
      "Flutter", "Dart", "Firebase Firestore", "Firebase Auth", "Firebase Storage", "Supabase", "Riverpod", "GoRouter", "JSearch API", "Remotive API"
    ],
    challenges: [
      "Feature-based architecture",
      "Multi-source API fallback system",
      "Job deduplication algorithm",
      "Firestore security rules",
      "PDF generation system",
      "Real-time authentication"
    ]
  }
};
