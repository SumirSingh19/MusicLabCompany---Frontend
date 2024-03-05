import{ useState } from "react";
import { Link } from "react-router-dom";
import CustomCables from "./CustomCables";
import InstrumentCables from "./InstrumentCables";
import PatchCables from "./PatchCables";

const Body = () => {
  const [text, setText] = useState("");
  const [selectedComponent, setSelectedComponent] = useState(null);

  // Example data for navigation items
  const navigationData = [
    { id: 1, label: 'CUSTOM CABLES', link: '/custom-cables' },
    { id: 2, label: 'INSTRUMENT CABLES', link: '/instrument-cables' },
    { id: 3, label: 'PATCH CABLES', link: '/patch-cables' },
    { id: 4, label: 'SPEAKER CABLES', link: '/speaker-cables' },
    { id: 5, label: 'SPECIALIST CABLES', link: '/specialist-cables' },
    { id: 6, label: 'XLR MIC CABLES', link: '/xlr-mic-cables' },
  ];

  const handleLinkClick = (label) => {
    setText(label);

    // Dynamically set the selected component based on the label
    switch (label) {
      case 'CUSTOM CABLES':
        setSelectedComponent(<CustomCables />);
        break;
      case 'INSTRUMENT CABLES':
        setSelectedComponent(<InstrumentCables />);
        break;
      case 'PATCH CABLES':
        setSelectedComponent(<PatchCables />);
        break;
      // Add cases for other labels/components
      default:
        setSelectedComponent(null);
    }
  };

  return (
    <div className="flex-1 ml-3 mr-7 p-9">
      {/* Background image container */}
      <div className="background-image: bg-hero-pattern mx-auto p-40 m-8" >
        {/* Content inside the background image container */}
        <div className="h-full w-full flex items-center justify-center">
          <h1 className="text-white text-4xl font-bold">{text}</h1>
        </div>
      </div>

      {/* Navigation list */}
      <div className="flex items-center justify-evenly p-6">
        <ul className="flex items-center space-x-28">
          {/* Map over the data and render a list item for each navigation item */}
          {navigationData.map((item) => (
            <li key={item.id} onClick={() => handleLinkClick(item.label)}>
              {/* Use Link for navigation */}
              <Link to={item.link} className="text-black text-md hover:text-red-600">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Render the selected component */}
      <div className="flex items-center justify-center">{selectedComponent}</div>
    </div>
  );
};

export default Body;
