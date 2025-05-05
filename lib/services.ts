export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  icon: string;
  fullDescription?: string;
  features?: {
    title: string;
    description: string;
    icon?: string;
  }[];
  benefits?: string[];
  process?: {
    step: number;
    title: string;
    description: string;
  }[];
  faq?: {
    question: string;
    answer: string;
  }[];
  caseStudies?: {
    id: string;
    title: string;
    client: string;
    challenge: string;
    solution: string;
    result: string;
    image: string;
  }[];
}

export function getServices(): Service[] {
  return [
    {
      id: "web-development",
      title: "Website Development",
      shortDescription: "Custom websites tailored to your business needs",
      description:
        "We create responsive, user-friendly websites that are optimized for performance and conversion. Our development team uses the latest technologies to build scalable and secure web solutions.",
      image: "web-development.jpg",
      icon: "globe",
      fullDescription: `Our website development service delivers custom, responsive, and user-friendly websites that are tailored to your specific business needs. We focus on creating websites that not only look great but also perform exceptionally well.

      Our team of experienced developers uses the latest technologies and best practices to ensure your website is fast, secure, and scalable. Whether you need a simple informational website, a complex e-commerce platform, or a custom web application, we have the expertise to bring your vision to life.

      We follow a collaborative approach, working closely with you throughout the development process to ensure the final product aligns with your goals and exceeds your expectations.`,
      features: [
        {
          title: "Responsive Design",
          description:
            "Websites that look and function perfectly on all devices, from desktops to smartphones",
          icon: "smartphone",
        },
        {
          title: "Custom Development",
          description:
            "Tailored solutions built from scratch to meet your specific requirements",
          icon: "code",
        },
        {
          title: "E-commerce Integration",
          description:
            "Secure online stores with payment processing and inventory management",
          icon: "shopping-cart",
        },
        {
          title: "Content Management",
          description:
            "User-friendly CMS that makes it easy to update and manage your website content",
          icon: "file-text",
        },
        {
          title: "SEO Optimization",
          description:
            "Built-in search engine optimization to improve your visibility online",
          icon: "search",
        },
        {
          title: "Performance Optimization",
          description:
            "Fast-loading pages that provide an excellent user experience",
          icon: "zap",
        },
      ],
      benefits: [
        "Increased online visibility and brand awareness",
        "Improved user engagement and conversion rates",
        "Enhanced credibility and professional image",
        "24/7 availability to customers worldwide",
        "Valuable insights through analytics and tracking",
        "Competitive advantage in your industry",
      ],
      process: [
        {
          step: 1,
          title: "Discovery & Planning",
          description:
            "We start by understanding your business, goals, target audience, and requirements to create a detailed project plan.",
        },
        {
          step: 2,
          title: "Design & Prototyping",
          description:
            "Our designers create wireframes and visual designs that align with your brand and provide the best user experience.",
        },
        {
          step: 3,
          title: "Development",
          description:
            "Our developers bring the designs to life, writing clean, efficient code and implementing all required functionality.",
        },
        {
          step: 4,
          title: "Testing & Quality Assurance",
          description:
            "We rigorously test the website across different devices and browsers to ensure everything works perfectly.",
        },
        {
          step: 5,
          title: "Launch & Training",
          description:
            "Once approved, we deploy your website and provide training on how to manage and update your content.",
        },
        {
          step: 6,
          title: "Ongoing Support",
          description:
            "We offer continued support and maintenance to ensure your website remains secure, up-to-date, and performing optimally.",
        },
      ],
      faq: [
        {
          question: "How long does it take to develop a website?",
          answer:
            "The timeline varies depending on the complexity of the project. A simple website might take 4-6 weeks, while more complex projects can take 3-6 months. We'll provide a detailed timeline during the planning phase.",
        },
        {
          question: "Will my website be mobile-friendly?",
          answer:
            "All our websites are built with responsive design, ensuring they look and function perfectly on all devices, from desktops to tablets and smartphones.",
        },
        {
          question: "Can I update the website content myself?",
          answer:
            "Yes, we implement user-friendly content management systems (CMS) that allow you to easily update and manage your website content without technical knowledge.",
        },
        {
          question: "Do you provide hosting and domain registration?",
          answer:
            "Yes, we offer hosting and domain registration services. We can also work with your existing hosting provider if you prefer.",
        },
        {
          question: "What about website security?",
          answer:
            "Security is a top priority. We implement various security measures, including SSL certificates, secure coding practices, and regular updates to protect your website from threats.",
        },
      ],
      caseStudies: [
        {
          id: "case1",
          title: "E-commerce Website Redesign",
          client: "FashionHub",
          challenge:
            "FashionHub's outdated website was causing poor user experience, low conversion rates, and declining sales.",
          solution:
            "We redesigned their e-commerce platform with a modern, responsive design, improved navigation, and streamlined checkout process.",
          result:
            "40% increase in conversion rate, 25% reduction in cart abandonment, and 50% increase in mobile sales within three months of launch.",
          image: "web-development.jpg",
        },
        {
          id: "case2",
          title: "Corporate Website Development",
          client: "TechCorp",
          challenge:
            "TechCorp needed a professional website that effectively communicated their services and established credibility in a competitive market.",
          solution:
            "We developed a custom website with clear service descriptions, case studies, team profiles, and a robust contact system.",
          result:
            "60% increase in qualified leads, 35% increase in time spent on site, and improved brand perception among potential clients.",
          image: "web-development.jpg",
        },
      ],
    },
    {
      id: "crm-solutions",
      title: "CRM Solutions",
      shortDescription: "Streamline your customer relationships",
      description:
        "Our CRM solutions help you manage customer interactions, track sales, and improve customer service. We offer customized CRM development and integration with existing systems.",
      image: "crm-solutions.jpg",
      icon: "users",
      fullDescription: `Our Customer Relationship Management (CRM) solutions are designed to help businesses effectively manage their interactions with current and potential customers. We provide customized CRM systems that streamline your sales processes, improve customer service, and enhance marketing efforts.

      Our team works closely with you to understand your specific business processes and requirements, ensuring that the CRM solution we deliver aligns perfectly with your needs. Whether you need a new CRM system built from scratch or integration with your existing systems, we have the expertise to deliver a solution that drives results.

      With our CRM solutions, you'll gain valuable insights into your customer relationships, enabling you to make data-driven decisions that improve customer satisfaction and boost your bottom line.`,
      features: [
        {
          title: "Contact Management",
          description:
            "Centralized database for all customer information and interaction history",
          icon: "users",
        },
        {
          title: "Sales Pipeline Management",
          description:
            "Track and manage leads through your sales process with visual pipelines",
          icon: "trending-up",
        },
        {
          title: "Task & Activity Management",
          description:
            "Schedule and track follow-ups, meetings, and other customer-related activities",
          icon: "calendar",
        },
        {
          title: "Reporting & Analytics",
          description:
            "Comprehensive reports and dashboards to track performance and identify trends",
          icon: "bar-chart",
        },
        {
          title: "Email Integration",
          description:
            "Seamless integration with email systems for tracking communications",
          icon: "mail",
        },
        {
          title: "Mobile Access",
          description: "Access your CRM data from anywhere, on any device",
          icon: "smartphone",
        },
      ],
      benefits: [
        "Improved customer retention and satisfaction",
        "Increased sales and conversion rates",
        "Enhanced team collaboration and productivity",
        "Better understanding of customer needs and behaviors",
        "Streamlined business processes and reduced manual work",
        "Data-driven decision making",
      ],
      process: [
        {
          step: 1,
          title: "Requirements Analysis",
          description:
            "We analyze your business processes, goals, and requirements to understand what you need from a CRM system.",
        },
        {
          step: 2,
          title: "Solution Design",
          description:
            "Based on our analysis, we design a CRM solution that aligns with your business processes and objectives.",
        },
        {
          step: 3,
          title: "Development & Customization",
          description:
            "We develop and customize the CRM system according to the approved design and specifications.",
        },
        {
          step: 4,
          title: "Data Migration",
          description:
            "We securely migrate your existing customer data to the new CRM system, ensuring data integrity.",
        },
        {
          step: 5,
          title: "Testing & Quality Assurance",
          description:
            "We thoroughly test the CRM system to ensure it works as expected and meets all requirements.",
        },
        {
          step: 6,
          title: "Training & Deployment",
          description:
            "We train your team on how to use the CRM system effectively and deploy it to your production environment.",
        },
        {
          step: 7,
          title: "Ongoing Support & Optimization",
          description:
            "We provide ongoing support and continuously optimize the CRM system based on user feedback and changing business needs.",
        },
      ],
      faq: [
        {
          question: "Can you integrate the CRM with our existing systems?",
          answer:
            "Yes, we specialize in integrating CRM solutions with existing systems such as ERP, accounting software, email platforms, and more. This ensures a seamless flow of information across your business.",
        },
        {
          question: "How long does it take to implement a CRM solution?",
          answer:
            "The implementation timeline depends on the complexity of your requirements and the extent of customization needed. Typically, a basic implementation takes 4-8 weeks, while more complex projects can take 3-6 months.",
        },
        {
          question: "Will our data be secure in the CRM system?",
          answer:
            "Absolutely. We implement robust security measures including data encryption, secure authentication, role-based access controls, and regular backups to ensure your customer data is protected.",
        },
        {
          question: "Do you offer cloud-based and on-premises CRM solutions?",
          answer:
            "Yes, we offer both cloud-based and on-premises CRM solutions. We'll recommend the best option based on your specific requirements, budget, and IT infrastructure.",
        },
        {
          question: "How much customization is possible?",
          answer:
            "Our CRM solutions are highly customizable. We can tailor the system to match your specific business processes, terminology, and workflows, ensuring it fits your organization perfectly.",
        },
      ],
      caseStudies: [
        {
          id: "case1",
          title: "Sales Process Automation",
          client: "GlobalTech",
          challenge:
            "GlobalTech was struggling with inefficient sales processes, poor lead tracking, and limited visibility into their sales pipeline.",
          solution:
            "We implemented a customized CRM solution with automated lead scoring, pipeline management, and comprehensive reporting.",
          result:
            "30% increase in sales productivity, 25% shorter sales cycles, and 45% improvement in lead conversion rates within six months.",
          image: "crm-solutions.jpg",
        },
        {
          id: "case2",
          title: "Customer Service Enhancement",
          client: "ServicePro",
          challenge:
            "ServicePro was experiencing high customer churn due to inconsistent service quality and lack of customer insights.",
          solution:
            "We developed a CRM system focused on customer service, with case management, service level tracking, and customer feedback integration.",
          result:
            "40% reduction in customer churn, 60% improvement in first-call resolution, and 35% increase in customer satisfaction scores.",
          image: "crm-solutions.jpg",
        },
      ],
    },
    {
      id: "ai-automation",
      title: "AI Business Automation",
      shortDescription: "Intelligent automation for increased efficiency",
      description:
        "We leverage artificial intelligence to automate repetitive tasks, analyze data, and provide insights. Our AI solutions help you make better decisions and improve operational efficiency.",
      image: "ai-automation.jpg",
      icon: "cpu",
      fullDescription: `Our AI Business Automation services harness the power of artificial intelligence to transform your business operations. We develop intelligent automation solutions that streamline processes, reduce manual effort, and drive efficiency across your organization.

      By combining AI technologies such as machine learning, natural language processing, and computer vision with robotic process automation (RPA), we create end-to-end solutions that can handle complex tasks that previously required human intervention.

      Our team works closely with you to identify automation opportunities, develop customized AI solutions, and implement them seamlessly into your existing workflows. The result is increased productivity, reduced costs, improved accuracy, and the ability to scale operations without proportionally increasing resources.`,
      features: [
        {
          title: "Process Automation",
          description:
            "Automate repetitive tasks and workflows to increase efficiency and reduce errors",
          icon: "repeat",
        },
        {
          title: "Predictive Analytics",
          description:
            "Analyze historical data to forecast trends and make data-driven decisions",
          icon: "bar-chart",
        },
        {
          title: "Intelligent Chatbots",
          description:
            "AI-powered conversational agents for customer support and internal processes",
          icon: "message-circle",
        },
        {
          title: "Document Processing",
          description:
            "Automated extraction and processing of information from various document types",
          icon: "file-text",
        },
        {
          title: "Computer Vision",
          description:
            "Image and video analysis for quality control, security, and process monitoring",
          icon: "eye",
        },
        {
          title: "Decision Support",
          description:
            "AI-driven insights and recommendations to support decision-making",
          icon: "cpu",
        },
      ],
      benefits: [
        "Significant reduction in operational costs",
        "Increased productivity and throughput",
        "Improved accuracy and consistency in processes",
        "Enhanced customer experience through faster service",
        "Better resource allocation and utilization",
        "Scalable operations without proportional cost increases",
        "Valuable insights from data analysis",
      ],
      process: [
        {
          step: 1,
          title: "Process Assessment",
          description:
            "We analyze your current processes to identify automation opportunities and potential ROI.",
        },
        {
          step: 2,
          title: "Solution Design",
          description:
            "We design an AI automation solution tailored to your specific requirements and objectives.",
        },
        {
          step: 3,
          title: "Proof of Concept",
          description:
            "We develop a small-scale prototype to demonstrate the solution's effectiveness and gather feedback.",
        },
        {
          step: 4,
          title: "Development",
          description:
            "Our team develops the full AI automation solution, including all necessary integrations.",
        },
        {
          step: 5,
          title: "Testing & Validation",
          description:
            "We thoroughly test the solution to ensure it performs as expected and meets all requirements.",
        },
        {
          step: 6,
          title: "Deployment",
          description:
            "We deploy the solution to your production environment and provide training to your team.",
        },
        {
          step: 7,
          title: "Monitoring & Optimization",
          description:
            "We continuously monitor the solution's performance and make optimizations to improve results.",
        },
      ],
      faq: [
        {
          question: "What processes can be automated with AI?",
          answer:
            "Many business processes can benefit from AI automation, including data entry and processing, customer support, document review and analysis, inventory management, quality control, fraud detection, and predictive maintenance. We can help you identify which processes in your organization would benefit most from automation.",
        },
        {
          question:
            "How long does it take to implement an AI automation solution?",
          answer:
            "The implementation timeline varies depending on the complexity of the processes being automated and the extent of integration required. Simple automations might take 4-8 weeks, while more complex projects can take 3-6 months. We'll provide a detailed timeline during the planning phase.",
        },
        {
          question: "Will AI automation replace our employees?",
          answer:
            "The goal of AI automation is not to replace employees but to augment their capabilities and free them from repetitive, low-value tasks. This allows your team to focus on more strategic, creative, and customer-facing activities that require human judgment and empathy.",
        },
        {
          question:
            "How do you ensure the quality and accuracy of AI automation?",
          answer:
            "We implement rigorous testing and validation processes to ensure the accuracy of our AI solutions. This includes training the AI models on relevant data, conducting extensive testing in various scenarios, implementing human oversight where appropriate, and continuously monitoring and improving the system based on performance metrics.",
        },
        {
          question: "What kind of ROI can we expect from AI automation?",
          answer:
            "ROI varies depending on the specific processes being automated and your current operational costs. However, our clients typically see cost reductions of 40-70% for automated processes, productivity improvements of 30-50%, and error reduction of up to 90%. We can provide a more detailed ROI analysis based on your specific situation.",
        },
      ],
      caseStudies: [
        {
          id: "case1",
          title: "Invoice Processing Automation",
          client: "FinanceCorp",
          challenge:
            "FinanceCorp was processing over 10,000 invoices monthly, requiring a team of 15 people and taking an average of 5 days to complete, with frequent errors and delays.",
          solution:
            "We implemented an AI-powered invoice processing system that automatically extracts data from invoices, validates it against purchase orders and receipts, and routes it for approval.",
          result:
            "90% reduction in processing time (from 5 days to 4 hours), 80% reduction in manual effort, 95% accuracy rate, and annual savings of $500,000.",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          id: "case2",
          title: "Customer Support Chatbot",
          client: "TelecomServices",
          challenge:
            "TelecomServices was struggling with high call volumes, long wait times, and inconsistent customer service quality for routine inquiries and issues.",
          solution:
            "We developed an AI chatbot that handles common customer inquiries, troubleshooting steps, and account management tasks, with seamless handoff to human agents for complex issues.",
          result:
            "70% of customer inquiries resolved without human intervention, 60% reduction in wait times, 40% cost savings in customer support operations, and improved customer satisfaction scores.",
          image: "/placeholder.svg?height=400&width=600",
        },
      ],
    },
    {
      id: "creative-design",
      title: "Creative Design",
      shortDescription: "Eye-catching designs that communicate your brand",
      description:
        "Our creative team designs logos, posters, marketing materials, and more that reflect your brand identity and resonate with your target audience. We focus on creating designs that are both beautiful and functional.",
      image: "creative-design.jpg",
      icon: "paintbrush",
      fullDescription: `Our Creative Design services deliver visually stunning and strategically effective designs that help your brand stand out in today's competitive marketplace. We combine artistic creativity with marketing expertise to create designs that not only look beautiful but also communicate your brand message effectively and drive results.

      Our team of talented designers works closely with you to understand your brand, target audience, and business objectives. We then translate these insights into compelling visual assets that resonate with your audience and strengthen your brand identity.

      From logo design and brand identity to marketing materials and digital assets, we provide comprehensive design solutions that maintain consistency across all touchpoints while adapting to different platforms and contexts.`,
      features: [
        {
          title: "Brand Identity Design",
          description:
            "Logo design, color palettes, typography, and comprehensive brand guidelines",
          icon: "pen-tool",
        },
        {
          title: "Print Design",
          description:
            "Business cards, brochures, flyers, posters, packaging, and other print materials",
          icon: "printer",
        },
        {
          title: "Digital Design",
          description:
            "Website graphics, social media assets, email templates, and digital advertisements",
          icon: "monitor",
        },
        {
          title: "UI/UX Design",
          description:
            "User-centered interface design for websites, applications, and digital products",
          icon: "layout",
        },
        {
          title: "Marketing Collateral",
          description:
            "Sales presentations, product catalogs, annual reports, and promotional materials",
          icon: "briefcase",
        },
        {
          title: "Environmental Design",
          description:
            "Signage, exhibition booths, office spaces, and retail environments",
          icon: "map",
        },
      ],
      benefits: [
        "Stronger brand recognition and recall",
        "Enhanced credibility and professional image",
        "Improved customer engagement and conversion rates",
        "Consistent brand experience across all touchpoints",
        "Effective communication of brand values and messages",
        "Competitive differentiation in the marketplace",
      ],
      process: [
        {
          step: 1,
          title: "Discovery",
          description:
            "We learn about your business, brand, target audience, competitors, and objectives to inform our design approach.",
        },
        {
          step: 2,
          title: "Research & Strategy",
          description:
            "We conduct research and develop a design strategy that aligns with your brand positioning and business goals.",
        },
        {
          step: 3,
          title: "Concept Development",
          description:
            "We create initial design concepts based on our research and strategy, exploring different creative directions.",
        },
        {
          step: 4,
          title: "Refinement",
          description:
            "Based on your feedback, we refine the selected concept, perfecting the details and ensuring it meets all requirements.",
        },
        {
          step: 5,
          title: "Finalization",
          description:
            "We prepare the final design files in appropriate formats for various applications and use cases.",
        },
        {
          step: 6,
          title: "Implementation Support",
          description:
            "We provide guidance and support during the implementation of the designs across different media and platforms.",
        },
        {
          step: 7,
          title: "Evaluation & Iteration",
          description:
            "We evaluate the performance of the designs and make iterations as needed to improve effectiveness.",
        },
      ],
      faq: [
        {
          question: "How do you ensure the designs align with our brand?",
          answer:
            "We begin every project with a thorough discovery phase to understand your brand values, personality, target audience, and objectives. We also review your existing brand materials and guidelines. This ensures that all designs we create are consistent with your brand identity and effectively communicate your brand message.",
        },
        {
          question: "What is your design revision policy?",
          answer:
            "Our design process includes multiple rounds of revisions to ensure your complete satisfaction. Typically, we offer 2-3 rounds of revisions for each design phase. We value your feedback and work collaboratively to refine the designs until they meet your expectations.",
        },
        {
          question: "Do you provide all the source files for the designs?",
          answer:
            "Yes, upon project completion, we provide all the source files in formats suitable for various applications. This includes vector files for logos and graphics, print-ready files for physical materials, and web-optimized files for digital use. You'll have full ownership of all the design assets we create for you.",
        },
        {
          question: "Can you work with our existing brand guidelines?",
          answer:
            "Absolutely. We're experienced in working with established brand guidelines and ensuring that new designs maintain consistency with your existing brand identity. We can also help evolve your brand guidelines if needed, while respecting the core elements that define your brand.",
        },
        {
          question: "How long does a typical design project take?",
          answer:
            "The timeline varies depending on the scope and complexity of the project. A logo design might take 2-4 weeks, while a comprehensive brand identity system could take 6-12 weeks. Website design typically takes 4-8 weeks, depending on the number of pages and complexity. We'll provide a detailed timeline during the proposal phase.",
        },
      ],
      caseStudies: [
        {
          id: "case1",
          title: "Brand Identity Redesign",
          client: "GreenEco",
          challenge:
            "GreenEco's outdated brand identity didn't reflect their innovative approach to sustainable products and was failing to connect with their target audience of environmentally conscious consumers.",
          solution:
            "We developed a fresh, modern brand identity system including a new logo, color palette, typography, and visual elements that communicated their commitment to sustainability and innovation.",
          result:
            "85% positive feedback from customer surveys, 40% increase in brand recognition in market research, and 25% increase in engagement across marketing channels within six months.",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          id: "case2",
          title: "Product Packaging Design",
          client: "OrganicFoods",
          challenge:
            "OrganicFoods was launching a new line of organic snacks but needed packaging that would stand out on crowded retail shelves and communicate their premium, organic positioning.",
          solution:
            "We created distinctive packaging designs that highlighted the natural ingredients through vibrant imagery, clean typography, and sustainable packaging materials.",
          result:
            "60% higher sales than projected in the first quarter, 45% increase in social media sharing of product images, and successful expansion into premium retail locations.",
          image: "/placeholder.svg?height=400&width=600",
        },
      ],
    },
    {
      id: "ui-ux-design",
      title: "UI/UX Design",
      shortDescription: "User-centered design for web and mobile platforms",
      description:
        "We create intuitive, engaging digital experiences through research-driven and user-focused design. Our design solutions aim to enhance usability, aesthetics, and overall customer satisfaction.",
      image: "mobile-app-ux-ui-basics.jpg",
      icon: "pen-tool",
      fullDescription: `Our UI/UX Design service focuses on delivering seamless, user-friendly, and visually appealing designs for web and mobile platforms. We combine creativity with usability principles to craft experiences that captivate users and achieve business objectives.
    
      Whether you're building a new product from scratch or enhancing an existing one, we ensure that your application is easy to navigate, aesthetically pleasing, and optimized for engagement. Our team follows a collaborative design process, working closely with you to understand your brand, audience, and goals.
    
      From research and wireframes to high-fidelity prototypes and usability testing, we provide comprehensive design services that bridge the gap between form and function.`,
      features: [
        {
          title: "User Research & Analysis",
          description:
            "In-depth understanding of user needs, behaviors, and pain points to inform design decisions",
          icon: "search",
        },
        {
          title: "Wireframing & Prototyping",
          description:
            "Creation of wireframes and interactive prototypes to visualize app flow and functionality",
          icon: "layout",
        },
        {
          title: "Visual & Interaction Design",
          description:
            "Polished, brand-aligned visual design with intuitive interactions for an engaging experience",
          icon: "brush",
        },
        {
          title: "Usability Testing",
          description:
            "Testing prototypes with real users to identify issues and optimize the user experience",
          icon: "check-circle",
        },
        {
          title: "Design Systems",
          description:
            "Development of scalable design systems to ensure consistency across products and platforms",
          icon: "layers",
        },
      ],
      benefits: [
        "Improved user satisfaction and engagement",
        "Stronger brand identity and trust",
        "Reduced development time through early validation",
        "Increased conversion and retention rates",
        "Clearer user flows and minimized friction",
        "Competitive advantage through superior user experience",
      ],
      process: [
        {
          step: 1,
          title: "Discovery & Research",
          description:
            "We gather insights about your business, users, and market to inform the design strategy.",
        },
        {
          step: 2,
          title: "Wireframing",
          description:
            "We create low-fidelity wireframes to map out the app or website’s structure and flow.",
        },
        {
          step: 3,
          title: "Visual Design",
          description:
            "Our designers craft high-fidelity designs that combine aesthetics with usability.",
        },
        {
          step: 4,
          title: "Prototyping",
          description:
            "We develop interactive prototypes to simulate user journeys and gather early feedback.",
        },
        {
          step: 5,
          title: "User Testing",
          description:
            "We test prototypes with real users to identify usability issues and make improvements.",
        },
        {
          step: 6,
          title: "Delivery & Handoff",
          description:
            "We deliver final design assets and collaborate with developers for a smooth implementation.",
        },
      ],
      faq: [
        {
          question: "Why is UI/UX design important for my project?",
          answer:
            "Good UI/UX design ensures your app or website is easy to use, engaging, and aligned with user expectations. It can improve customer satisfaction, reduce churn, and lead to better business outcomes.",
        },
        {
          question: "Do you offer design-only services?",
          answer:
            "Yes, we offer standalone design services as well as integrated design and development packages. Whether you need just the design or the full product build, we can support your project.",
        },
        {
          question: "What tools do you use for design?",
          answer:
            "We use industry-leading tools such as Figma, Adobe XD, Sketch, and InVision for wireframing, visual design, and prototyping, ensuring smooth collaboration and handoff.",
        },
        {
          question: "Can you redesign my existing app or website?",
          answer:
            "Absolutely! We specialize in enhancing existing products through UI/UX redesigns that improve usability, aesthetics, and overall performance.",
        },
        {
          question: "How long does a design project take?",
          answer:
            "The timeline depends on the scope and complexity of the project. A simple design could take 2-4 weeks, while larger, more complex projects may take several months. We’ll provide a detailed timeline after the discovery phase.",
        },
      ],
      caseStudies: [
        {
          id: "case1",
          title: "E-commerce Redesign",
          client: "ShopEase",
          challenge:
            "ShopEase wanted to revamp its outdated e-commerce platform to improve user experience and increase conversions.",
          solution:
            "We conducted user research, redesigned the entire interface, and created a streamlined checkout process with modern aesthetics.",
          result:
            "30% increase in conversions, 25% higher user retention, and positive feedback from both new and returning customers.",
          image: "ui-ux-design.jpg",
        },
        {
          id: "case2",
          title: "Healthcare App UX Optimization",
          client: "MediTrack",
          challenge:
            "MediTrack's app had complex navigation and low user satisfaction, leading to poor engagement.",
          solution:
            "We simplified the app’s flow, enhanced accessibility, and introduced a clean, modern visual style.",
          result:
            "40% increase in daily active users, 4.6/5 average app rating, and a 50% reduction in support tickets related to usability issues.",
          image: "ui-ux-design.jpg",
        },
      ],
    },
    {
      id: "mobile-apps",
      title: "Mobile App Development",
      shortDescription: "Native and cross-platform mobile applications",
      description:
        "We develop high-performance mobile applications for iOS and Android platforms. Our mobile solutions are designed to provide a seamless user experience and meet your business objectives.",
      image: "mobile-apps.jpg",
      icon: "smartphone",
      fullDescription: `Our Mobile App Development service delivers high-quality, user-friendly applications for iOS and Android platforms that help businesses engage customers, streamline operations, and drive growth. We combine technical expertise with creative design to create mobile experiences that users love and that deliver measurable business results.

      Whether you need a native app for maximum performance, a cross-platform solution for broader reach, or a progressive web app for cost-effectiveness, our team has the skills and experience to bring your vision to life. We follow a user-centered design approach and agile development methodology to ensure that the final product meets both user needs and business objectives.

      From concept to launch and beyond, we provide end-to-end mobile app development services, including strategy, design, development, testing, deployment, and ongoing support and maintenance.`,
      features: [
        {
          title: "Native App Development",
          description:
            "High-performance applications built specifically for iOS or Android platforms",
          icon: "smartphone",
        },
        {
          title: "Cross-Platform Development",
          description:
            "Efficient development for multiple platforms using frameworks like React Native or Flutter",
          icon: "layers",
        },
        {
          title: "UI/UX Design",
          description:
            "Intuitive, engaging user interfaces that follow platform-specific design guidelines",
          icon: "layout",
        },
        {
          title: "Backend Development",
          description:
            "Robust server-side solutions to power your mobile applications",
          icon: "server",
        },
        {
          title: "API Integration",
          description:
            "Seamless integration with third-party services and existing systems",
          icon: "link",
        },
        {
          title: "App Store Optimization",
          description:
            "Strategies to improve visibility and downloads in app stores",
          icon: "trending-up",
        },
      ],
      benefits: [
        "Enhanced customer engagement and loyalty",
        "Increased brand visibility and recognition",
        "New revenue streams and business opportunities",
        "Improved operational efficiency and productivity",
        "Valuable user data and insights",
        "Competitive advantage in the mobile-first world",
      ],
      process: [
        {
          step: 1,
          title: "Discovery & Planning",
          description:
            "We analyze your requirements, target audience, and business objectives to create a detailed project plan.",
        },
        {
          step: 2,
          title: "UI/UX Design",
          description:
            "Our designers create wireframes and visual designs that provide an intuitive and engaging user experience.",
        },
        {
          step: 3,
          title: "Development",
          description:
            "Our developers write clean, efficient code and implement all required functionality according to the approved designs.",
        },
        {
          step: 4,
          title: "Quality Assurance",
          description:
            "We conduct thorough testing across different devices and scenarios to ensure a bug-free application.",
        },
        {
          step: 5,
          title: "Deployment",
          description:
            "We handle the submission process to app stores and ensure your application meets all requirements for approval.",
        },
        {
          step: 6,
          title: "Post-Launch Support",
          description:
            "We provide ongoing maintenance, updates, and support to keep your app running smoothly and up-to-date.",
        },
      ],
      faq: [
        {
          question: "Should I build a native app or a cross-platform app?",
          answer:
            "The choice between native and cross-platform development depends on your specific requirements, budget, and timeline. Native apps offer the best performance and access to platform-specific features but require separate development for iOS and Android. Cross-platform solutions allow you to reach both platforms with a single codebase, reducing development time and cost, but may have some limitations in performance or feature access. We can help you evaluate the pros and cons of each approach based on your project needs.",
        },
        {
          question: "How long does it take to develop a mobile app?",
          answer:
            "The development timeline varies depending on the complexity of the app, the number of features, and the platforms targeted. A simple app might take 2-3 months, while a more complex application can take 4-8 months or more. We'll provide a detailed timeline during the planning phase based on your specific requirements.",
        },
        {
          question: "How much does it cost to develop a mobile app?",
          answer:
            "The cost of mobile app development depends on various factors, including the complexity of features, design requirements, number of platforms, and integration needs. We provide transparent pricing based on a detailed assessment of your project requirements. While we can't give an exact figure without understanding your specific needs, we're committed to delivering value and working within your budget constraints.",
        },
        {
          question: "Will my app work on all devices and OS versions?",
          answer:
            "We develop apps to be compatible with a wide range of devices and OS versions. For iOS, we typically support the current version and 2-3 previous versions. For Android, we target devices running Android 5.0 (Lollipop) and above, which covers over 95% of active Android devices. We also test on various screen sizes and resolutions to ensure a consistent experience across devices.",
        },
        {
          question: "What happens after my app is launched?",
          answer:
            "App development is an ongoing process that continues after launch. We offer post-launch services including maintenance, bug fixes, performance monitoring, and regular updates to ensure compatibility with new OS versions and devices. We also help with user feedback analysis and feature enhancements to keep your app competitive and meeting user needs.",
        },
      ],
      caseStudies: [
        {
          id: "case1",
          title: "Fitness Tracking App",
          client: "FitLife",
          challenge:
            "FitLife wanted to create a mobile app that would help users track workouts, set goals, and monitor progress, while differentiating itself in a crowded fitness app market.",
          solution:
            "We developed a cross-platform app with unique features including AI-powered form correction, personalized workout recommendations, and social community integration.",
          result:
            "Over 50,000 downloads in the first month, 4.8/5 star rating in app stores, 65% user retention rate after 3 months, and successful monetization through premium subscription model.",
          image: "mobile-apps.jpg",
        },
        {
          id: "case2",
          title: "Field Service Management App",
          client: "ServiceTech",
          challenge:
            "ServiceTech needed a mobile solution to streamline their field service operations, including job scheduling, technician dispatching, and service reporting.",
          solution:
            "We created a native app with offline capabilities, real-time synchronization, digital forms, photo/signature capture, and integration with their existing CRM system.",
          result:
            "40% reduction in administrative work, 30% increase in technician productivity, 25% faster billing cycles, and significantly improved customer satisfaction due to more efficient service delivery.",
          image: "mobile-apps.jpg",
        },
      ],
    },
  ];
}

export function getServiceById(id: string): Service | undefined {
  const services = getServices();
  return services.find((service) => service.id === id);
}
