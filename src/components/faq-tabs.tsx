import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Plus, Minus } from 'lucide-react';
import { cn } from '@/utils/cn';

// Type definitions
interface FAQItem {
  question: string;
  answer: string;
}

interface Categories {
  [key: string]: string;
}

interface FAQData {
  [key: string]: FAQItem[];
}

interface FAQProps {
  title?: string;
  subtitle?: string;
  className?: string;
  [key: string]: any;
}

interface FAQHeaderProps {
  title: string;
  subtitle: string;
}

// FAQ Data - built into the component
const categories = {
  "web-dev": "Web Development",
  "mobile-dev": "Mobile Development", 
  "ui-ux": "UI/UX Design",
  "copywriting": "Copywriting"
};

const faqData = {
  "web-dev": [
    {
      question: "What is web development?",
      answer: "Web development is the process of building and maintaining websites. It involves a combination of client-side and server-side programming, database management, and other web-related technologies."
    },
    {
      question: "What programming languages are essential for web development?",
      answer: "Essential languages for web development include HTML, CSS, and JavaScript for front-end development. For back-end development, popular languages include Python, Ruby, PHP, Java, and Node.js."
    },
    {
      question: "What's the difference between front-end and back-end development?",
      answer: "Front-end development focuses on the user interface and user experience of a website, while back-end development deals with server-side logic, databases, and application integration."
    },
    {
      question: "How long does it typically take to develop a website?",
      answer: "The time to develop a website can vary greatly depending on its complexity. A simple static website might take a few days, while a complex web application could take several months or even years."
    },
    {
      question: "What is responsive web design?",
      answer: "Responsive web design is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes. It ensures that websites are accessible and visually appealing across different platforms."
    }
  ],
  "mobile-dev": [
    {
      question: "What is mobile development?",
      answer: "Mobile development is the process of creating software applications that run on mobile devices such as smartphones and tablets. It involves designing, coding, and testing applications for mobile operating systems like iOS and Android."
    },
    {
      question: "What's the difference between native and cross-platform mobile development?",
      answer: "Native development involves building separate apps for each platform using platform-specific languages (Swift for iOS, Java/Kotlin for Android). Cross-platform development uses frameworks like React Native or Flutter to build a single codebase that works on multiple platforms."
    },
    {
      question: "What are some popular mobile app development frameworks?",
      answer: "Popular mobile app development frameworks include React Native, Flutter, Xamarin, Ionic, and NativeScript. Each has its own strengths and is suited for different types of projects."
    },
    {
      question: "How do you ensure mobile app security?",
      answer: "Mobile app security involves practices such as secure coding, data encryption, secure authentication methods, regular security audits, and staying up-to-date with the latest security patches and best practices."
    },
    {
      question: "What is the typical mobile app development lifecycle?",
      answer: "The typical mobile app development lifecycle includes stages such as planning, design, development, testing, deployment, and maintenance. It often follows an iterative process with continuous updates and improvements."
    }
  ],
  "ui-ux": [
    {
      question: "What is UI/UX design?",
      answer: "UI (User Interface) design focuses on the visual elements of a digital product, while UX (User Experience) design deals with the overall feel and functionality of the product. Together, they aim to create products that are both visually appealing and easy to use."
    },
    {
      question: "What's the difference between UI and UX design?",
      answer: "UI design focuses on the look and layout of a product's interface, including colors, typography, and visual elements. UX design is broader, encompassing the entire user journey and how users interact with the product."
    },
    {
      question: "What tools do UI/UX designers commonly use?",
      answer: "Common tools for UI/UX design include Sketch, Figma, Adobe XD, InVision, and Protopie for design and prototyping. Research and testing tools might include UserTesting, Hotjar, and Optimal Workshop."
    },
    {
      question: "What is a user persona?",
      answer: "A user persona is a fictional representation of your ideal user or customer. It's based on user research and includes details about the persona's background, goals, challenges, and behaviors. Personas help guide design decisions by keeping the focus on the end-user."
    },
    {
      question: "What is the importance of user testing in UI/UX design?",
      answer: "User testing is crucial in UI/UX design as it provides direct feedback from actual users. It helps identify usability issues, validate design decisions, and ensure that the product meets user needs and expectations."
    }
  ],
  "copywriting": [
    {
      question: "What is copywriting?",
      answer: "Copywriting is the act of writing text for the purpose of advertising or other forms of marketing. The product, called copy, is written content that aims to increase brand awareness and ultimately persuade a person or group to take a particular action."
    },
    {
      question: "What's the difference between copywriting and content writing?",
      answer: "While both involve writing, copywriting is specifically aimed at persuasion and driving action (like making a purchase), while content writing is more focused on informing, educating, or entertaining the reader."
    },
    {
      question: "What are some key elements of effective copywriting?",
      answer: "Key elements of effective copywriting include understanding the target audience, crafting compelling headlines, focusing on benefits rather than features, using persuasive language, and including a clear call-to-action."
    },
    {
      question: "How important is SEO in copywriting?",
      answer: "SEO (Search Engine Optimization) is very important in copywriting, especially for digital content. It helps ensure that your copy reaches your target audience by making it more visible in search engine results. This involves using relevant keywords, creating quality content, and following SEO best practices."
    },
    {
      question: "What is a call-to-action (CTA) in copywriting?",
      answer: "A call-to-action (CTA) is a prompt in your copy that tells the reader what to do next. It's usually a command verb like 'Buy Now,' 'Sign Up,' or 'Learn More.' An effective CTA is clear, compelling, and creates a sense of urgency."
    }
  ]
};

// Main reusable FAQ component
export const FAQ: React.FC<FAQProps> = ({ 
  title = "Frequently Asked Questions",
  subtitle = "Let's answer some questions",
  className,
  ...props 
}) => {
  const [activeTab, setActiveTab] = useState("web-dev");

  return (
    <section 
      className={cn(
        "relative overflow-hidden bg-background px-4 py-12 text-foreground",
        className
      )}
      {...props}
    >
      <FAQHeader title={title} subtitle={subtitle} />
      
      <div className="mx-auto mt-12 max-w-4xl">
        {/* Modern Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-muted/50 backdrop-blur-sm border rounded-full p-1">
            {Object.entries(categories).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={cn(
                  "relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  activeTab === key
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ Content */}
        <AnimatePresence mode="wait">
          {Object.entries(faqData).map(([category, questions]) => {
            if (activeTab === category) {
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="space-y-4"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold">
                      {categories[category as keyof typeof categories]}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {questions.length} questions
                    </span>
                  </div>

                  <div className="space-y-4">
                    {questions.map((faq, index) => (
                      <FAQItem key={index} {...faq} />
                    ))}
                  </div>
                </motion.div>
              );
            }
            return null;
          })}
        </AnimatePresence>
      </div>
    </section>
  );
};

const FAQItem: React.FC<FAQItem> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      className={cn(
        "rounded-xl border transition-all duration-300",
        isOpen ? "bg-muted/50 shadow-md" : "bg-card hover:bg-muted/30"
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 p-6 text-left"
      >
        <span className="font-medium text-foreground leading-relaxed">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          {isOpen ? (
            <Minus className="h-5 w-5 text-muted-foreground" />
          ) : (
            <Plus className="h-5 w-5 text-muted-foreground" />
          )}
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              <p className="text-muted-foreground leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQHeader: React.FC<FAQHeaderProps> = ({ title, subtitle }) => (
  <div className="relative z-10 flex flex-col items-center justify-center text-center">
    <motion.span 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text font-medium text-transparent"
    >
      {subtitle}
    </motion.span>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="mb-8 text-4xl md:text-5xl font-bold"
    >
      {title}
    </motion.h2>
    <motion.span 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="absolute -top-[350px] left-[50%] z-0 h-[500px] w-[600px] -translate-x-[50%] rounded-full bg-gradient-to-r from-primary/10 to-primary/5 blur-3xl" 
    />
  </div>
);

export default FAQ;