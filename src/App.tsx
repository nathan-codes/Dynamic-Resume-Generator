import Resume from "./components/Resume";
import { sampleResumeData } from "./data/sampleResumeData";

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-8 px-4">
      <Resume data={sampleResumeData} />
    </div>
  );
};

export default App;
