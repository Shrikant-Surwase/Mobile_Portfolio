
import Image from 'next/image';
import { doto, figtree } from './fonts';



export default function Home() {
  return (
    <div>
      <h1
        className={figtree.className}
        style={{ fontWeight: 400, fontSize: 14, color: 'oklch(0.707 0.022 261.325)' }}
      >
        I’m Alfi, a 19-year-old developer who loves building things and yeah, sometimes breaking
        them too, just to see what makes them tick. I’m into both design and development so, yeah I
        care about how things look just as much as how they work .(Shocking, I know) When I’m not
        coding, you’ll probably find me watching a movie, gaming a bit too long, working out, or
        catching up on the sleep I keep putting off. Honestly, I’m just someone who loves creating,
        learning, and figuring stuff out. My brain’s always spinning with ideas and, I just hope one
        day, all that noise sounds like music instead.
      </h1>
      <h2 className={doto.className} style={{ fontWeight: 400 }}>
        Regular Doto
      </h2>
      <p className={doto.className} style={{ fontWeight: 500 }}>
        Medium Doto
      </p>
      <p className={doto.className} style={{ fontWeight: 600 }}>
        SemiBold Doto
      </p>
      <p className={doto.className} style={{ fontWeight: 700 }}>
        Bold Doto
      </p>
      <p className={doto.className} style={{ fontWeight: 800 }}>
        Extra Bold Doto
      </p>
    </div>
  );
}
