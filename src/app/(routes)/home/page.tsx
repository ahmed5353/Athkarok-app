import AthkarCategories from "./components/AthkarCategories";
import AthkarHeader from "./components/AthkarHeader";
import DailyQuote from "./components/DailyQuote";
import RadioLive from "./components/RadioLive";
import SalahTime from "./components/SalahTime";

export default function Page() {
  return (
    <main className="mx-auto mt-6 flex max-w-2xl flex-col gap-3">
      <AthkarHeader />

      <AthkarCategories />

      <DailyQuote
        quote=" اللهم إني أعوذ بك من الهم والحزن، وأعوذ بك من العجز والكسل، وأعوذ بك
            من الجبن والبخل، وأعوذ بك من غلبة الدين وقهر الرجال."
        author="النبي محمد صلى الله عليه وسلم"
      />
      <RadioLive />
      <SalahTime />
    </main>
  );
}
