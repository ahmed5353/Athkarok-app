import AthkarCategories from './components/AthkarCategories';
import AthkarHeader from './components/AthkarHeader';

export default function Page() {
  return (
    <main className="max-w-2xl  mx-auto flex flex-col gap-3 mt-6">
      <AthkarHeader />

      <AthkarCategories />
    </main>
  );
}
