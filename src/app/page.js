import CategoryList from "@/components/CategoryList";
import Featured from "@/components/Featured";
import CardList from "@/components/CardList";
import Menu from "@/components/Menu";

export default function Home(searchParams) {
  const page = parseInt(searchParams.page) || 1;

  return (
    <div className="w-full gap-[50px] flex flex-col">
      <Featured />

      <CategoryList />

      <div className="flex gap-[50px] ">
        <CardList page={page} />
        <Menu />
      </div>

    </div>
  );
}
