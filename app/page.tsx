import Categories from "@/components/templates/index/categories/Categories";
import HeaderSlider from "@/components/templates/index/header-slider/HeaderSlider";
import ProductsSlider from "@/components/modules/products-slider/ProductsSlider";
import DiscountBox from "@/components/modules/discount-box/DiscountBox";
import MostVisitedBox from "@/components/templates/index/most-visited-box/MostVisitedBox";

export default function Home() {
    return (
        <main className="flex flex-col gap-6">
            <HeaderSlider />
            <Categories />
            {/* <ProductsSlider /> */}
            <DiscountBox />
            <MostVisitedBox />
        </main>
    );
}
