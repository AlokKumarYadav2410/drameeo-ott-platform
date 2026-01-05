const SidebarTooltip = ({ visible, label, top }) => {
  if (!visible) return null;

  return (
    <div
      className="fixed left-22 px-3 py-2 bg-[#20192b]
                 text-white text-sm rounded-lg pointer-events-none
                 whitespace-nowrap z-9999 border border-white/10"
      style={{
        top,
        transform: "translateY(-50%)",
      }}
    >
      {label}
    </div>
  );
};

export default SidebarTooltip;
