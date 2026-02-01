interface CardProps {
  title: string;
  subtitle: string;
  hashtag1?: string;
  hashtag2?: string;
  hashtags?: boolean;
}

const Card = ({ title, subtitle, hashtag1, hashtag2, hashtags }: CardProps) => {
  return (
    <div className="blue-glass p-8 lg:p-12 space-y-6">
      <h3 className="text-2xl font-bold text-cyan-400 font-fugaz">{title}</h3>
      <p className="text-white/80 leading-relaxed text-lg">{subtitle}</p>
      {hashtags && (hashtag1 || hashtag2) && (
        <div className="pt-4 flex flex-wrap gap-4">
          {hashtag1 && (
            <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm text-cyan-200">
              {hashtag1}
            </div>
          )}
          {hashtag2 && (
            <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-full text-sm text-cyan-200">
              {hashtag2}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;
