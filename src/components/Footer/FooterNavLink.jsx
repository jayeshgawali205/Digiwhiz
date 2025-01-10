const FooterNavLink = ({ href, label, onClick }) => (
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
        className={`relative flex items-center px-1 text-xs font-medium}`}
        style={{ overflow: 'visible' }}
    >

        <span>{label}</span>
    </a>
);

export default FooterNavLink