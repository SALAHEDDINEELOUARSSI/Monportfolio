// Server Component
import dynamic from "next/dynamic";

// Charger AnimationLottie uniquement côté client
const AnimationLottie = dynamic(
    () => import("./animationLottie"),
    { ssr: false } // ❌ Pas de rendu côté serveur
);

export default function Hero() {
  return (
      <div>
        <h1>My Hero Section</h1>
        <AnimationLottie animationPath={someAnimationJson} width={400} />
      </div>
  );
}
;