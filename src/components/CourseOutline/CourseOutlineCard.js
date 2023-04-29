import React from 'react';

const CourseOutlineCard = ({ week, title, topics }) => (
  <div className="bg-white rounded-md shadow-md p-4 mb-6">
    <h2 className="text-xl font-bold mb-2">
      Неделя {week}: {title}
    </h2>
    <ul className="list-disc pl-6">
      {topics.map((topic, index) => (
        <li key={index}>{topic}</li>
      ))}
    </ul>
  </div>
);

export default CourseOutlineCard;

