// src/Components/ProjectFilterTabs.jsx

const ProjectFilterTabs = ({ categories, activeTab, onChange }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {categories.map((category) => (
        <button
          key={category}
          className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${
            activeTab === category
              ? 'bg-[#0b3765] text-white'
              : 'bg-[#f0f4f9] text-[#27445f] hover:bg-[#e2e8f0]'
          }`}
          onClick={() => onChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default ProjectFilterTabs