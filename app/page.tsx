import Box from "@/components/Box";
import { Slider } from "@/components/ui";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-zinc-100 py-24">
      <section className="container flex flex-row gap-8 flex-wrap">
        {Array.from({ length: 1 }).map((_, i) => (
          <Box withScrew key={i}>
            <Slider
              orientation="vertical"
              min={0}
              max={10}
              className="h-72"
              variant="zinc"
              title="Lorem Ipsum Dolor Sit Amet"
            />
            <Slider
              orientation="vertical"
              min={0}
              max={10}
              className="h-72"
              variant="zinc"
            />
            <Slider
              orientation="vertical"
              min={0}
              max={10}
              className="h-72"
              variant="zinc"
              title="Test"
            />
            <Slider
              orientation="vertical"
              min={0}
              max={10}
              className="h-72"
              variant="zinc"
              title="Test"
            />
          </Box>
        ))}
      </section>
    </main>
  );
}
