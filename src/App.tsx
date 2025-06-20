import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Divider,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Tab,
  Tabs,
} from '@heroui/react'
import { Icon } from '@iconify/react'
import React from 'react'
import { useTranslation } from 'react-i18next'

// Add language data
const languages = [
  { code: 'vi', name: 'Tiếng Việt', flag: 'logos:vietnam' },
  { code: 'en', name: 'English', flag: 'logos:usa' },
]

const App: React.FC = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <Avatar
              src="https://scontent.fhan5-5.fna.fbcdn.net/v/t39.30808-6/474476936_645599531289817_5136216517704479983_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=csDaUc9XOYkQ7kNvwH6tEg5&_nc_oc=AdnKtr4uhzppNEGIRMQTChovPcQS7reoZCWSPC8aq6jvRPzcKlJNwXLf1q5b9GP2EJH7y02mDTQXE8Bk-2l1-TcX&_nc_zt=23&_nc_ht=scontent.fhan5-5.fna&_nc_gid=DxR6x9U3Dl95Y40AvbOm8g&oh=00_AfPfiNFnIxtVyaYOQ1tnyu_Kp60ftY2VkemvxU2khAYyYQ&oe=685A0200"
              className="w-24 h-24"
              alt="Profile picture"
            />
            <div>
              <h1 className="text-2xl font-semibold">{t('name')}</h1>
              <p className="text-default-500">{t('position')}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Dropdown>
              <DropdownTrigger>
                <Button variant="bordered">
                  <Icon icon="lucide:globe" className="mr-2" />
                  {languages.find((lang) => lang.code === i18n.language)
                    ?.name || 'Language'}
                </Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Language selection">
                {languages.map((lang) => (
                  <DropdownItem
                    key={lang.code}
                    startContent={
                      <Icon icon={lang.flag} width={24} height={24} />
                    }
                    onPress={() => changeLanguage(lang.code)}
                  >
                    {lang.name}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <Tabs aria-label="Profile sections">
            <Tab key="info" title={t('personalInfo')}>
              <div className="mt-4 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h2 className="text-xl font-semibold mb-2">
                      {t('contactInfo')}
                    </h2>
                    <p className="flex items-center">
                      <Icon icon="lucide:mail" className="mr-2" />
                      {t('email')}
                    </p>
                    <p className="flex items-center">
                      <Icon icon="lucide:phone" className="mr-2" />
                      {t('phone')}
                    </p>
                    <p className="flex items-center">
                      <Icon icon="lucide:map-pin" className="mr-2" />
                      {t('location')}
                    </p>
                    <p className="flex items-center">
                      <Icon icon="lucide:calendar" className="mr-2" />
                      {t('birthday')}
                    </p>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold mb-2">
                      {t('education')}
                    </h2>
                    <p className="font-semibold">{t('university')}</p>
                    <p>{t('degree')}</p>
                    <p className="text-default-500">{t('studyPeriod')}</p>
                    <p className="text-default-500">GPA: 3.77/4</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-2">{t('skills')}</h2>
                  <li>Frontend</li>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Chip color="primary" variant="flat">
                      HTML
                    </Chip>
                    <Chip color="primary" variant="flat">
                      CSS
                    </Chip>
                    <Chip color="primary" variant="flat">
                      JSP
                    </Chip>
                    <Chip color="primary" variant="flat">
                      Bootstrap
                    </Chip>
                    <Chip color="primary" variant="flat">
                      Tailwind
                    </Chip>
                    <Chip color="primary" variant="flat">
                      React (Mui, HeroUI, Radix)
                    </Chip>
                  </div>
                  <div className="mt-2">
                    <li>Backend</li>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Chip color="primary" variant="flat">
                      Java(Spring Boot, Spring Data JPA, Spring Security)
                    </Chip>
                  </div>
                  <div className="mt-2">
                    <li>{t('tools')}</li>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Chip color="primary" variant="flat">
                      Git
                    </Chip>
                    <Chip color="primary" variant="flat">
                      Postman
                    </Chip>
                    <Chip color="primary" variant="flat">
                      Dbeaver
                    </Chip>
                    <Chip color="primary" variant="flat">
                      Source Tree
                    </Chip>
                    <Chip color="primary" variant="flat">
                      Figma
                    </Chip>
                    <Chip color="primary" variant="flat">
                      Docker
                    </Chip>
                  </div>
                </div>

                <div>
                  <h2 className="text-xl font-semibold mb-2">
                    {t('languages')}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    <Chip color="primary" variant="flat">
                      {t('nativeLang')}
                    </Chip>
                    <Chip color="primary" variant="flat">
                      {t('englishLang')}
                    </Chip>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab key="experience" title={t('workExperience')}>
              <div className="mt-4 space-y-6">
                <div>
                  <Link href="https://cnpt.vn">
                    <h2 className="text-xl font-semibold mb-2">
                      {t('company1')}
                    </h2>
                  </Link>
                  <p className="font-semibold">{t('company1Position')}</p>
                  <p className="text-default-500">{t('company1Period')}</p>
                  <ul className="list-disc list-inside mt-2">
                    {(
                      t('company1Tasks', { returnObjects: true }) as string[]
                    ).map((task: string, index: number) => (
                      <li key={index}>{task}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Link href="https://wisdomrobotics.org">
                    <h2 className="text-xl font-semibold mb-2">
                      {t('company2')}
                    </h2>
                  </Link>
                  <p className="font-semibold">{t('company2Position')}</p>
                  <p className="text-default-500">{t('company2Period')}</p>
                  <ul className="list-disc list-inside mt-2">
                    {(
                      t('company2Tasks', { returnObjects: true }) as string[]
                    ).map((task: string, index: number) => (
                      <li key={index}>{task}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <Link href="https://www.imtatech.com">
                    <h2 className="text-xl font-semibold mb-2">
                      {t('company3')}
                    </h2>
                  </Link>
                  <p className="font-semibold">{t('company3Position')}</p>
                  <p className="text-default-500">{t('company3Period')}</p>
                  <ul className="list-disc list-inside mt-2">
                    {(
                      t('company3Tasks', { returnObjects: true }) as string[]
                    ).map((task: string, index: number) => (
                      <li key={index}>{task}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Tab>
            <Tab key="projects" title={t('projects')}>
              <div className="mt-4 space-y-6">
                <div>
                  <h2 className="text-xl font-semibold mb-2">
                    {t('projectTitle')}
                  </h2>
                  <p className="text-default-600">{t('projectDescription')}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Chip color="primary" variant="flat">
                      Java(Spring Boot)
                    </Chip>
                    <Chip color="primary" variant="flat">
                      React
                    </Chip>
                    <Chip color="primary" variant="flat">
                      MySQL
                    </Chip>
                    <Chip color="primary" variant="flat">
                      MongoDB
                    </Chip>
                    <Chip color="primary" variant="flat">
                      Docker
                    </Chip>
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">
                    {t('project1Title')}
                  </h2>
                  <p className="text-default-600">{t('project1Description')}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Chip color="primary" variant="flat">
                      Java(Spring Boot)
                    </Chip>
                    <Chip color="primary" variant="flat">
                      MySQL
                    </Chip>
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">
                    {t('project2Title')}
                  </h2>
                  <p className="text-default-600">{t('project2Description')}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Chip color="primary" variant="flat">
                      Java(Spring Boot)
                    </Chip>
                    <Chip color="primary" variant="flat">
                      MySQL
                    </Chip>
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">
                    {t('project3Title')}
                  </h2>
                  <p className="text-default-600">{t('project3Description')}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Chip color="primary" variant="flat">
                      Java(Java Swing)
                    </Chip>
                    <Chip color="primary" variant="flat">
                      SQL Server
                    </Chip>
                  </div>
                </div>
              </div>
            </Tab>
          </Tabs>
        </CardBody>
      </Card>
    </div>
  )
}

export default App
