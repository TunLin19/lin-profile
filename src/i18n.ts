import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      name: 'Ngo Tuan Linh',
      position: 'Java Developer',
      skills: 'Skills',
      education: 'Education',
      personalInfo: 'Personal Information',
      workExperience: 'Work Experience',
      projects: 'Projects',
      contactInfo: 'Contact Information',
      email: 'tunlinnd18@gmail.com',
      phone: '+84 389 359 530',
      location: 'Hanoi, Vietnam',
      birthday: '19/04/2003',
      university: 'FPT Polytechnic',
      degree: 'Software Development',
      studyPeriod: '1/2022 - 5/2025',
      tools: 'Tools',
      languages: 'Languages',
      nativeLang: 'Vietnamese',
      englishLang: 'English (Intermediate)',
      company1: 'CNPT Technology Joint Stock Company',
      company1Position: 'Java Full Stack Intern',
      company1Period: '6/2025 - Present',
      company1Tasks: [
        'Learning and developing a crime management web application in the US',
        'Supporting the team in designing the application architecture',
      ],
      company2: 'Wisdom Company',
      company2Position: 'Java Intern',
      company2Period: '6/2025 - Present',
      company2Tasks: [
        'Developing a transportation web application integrated with robots',
        'Collaborating with BA to analyze requirements and design the system',
      ],
      company3: 'IMTA TECH Company',
      company3Position: 'Web Intern',
      company3Period: '1/2025 - 3/2025',
      company3Tasks: [
        'Collecting image data and information for AI projects',
        'Learning to work with AI using effective prompts',
      ],
      projectTitle: 'HopeStar Mobile Phone Website',
      projectDescription:
        'Designed and developed a mobile phone sales website using Java(Spring Boot), MySQL, React. This website allows users to browse products, place orders, and make online payments, along with features like product reviews, chatbot, etc.',
      project1Title: 'Project Management System',
      project1Description:
        'Developed a comprehensive project management system using Java(Spring Boot), MySQL. The system allows project progress tracking, task assignment, and detailed reporting.',
      project2Title: 'E-commerce Application',
      project2Description:
        'Designed and built the backend for a multi-vendor e-commerce platform using Java(Spring Boot), MySQL with scalability and payment gateway integration.',
      project3Title: 'Desktop Application for Fashion Sales Management',
      project3Description:
        'Developed a desktop application for sales management using Java(Java Swing), SQL Server. This application allows users to efficiently manage products, orders, and customers.',
    },
  },
  vi: {
    translation: {
      name: 'Ngô Tuấn Linh',
      position: 'Lập trình viên Java',
      skills: 'Kỹ năng',
      education: 'Học vấn',
      personalInfo: 'Thông tin cá nhân',
      workExperience: 'Kinh nghiệm làm việc',
      projects: 'Dự án',
      contactInfo: 'Thông tin liên hệ',
      email: 'tunlinnd18@gmail.com',
      phone: '+84 389 359 530',
      location: 'Hà Nội, Việt Nam',
      birthday: '19/04/2003',
      university: 'Cao đẳng FPT Polytechnic',
      degree: 'Phát triển phần mềm',
      studyPeriod: '1/2022 - 5/2025',
      tools: 'Công cụ',
      languages: 'Ngôn ngữ',
      nativeLang: 'Tiếng Việt',
      englishLang: 'Tiếng Anh (Trung cấp)',
      company1: 'Công ty cổ phần công nghệ CNPT',
      company1Position: 'Thực tập sinh Java Full Stack',
      company1Period: '6/2025 - Hiện tại',
      company1Tasks: [
        'Học tập và phát triển ứng dụng web quản lý tội phạm tại Mỹ',
        'Hỗ trợ nhóm trong việc thiết kế kiến trúc ứng dụng',
      ],
      company2: 'Công ty Wisdom',
      company2Position: 'Thực tập sinh Java',
      company2Period: '6/2025 - Hiện tại',
      company2Tasks: [
        'Phát triển ứng dụng web vận chuyển kết hợp với robot',
        'Cộng tác với BA để phân tích yêu cầu và thiết kế hệ thống',
      ],
      company3: 'Công ty IMTA TECH',
      company3Position: 'Thực tập sinh Web',
      company3Period: '1/2025 - 3/2025',
      company3Tasks: [
        'Thu thập dữ liệu hình ảnh và thông tin cho dự án AI',
        'Học tập làm việc với AI sử dụng prompt sao cho hiệu quả',
      ],
      projectTitle:"Website bán điện thoại di động HopeStar",
      projectDescription:
        'Thiết kế và phát triển một trang web bán điện thoại di động sử dụng Java(Spring Boot), MySQL, React. Trang web này cho phép người dùng duyệt sản phẩm, đặt hàng và thanh toán trực tuyến cùng nhiều tính năng khác đánh giá sản phẩm, chatbot ... ',
      project1Title: 'Hệ thống quản lý dự án',
      project1Description:
        'Phát triển một hệ thống backend quản lý dự án toàn diện sử dụng Java(Spring Boot), MySQL. Hệ thống này cho phép theo dõi tiến độ dự án, phân công nhiệm vụ, và tạo báo cáo chi tiết.',
      project2Title: 'Ứng dụng thương mại điện tử đa nhà cung cấp',
      project2Description:
        'Thiết kế và xây dựng backend cho một nền tảng thương mại điện tử sử dụng Java(Spring Boot), MySQL có khả năng mở rộng và tích hợp cổng thanh toán.',
      project3Title: 'App destop quản lý bán thời trang',
      project3Description:
        'Phát triển một ứng dụng desktop quản lý bán hàng sử dụng Java(Java Swing), SQL Server. Ứng dụng này cho phép người dùng quản lý sản phẩm, đơn hàng và khách hàng một cách hiệu quả.',
    },
  },
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // Default language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
