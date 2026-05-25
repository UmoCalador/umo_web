import { Category } from "@/types/category";

type Props = {
  categories: Category[];
};

export const MenuCategories = ({ categories }: Props) => {
  return (
    <>
      <ul style={{ listStyle: "none", padding: 0 }} className="gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {categories.map((cat) => (
          <li key={cat.name} style={{ marginBottom: "1rem" }}>
            <a
              href={cat.file}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center
              bg-gray-800 text-white
              rounded-xl px-6 py-12
              transition hover:bg-gray-700
              h-full"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                textDecoration: "none",
              }}
            >
              <span className="text-4xl">{cat.icon}</span>
              <span className="font-semibold">{cat.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};