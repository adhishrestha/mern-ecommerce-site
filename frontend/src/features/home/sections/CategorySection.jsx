import CategoryCard from '../../../components/cards/CategoryCard';
import CarouselSection from '../../../components/shared/CarouselSection';
import Container from '../../../components/ui/Container';
import { categories } from '../../../data/homepageCategories';

const CategorySection = () => {
  return (
    <section className="bg-[#FFFFFF] py-20">
      <Container>
        <CarouselSection
          items={categories}
          renderItem={(item) => (
            <CategoryCard image={item.image} title={item.title} />
          )}
          pagination
          autoplay
          className="category-swiper pb-20"
        />
      </Container>
    </section>
  );
};

export default CategorySection;
