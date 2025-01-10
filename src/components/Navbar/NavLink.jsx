
const NavLink = ({ href, label, isActive, onClick }) => (
  <a
    href={href}
    onClick={(e) => {
      e.preventDefault();
      const section = document.querySelector(href); // Select the section by ID
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Smooth scroll
      }
      onClick(href); // Update active link state
    }}
    className={`relative flex items-center px-1 py-2 text-[15px] font-medium ${isActive ? 'text-accent font-bold' : 'text-primary'
      }`}
    style={{ overflow: 'visible' }} // Ensure no hidden overflow
  >
    {isActive && (
      <span
        className="absolute top-[50%] left-[-8px] transform -translate-y-1/2 z-50 overflow-x-visible"
      >
        ::
      </span>
    )}
    <span>{label}</span>
  </a>
);


export default NavLink