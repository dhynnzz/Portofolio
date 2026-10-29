const opItems = [
  { text: "BUILD"},
  { text: "MACHINE LEARNING"},
  { text: "CODE"},
];

const track = Array(8).fill(opItems).flat();

export default function ScrollingTicker() {
  return (
    <div className="w-full border-y-4 overflow-hidden mb-32 flex select-none border-onepiece-dark bg-onepiece-gold py-3.5 shadow-[0_4px_0_0_#111827]">
      <div className="flex w-max shrink-0 items-center gap-8 whitespace-nowrap animate-marquee font-adventure text-xs sm:text-sm text-onepiece-dark font-black tracking-widest uppercase">
        {track.map((item, i) => (
          <span key={i} className="flex items-center gap-6 shrink-0">
            <span>{item.text}</span>
            {item.icon ? (
              <span className="material-symbols-outlined text-[16px] text-onepiece-red">
                {item.icon}
              </span>
            ) : (
              <span className="text-onepiece-red text-sm select-none">✦</span>
            )}
          </span>
        ))}
      </div>
      <div
        className="flex w-max shrink-0 items-center gap-8 whitespace-nowrap animate-marquee font-adventure text-xs sm:text-sm text-onepiece-dark font-black tracking-widest uppercase"
        aria-hidden="true"
      >
        {track.map((item, i) => (
          <span key={i} className="flex items-center gap-6 shrink-0">
            <span>{item.text}</span>
            {item.icon ? (
              <span className="material-symbols-outlined text-[16px] text-onepiece-red">
                {item.icon}
              </span>
            ) : (
              <span className="text-onepiece-red text-sm select-none">✦</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
