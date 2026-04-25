import Image from "next/image";


async function getCategory() {
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories#');
  const data = await res.json();
  return data.data;

}

export default async function Home() {
  const categories = await getCategory();
  console.log(categories.news_category);

  return (

    <div className="grid grid-cols-12 gap-4 container mx-auto my-20">

      <div className="font-bold text-4xl  col-span-3 text-center space-y-4">
        <p className=" bg-[#E7E7E7] font-semibold text-xl py-4 px-8 rounded-xl">All Category</p>
        <ul className="flex flex-col gap-3">
        {
          categories.news_category.map((categorie) => {

            return <li className="text-[#9F9F9F] text-xl text-left px-7" key={categorie.category_id}>{categorie.category_name}</li>
          })
        }</ul>
      </div>
      <div className="font-bold text-4xl bg-purple-200 col-span-6">
        Main
      </div>
      <div className="font-bold text-4xl bg-yellow-200 col-span-3">
        Social Icon
      </div>





    </div>
  );
}
