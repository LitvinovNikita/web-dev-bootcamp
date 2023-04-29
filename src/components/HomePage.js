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
      <nav className="text-lg md:text-xl lg:text-2xl font-semibold text-white py-4 md:py-6 flex flex-col md:flex-row justify-around">
        <Link to="introduction" smooth={true} duration={500} offset={-70}>
          Введение
        </Link>
        <Link to="course-outline" smooth={true} duration={500} offset={-70}>
          Программа курса
        </Link>
        <Link to="instructor-information" smooth={true} duration={500} offset={-70}>
          Информация об инструкторе
        </Link>
        <Link to="faqs" smooth={true} duration={500} offset={-70}>
          Часто задаваемые вопросы
        </Link>
        <Link to="registration" smooth={true} duration={500} offset={-70}>
          Регистрация
        </Link>
      </nav>

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