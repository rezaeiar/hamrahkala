import Categories from "@/components/templates/index/categories/Categories";
import HeaderSlider from "@/components/templates/index/header-slider/HeaderSlider";
import ProductSliderHeader from "@/components/modules/product-slider-header/ProductSliderHeader";

export default function Home() {
    return (
        <main className="flex flex-col gap-6">
            <HeaderSlider />
            <Categories />
            <ProductSliderHeader />
        </main>
    );
}
