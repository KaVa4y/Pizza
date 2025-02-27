import { ArrowUpDown } from "lucide-react";

interface Props {
    className?: string;
}

export const SortPopup: React.FC<Props> = ({ className }) => {
    return (
        <div>
            <p className="flex items-center gap-1"><ArrowUpDown size={24}/>Сортировка: <a className="text-primary">рейтингн</a></p>
        </div>
    );
};