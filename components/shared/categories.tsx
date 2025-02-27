import { cn } from "@/lib/utils"

interface Props {
    className?: string;
}

const cats = ['Пиццы','Комбо','Закуски','Коктейли','Кофе','Напитки','Десерты'];
const activeIndex = 0;

export const Categories: React.FC<Props> = ({ className }) => {
    return (
        <div className={cn('', className)}>
            {cats.map((cat, index) => (
                <a
                    key={index}                           
                    className={cn(
                        'felx items-center font-bold h-11 rounded-2xl px-5',
                        activeIndex === index && 'bg-white shadow-md shadow-gray-200 text-primary'
                    )}
                >
                    <button>
                        {cat}
                    </button>
                </a>
            ))}
        </div>
    );
};