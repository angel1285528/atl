import React from 'react';

interface ClassSelectorProps {
  selectedClasses: string[];
  setSelectedClasses: React.Dispatch<React.SetStateAction<string[]>>;
}

const classTypes = ['fut1', 'fut3', 'fut5', 'fut7', 'fut9', 'fut11'];

const ClassSelector: React.FC<ClassSelectorProps> = ({ selectedClasses, setSelectedClasses }) => {
  const toggleClass = (classType: string) => {
    setSelectedClasses((prev) =>
      prev.includes(classType) ? prev.filter((c) => c !== classType) : [...prev, classType]
    );
  };

  return (
    <div className="flex justify-center my-4">
      {classTypes.map((classType) => (
        <div key={classType} className="mx-2">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={selectedClasses.includes(classType)}
              onChange={() => toggleClass(classType)}
            />
            <span className="ml-2">{classType.toUpperCase()}</span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default ClassSelector;
