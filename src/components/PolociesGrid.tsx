import {gridItems} from "@/data";
import {BentoGrid, BentoGridItem} from "./ui/BentoGrid";
import {TextGenerateEffect} from "@/components/ui/TextGenerateEffect";

const PolociesGrid = () => {
    return (
        <section id="policies">
            <div className="flex flex-col">
                <TextGenerateEffect
                    words="Polocies"
                    className="flex justify-start text-[40px] md:text-5xl lg:text-6xl mt-0 pt-0 lg:pl-42 sm:pl-0 -mb-20"
                />
                <BentoGrid className="sm:w-full lg:w-[1100px] py-20">
                    {gridItems.map((item, i) => (
                        <BentoGridItem
                            id={item.id}
                            key={i}
                            title={item.title}
                            description={item.description}
                            className={item.className}
                        />
                    ))}
                </BentoGrid>
            </div>
        </section>
    );
};

export default PolociesGrid;
