import { Props } from "next/script";


interface props {
    className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
    return (
        <div className="nt-5 border-y border-y-neutral-100 py-6 pb-7">
            <p className="font-bold mb-3">Цена от и до:</p>
            <div className="flex gap-3 mb-5">
                <Input type="number" placeholder="0" min={0} max={5000} defaultValue={0} />
                <Input type="number" placeholder="5000" min={100} max={5000} />
            </div>
            <FilterCheckbox value="1"/> <FilterCheckbox/>
            <FilterCheckbox value="2"/> <FilterCheckbox/>
        </div>
        
    );
}