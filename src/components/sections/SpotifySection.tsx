import { Section } from '@/components/ui/Layout';
import { SPOTIFY_EMBED, PATATAP_EMBED } from '@/constants/profile';

export const SpotifySection = () => {
  return (
    <Section>
      <p className="text-gray-400 pb-3 sm:pb-4 text-xs sm:text-sm mt-3 sm:mt-4">
        Still <span className="text-white font-medium">Scrolling?</span> Now I think, you should
        hire me
      </p>
      <div className="text-left border-dashed border-t border-[#27272a] pt-4 sm:pt-6">
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: '12px' }}
          src={SPOTIFY_EMBED.src}
          width="100%"
          height={SPOTIFY_EMBED.height}
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          allowFullScreen
          title={SPOTIFY_EMBED.title}
        ></iframe>
        <p className="text-white text-xs sm:text-sm mt-3 sm:mt-4">
          currently on repeat{' '}
          <span className="text-gray-400 font-medium">You should listen to her </span>
          <span className="text-white">other songs</span>
          <span className="text-gray-400"> as well.</span>
        </p>
      </div>
    </Section>
  );
};
