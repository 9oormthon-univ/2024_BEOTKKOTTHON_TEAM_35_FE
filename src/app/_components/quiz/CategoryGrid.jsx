import Link from "next/link";
import CategoryBox from "./CategoryBox";

const CategoryGrid = ({ review }) => {
  return (
    <div className="grid grid-cols-2 grid-flow-row gap-2.5 w-full mt-[19px]">
      <Link
        href={{
          pathname: review ? "/quiz/review-stage" : "/quiz/stage",
          query: { title: "금융개념" },
        }}
      >
        <CategoryBox title="금융개념" imgNum={1} />
      </Link>
      <Link
        href={{
          pathname: review ? "/quiz/review-stage" : "/quiz/stage",
          query: { title: "금융상품" },
        }}
      >
        <CategoryBox title="금융상품" imgNum={2} />
      </Link>
      <Link
        href={{
          pathname: review ? "/quiz/review-stage" : "/quiz/stage",
          query: { title: "금융기관" },
        }}
      >
        <CategoryBox title="금융기관" imgNum={3} />
      </Link>
      <Link
        href={{
          pathname: review ? "/quiz/review-stage" : "/quiz/stage",
          query: { title: "금융지표" },
        }}
      >
        <CategoryBox title="금융지표" imgNum={4} />
      </Link>
    </div>
  );
};

export default CategoryGrid;