import Box from "@/components/Box";
import { Slider } from "@/components/ui";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-8xl font-bold text-center sm:text-left text-stone-600 tracking-wider">
          Equilibrium
        </h1>
        <section className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Box withScrew>
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
            />
          </Box>
          <Box withScrew>
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
            />
          </Box>
          <Box withScrew>
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
            />
          </Box>
          <Box withScrew>
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
            />
          </Box>
        </section>
      </main>
    </div>
  );
}
