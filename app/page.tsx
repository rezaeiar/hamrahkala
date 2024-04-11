import Categories from "@/components/templates/index/categories/Categories";
import HeaderSlider from "@/components/templates/index/header-slider/HeaderSlider";

export default function Home() {
    return (
        <main className="flex flex-col gap-4">
            <HeaderSlider />
            <Categories />
        </main>
    );
}
