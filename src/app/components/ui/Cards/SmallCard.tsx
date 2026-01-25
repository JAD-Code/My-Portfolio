interface SmallCardProps {
  logo: React.ReactNode;
  tittle: string;
  subtitle: string;
}
const SmallCard = ({ logo, tittle, subtitle }: SmallCardProps) => {
  return (
    <div>
      <div className="liquid-glass p-4 flex flex-col items-center text-center">
        <span className="text-cyan-400 text-3xl mb-2">{logo}</span>
        <h4 className="text-white font-bold">{tittle}</h4>
        <p className="text-white/60 text-sm">{subtitle}</p>
      </div>
    </div>
  );
};

export default SmallCard;
