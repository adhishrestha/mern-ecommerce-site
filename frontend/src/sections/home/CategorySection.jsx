import CategoryCard from '../../components/cards/CategoryCard';
import CarouselSection from '../../components/shared/CarouselSection';
import { assets } from '../../assets/data/assets';
import Container from '../../components/ui/Container';

const categories = [
  {
    title: 'Tableware',
    image: assets.category_1,
  },
  {
    title: 'Home Decor',
    image: assets.category_2,
  },
  {
    title: 'Holiday',
    image: assets.category_3,
  },
  {
    title: 'Collection',
    image: assets.category_4,
  },
];

const CategorySection = () => {
  return (
    <section className="bg-[#FFFFFF] py-20">
      <Container>
        <CarouselSection
          items={categories}
          renderItem={(item) => (
            <CategoryCard image={item.image} title={item.title} />
          )}
        />
      </Container>
    </section>
  );
};

export default CategorySection;
