const SidebarItem = ({
  icon: Icon,
  label,
  active,
  isMinimized,
  isMobile,
  onHover,
  onLeave,
}) => {
  return (
    <button
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className={`w-full flex items-center cursor-pointer ${
        isMinimized && !isMobile ? "justify-center" : "gap-4"
      } px-3 py-3 rounded-lg transition-all ${
        active ? "text-white" : "text-gray-400 hover:text-white"
      }`}
    >
      <Icon className={`w-5 h-5 shrink-0 ${active ? "text-[#ac8dd4]" : ""}`} />
      {(!isMinimized || isMobile) && (
        <span className="text-[15px] whitespace-nowrap">{label}</span>
      )}
    </button>
  );
};

export default SidebarItem;
