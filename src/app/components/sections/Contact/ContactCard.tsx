interface ContactCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  link: string;
}

const ContactCard = ({ title, value, icon, link }: ContactCardProps) => {
  return (
    <a
      href={link}
      target="_blank"
      className="
        group flex items-center gap-4 p-5
        rounded-2xl border border-blue-500/20
        bg-blue-950/30 backdrop-blur-sm
        hover:border-cyan-400/40 hover:bg-blue-900/40
        transition-all
      "
    >
      <div className="w-11 h-11 shrink-0 rounded-xl flex items-center justify-center text-xl bg-cyan-400/10 text-cyan-300 group-hover:bg-cyan-400/20 transition-colors">
        {icon}
      </div>

      <div className="min-w-0">
        <h4 className="text-[10px] uppercase tracking-widest text-cyan-300/60">
          {title}
        </h4>
        <p className="text-white font-medium truncate">{value}</p>
      </div>
    </a>
  );
};

export default ContactCard;
