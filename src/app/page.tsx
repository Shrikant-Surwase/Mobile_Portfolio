import {
  Header,
  Hero,
  CTAButtons,
  SocialLinks,
  Skills,
  WorkExperience,
  Projects,
  Blogs,
  SpotifySection,
  InteractiveExperience,
  Footer,
} from '@/components/sections';

export default function Home() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center antialiased">
      <Header />
      <Hero />
      <CTAButtons />
      <SocialLinks />
      <Skills />
      <WorkExperience />
      <Projects />
      <Blogs />
      <SpotifySection />
      <InteractiveExperience />
      <Footer />
    </main>
  );
}
