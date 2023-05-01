import React from 'react';
import { Link } from 'react-scroll';
import CourseOutlineData from './CourseOutline/CourseOutlineData';
import CourseOutlineCard from './CourseOutline/CourseOutlineCard';
import InstructorInformation from './InstructorInfo/InstructorInfo';
import FAQ from './FAQ/FAQ';
import RegistrationButton from './RegistrationButton/RegistrationButton';
import Introduction from './Introduction/Introduction';



const HomePage = () => {

  return (
    <div className="min-h-screen ">
      
      <div className="container mx-auto px-4">
        <div className="nav-container ">
          
          {/* <nav className="hidden md:block text-lg md:text-xl lg:text-2xl font-semibold text-white py-4 md:py-6 flex flex-col md:flex-row justify-around">
            <Link
              className="nav-link"
              to="introduction"
              smooth={true}
              duration={500}
              offset={-70}
            >
              Введение
            </Link>
            <Link
              className="nav-link"
              to="course-outline"
              smooth={true}
              duration={500}
              offset={-70}
            >
              Программа курса
            </Link>
            <Link
              className="nav-link"
              to="instructor-information"
              smooth={true}
              duration={500}
              offset={-70}
            >
              Информация об инструкторе
            </Link>
            <Link
              className="nav-link"
              to="faqs"
              smooth={true}
              duration={500}
              offset={-70}
            >
              Часто задаваемые вопросы
            </Link>
            <Link
              className="nav-link"
              to="registration"
              smooth={true}
              duration={500}
              offset={-70}
            >
              Регистрация
            </Link>
          </nav> */}

          <nav className="hidden md:flex lg:text-2xl font-semibold text-white py-4 md:py-6 justify-center items-center space-x-2 lg:space-x-4">
            <Link
              className="nav-link whitespace-nowrap px-2 sm:px-4 md:px-6 lg:px-10"
              to="introduction"
              smooth={true}
              duration={500}
              offset={-70}
            >
              Введение
            </Link>
            <Link
              className="nav-link whitespace-nowrap "
              to="course-outline"
              smooth={true}
              duration={500}
              offset={-70}
            >
              Программа курса
            </Link>
            <Link
              className="nav-link whitespace-nowrap"
              to="instructor-information"
              smooth={true}
              duration={500}
              offset={-70}
            >
              Информация об инструкторе
            </Link>
            <Link
              className="nav-link whitespace-nowrap"
              to="faqs"
              smooth={true}
              duration={500}
              offset={-70}
            >
              Часто задаваемые вопросы
            </Link>
            <Link
              className="nav-link whitespace-nowrap"
              to="registration"
              smooth={true}
              duration={500}
              offset={-70}
              href='https://forms.gle/TuvXLeJSTZP3J7fk8'
            >
              Регистрация
            </Link>
          </nav>







        </div>
        {/* Mobile header */}
        <div className="md:hidden md:hidden bg-white bg-opacity-50 backdrop-blur-md w-full">
            <Link
              to="top"
              smooth={true}
              duration={500}
              className="text-center text-lg md:text-xl lg:text-2xl font-semibold text-white py-4 md:py-6 block"
            >
              <h1>Web Dev Bootcamp</h1>
            </Link>
          </div>
        

        <Introduction/>


        <section id="course-outline" className="mt-12">
          <h1 className="text-3xl font-bold mb-8 text-white">Программа курса</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {CourseOutlineData.map(({ week, title, topics }) => (
              <CourseOutlineCard
                key={week}
                week={week}
                title={title}
                topics={topics}
              />
            ))}
          </div>
        </section>





        <section id="instructor-information" className='mb-8'>
          {/* Instructor Information content */}
          <InstructorInformation/>
        </section>
        <section id="faqs">
          {/* FAQs content */}
          <FAQ/>
        </section>
        <section id="registration">
          {/* Registration content */}
          <RegistrationButton/>
        </section>
      </div>
    </div>
    
  );
};

export default HomePage;